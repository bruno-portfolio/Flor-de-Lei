import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center space-y-6 py-12">
      <h1 className="text-4xl">Página não encontrada</h1>
      <p className="text-bark-light text-xl">
        A página que você procura não existe ou foi movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="btn-primary no-underline">
          Voltar para o início
        </Link>
        <Link href="/guia" className="btn-secondary no-underline">
          Ir para o guia de acesso
        </Link>
      </div>
    </div>
  );
}
