import Ajv from "ajv";
import addFormats from "ajv-formats";
import * as fs from "fs";
import * as path from "path";

const dataDir = path.join(__dirname, "..", "data");
const schemaPath = path.join(dataDir, "associacoes.schema.json");
const dataPath = path.join(dataDir, "associacoes.json");

const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));
const data: Record<string, unknown> = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.error("Validation FAILED:");
  console.error(JSON.stringify(validate.errors, null, 2));
  process.exit(1);
}

// After validation, we know the shape matches the schema
const associations = (data as { associations?: Array<{ placeholder?: boolean; nome: string; ativo: boolean }> }).associations;

// Check for placeholder entries (warning, not error)
const placeholders = associations?.filter((a) => a.placeholder === true);
if (placeholders && placeholders.length > 0) {
  console.warn(
    `\nWARNING: ${placeholders.length} placeholder entries found. These MUST be replaced before public deploy.`
  );
  placeholders.forEach((p) => console.warn(`  - ${p.nome}`));
}

console.log("\nData validation PASSED.");
console.log(`Total associations: ${associations?.length || 0}`);
console.log(`Active: ${associations?.filter((a) => a.ativo).length || 0}`);
