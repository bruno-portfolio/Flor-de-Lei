"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { WizardTree, EstadoBR } from "@/lib/types";
import {
  getInitialState,
  selectOption,
  selectState,
  goBack,
  getCurrentStep,
} from "@/lib/wizard-engine";
import { ESTADOS } from "@/lib/constants";
import WizardProgress from "./WizardProgress";
import MinorAlertBanner from "./MinorAlertBanner";
import WizardResult from "./WizardResult";

interface WizardStepProps {
  tree: WizardTree;
}

export default function WizardStep({ tree }: WizardStepProps) {
  const searchParams = useSearchParams();
  const flowParam = searchParams.get("flow") || "nunca-tratei";

  const [state, setState] = useState(() =>
    getInitialState(flowParam, tree)
  );

  useEffect(() => {
    setState(getInitialState(flowParam, tree));
  }, [flowParam, tree]);

  const currentStep = getCurrentStep(state, tree);
  const isMinor = state.flags.includes("isMinor");
  const canGoBack = state.history.length > 0;

  const handleOptionSelect = (index: number) => {
    setState((prev) => selectOption(prev, index, tree));
  };

  const handleStateSelect = (stateCode: EstadoBR) => {
    setState((prev) => selectState(prev, stateCode, tree));
  };

  const handleBack = () => {
    setState((prev) => goBack(prev));
  };

  // Result step
  if (currentStep.type === "result") {
    return (
      <div className="space-y-6">
        <WizardProgress progress={currentStep.progress} />
        {isMinor && <MinorAlertBanner />}
        {canGoBack && (
          <button
            onClick={handleBack}
            className="text-forest underline text-sm min-h-touch inline-flex items-center"
          >
            &larr; Voltar
          </button>
        )}
        <WizardResult step={currentStep} />
      </div>
    );
  }

  // Question or state-select step
  return (
    <div className="space-y-6">
      <WizardProgress progress={currentStep.progress} />
      {isMinor && <MinorAlertBanner />}
      {canGoBack && (
        <button
          onClick={handleBack}
          className="text-forest underline text-sm min-h-touch inline-flex items-center"
        >
          &larr; Voltar
        </button>
      )}

      <div className="card space-y-6">
        <h2 className="text-bark">{currentStep.question}</h2>

        {currentStep.type === "question" && currentStep.options && (
          <div className="grid gap-3">
            {currentStep.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className="btn-secondary text-left py-4 px-5"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {currentStep.type === "state-select" && (
          <div>
            <label htmlFor="state-select" className="sr-only">
              Selecione seu estado
            </label>
            <select
              id="state-select"
              onChange={(e) =>
                handleStateSelect(e.target.value as EstadoBR)
              }
              defaultValue=""
              className="w-full p-4 border-2 border-bark rounded-lg bg-white text-bark min-h-touch text-lg"
            >
              <option value="" disabled>
                Selecione seu estado...
              </option>
              {ESTADOS.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.nome} ({estado.sigla})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
