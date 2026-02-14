import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Como importar cannabis medicinal legalmente",
  description:
    "Passo a passo para importar cannabis medicinal pela ANVISA. Tempo, custo, documentos e o que fazer se der problema.",
};

export default function ImportacaoPage() {
  return (
    <PageContainer
      title="Como importar cannabis medicinal legalmente"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Veja como importar cannabis medicinal pela ANVISA: https://flordelei.org/importacao"
    >
      {/* ── BARRA DE INFORMAÇÃO RÁPIDA ── */}
      <section className="print-section space-y-4">
        <div className="card flex flex-wrap gap-6 justify-center text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Tempo
            </p>
            <p className="text-xl font-bold">3–6 semanas</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Custo mensal
            </p>
            <p className="text-xl font-bold">R$&nbsp;200–800</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Imposto
            </p>
            <p className="text-xl font-bold">Isento até US$&nbsp;10.000</p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PASSO 1: RECEITA MÉDICA ── */}
      <section className="print-section space-y-4">
        <h2>PASSO 1 — RECEITA MÉDICA</h2>
        <div className="card space-y-3">
          <p>
            Tudo começa com a receita. Para importar, a receita precisa ter:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nome comercial do produto</strong> (ex.: Charlotte&apos;s
              Web, Ease Drops)
            </li>
            <li>
              <strong>Dosagem diária</strong> (ex.: 25 mg de CBD, 2 vezes ao
              dia)
            </li>
            <li>
              <strong>Data</strong> da prescrição
            </li>
            <li>
              <strong>Assinatura e CRM</strong> do médico
            </li>
          </ul>
          <p>
            Se o seu médico não sabe o nome comercial do produto, não se
            preocupe. A ANVISA mantém uma{" "}
            <a
              href="https://www.gov.br/anvisa/pt-br/assuntos/canabidiol"
              target="_blank"
              rel="noopener noreferrer"
            >
              lista de produtos autorizados para importação
            </a>
            . Leve essa lista para a consulta.
          </p>
        </div>
        <p className="source-badge">Fonte: ANVISA — RDC 660/2022</p>
      </section>

      <div className="section-divider" />

      {/* ── PASSO 2: CADASTRO NA ANVISA ── */}
      <section className="print-section space-y-4">
        <h2>PASSO 2 — CADASTRO NA ANVISA</h2>
        <div className="card space-y-3">
          <p>Você mesmo faz o cadastro online. Funciona assim:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Crie uma conta no{" "}
              <a
                href="https://www.gov.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                gov.br
              </a>{" "}
              (se ainda não tiver). Precisa ser nível prata ou ouro.
            </li>
            <li>
              Acesse o portal{" "}
              <strong>&quot;Importação de Canabidiol&quot;</strong> no site da
              ANVISA.
            </li>
            <li>Preencha os dados do paciente.</li>
            <li>
              Anexe a receita médica (foto ou PDF legível).
            </li>
            <li>
              Envie e aguarde de <strong>5 a 15 dias úteis</strong> para a
              resposta.
            </li>
          </ol>
          <p>
            Você vai receber a resposta por e-mail e também pode acompanhar pelo
            próprio portal.
          </p>
        </div>
        <p className="source-badge">Fonte: ANVISA — Portal de Serviços</p>
      </section>

      <div className="section-divider" />

      {/* ── PASSO 3: AUTORIZAÇÃO RECEBIDA ── */}
      <section className="print-section space-y-4">
        <h2>PASSO 3 — AUTORIZAÇÃO RECEBIDA</h2>
        <div className="card space-y-3">
          <p>
            Depois de aprovado, você recebe uma autorização que vale por{" "}
            <strong>2 ANOS</strong>. Com ela, você pode importar quantas vezes
            precisar dentro desse período.
          </p>
          <div className="bg-green-50 rounded-lg p-4 mt-2">
            <p className="font-semibold">Renovação</p>
            <p>
              Quando a autorização estiver perto de vencer, refaça o processo com
              uma receita atualizada. Comece{" "}
              <strong>60 dias antes do vencimento</strong> para não ficar sem o
              medicamento.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — RDC 660/2022, Art. 15
        </p>
      </section>

      <div className="section-divider" />

      {/* ── PASSO 4: COMPRAR ── */}
      <section className="print-section space-y-4">
        <h2>PASSO 4 — COMPRAR</h2>
        <div className="card space-y-3">
          <p>
            Com a autorização em mãos, você compra direto do fabricante
            internacional (pelo site deles). O produto é enviado pelos Correios.
          </p>
          <p>
            Quando o pacote chegar ao Brasil, a alfândega confere a sua
            autorização da ANVISA. Se estiver tudo certo, libera sem cobrar
            imposto (até US$&nbsp;10.000).
          </p>
          <p>
            O prazo total de entrega costuma ser de 2 a 4 semanas depois da
            compra.
          </p>
        </div>
        <p className="source-badge">Fonte: IN ANVISA nº 1/2020</p>
      </section>

      <div className="section-divider" />

      {/* ── PROBLEMAS COMUNS ── */}
      <section className="print-section space-y-4">
        <h2>PROBLEMAS COMUNS</h2>
        <div className="card space-y-4">
          <div>
            <h3>Preso na alfândega</h3>
            <p>
              Ligue para a ANVISA:{" "}
              <strong>0800 642 9782</strong> (ligação gratuita). Eles podem
              verificar a situação e orientar sobre o que fazer.
            </p>
          </div>
          <div>
            <h3>Autorização negada</h3>
            <p>
              O motivo mais comum é o nome do produto na receita não bater com o
              cadastro da ANVISA. Confira a lista oficial e peça ao médico para
              corrigir a receita.
            </p>
          </div>
          <div>
            <h3>Médico não sabe o nome comercial</h3>
            <p>
              Leve a{" "}
              <a
                href="https://www.gov.br/anvisa/pt-br/assuntos/canabidiol"
                target="_blank"
                rel="noopener noreferrer"
              >
                lista de produtos da ANVISA
              </a>{" "}
              impressa para a consulta. Isso facilita muito.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: ANVISA — Central de Atendimento
        </p>
      </section>

      <div className="section-divider" />

      {/* ── ANTES DE IMPORTAR ── */}
      <section className="print-section space-y-4">
        <h2>ANTES DE IMPORTAR, CONSIDERE</h2>
        <div className="card border-l-4 border-l-forest bg-green-50 space-y-3">
          <p>
            Importar pode custar entre R$&nbsp;200 e R$&nbsp;800 por mês. Antes
            de seguir esse caminho, veja se existe uma{" "}
            <strong>associação de pacientes</strong> no seu estado.
          </p>
          <p>
            Muitas associações produzem o próprio óleo com autorização judicial e
            cobram entre <strong>R$&nbsp;70 e R$&nbsp;300 por mês</strong> — bem
            menos que a importação.
          </p>
          <Link href="/associacoes" className="btn-primary no-underline mt-2">
            Ver associações por estado
          </Link>
        </div>
        <p className="source-badge">Fonte: Kaya Mind 2025</p>
      </section>
    </PageContainer>
  );
}
