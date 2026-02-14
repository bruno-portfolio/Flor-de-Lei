import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import AssociacaoListClient from "@/components/associacoes/AssociacaoListClient";
import { VERIFICATION_DATE, GOOGLE_FORM_URL, GITHUB_URL } from "@/lib/constants";
import associacoesData from "@/data/associacoes.json";
import type { Associacao } from "@/lib/types";

export const metadata: Metadata = {
  title: "Associações de Cannabis Medicinal por Estado",
  description:
    "Diretório de associações de cannabis medicinal no Brasil. Encontre associações por estado, compare preços, condições atendidas e formas de contato.",
};

export default function AssociacoesPage() {
  const associacoes = associacoesData.associations.filter(
    (a) => a.ativo
  ) as Associacao[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Associações de Cannabis Medicinal no Brasil",
    description:
      "Diretório de associações de cannabis medicinal por estado brasileiro.",
    numberOfItems: associacoes.length,
    itemListElement: associacoes.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: a.nome,
        address: {
          "@type": "PostalAddress",
          addressLocality: a.cidade,
          addressRegion: a.estado,
          addressCountry: "BR",
        },
        telephone: a.telefone,
        ...(a.site ? { url: a.site } : {}),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="Associações de Cannabis Medicinal"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Veja o diretório de associações de cannabis medicinal por estado: https://flor-de-lei.vercel.app/associacoes"
    >
      <section className="space-y-4">
        <p>
          As associações de pacientes facilitam o acesso à cannabis medicinal com
          preços mais acessíveis, orientação médica e suporte jurídico. Encontre
          uma associação no seu estado.
        </p>
        <p className="text-sm text-bark-light">
          Os valores exibidos são faixas de preço mensal informadas pelas
          próprias associações ou obtidas em seus sites oficiais. Referem-se ao
          custo do medicamento para associados. Cada card mostra a data da
          última verificação. Confirme valores diretamente com a associação.
        </p>
      </section>

      <div className="section-divider" />

      <AssociacaoListClient associacoes={associacoes} />

      <div className="section-divider" />

      {/* Banner: dados desatualizados / não listado */}
      <section className="card bg-cream-dark/50 space-y-3">
        <h3>Sua associação não está listada? Dados desatualizados?</h3>
        <p className="text-sm">
          Este diretório é colaborativo. Ajude a manter as informações
          atualizadas para outros pacientes.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm no-underline"
          >
            Enviar dados pelo formulário
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm no-underline"
          >
            Editar no GitHub
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* Outros caminhos */}
      <section className="space-y-4">
        <h2>OUTROS CAMINHOS DE ACESSO</h2>
        <div className="card space-y-3">
          <p>
            Associações são uma das formas de acesso à cannabis medicinal no
            Brasil. Conheça também as outras:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sus" className="btn-primary no-underline">
              Pelo SUS (gratuito)
            </Link>
            <Link href="/importacao" className="btn-secondary no-underline">
              Importação pela ANVISA
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Disclaimer */}
      <section className="space-y-2">
        <p className="text-sm text-bark-light font-semibold">
          Confirme informações diretamente com a associação antes de iniciar
          qualquer processo. Preços e condições podem mudar sem aviso.
        </p>
        <p className="source-badge">
          Fonte: Dados informados pelas associações
        </p>
      </section>
    </PageContainer>
    </>
  );
}
