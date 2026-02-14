import { formatDateBR } from "@/lib/format";

interface VerificationBadgeProps {
  date: string; // ISO format: YYYY-MM-DD
}

export default function VerificationBadge({ date }: VerificationBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-cream-dark/50 text-bark-light text-sm px-3 py-1 rounded-full">
      <span aria-hidden="true">&#x1F4CB;</span>
      <span>Informações verificadas em: {formatDateBR(date)}</span>
    </div>
  );
}
