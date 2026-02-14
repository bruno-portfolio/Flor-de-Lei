"use client";

import { ESTADOS } from "@/lib/constants";

interface StateFilterProps {
  selectedState: string;
  onStateChange: (state: string) => void;
}

export default function StateFilter({
  selectedState,
  onStateChange,
}: StateFilterProps) {
  return (
    <select
      value={selectedState}
      onChange={(e) => onStateChange(e.target.value)}
      aria-label="Filtrar por estado"
      className="w-full sm:w-auto bg-white border border-cream-dark rounded-lg px-4 py-3 text-bark min-h-touch focus:outline-none focus:ring-2 focus:ring-forest"
    >
      <option value="">Todos os estados</option>
      {ESTADOS.map((estado) => (
        <option key={estado.sigla} value={estado.sigla}>
          {estado.sigla} — {estado.nome}
        </option>
      ))}
    </select>
  );
}
