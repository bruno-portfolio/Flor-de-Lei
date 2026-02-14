interface WizardProgressProps {
  progress: number; // 0-100
}

export default function WizardProgress({ progress }: WizardProgressProps) {
  return (
    <div className="wizard-progress w-full print:hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div className="w-full bg-cream-dark rounded-full h-2">
        <div
          className="bg-forest h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-bark-light mt-1 text-right">{progress}% concluído</p>
    </div>
  );
}
