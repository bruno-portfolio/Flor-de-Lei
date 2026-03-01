export default function DoctorTalkCard() {
  return (
    <div className="card bg-cream border-l-4 border-forest space-y-3">
      <h3 className="text-forest">Seu médico não prescreve?</h3>
      <p className="text-bark-light">Você pode:</p>
      <ol className="list-decimal list-inside space-y-2 text-bark-light">
        <li>Levar material informativo sobre evidências científicas para o médico</li>
        <li>Pedir encaminhamento para um especialista</li>
        <li>Consultar por telemedicina com um médico prescritor experiente (a partir de R$60, valores verificados em fevereiro de 2026)</li>
      </ol>
      <p className="source-badge">
        Fonte: ANVISA — RDC 660/2022 (qualquer médico com CRM ativo pode prescrever)
      </p>
    </div>
  );
}
