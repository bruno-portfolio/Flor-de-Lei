import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cannabis medicinal para animais",
  description:
    "Desde dezembro de 2024, veterinários podem prescrever canabinoides. Saiba quem prescreve, para quais condições e onde comprar.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cannabis medicinal para animais",
  description:
    "Como funciona a prescrição veterinária de canabinoides no Brasil desde dezembro de 2024.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/veterinario`,
  inLanguage: "pt-BR",
};

export default function VeterinarioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="Cannabis medicinal para animais"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Cannabis medicinal para animais — o que já é permitido: https://flor-de-lei.vercel.app/veterinario"
    >
      {/* ── SEÇÃO 1: É PERMITIDO? ── */}
      <section className="print-section space-y-4">
        <h2>É PERMITIDO?</h2>
        <div className="card space-y-3">
          <p>
            <strong>Sim, desde dezembro de 2024.</strong> A RDC 936/2024 da
            ANVISA oficializou a prescrição de produtos canabinoides por
            médicos veterinários. A resolução entrou em vigor em 2 de dezembro
            de 2024.
          </p>
          <p>
            Os produtos utilizados são os mesmos já registrados pela ANVISA para
            uso humano — farmácias e drogarias podem dispensá-los mediante
            receita veterinária especial.
          </p>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — RDC 936/2024; CFMV
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 2: QUEM PODE PRESCREVER ── */}
      <section className="print-section space-y-4">
        <h2>QUEM PODE PRESCREVER</h2>
        <div className="card space-y-3">
          <p>
            Apenas <strong>médicos veterinários</strong> registrados no CFMV
            (Conselho Federal de Medicina Veterinária). A prescrição é feita em
            receituário especial, retido na farmácia no momento da compra.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mt-2">
            <p className="font-semibold">Receita simplificada (desde set/2025)</p>
            <p>
              A Portaria MAPA 837/2025 simplificou a prescrição: produtos com
              THC ≤&nbsp;0,2% <strong>não precisam mais de receita especial</strong>{" "}
              — basta receita veterinária comum.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: CRMV-RJ; Portaria MAPA 837/2025
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 3: PARA QUAIS CONDIÇÕES ── */}
      <section className="print-section space-y-4">
        <h2>PARA QUAIS CONDIÇÕES</h2>
        <div className="card space-y-3">
          <p>
            As indicações mais comuns na medicina veterinária são:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Dor crônica</strong> — artrose, dor pós-cirúrgica, dor
              oncológica
            </li>
            <li>
              <strong>Epilepsia</strong> — crises convulsivas refratárias
            </li>
            <li>
              <strong>Distúrbios comportamentais</strong> — ansiedade de
              separação, fobias, compulsões
            </li>
            <li>
              <strong>Cuidados paliativos</strong> — conforto em doenças
              terminais, melhora da qualidade de vida
            </li>
          </ul>
          <p className="mt-2">
            A avaliação é sempre individual. O veterinário vai considerar a
            espécie, o porte, a idade e as condições de saúde do animal.
          </p>
        </div>
        <p className="source-badge">
          Fonte: CFMV; CRMV-SP — Cannabis na medicina veterinária
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 4: ONDE COMPRAR ── */}
      <section className="print-section space-y-4">
        <h2>ONDE COMPRAR</h2>
        <div className="card space-y-3">
          <p>
            Os mesmos canais disponíveis para humanos servem para animais, desde
            que haja prescrição veterinária:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Farmácias e drogarias</strong> com produtos ANVISA
              registrados (49 produtos disponíveis)
            </li>
            <li>
              <strong>Associações de pacientes</strong> que aceitem prescrições
              veterinárias
            </li>
            <li>
              <strong>Importação via ANVISA</strong> — o tutor do animal pode
              solicitar autorização de importação com a receita veterinária
            </li>
          </ul>
          <p className="mt-2">
            O custo é semelhante ao tratamento humano e varia com o produto, a
            concentração e o porte do animal.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Cannabis &amp; Saúde; CFMV
        </p>
      </section>

      <div className="section-divider" />

      {/* ── OUTROS GUIAS ── */}
      <section className="print-section space-y-4">
        <h2>OUTROS GUIAS</h2>
        <div className="card space-y-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/associacoes" className="btn-primary no-underline">
              Associações de pacientes
            </Link>
            <Link href="/importacao" className="btn-secondary no-underline">
              Como importar
            </Link>
            <Link href="/uso-seguro" className="btn-secondary no-underline">
              Uso seguro
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
    </>
  );
}
