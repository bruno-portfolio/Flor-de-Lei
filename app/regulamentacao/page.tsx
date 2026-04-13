import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O que mudou na regulamentação em 2026",
  description:
    "As 5 novas RDCs da ANVISA (janeiro/2026), situação do CFM, legislação em tramitação e próximos marcos. Tudo o que o paciente precisa saber.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "O que mudou na regulamentação da cannabis medicinal em 2026",
  description:
    "As 5 novas RDCs da ANVISA, situação do CFM, legislação em tramitação e próximos marcos para cannabis medicinal no Brasil.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/regulamentacao`,
  inLanguage: "pt-BR",
};

export default function RegulamentacaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="O que mudou em 2026"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Veja o que mudou na regulamentação da cannabis medicinal em 2026: https://flor-de-lei.vercel.app/regulamentacao"
    >
      {/* ── SEÇÃO 1: VISÃO GERAL ── */}
      <section className="print-section space-y-4">
        <h2>O QUE ACONTECEU</h2>
        <div className="card space-y-3">
          <p>
            Em <strong>28 de janeiro de 2026</strong>, a ANVISA aprovou por
            unanimidade 5 novas Resoluções da Diretoria Colegiada (RDCs),
            publicadas no Diário Oficial em 3 de fevereiro de 2026. Foi a
            maior mudança regulatória para cannabis medicinal no Brasil desde
            2019.
          </p>
          <p>
            A decisão respondeu a uma{" "}
            <strong>determinação do STJ (novembro de 2024)</strong>, que
            declarou a legalidade da produção nacional de cannabis para fins
            medicinais e deu prazo para a ANVISA regulamentar. Em 8 de abril de
            2026, o STJ homologou as novas regras.
          </p>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — DOU 03/fev/2026; STJ — 1ª Seção (nov/2024, abr/2026)
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 2: AS 5 RDCs ── */}
      <section className="print-section space-y-4">
        <h2>AS 5 RDCs EXPLICADAS</h2>
        <div className="card">
          <p className="text-sm text-bark-light mb-4">
            Aprovadas em 28/jan/2026 pela Diretoria Colegiada. Publicadas no
            DOU em 03/fev/2026.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-cream-dark p-3 text-left">
                    RDC
                  </th>
                  <th className="border border-cream-dark p-3 text-left">
                    O que faz
                  </th>
                  <th className="border border-cream-dark p-3 text-left">
                    Vigência
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-cream-dark p-3 font-semibold">
                    1.011
                  </td>
                  <td className="border border-cream-dark p-3">
                    <strong>Reclassifica</strong> a Cannabis sativa (THC
                    ≤&nbsp;0,3%) de lista E (proibida) para lista C1
                    (controlada) na Portaria 344/98. Não &quot;remove&quot; —
                    reclassifica.
                  </td>
                  <td className="border border-cream-dark p-3">04/ago/2026</td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3 font-semibold">
                    1.012
                  </td>
                  <td className="border border-cream-dark p-3">
                    <strong>Pesquisa:</strong> autoriza cultivo por instituições
                    MEC, ICTs públicas, indústria farmacêutica e órgãos de
                    defesa. THC acima de 0,3% só via importação.
                  </td>
                  <td className="border border-cream-dark p-3">04/ago/2026</td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3 font-semibold">
                    1.013
                  </td>
                  <td className="border border-cream-dark p-3">
                    <strong>Produção industrial</strong> por pessoas jurídicas
                    com Autorização Especial. THC ≤&nbsp;0,3%, câmeras 24h,
                    georreferenciamento, inspeção sanitária prévia.
                  </td>
                  <td className="border border-cream-dark p-3">04/ago/2026</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-cream-dark p-3 font-semibold">
                    1.014
                  </td>
                  <td className="border border-cream-dark p-3">
                    <strong>Sandbox para associações:</strong> primeira via
                    administrativa para associações cultivarem sem precisar de
                    ordem judicial. Até 5 anos. Edital de chamamento público
                    esperado entre abril e julho de 2026 (estimativa).
                    Associações com HC existente têm até ago/2027 para
                    transição.
                  </td>
                  <td className="border border-cream-dark p-3 font-semibold">
                    Já em vigor
                  </td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3 font-semibold">
                    1.015
                  </td>
                  <td className="border border-cream-dark p-3">
                    <strong>Substitui a RDC 327/2019.</strong> Novas vias de
                    administração (sublingual, inalatória, dermatológica, bucal).
                    Dentistas podem prescrever. CBD isolado em farmácias de
                    manipulação (pendente norma específica da ANVISA).
                  </td>
                  <td className="border border-cream-dark p-3 font-semibold">
                    04/mai/2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — RDCs 1.011 a 1.015/2026; DOU 03/fev/2026
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 3: RECEITAS ── */}
      <section className="print-section space-y-4">
        <h2>RECEITAS — O QUE MUDA EM MAIO DE 2026</h2>
        <div className="card space-y-3">
          <p>
            A RDC 1.015/2026 simplifica a prescrição para produtos com menor
            teor de THC:
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold">THC ≤ 0,2%</p>
              <p>
                <strong>Antes:</strong> Notificação de Receita B (azul) — mais
                burocrática.
              </p>
              <p>
                <strong>Agora:</strong> Receita de Controle Especial (branca, 2
                vias) — mais simples. É uma <strong>flexibilização</strong>.
              </p>
            </div>
            <div className="rounded-lg p-4 border border-cream-dark">
              <p className="font-semibold">THC &gt; 0,2%</p>
              <p>
                Continua exigindo Notificação de Receita A (amarela). Sem
                mudança.
              </p>
            </div>
          </div>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — RDC 1.015/2026, Art. 37
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 4: CFM ── */}
      <section className="print-section space-y-4">
        <h2>CFM — SITUAÇÃO ATUAL</h2>
        <div className="card space-y-3">
          <p>
            Existe um <strong>vácuo regulatório</strong> no Conselho Federal de
            Medicina:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              A Resolução <strong>2.113/2014</strong> restringia a prescrição
              de canabidiol a 3 especialidades (neurologia, neurocirurgia e
              psiquiatria) e apenas para epilepsia refratária em crianças.
            </li>
            <li>
              A Resolução <strong>2.324/2022</strong> tentou restringir ainda
              mais (apenas 3 síndromes específicas), mas foi{" "}
              <strong>suspensa em outubro de 2022</strong> após forte reação de
              pacientes e médicos. Ao revogar a 2.113, criou o vácuo.
            </li>
            <li>
              Na prática,{" "}
              <strong>as regras da ANVISA prevalecem</strong>: qualquer médico
              (e, a partir de maio/2026, dentista) com registro ativo pode
              prescrever.
            </li>
          </ol>
          <div className="bg-yellow-50 border-l-4 border-l-yellow-500 rounded-lg p-4 mt-2">
            <p>
              Há casos documentados de médicos investigados por CRMs regionais
              por prescreverem fora das 3 especialidades. Não foram encontradas
              punições finais confirmadas, mas a possibilidade de sindicância
              existe.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: CFM — Res. 2.113/2014, 2.324/2022 (suspensa); Estado de Minas;
          AMB
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 5: LEGISLAÇÃO ── */}
      <section className="print-section space-y-4">
        <h2>LEGISLAÇÃO EM TRAMITAÇÃO</h2>
        <div className="card space-y-4">
          <div>
            <h3>PL 399/2015 — Marco Legal da Cannabis</h3>
            <p>
              Aprovado em comissão especial da Câmara em 2021. Aguarda votação
              em plenário. Regulamenta cultivo, produção, pesquisa e
              comercialização para fins medicinais e industriais.
            </p>
          </div>
          <div>
            <h3>PL 5.511/2023 — Cannabis Medicinal e Cânhamo</h3>
            <p>
              De autoria da Senadora Mara Gabrilli (PSD/SP). Relatora: Senadora
              Professora Dorinha Seabra (União/TO). Seu substitutivo prevê
              controles como monitoramento por vídeo e inspeção judicial a cada
              90 dias. Em debate na CRA do Senado.
            </p>
          </div>
          <div>
            <h3>PEC 45/2023 — Emenda Constitucional sobre Drogas</h3>
            <p>
              Aprovada no Senado (53×9 e 52×9) e na CCJ da Câmara (47×17).
              Aguarda comissão especial e plenário. Criminaliza porte sem
              autorização. A interpretação jurídica majoritária é que{" "}
              <strong>
                não afetaria pacientes com autorização da ANVISA
              </strong>
              , mas não há exclusão explícita no texto da PEC.
            </p>
          </div>
          <div>
            <h3>Frente Parlamentar Mista</h3>
            <p>
              Lançada em março de 2026 com mais de 200 parlamentares. Deputado
              Bacelar (PV/BA) preside. Objetivo: acelerar a tramitação do
              PL&nbsp;399/2015 e PL&nbsp;5.511/2023.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: Câmara dos Deputados; Senado Federal; Conjur
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 6: EMBRAPA ── */}
      <section className="print-section space-y-4">
        <h2>EMBRAPA — PESQUISA NACIONAL</h2>
        <div className="card space-y-3">
          <p>
            Em novembro de 2025, a ANVISA autorizou a{" "}
            <strong>Embrapa</strong> a conduzir pesquisa de cultivo e
            melhoramento genético de Cannabis sativa. Destaques:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Investimento de <strong>R$&nbsp;13,2 milhões</strong> via FINEP
            </li>
            <li>
              <strong>5 unidades</strong> envolvidas: Brasília/DF, Pelotas/RS,
              Campina Grande/PB, Fortaleza/CE e Campinas/SP
            </li>
            <li>
              Projeto de no mínimo <strong>12 anos</strong> de duração
            </li>
            <li>
              Início do cultivo experimental previsto para o 1º semestre de 2026
            </li>
          </ul>
        </div>
        <p className="source-badge">
          Fonte: Embrapa; ANVISA; Revista Pesquisa FAPESP
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 7: DATAS IMPORTANTES ── */}
      <section className="print-section space-y-4">
        <h2>PRÓXIMAS DATAS IMPORTANTES</h2>
        <div className="card">
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-forest text-cream rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0">
                04/mai
              </span>
              <div>
                <p className="font-semibold">
                  RDC 1.015 entra em vigor
                </p>
                <p className="text-sm text-bark-light">
                  Receitas simplificadas, novas vias de administração, dentistas
                  prescrevem, farmácias de manipulação
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-bark-light text-cream rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0">
                abr–jul
              </span>
              <div>
                <p className="font-semibold">
                  Edital do sandbox para associações (estimativa)
                </p>
                <p className="text-sm text-bark-light">
                  Chamamento público para associações que queiram cultivar pela
                  via administrativa (RDC 1.014)
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-forest text-cream rounded-lg px-3 py-1 text-sm font-semibold flex-shrink-0">
                04/ago
              </span>
              <div>
                <p className="font-semibold">
                  RDCs 1.011, 1.012 e 1.013 entram em vigor
                </p>
                <p className="text-sm text-bark-light">
                  Reclassificação da cannabis, pesquisa e produção industrial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── OUTROS GUIAS ── */}
      <section className="print-section space-y-4">
        <h2>OUTROS GUIAS</h2>
        <div className="card space-y-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/seus-direitos" className="btn-primary no-underline">
              Seus direitos
            </Link>
            <Link href="/importacao" className="btn-secondary no-underline">
              Como importar
            </Link>
            <Link href="/associacoes" className="btn-secondary no-underline">
              Associações
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
    </>
  );
}
