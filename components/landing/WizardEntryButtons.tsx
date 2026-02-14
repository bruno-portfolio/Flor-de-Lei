import Link from "next/link";

export default function WizardEntryButtons() {
  return (
    <section className="space-y-4 py-6">
      <h2 className="text-center">Como podemos ajudar?</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/guia?flow=nunca-tratei"
          className="btn-primary text-lg py-6 px-8 no-underline text-center rounded-xl"
        >
          <span className="block">
            <span className="block text-2xl mb-1" aria-hidden="true">
              &#x1F331;
            </span>
            Nunca tratei com cannabis
          </span>
          <span className="block text-sm font-normal text-white/80 mt-1">
            Quero começar
          </span>
        </Link>
        <Link
          href="/guia?flow=quero-pagar-menos"
          className="btn-secondary text-lg py-6 px-8 no-underline text-center rounded-xl"
        >
          <span className="block">
            <span className="block text-2xl mb-1" aria-hidden="true">
              &#x1F4B0;
            </span>
            Já trato com cannabis
          </span>
          <span className="block text-sm font-normal text-bark-light mt-1">
            Quero pagar menos
          </span>
        </Link>
      </div>
    </section>
  );
}
