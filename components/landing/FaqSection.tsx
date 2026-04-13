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
      "Sim. Desde 2015, a ANVISA autoriza importação de produtos à base de cannabis. Em janeiro de 2026, a ANVISA aprovou 5 novas RDCs que regulamentam pesquisa, produção nacional e um sandbox para associações de pacientes. A RDC 1.015/2026 (em vigor a partir de maio de 2026) substitui a RDC 327/2019 e amplia as formas de acesso: novas vias de administração, receitas simplificadas e farmácias de manipulação.",
    source: "Fonte: ANVISA — RDCs 1.011 a 1.015/2026, publicadas no DOU em 03/fev/2026",
  },
  {
    question: "Preciso de receita médica?",
    answer:
      "Sim. Pelas regras da ANVISA, qualquer médico com CRM ativo pode prescrever. A partir de maio de 2026 (RDC 1.015), dentistas também poderão. Nota: o CFM (Conselho Federal de Medicina) tentou restringir a prescrição a 3 especialidades, mas a resolução restritiva (2324/2022) foi suspensa. Hoje há um vácuo regulatório no CFM, e na prática prevalecem as regras da ANVISA. Se seu médico não prescreve, existem plataformas de telemedicina especializadas.",
    source: "Fonte: ANVISA — RDC 660/2022, RDC 1.015/2026; CFM — Res. 2324/2022 (suspensa)",
  },
  {
    question: "Quanto custa o tratamento?",
    answer:
      "Depende do caminho. Associações de pacientes: média de R$363 por produto. Importação via ANVISA: R$200 a R$800 por mês. Farmácia: média de R$679 por produto. Pelo SUS: gratuito (alguns estados já têm programas próprios). A partir de maio de 2026, farmácias de manipulação poderão preparar CBD isolado, o que pode reduzir custos — mas a norma ANVISA específica ainda não foi publicada.",
    source: "Fonte: Kaya Mind — Anuário da Cannabis Medicinal 2025",
  },
  {
    question: "Posso ter problemas legais usando cannabis medicinal?",
    answer:
      "Com receita médica E produto de fonte autorizada (importação via ANVISA, farmácia ou associação com autorização judicial), o uso é legal e protegido. O STF definiu em junho de 2024 (RE 635.659) que porte de até 40 gramas ou 6 plantas fêmeas para uso pessoal é infração administrativa, não crime. A documentação correta — receita, autorização da ANVISA e nota fiscal — é o que te protege.",
    source: "Fonte: Lei 11.343/2006; STF — RE 635.659 (jun/2024); RDC 660/2022",
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
              aria-controls={`faq-panel-${index}`}
              id={`faq-button-${index}`}
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
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className="mt-3 pt-3 border-t border-cream-dark space-y-2"
              >
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
