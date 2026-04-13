import Link from "next/link";

const GUIDES = [
  {
    href: "/seus-direitos",
    title: "Seus direitos",
    description: "CNH, trabalho, planos de saúde, porte e cultivo pessoal",
  },
  {
    href: "/regulamentacao",
    title: "O que mudou em 2026",
    description: "As 5 novas RDCs da ANVISA, CFM, legislação e próximos marcos",
  },
  {
    href: "/veterinario",
    title: "Para animais",
    description: "Cannabis veterinária: quem prescreve, para quê e onde comprar",
  },
];

export default function MoreGuidesSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-center">Mais guias</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="card no-underline hover:shadow-md transition-shadow block"
          >
            <p className="font-semibold text-forest">{guide.title}</p>
            <p className="text-sm text-bark-light mt-1">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
