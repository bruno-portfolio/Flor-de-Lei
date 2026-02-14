"use client";

import { useState } from "react";

interface FaqItemData {
  question: string;
  answer: string;
  source: string;
}

const FAQ_ITEMS: FaqItemData[] = [
  {
    question: "Cannabis medicinal é legal no Brasil?",
    answer:
      "Sim. Desde 2015, a ANVISA autoriza a importação de produtos à base de cannabis para uso pessoal. Em 2019, a RDC 327 regulamentou a venda em farmácias. Associações de pacientes também podem cultivar com autorização judicial.",
    source: "Fonte: ANVISA — RDC 327/2019, RDC 660/2022",
  },
  {
    question: "Preciso de receita médica?",
    answer:
      "Sim. Qualquer médico com CRM pode prescrever. Você precisa de uma receita com o nome do produto, dosagem e o número do CRM do médico. Se seu médico não prescreve, existem plataformas de telemedicina especializadas.",
    source: "Fonte: CFM — Resolução 2.113/2014; ANVISA — RDC 660/2022",
  },
  {
    question: "Quanto custa o tratamento?",
    answer:
      "Depende do caminho. Associações de pacientes: R$150 a R$300 por mês (varia com a dosagem). Importação: R$200 a R$800 por mês. Farmácia: R$200 a R$3.000 por mês. Pelo SUS: gratuito (com processo judicial). Nosso guia ajuda a encontrar o caminho mais acessível.",
    source: "Fonte: Kaya Mind — Panorama da Cannabis Medicinal no Brasil 2025",
  },
  {
    question: "Posso ser preso por usar cannabis medicinal?",
    answer:
      "Não. Com receita médica e autorização da ANVISA (ou decisão judicial para cultivo), o uso é 100% legal. A autorização é individual e intransferível.",
    source: "Fonte: Lei 11.343/2006; STJ — HC 143.798/SP",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="space-y-4">
      <h2 className="text-center">Perguntas mais comuns</h2>
      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="card">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left flex items-start justify-between gap-4 min-h-touch"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-bark">{item.question}</span>
              <span
                className="text-bark-light flex-shrink-0 text-xl transition-transform duration-200"
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              >
                &#x25BC;
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-3 pt-3 border-t border-cream-dark space-y-2">
                <p className="text-bark-light">{item.answer}</p>
                <p className="source-badge">{item.source}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
