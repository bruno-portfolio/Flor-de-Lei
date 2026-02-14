"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print-button btn-secondary text-sm gap-2 print:hidden"
      aria-label="Imprimir este guia"
    >
      <span aria-hidden="true">&#x1F5A8;</span>
      Imprimir este guia
    </button>
  );
}
