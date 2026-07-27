import * as fs from "fs";
import * as path from "path";

// ── Types ──

interface LinkEntry {
  url: string;
  source: string;
}

interface LinkResult {
  url: string;
  source: string;
  status: "ok" | "warning" | "broken";
  statusCode: number | null;
  error: string | null;
}

interface LinkReport {
  timestamp: string;
  total: number;
  ok: number;
  warnings: number;
  broken: number;
  results: LinkResult[];
}

// ── Config ──

const TIMEOUT_MS = 10_000;
const DELAY_MS = 500;
const MAX_REDIRECTS = 3;
const USER_AGENT = "Flor-de-Lei-LinkChecker/1.0";

const IGNORED_PREFIXES = ["#", "mailto:", "tel:"];
const IGNORED_DOMAINS = [
  "wa.me",
  "api.whatsapp.com",
  "flordelei.org",                // Próprio site (futuro domínio)
  "flor-de-lei.vercel.app",       // Próprio site (Vercel)
  "www.w3.org",           // Namespace XML/SVG, não é link real
];

// Sites que bloqueiam HEAD/GET de bots consistentemente
const KNOWN_BLOCKERS = [
  "www.gov.br",           // Portal gov.br retorna 403 para bots
  "gov.br",
];

const PROJECT_ROOT = path.join(__dirname, "..");

// ── URL extraction ──

function extractUrlsFromJson(filePath: string): LinkEntry[] {
  const entries: LinkEntry[] = [];
  const relPath = path.relative(PROJECT_ROOT, filePath);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const associations = data.associations as Array<Record<string, unknown>>;

    for (const assoc of associations) {
      const id = assoc.id as string;
      const label = `${relPath} → ${id}`;

      if (typeof assoc.site === "string" && assoc.site.startsWith("http")) {
        entries.push({ url: assoc.site, source: label });
      }

      const preco = assoc.faixaPreco as Record<string, unknown> | undefined;
      if (preco && typeof preco.fonte === "string") {
        const urls = preco.fonte.match(/https?:\/\/[^\s"',)]+/g);
        if (urls) {
          for (const url of urls) {
            entries.push({ url, source: label });
          }
        }
      }
    }
  } catch (err) {
    console.warn(`⚠️  Não foi possível ler ${relPath}: ${err}`);
  }

  return entries;
}

function extractUrlsFromTsx(filePath: string): LinkEntry[] {
  const entries: LinkEntry[] = [];
  const relPath = path.relative(PROJECT_ROOT, filePath);

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip comment-only lines
      if (line.trimStart().startsWith("//") || line.trimStart().startsWith("*")) {
        continue;
      }

      // Skip JSX comments {/* ... */} — simple heuristic
      const cleaned = line.replace(/\{\/\*.*?\*\/\}/g, "");

      const urls = cleaned.match(/https?:\/\/[^\s"'`<>,)}\]]+/g);
      if (urls) {
        for (const url of urls) {
          entries.push({ url, source: `${relPath}:${i + 1}` });
        }
      }
    }
  } catch (err) {
    console.warn(`⚠️  Não foi possível ler ${relPath}: ${err}`);
  }

  return entries;
}

function extractUrlsFromConstants(filePath: string): LinkEntry[] {
  const entries: LinkEntry[] = [];
  const relPath = path.relative(PROJECT_ROOT, filePath);

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const urls = content.match(/https?:\/\/[^\s"'`<>,)}\]]+/g);

    if (urls) {
      for (const url of urls) {
        entries.push({ url, source: relPath });
      }
    }
  } catch (err) {
    console.warn(`⚠️  Não foi possível ler ${relPath}: ${err}`);
  }

  return entries;
}

function findTsxFiles(dir: string): string[] {
  const files: string[] = [];

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        files.push(...findTsxFiles(full));
      } else if (item.name.endsWith(".tsx")) {
        files.push(full);
      }
    }
  } catch {
    // Ignore unreadable directories
  }

  return files;
}

// ── URL validation ──

function shouldIgnore(url: string): boolean {
  for (const prefix of IGNORED_PREFIXES) {
    if (url.startsWith(prefix)) return true;
  }

  try {
    const parsed = new URL(url);
    for (const domain of IGNORED_DOMAINS) {
      if (parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`)) {
        return true;
      }
    }
  } catch {
    return true;
  }

  return false;
}

function isKnownBlocker(url: string): boolean {
  try {
    const parsed = new URL(url);
    return KNOWN_BLOCKERS.some(
      (d) => parsed.hostname === d || parsed.hostname.endsWith(`.${d}`)
    );
  } catch {
    return false;
  }
}

// Strip trailing punctuation that regex might have captured
function cleanUrl(url: string): string {
  return url.replace(/[.;,!?)}\]]+$/, "");
}

async function checkUrl(url: string): Promise<{ statusCode: number | null; error: string | null }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    // Try HEAD first
    let response = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": USER_AGENT },
    });

    // Fallback to GET if HEAD is rejected (405 Method Not Allowed, 415 Unsupported Media Type)
    if (response.status === 405 || response.status === 415) {
      response = await fetch(url, {
        method: "GET",
        signal: controller.signal,
        redirect: "follow",
        headers: { "User-Agent": USER_AGENT },
      });
    }

    return { statusCode: response.status, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);

    if (message.includes("abort")) {
      return { statusCode: null, error: "timeout" };
    }

    // undici sempre reporta "fetch failed"; a causa real (ENETUNREACH, DNS, TLS) vem em err.cause
    const cause = err instanceof Error && err.cause instanceof Error ? err.cause.message : null;

    return { statusCode: null, error: cause ? `${message} — ${cause}` : message };
  } finally {
    clearTimeout(timer);
  }
}

function classifyResult(
  statusCode: number | null,
  error: string | null,
  url: string
): "ok" | "warning" | "broken" {
  if (isKnownBlocker(url)) return "warning";

  if (error) {
    if (error === "timeout") return "warning";
    // DNS failure, connection refused, etc.
    return "broken";
  }

  if (statusCode === null) return "broken";
  if (statusCode >= 200 && statusCode < 400) return "ok";
  if (statusCode === 403) return "warning";
  if (statusCode === 404 || statusCode === 410 || statusCode >= 500) return "broken";

  return "warning";
}

function statusLabel(result: LinkResult): string {
  if (result.error) return result.error;
  return String(result.statusCode);
}

// ── Delay helper ──

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Main ──

async function main() {
  console.log("\n🔗 Flor de Lei — Link Checker");
  console.log("══════════════════════════════\n");

  // 1. Collect URLs from all sources
  const allEntries: LinkEntry[] = [];

  const dataFile = path.join(PROJECT_ROOT, "data", "associacoes.json");
  allEntries.push(...extractUrlsFromJson(dataFile));

  const appDir = path.join(PROJECT_ROOT, "app");
  const tsxFiles = findTsxFiles(appDir);
  for (const file of tsxFiles) {
    allEntries.push(...extractUrlsFromTsx(file));
  }

  const constantsFile = path.join(PROJECT_ROOT, "lib", "constants.ts");
  allEntries.push(...extractUrlsFromConstants(constantsFile));

  // 2. Clean and deduplicate
  const urlMap = new Map<string, string[]>();
  for (const entry of allEntries) {
    const cleaned = cleanUrl(entry.url);
    if (shouldIgnore(cleaned)) continue;

    const existing = urlMap.get(cleaned);
    if (existing) {
      if (!existing.includes(entry.source)) {
        existing.push(entry.source);
      }
    } else {
      urlMap.set(cleaned, [entry.source]);
    }
  }

  const uniqueUrls = Array.from(urlMap.entries());
  console.log(`Verificando ${uniqueUrls.length} URLs únicas...\n`);

  // 3. Check each URL sequentially
  const results: LinkResult[] = [];

  for (let i = 0; i < uniqueUrls.length; i++) {
    const [url, sources] = uniqueUrls[i];
    const source = sources.join(", ");

    const { statusCode, error } = await checkUrl(url);
    const status = classifyResult(statusCode, error, url);

    const result: LinkResult = { url, source, status, statusCode, error };
    results.push(result);

    const icon = status === "ok" ? "✅" : status === "warning" ? "⚠️" : "❌";
    const detail = error || String(statusCode);
    const extra = status === "warning" && statusCode === 403 ? " — pode ser bloqueio de bot" : "";
    console.log(`${icon} ${url} (${detail}${extra}) [${source}]`);

    // Delay between requests
    if (i < uniqueUrls.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // 4. Summary
  const ok = results.filter((r) => r.status === "ok").length;
  const warnings = results.filter((r) => r.status === "warning").length;
  const broken = results.filter((r) => r.status === "broken").length;

  console.log("\n══════════════════════════════");
  console.log(`Total: ${results.length} | ✅ ${ok} | ⚠️ ${warnings} | ❌ ${broken}`);

  // 5. Save report
  const report: LinkReport = {
    timestamp: new Date().toISOString(),
    total: results.length,
    ok,
    warnings,
    broken,
    results,
  };

  const reportPath = path.join(__dirname, "link-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");
  console.log(`\nRelatório salvo em scripts/link-report.json`);

  // 6. Exit code
  if (broken > 0) {
    console.log(`\n❌ ${broken} link(s) quebrado(s) encontrado(s). Veja acima.`);
    process.exit(1);
  } else {
    console.log("\n✅ Nenhum link quebrado encontrado.");
    process.exit(0);
  }
}

main();
