import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Seus direitos como paciente de cannabis medicinal",
  description:
    "Direção, trabalho, planos de saúde, porte e cultivo pessoal. O que a lei diz sobre os direitos do paciente de cannabis medicinal no Brasil.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Seus direitos como paciente de cannabis medicinal",
  description:
    "Direção, trabalho, planos de saúde, porte e cultivo pessoal para pacientes de cannabis medicinal no Brasil.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/seus-direitos`,
  inLanguage: "pt-BR",
};

export default function SeusDireitosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="Seus direitos como paciente"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Seus direitos como paciente de cannabis medicinal: https://flor-de-lei.vercel.app/seus-direitos"
    >
      {/* ── SEÇÃO 1: DIREÇÃO E CNH ── */}
      <section className="print-section space-y-4">
        <h2>DIREÇÃO E CNH</h2>
        <div className="card space-y-3">
          <p>
            O exame toxicológico exigido para a CNH detecta{" "}
            <strong>THC, mas não CBD puro</strong>. Se você usa um produto com
            0% de THC (CBD isolado), o exame não acusa. Mas produtos{" "}
            <em>full spectrum</em> com traços de THC (0,2–0,3%) podem resultar
            em teste positivo.
          </p>
          <div className="bg-green-50 rounded-lg p-4 space-y-2">
            <p className="font-semibold">
              Teste positivo NÃO significa perda automática da CNH.
            </p>
            <p>Se o resultado der positivo, você pode:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Solicitar a <strong>contraprova</strong> (análise da amostra
                reserva)
              </li>
              <li>
                Apresentar <strong>recurso administrativo</strong> ao DETRAN com
                documentação médica: autorização da ANVISA, receita, nota fiscal
                e certificado de análise do produto
              </li>
            </ol>
          </div>
          <p>
            O Termo de Consentimento (TCLE) que você assina ao iniciar o
            tratamento orienta a não dirigir enquanto não conhecer os efeitos.
            Trata-se de uma orientação, não de uma proibição legal vinculante.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Cannabis &amp; Saúde; Cannalize — Guia do exame toxicológico
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 2: TRABALHO ── */}
      <section className="print-section space-y-4">
        <h2>TRABALHO</h2>
        <div className="card space-y-3">
          <p>
            <strong>
              Não existe lei específica protegendo o paciente de cannabis
              medicinal no trabalho.
            </strong>{" "}
            A jurisprudência dos tribunais trabalhistas está dividida:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>TRT-10 (DF/TO) — reverteu justa causa:</strong>{" "}
              trabalhador flagrado com maconha durante intervalo intrajornada,
              fora do local de trabalho. O tribunal entendeu que o episódio
              ocorreu na vida privada do empregado e não impactou o contrato de
              trabalho.
              <br />
              <span className="text-sm text-bark-light">
                Processo 0000311-07.2016.5.10.0008, 2ª Turma, mai/2020
              </span>
            </li>
            <li>
              <strong>TRT-6 (PE) — manteve justa causa:</strong> técnico de
              segurança do trabalho que guardava cannabis em alojamento fornecido
              pela empresa em Fernando de Noronha (área de segurança nacional).
              O tribunal considerou que a função e o local comprometiam a
              confiança necessária.
              <br />
              <span className="text-sm text-bark-light">
                TRT-6, 3ª Turma, jan/2026
              </span>
            </li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-l-yellow-500 rounded-lg p-4 mt-2">
            <p className="font-semibold">Recomendação prática:</p>
            <p>
              Mantenha sua documentação médica completa e acessível (receita,
              autorização ANVISA, laudo). Comunique o uso ao RH se julgar
              prudente, especialmente em funções de risco. Cada caso é diferente
              e depende do contexto.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: CSJT; JOTA; TRT-6/PE
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 3: PLANOS DE SAÚDE ── */}
      <section className="print-section space-y-4">
        <h2>PLANOS DE SAÚDE</h2>
        <div className="card space-y-3">
          <p>
            O STJ decidiu em junho de 2025 (3ª Turma, Min. Nancy Andrighi) que
            planos de saúde{" "}
            <strong>
              NÃO são obrigados a cobrir canabidiol para uso domiciliar
            </strong>{" "}
            quando o produto não está na lista da ANS.
          </p>
          <p className="font-semibold mt-2">
            Exceções — quando o plano É obrigado:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Homecare com supervisão profissional:</strong> se a
              administração do canabidiol substituir uma internação hospitalar e
              exigir acompanhamento de profissional de saúde
            </li>
            <li>
              <strong>Uso hospitalar:</strong> quando o medicamento é
              administrado durante internação
            </li>
          </ul>
          <p className="mt-2">
            Se o seu plano negar cobertura indevidamente, você pode reclamar na{" "}
            <a
              href="https://www.gov.br/ans/pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANS (Agência Nacional de Saúde Suplementar)
            </a>
            .
          </p>
        </div>
        <p className="source-badge">
          Fonte: STJ — 3ª Turma, REsp, jun/2025, Min. Nancy Andrighi
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 4: PORTE E CULTIVO PESSOAL ── */}
      <section className="print-section space-y-4">
        <h2>PORTE E CULTIVO PESSOAL</h2>
        <div className="card space-y-3">
          <p>
            Em junho de 2024, o{" "}
            <strong>
              STF definiu que porte de até 40 gramas ou 6 plantas fêmeas
            </strong>{" "}
            para uso pessoal é infração administrativa, não crime
            (RE&nbsp;635.659). As consequências são advertência e participação
            em programa educativo — sem ficha criminal.
          </p>
          <p>
            Para <strong>cultivo individual com fins medicinais</strong>, é
            possível obter um <em>habeas corpus</em> (salvo-conduto) na
            Justiça. O STJ decidiu em fevereiro de 2025 que o paciente{" "}
            <strong>
              NÃO precisa comprovar baixa renda
            </strong>{" "}
            para conseguir o HC.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mt-2">
            <p className="font-semibold">Como funciona o HC para cultivo:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Requer: laudo médico detalhado, receita, comprovação de falha
                de tratamentos anteriores
              </li>
              <li>Prazo estimado: liminar em 10–45 dias úteis</li>
              <li>
                Custo estimado: R$&nbsp;5.000 a R$&nbsp;15.000 (advogado) —
                este valor vem de fonte única e pode variar por região
              </li>
              <li>
                Defensoria Pública pode impetrar gratuitamente se você não tiver
                condições de pagar advogado
              </li>
            </ul>
          </div>
        </div>
        <p className="source-badge">
          Fonte: STF — RE 635.659 (jun/2024); STJ — 6ª Turma (fev/2025); APEPI
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 5: IMPORTAÇÃO DE SEMENTES ── */}
      <section className="print-section space-y-4">
        <h2>IMPORTAÇÃO DE SEMENTES</h2>
        <div className="card space-y-3">
          <p>
            Em março de 2026, o TRF-3 decidiu que{" "}
            <strong>
              a opção de comprar o medicamento pronto não impede o paciente de
              importar sementes
            </strong>{" "}
            para cultivo pessoal autorizado judicialmente. A decisão se baseou
            em jurisprudência consolidada do STJ.
          </p>
          <p>
            A{" "}
            <strong>Portaria SDA/MAPA 1.342/2025</strong> (julho de 2025)
            estabelece os requisitos fitossanitários para importação de
            sementes de Cannabis sativa. Ela não é uma autorização em si — mas
            define as condições sanitárias para que a importação ocorra
            legalmente.
          </p>
        </div>
        <p className="source-badge">
          Fonte: TRF-3 (mar/2026); Portaria SDA/MAPA 1.342/2025; APEPI
        </p>
      </section>

      <div className="section-divider" />

      {/* ── OUTROS GUIAS ── */}
      <section className="print-section space-y-4">
        <h2>OUTROS GUIAS</h2>
        <div className="card space-y-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/regulamentacao" className="btn-primary no-underline">
              O que mudou em 2026
            </Link>
            <Link href="/importacao" className="btn-secondary no-underline">
              Como importar
            </Link>
            <Link href="/sus" className="btn-secondary no-underline">
              Pelo SUS
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
    </>
  );
}
