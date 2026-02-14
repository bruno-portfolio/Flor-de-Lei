const NUMBERS = [
  {
    value: "873 mil",
    label: "brasileiros já tratam com cannabis medicinal",
    source: "Kaya Mind 2025",
  },
  {
    value: "315+",
    label: "associações de pacientes em todo o Brasil",
    source: "Kaya Mind 2025",
  },
  {
    value: "49",
    label: "produtos aprovados pela ANVISA",
    source: "ANVISA 2025",
  },
];

export default function NumbersSection() {
  return (
    <section className="py-8 space-y-4">
      <div className="grid gap-6 sm:grid-cols-3">
        {NUMBERS.map((item, index) => (
          <div key={index} className="text-center space-y-1">
            <p className="text-3xl md:text-4xl font-bold text-forest">
              {item.value}
            </p>
            <p className="text-bark-light">{item.label}</p>
            <p className="source-badge">{item.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
