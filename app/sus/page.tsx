import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Como conseguir cannabis medicinal pelo SUS",
  description:
    "Checklist completo e imprimível para conseguir cannabis medicinal pelo SUS. Passo a passo, documentos necessários e o que fazer se negarem.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como conseguir cannabis medicinal pelo SUS",
  description:
    "Passo a passo para conseguir cannabis medicinal pelo Sistema Único de Saúde no Brasil.",
  step: [
    {
      "@type": "HowToStep",
      name: "Consulta médica",
      text: "Vá ao posto de saúde (UBS) e peça encaminhamento para um especialista que avalie se a cannabis medicinal é indicada para o seu caso.",
    },
    {
      "@type": "HowToStep",
      name: "Secretaria Municipal de Saúde",
      text: "Com a receita e o laudo em mãos, vá à Secretaria Municipal de Saúde com todos os documentos e protocole o pedido.",
    },
    {
      "@type": "HowToStep",
      name: "Esperar a resposta",
      text: "O prazo é de até 30 dias. Se ninguém responder nesse prazo, procure a Defensoria Pública.",
    },
    {
      "@type": "HowToStep",
      name: "Se negarem ou não responderem",
      text: "Procure a Defensoria Pública do seu estado. O atendimento é gratuito e ela pode entrar com ação judicial por você.",
    },
  ],
};

export default function SusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="Como conseguir cannabis medicinal pelo SUS"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Veja como conseguir cannabis medicinal pelo SUS: https://flordelei.org/sus"
    >
      {/* ── SEÇÃO 1: O QUE VOCÊ VAI PRECISAR ── */}
      <section className="print-section space-y-4">
        <h2>O QUE VOCÊ VAI PRECISAR</h2>
        <p>
          Antes de ir à Secretaria de Saúde, junte todos esses documentos.
          Imprima esta lista e vá marcando o que já tem:
        </p>
        <div className="card space-y-1">
          <div className="checklist-item">
            <span>
              <strong>Receita médica</strong> — receituário azul tipo B ou
              notificação especial. Sem ela, nenhum pedido é aceito.
            </span>
          </div>
          <div className="checklist-item">
            <span>
              <strong>Laudo médico detalhado</strong> — precisa ter: o CID
              (código da doença), o histórico de tratamentos que já falharam, a
              justificativa para usar cannabis, o nome do produto e a dosagem, e
              a frase{" "}
              <em>
                &quot;indispensável para manutenção da saúde do paciente&quot;
              </em>
              .
            </span>
          </div>
          <div className="checklist-item">
            <span>
              <strong>Documento de identidade</strong> (RG ou CNH)
            </span>
          </div>
          <div className="checklist-item">
            <span>
              <strong>Comprovante de residência</strong> (conta de luz, água ou
              telefone recente)
            </span>
          </div>
          <div className="checklist-item">
            <span>
              <strong>Cartão SUS</strong>
            </span>
          </div>
        </div>
        <p className="source-badge">
          Fonte: Portaria MS/GM nº 1.554/2013; Jurisprudência do STJ
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 2: PASSO A PASSO ── */}
      <section className="print-section space-y-4">
        <h2>PASSO A PASSO</h2>
        <div className="card space-y-6">
          <div>
            <h3>Passo 1 — Consulta médica</h3>
            <p>
              Vá ao posto de saúde (UBS) e peça encaminhamento para um
              especialista (neurologista, psiquiatra, ou o médico da sua
              condição). É o especialista quem vai avaliar se a cannabis
              medicinal é indicada para o seu caso.
            </p>
            <p className="mt-2">
              Se o médico não quiser prescrever, você pode buscar uma consulta
              por telemedicina a partir de R$&nbsp;99. Veja mais abaixo.
            </p>
          </div>

          <div>
            <h3>Passo 2 — Secretaria Municipal de Saúde</h3>
            <p>
              Com a receita e o laudo em mãos, vá à Secretaria Municipal de
              Saúde com <strong>TODOS</strong> os documentos da lista acima.
            </p>
            <p className="mt-2 font-semibold">
              PROTOCOLAR o pedido. ANOTAR O NÚMERO DO PROTOCOLO.
            </p>
            <p className="mt-1">
              Esse número é a sua prova de que você pediu. Sem ele, fica muito
              mais difícil cobrar uma resposta depois.
            </p>
          </div>

          <div>
            <h3>Passo 3 — Esperar a resposta</h3>
            <p>
              O prazo é de até 30 dias. Se ninguém responder nesse prazo, vá
              para o passo 4.
            </p>
          </div>

          <div>
            <h3>Passo 4 — Se negarem ou não responderem</h3>
            <p>
              Procure a <strong>Defensoria Pública</strong> do seu estado. Ela
              existe para ajudar quem não tem condições de pagar um advogado. O
              atendimento é gratuito.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: Art. 196 da Constituição Federal; Lei 8.080/1990 (Lei do SUS)
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 3: O QUE LEVAR NA DEFENSORIA PÚBLICA ── */}
      <section className="print-section space-y-4">
        <h2>O QUE LEVAR NA DEFENSORIA PÚBLICA</h2>
        <div className="card space-y-1">
          <div className="checklist-item">
            <span>Receita médica original</span>
          </div>
          <div className="checklist-item">
            <span>Laudo médico detalhado</span>
          </div>
          <div className="checklist-item">
            <span>
              Protocolo da Secretaria de Saúde (número e data)
            </span>
          </div>
          <div className="checklist-item">
            <span>
              Negativa formal, se tiver — protocolo sem resposta em 30 dias já
              serve como negativa
            </span>
          </div>
          <div className="checklist-item">
            <span>
              Documentos pessoais (RG, CPF, comprovante de residência)
            </span>
          </div>
          <div className="checklist-item">
            <span>Cartão SUS</span>
          </div>
          <div className="checklist-item">
            <span>
              Orçamento do medicamento (pode ser um print do site do fornecedor)
            </span>
          </div>
        </div>
        <div className="card bg-green-50 mt-4">
          <p>
            A Defensoria entra com ação judicial <strong>GRATUITA</strong> por
            você. O prazo médio até receber o medicamento é de 2 a 6 meses. Se o
            juiz determinar, o Estado é <strong>OBRIGADO</strong> a fornecer.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Lei Complementar nº 80/1994 (Lei da Defensoria Pública)
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 4: SEU MÉDICO NÃO QUER PRESCREVER? ── */}
      <section className="print-section space-y-4">
        <h2>SEU MÉDICO NÃO QUER PRESCREVER?</h2>
        <div className="card space-y-4">
          <p>
            O médico não é obrigado a prescrever cannabis medicinal. Ele tem
            autonomia para decidir o que é melhor para cada paciente. Mas você
            pode buscar outro profissional.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Telemedicina:</strong> existem plataformas com médicos
              especializados em cannabis medicinal. Consultas a partir de
              R$&nbsp;99.
            </li>
            <li>
              <strong>Associações de pacientes:</strong> muitas têm equipe médica
              própria e cobram valores acessíveis.{" "}
              <Link href="/associacoes">
                Veja a lista de associações por estado.
              </Link>
            </li>
            <li>
              <strong>Dica:</strong> leve material de evidência para o médico
              (estudos, bulas, relatos de outros pacientes). Muitos profissionais
              ainda não conhecem bem o tema e podem mudar de ideia com
              informação.
            </li>
          </ul>
        </div>
        <p className="source-badge">
          Fonte: CFM — médico tem autonomia de prescrição (Resolução
          2.113/2014)
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 5: DICA IMPORTANTE ── */}
      <section className="print-section space-y-4">
        <h2>DICA IMPORTANTE</h2>
        <div className="card border-l-4 border-l-forest bg-green-50">
          <p className="font-semibold text-lg">
            O laudo médico é o documento mais importante de todo o processo.
          </p>
          <p className="mt-2">
            Quanto mais detalhado ele for, maiores são as chances de conseguir o
            medicamento — tanto pela via administrativa (Secretaria de Saúde)
            quanto pela via judicial (Defensoria Pública). Peça ao seu médico
            que capriche no laudo.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Jurisprudência consolidada — TJ-SP, TJ-RJ, TJ-RS
        </p>
      </section>
    </PageContainer>
    </>
  );
}
