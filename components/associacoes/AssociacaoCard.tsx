import type { Associacao } from "@/lib/types";
import { formatPriceRange, formatDateBR, isStaleVerification } from "@/lib/format";

interface AssociacaoCardProps {
  associacao: Associacao;
}

export default function AssociacaoCard({ associacao }: AssociacaoCardProps) {
  const stale = isStaleVerification(associacao.dataVerificacao);

  return (
    <div className="card space-y-4">
      {/* Header: nome + cidade/estado */}
      <div>
        <h3 className="mb-0">{associacao.nome}</h3>
        <p className="text-bark-light text-sm">
          {associacao.cidade}, {associacao.estado}
        </p>
      </div>

      {/* Faixa de preço */}
      <div>
        <p className="font-semibold text-forest">
          {formatPriceRange(associacao.faixaPreco.min, associacao.faixaPreco.max)}
          <span className="text-bark-light font-normal text-sm"> /mês</span>
        </p>
        <p className="text-xs text-bark-light">
          Preço verificado em {formatDateBR(associacao.faixaPreco.dataVerificacao)}
        </p>
      </div>

      {/* Cultivo autorizado badge */}
      {associacao.cultivoAutorizado && (
        <span className="inline-block bg-green-100 text-forest text-xs font-semibold px-3 py-1 rounded-full">
          Cultivo autorizado
        </span>
      )}

      {/* Condições atendidas */}
      {associacao.condicoesAtendidas.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {associacao.condicoesAtendidas.map((condicao) => (
            <span
              key={condicao}
              className="inline-block bg-cream-dark text-bark text-xs px-2 py-1 rounded-full"
            >
              {condicao}
            </span>
          ))}
        </div>
      )}

      {/* Contato */}
      <div className="space-y-1 text-sm">
        <p>
          Tel:{" "}
          <a
            href={`tel:${associacao.telefone.replace(/\D/g, "")}`}
            className="text-forest underline"
          >
            {associacao.telefone}
          </a>
        </p>

        {associacao.whatsapp && (
          <p>
            WhatsApp:{" "}
            <a
              href={`https://wa.me/${associacao.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline"
            >
              Enviar mensagem
            </a>
          </p>
        )}

        {associacao.site && (
          <p>
            Site:{" "}
            <a
              href={associacao.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline"
            >
              {associacao.site.replace(/^https?:\/\//, "")}
            </a>
          </p>
        )}
      </div>

      {/* Verificação badge */}
      <div className="border-t border-cream-dark pt-3 flex flex-col gap-1">
        <p className="text-xs text-bark-light">
          Dados verificados em {formatDateBR(associacao.dataVerificacao)}
        </p>
        {stale && (
          <p className="text-xs text-red-600 font-semibold">
            Dados não verificados recentemente
          </p>
        )}
      </div>
    </div>
  );
}
