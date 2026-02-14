import type { Metadata } from "next";
import PageContainer from "@/components/shared/PageContainer";
import { VERIFICATION_DATE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guia de uso seguro — Cannabis medicinal",
  description:
    "Armazenamento, titulação, efeitos colaterais, o que esperar e quando procurar o médico. Guia prático e imprimível.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guia de uso seguro — Cannabis medicinal",
  description:
    "Armazenamento, titulação, efeitos colaterais, o que esperar e quando procurar o médico.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: `${SITE_URL}/uso-seguro`,
  inLanguage: "pt-BR",
};

export default function UsoSeguroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <PageContainer
      title="Guia de uso seguro — Cannabis medicinal"
      verificationDate={VERIFICATION_DATE}
      whatsappText="Guia de uso seguro de cannabis medicinal: https://flordelei.org/uso-seguro"
    >
      {/* ── SEÇÃO 1: ARMAZENAMENTO ── */}
      <section className="print-section space-y-4">
        <h2>ARMAZENAMENTO</h2>
        <div className="card space-y-3">
          <p>
            Guardar o medicamento do jeito certo faz diferença na eficácia e na
            segurança. Siga estas regras:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Guarde em <strong>lugar fresco e escuro</strong> (longe do sol e
              do calor). Um armário fechado é ideal.
            </li>
            <li>
              Mantenha <strong>fora do alcance de crianças</strong> e animais de
              estimação. Trate como qualquer outro medicamento controlado.
            </li>
            <li>
              Verifique a <strong>data de validade</strong>. Depois de aberto, a
              maioria dos óleos dura de 6 a 12 meses. Anote a data em que abriu
              no frasco.
            </li>
          </ul>
        </div>
        <p className="source-badge">
          Fonte: Bulas dos produtos registrados ANVISA
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 2: COMO USAR (TITULAÇÃO) ── */}
      <section className="print-section space-y-4">
        <h2>COMO USAR (TITULAÇÃO)</h2>
        <div className="card space-y-3">
          <p>
            &quot;Titulação&quot; é o nome que se dá ao ajuste gradual da dose.
            A ideia é começar devagar e ir aumentando aos poucos, sempre com
            orientação médica.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Comece com a <strong>menor dose prescrita</strong> pelo seu médico.
            </li>
            <li>
              Aumente aos poucos, conforme a orientação médica. Nunca pule
              etapas.
            </li>
            <li>
              Os efeitos podem levar de{" "}
              <strong>2 a 4 semanas</strong> para aparecer. Tenha paciência.
            </li>
            <li>
              <strong>NÃO aumente a dose por conta própria.</strong> Sempre fale
              com o médico antes de mudar qualquer coisa.
            </li>
          </ol>
        </div>
        <p className="source-badge">
          Fonte: SBEC — Sociedade Brasileira de Estudos da Cannabis
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 3: O QUE ESPERAR ── */}
      <section className="print-section space-y-4">
        <h2>O QUE ESPERAR</h2>
        <div className="card space-y-3">
          <p>
            Cada corpo reage de um jeito. Mas, de modo geral, é assim que o
            tratamento costuma funcionar:
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold">Primeiros dias</p>
              <p>
                Pode ser que você não sinta nada. Isso é normal. O corpo precisa
                de tempo para se adaptar.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold">1 a 2 semanas</p>
              <p>
                Primeiros sinais de melhora podem começar a aparecer — sono
                melhor, menos dor, menos crises.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold">1 a 3 meses</p>
              <p>
                Efeito terapêutico mais estável. Nessa fase, o médico pode
                ajustar a dose para encontrar o ponto ideal.
              </p>
            </div>
          </div>
          <p className="mt-2">
            Lembre-se: cada pessoa é diferente. Não compare o seu resultado com
            o de outras pessoas.
          </p>
        </div>
        <p className="source-badge">
          Fonte: SBEC; literatura médica internacional
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 4: EFEITOS COLATERAIS POSSÍVEIS ── */}
      <section className="print-section space-y-4">
        <h2>EFEITOS COLATERAIS POSSÍVEIS</h2>
        <div className="card space-y-3">
          <p>
            A maioria das pessoas tolera bem a cannabis medicinal. Mas alguns
            efeitos podem aparecer, principalmente no início:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sonolência</li>
            <li>Boca seca</li>
            <li>Mudanças no apetite (mais ou menos fome)</li>
            <li>Tontura leve</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-l-yellow-500 rounded-lg p-4 mt-4">
            <p className="font-semibold">
              Qualquer efeito diferente do esperado → FALE COM O SEU MÉDICO.
            </p>
            <p className="mt-1">
              Se sentir desconforto forte → <strong>PARE de usar</strong> e
              procure atendimento médico.
            </p>
          </div>
        </div>
        <p className="source-badge">
          Fonte: Bulas de produtos ANVISA; OMS — Relatório sobre Canabidiol
          2018
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 5: NÃO FAÇA ── */}
      <section className="print-section space-y-4">
        <h2>NÃO FAÇA</h2>
        <div className="card space-y-1">
          <div className="flex items-start gap-3 py-2">
            <span className="text-red-600 font-bold text-xl flex-shrink-0 mt-0.5">
              ✕
            </span>
            <span>
              <strong>Não pare outros medicamentos</strong> sem orientação
              médica. A cannabis pode complementar o tratamento, mas não
              substitui outros remédios automaticamente.
            </span>
          </div>
          <div className="flex items-start gap-3 py-2">
            <span className="text-red-600 font-bold text-xl flex-shrink-0 mt-0.5">
              ✕
            </span>
            <span>
              <strong>Não misture com álcool.</strong> A combinação pode
              aumentar a sonolência e outros efeitos.
            </span>
          </div>
          <div className="flex items-start gap-3 py-2">
            <span className="text-red-600 font-bold text-xl flex-shrink-0 mt-0.5">
              ✕
            </span>
            <span>
              <strong>Não dirija</strong> até saber como o seu corpo reage.
              Principalmente nas primeiras semanas.
            </span>
          </div>
          <div className="flex items-start gap-3 py-2">
            <span className="text-red-600 font-bold text-xl flex-shrink-0 mt-0.5">
              ✕
            </span>
            <span>
              <strong>Não compartilhe o medicamento.</strong> A dose é individual
              — o que funciona para você pode fazer mal para outra pessoa.
            </span>
          </div>
          <div className="flex items-start gap-3 py-2">
            <span className="text-red-600 font-bold text-xl flex-shrink-0 mt-0.5">
              ✕
            </span>
            <span>
              <strong>Não compre de fontes não autorizadas.</strong> Produtos sem
              controle de qualidade podem ser ineficazes ou perigosos.
            </span>
          </div>
        </div>
        <p className="source-badge">Fonte: ANVISA; CFM</p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 6: QUANDO LIGAR PRO MÉDICO ── */}
      <section className="print-section space-y-4">
        <h2>QUANDO LIGAR PRO MÉDICO</h2>
        <div className="card space-y-3">
          <p>Procure o seu médico se notar qualquer uma dessas situações:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Efeitos colaterais que não passam</strong> depois de
              alguns dias
            </li>
            <li>
              <strong>Aumento das crises</strong> ou piora dos sintomas
            </li>
            <li>
              <strong>Reação alérgica</strong> (vermelhidão, coceira, inchaço)
            </li>
            <li>
              <strong>Dúvidas sobre a dosagem</strong> — melhor perguntar do que
              adivinhar
            </li>
          </ul>
          <p className="mt-2">
            Na dúvida, ligue. Nenhuma pergunta é boba quando se trata da sua
            saúde.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Orientações gerais de farmacovigilância — ANVISA
        </p>
      </section>

      <div className="section-divider" />

      {/* ── SEÇÃO 7: DIÁRIO DO TRATAMENTO ── */}
      <section className="print-section space-y-4">
        <h2>DIÁRIO DO TRATAMENTO</h2>
        <div className="card space-y-3">
          <p>
            Anotar como você se sente a cada dia ajuda muito o médico a ajustar
            o tratamento. Use uma tabela simples:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-cream-dark p-3 text-left">
                    Data
                  </th>
                  <th className="border border-cream-dark p-3 text-left">
                    Dose
                  </th>
                  <th className="border border-cream-dark p-3 text-left">
                    Como me senti
                  </th>
                  <th className="border border-cream-dark p-3 text-left">
                    Observações
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-cream-dark p-3">ex.: 13/02</td>
                  <td className="border border-cream-dark p-3">
                    ex.: 5 gotas
                  </td>
                  <td className="border border-cream-dark p-3">
                    ex.: dormi melhor
                  </td>
                  <td className="border border-cream-dark p-3">
                    ex.: leve sonolência de manhã
                  </td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                  <td className="border border-cream-dark p-3">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            Leve o diário nas suas consultas. Ele ajuda o médico a entender o
            que está funcionando e o que precisa mudar.
          </p>
        </div>
        <p className="source-badge">
          Fonte: Recomendação SBEC para acompanhamento terapêutico
        </p>
      </section>
    </PageContainer>
    </>
  );
}
