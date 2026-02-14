/**
 * Formata data ISO (YYYY-MM-DD) para formato brasileiro (DD/MM/AAAA)
 */
export function formatDateBR(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

/**
 * Formata faixa de preço em reais
 */
export function formatPriceRange(min: number, max: number): string {
  const fmt = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  if (min === max) return fmt(min);
  return `${fmt(min)} a ${fmt(max)}`;
}

/**
 * Gera URL de compartilhamento WhatsApp
 */
export function whatsappShareUrl(text: string, url: string): string {
  const message = `${text}\n\n${url}`;
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

/**
 * Verifica se uma data de verificação tem mais de 6 meses
 */
export function isStaleVerification(dateStr: string): boolean {
  const date = new Date(dateStr);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return date < sixMonthsAgo;
}
