import AcolhimentoSection from "@/components/landing/AcolhimentoSection";
import FaqSection from "@/components/landing/FaqSection";
import WizardEntryButtons from "@/components/landing/WizardEntryButtons";
import NumbersSection from "@/components/landing/NumbersSection";

export default function Home() {
  return (
    <div className="space-y-8">
      <AcolhimentoSection />
      <WizardEntryButtons />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <NumbersSection />
    </div>
  );
}
