import type { Metadata } from "next";
import { Suspense } from "react";
import WizardStep from "@/components/wizard/WizardStep";
import wizardTree from "@/data/wizard-tree.json";
import type { WizardTree } from "@/lib/types";

export const metadata: Metadata = {
  title: "Guia de Acesso — Descubra seu caminho",
  description:
    "Responda algumas perguntas e descubra o melhor caminho para acessar cannabis medicinal no Brasil. Gratuito, sem cadastro.",
};

export default function GuiaPage() {
  return (
    <div className="space-y-6">
      <h1>Guia de Acesso</h1>
      <p className="text-bark-light">
        Responda algumas perguntas e a gente mostra o melhor caminho para você.
      </p>
      <Suspense fallback={<div className="text-bark-light">Carregando...</div>}>
        <WizardStep tree={wizardTree as WizardTree} />
      </Suspense>
    </div>
  );
}
