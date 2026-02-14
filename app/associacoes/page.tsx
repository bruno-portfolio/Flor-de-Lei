import type { Metadata } from "next";
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

  return (
    <PageContainer
      title="Associações de Cannabis Medicinal"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Veja o diretório de associações de cannabis medicinal por estado: https://flordelei.org/associacoes"
    >
      <section className="space-y-4">
        <p>
          As associações de pacientes facilitam o acesso à cannabis medicinal com
          preços mais acessíveis, orientação médica e suporte jurídico. Encontre
          uma associação no seu estado.
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
  );
}
