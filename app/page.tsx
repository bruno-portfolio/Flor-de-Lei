import AcolhimentoSection from "@/components/landing/AcolhimentoSection";
import FaqSection from "@/components/landing/FaqSection";
import WizardEntryButtons from "@/components/landing/WizardEntryButtons";
import NumbersSection from "@/components/landing/NumbersSection";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
    },
    {
      "@type": "NonprofitType",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-8">
        <AcolhimentoSection />
        <WizardEntryButtons />
        <div className="section-divider" />
        <FaqSection />
        <div className="section-divider" />
        <NumbersSection />
      </div>
    </>
  );
}
