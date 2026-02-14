import type { EstadoBR } from "./types";

export const SITE_NAME = "Flor de Lei";
export const SITE_DESCRIPTION =
  "Guia gratuito e de código aberto para acesso à cannabis medicinal no Brasil. Informações verificadas sobre SUS, importação, associações e uso seguro.";
export const SITE_URL = "https://flor-de-lei.vercel.app";
export const GITHUB_URL = "https://github.com/bruno-portfolio/Flor-de-Lei";
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtYZHV0zetR5FNn4ADjWLLV-XNNArvaU9kC5KNczcym0h7RA/viewform";
export const VERIFICATION_DATE = "2026-02-13";

export const ESTADOS: { sigla: EstadoBR; nome: string }[] = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "TO", nome: "Tocantins" },
];

export const PLATAFORMAS_TELEMEDICINA = [
  {
    nome: "Cannabis & Saúde",
    url: "https://cannabisesaude.com.br",
    descricao: "300+ médicos prescritores, consultas a partir de R$200",
  },
  {
    nome: "Cannexa",
    url: "https://cannexa.com.br",
    descricao: "Telemedicina especializada, consultas a partir de R$79",
  },
  {
    nome: "CANNAID",
    url: "https://cannaid.app",
    descricao: "Consultas a partir de R$60, em conformidade com RDC 660/2022",
  },
];
