import Link from "next/link";
import { GITHUB_URL, GOOGLE_FORM_URL, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream px-4 py-8 mt-12">
      <div className="max-w-3xl mx-auto space-y-4 text-sm">
        <p className="font-semibold text-base">{SITE_NAME}</p>

        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-cream/90">
          {[
            { href: "/guia", label: "Guia" },
            { href: "/sus", label: "SUS" },
            { href: "/importacao", label: "Importação" },
            { href: "/associacoes", label: "Associações" },
            { href: "/seus-direitos", label: "Seus direitos" },
            { href: "/regulamentacao", label: "Regulamentação" },
            { href: "/veterinario", label: "Veterinário" },
            { href: "/uso-seguro", label: "Uso seguro" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-cream/90 hover:text-white underline"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-cream/80">
          Este site é informativo e não substitui orientação médica ou jurídica.
          Todas as informações possuem fontes públicas verificáveis. Consulte
          sempre um profissional de saúde antes de iniciar qualquer tratamento.
        </p>

        <div className="flex flex-wrap gap-4 text-cream/90">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/90 hover:text-white underline"
          >
            Código aberto no GitHub
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/90 hover:text-white underline"
          >
            Reportar dados desatualizados
          </a>
        </div>

        <p className="text-cream/60 text-xs">
          Não vendemos nada. Não coletamos dados. Sem cookies. Licença MIT.
        </p>
      </div>
    </footer>
  );
}
