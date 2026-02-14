import VerificationBadge from "./VerificationBadge";
import PrintButton from "./PrintButton";
import WhatsAppShareButton from "./WhatsAppShareButton";

interface PageContainerProps {
  title: string;
  verificationDate: string;
  whatsappText?: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  verificationDate,
  whatsappText,
  children,
}: PageContainerProps) {
  return (
    <article className="space-y-6">
      <header className="space-y-4">
        <h1>{title}</h1>
        <VerificationBadge date={verificationDate} />
        <div className="flex flex-wrap gap-3 no-print">
          <PrintButton />
          {whatsappText && <WhatsAppShareButton text={whatsappText} />}
        </div>
      </header>
      <div className="section-divider" />
      {children}
    </article>
  );
}
