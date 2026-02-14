import Link from "next/link";
import WhatsAppShareButton from "@/components/shared/WhatsAppShareButton";
import DoctorTalkCard from "./DoctorTalkCard";
import type { WizardStepData } from "@/lib/types";

interface WizardResultProps {
  step: WizardStepData;
}

export default function WizardResult({ step }: WizardResultProps) {
  return (
    <div className="space-y-6">
      <div className="card space-y-4">
        <h2 className="text-forest">{step.title}</h2>
        {step.content?.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-bark-light leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {step.links && step.links.length > 0 && (
        <div className="space-y-3">
          <h3>Próximos passos</h3>
          <div className="grid gap-3">
            {step.links.map((link, i) => {
              if (link.type === "internal") {
                return (
                  <Link
                    key={i}
                    href={link.url}
                    className="btn-primary no-underline text-center"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  {link.label}
                  <span className="text-xs ml-1" aria-hidden="true">&#x2197;</span>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {step.showDoctorTalkCard && <DoctorTalkCard />}

      <div className="no-print">
        <WhatsAppShareButton
          text={`${step.title} — Veja o guia completo no Flor de Lei`}
        />
      </div>
    </div>
  );
}
