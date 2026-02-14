"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Associacao } from "@/lib/types";
import StateFilter from "./StateFilter";
import SearchInput from "./SearchInput";
import AssociacaoCard from "./AssociacaoCard";

interface AssociacaoListClientProps {
  associacoes: Associacao[];
}

export default function AssociacaoListClient({
  associacoes,
}: AssociacaoListClientProps) {
  const [selectedState, setSelectedState] = useState("");
  const [search, setSearch] = useState("");

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
      return true;
    });
  }, [associacoes, selectedState, search]);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <StateFilter
          selectedState={selectedState}
          onStateChange={setSelectedState}
        />
        <SearchInput value={search} onChange={setSearch} />
      </div>

      {/* Resultados */}
      <p className="text-sm text-bark-light">
        {filtered.length}{" "}
        {filtered.length === 1 ? "associação encontrada" : "associações encontradas"}
      </p>

      {filtered.length === 0 ? (
        selectedState ? (
          <div className="card space-y-4 py-6">
            <p className="text-bark font-semibold">
              Não encontramos associações neste estado.
            </p>
            <p className="text-bark-light">
              Muitas associações atendem pacientes de todo o Brasil e enviam o
              medicamento pelos Correios. Veja todas as associações disponíveis
              ou explore outras formas de acesso.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedState("");
                  setSearch("");
                }}
                className="btn-primary text-sm"
              >
                Ver todas as associações
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
