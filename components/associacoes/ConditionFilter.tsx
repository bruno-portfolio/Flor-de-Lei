"use client";

import { CONDICOES_LABELS } from "@/lib/constants";

interface ConditionFilterProps {
  selectedCondition: string;
  onConditionChange: (condition: string) => void;
}

const CONDITIONS = Object.entries(CONDICOES_LABELS).sort((a, b) =>
  a[1].localeCompare(b[1], "pt-BR")
);

export default function ConditionFilter({
  selectedCondition,
  onConditionChange,
}: ConditionFilterProps) {
  return (
    <select
      value={selectedCondition}
      onChange={(e) => onConditionChange(e.target.value)}
      aria-label="Filtrar por condição médica"
      className="w-full sm:w-auto bg-white border border-cream-dark rounded-lg px-4 py-3 text-bark min-h-touch focus:outline-none focus:ring-2 focus:ring-forest"
    >
      <option value="">Todas as condições</option>
      {CONDITIONS.map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
}
