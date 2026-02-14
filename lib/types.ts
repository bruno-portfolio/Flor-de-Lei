// === Estados Brasileiros ===

export type EstadoBR =
  | "AC" | "AL" | "AM" | "AP" | "BA" | "CE" | "DF" | "ES"
  | "GO" | "MA" | "MG" | "MS" | "MT" | "PA" | "PB" | "PE"
  | "PI" | "PR" | "RJ" | "RN" | "RO" | "RR" | "RS" | "SC"
  | "SE" | "SP" | "TO";

// === Associações ===

export interface FaixaPreco {
  min: number;
  max: number;
  moeda: string;
  fonte: string;
  dataVerificacao: string; // ISO date: YYYY-MM-DD
}

export interface Associacao {
  id: string;
  nome: string;
  estado: EstadoBR;
  cidade: string;
  telefone: string;
  whatsapp?: string;
  site?: string;
  faixaPreco: FaixaPreco;
  cultivoAutorizado: boolean;
  condicoesAtendidas: string[];
  dataVerificacao: string; // ISO date: YYYY-MM-DD
  ativo: boolean;
  placeholder?: boolean; // true = dado fictício para dev, não publicar
}

export interface AssociacoesData {
  lastUpdated: string;
  associations: Associacao[];
}

// === Wizard ===

export interface WizardOption {
  label: string;
  nextStep: string;
  setsFlag?: string; // e.g., "isMinor"
}

export interface WizardLink {
  label: string;
  url: string;
  type: "internal" | "external" | "whatsapp" | "phone";
}

export interface WizardStepData {
  id: string;
  flow: string;
  type: "question" | "state-select" | "result";
  question?: string;
  options?: WizardOption[];
  nextStep?: string; // for state-select type
  progress: number; // 0-100
  // Result fields
  title?: string;
  content?: string;
  links?: WizardLink[];
  showDoctorTalkCard?: boolean;
  showMinorAlert?: boolean;
}

export interface WizardFlow {
  id: string;
  label: string;
  startStep: string;
}

export interface WizardTree {
  flows: Record<string, WizardFlow>;
  steps: Record<string, WizardStepData>;
}

export interface WizardState {
  currentStepId: string;
  flow: string;
  history: string[]; // stack of step IDs for back navigation
  flags: string[]; // e.g., ["isMinor"]
  selectedState?: EstadoBR;
}

// === FAQ ===

export interface FaqItem {
  question: string;
  answer: string;
  source?: string;
}

// === Page Container ===

export interface PageMeta {
  title: string;
  verificationDate: string;
  showPrint?: boolean;
  showWhatsApp?: boolean;
  whatsappText?: string;
}
