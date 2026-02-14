"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Associacao } from "@/lib/types";
import StateFilter from "./StateFilter";
import SearchInput from "./SearchInput";
import ConditionFilter from "./ConditionFilter";
import AssociacaoCard from "./AssociacaoCard";

interface AssociacaoListClientProps {
  associacoes: Associacao[];
}

export default function AssociacaoListClient({
  associacoes,
}: AssociacaoListClientProps) {
  const [selectedState, setSelectedState] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [cultivoOnly, setCultivoOnly] = useState(false);

  const hasActiveFilters = selectedState || search || selectedCondition || cultivoOnly;

  const filtered = useMemo(() => {
    const searchLower = search.toLowerCase().trim();

    return associacoes.filter((a) => {
      if (selectedState && a.estado !== selectedState) return false;
      if (
        searchLower &&
        !a.nome.toLowerCase().includes(searchLower) &&
        !a.cidade.toLowerCase().includes(searchLower)
      ) {
        return false;
      }
      if (selectedCondition && !a.condicoesAtendidas.includes(selectedCondition))
        return false;
      if (cultivoOnly && !a.cultivoAutorizado) return false;
      return true;
    });
  }, [associacoes, selectedState, search, selectedCondition, cultivoOnly]);

  function clearFilters() {
    setSelectedState("");
    setSearch("");
    setSelectedCondition("");
    setCultivoOnly(false);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <StateFilter
            selectedState={selectedState}
            onStateChange={setSelectedState}
          />
          <ConditionFilter
            selectedCondition={selectedCondition}
            onConditionChange={setSelectedCondition}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <SearchInput value={search} onChange={setSearch} />
          <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-touch px-1">
            <input
              type="checkbox"
              checked={cultivoOnly}
              onChange={(e) => setCultivoOnly(e.target.checked)}
              className="w-5 h-5 accent-forest rounded"
            />
            <span className="text-sm text-bark">Cultivo autorizado</span>
          </label>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-sm text-bark-light">
          {filtered.length}{" "}
          {filtered.length === 1 ? "associação encontrada" : "associações encontradas"}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-forest underline"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        selectedState || selectedCondition || cultivoOnly ? (
          <div className="card space-y-4 py-6">
            <p className="text-bark font-semibold">
              Nenhuma associação encontrada com esses filtros.
            </p>
            <p className="text-bark-light">
              Muitas associações atendem pacientes de todo o Brasil e enviam o
              medicamento pelos Correios. Tente remover alguns filtros ou
              explore outras formas de acesso.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={clearFilters}
                className="btn-primary text-sm"
              >
                Limpar filtros
              </button>
              <Link
                href="/sus"
                className="btn-secondary text-sm no-underline"
              >
                Conseguir pelo SUS (gratuito)
              </Link>
              <Link
                href="/importacao"
                className="btn-secondary text-sm no-underline"
              >
                Importar pela ANVISA
              </Link>
            </div>
          </div>
        ) : (
          <div className="card text-center py-8">
            <p className="text-bark-light">
              Nenhuma associação encontrada para a busca realizada.
            </p>
          </div>
        )
      ) : (
        <div className="space-y-4">
          {filtered.map((associacao) => (
            <AssociacaoCard key={associacao.id} associacao={associacao} />
          ))}
        </div>
      )}
    </div>
  );
}
