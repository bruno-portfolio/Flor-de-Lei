export default function MinorAlertBanner() {
  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 space-y-2">
      <p className="font-bold text-amber-800">
        Paciente menor de idade
      </p>
      <ul className="text-amber-700 space-y-1 text-sm list-disc list-inside">
        <li>A receita deve estar no nome da criança/adolescente</li>
        <li>TODOS os documentos exigem CPF do responsável legal</li>
        <li>O responsável legal deve assinar e estar presente em todas as etapas (consulta, ANVISA, Defensoria, associação)</li>
        <li>Leve RG/certidão de nascimento do menor + RG do responsável</li>
      </ul>
      <p className="text-xs text-amber-600 italic">
        Fonte: ECA — Lei 8.069/1990; ANVISA — RDC 660/2022
      </p>
    </div>
  );
}
