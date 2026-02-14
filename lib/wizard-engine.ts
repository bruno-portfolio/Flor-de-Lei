import type {
  WizardState,
  WizardTree,
  WizardStepData,
  EstadoBR,
} from "./types";

/**
 * Creates the initial wizard state for a given flow.
 * Looks up the flow by ID and sets the current step to its startStep.
 */
export function getInitialState(
  flowId: string,
  tree: WizardTree
): WizardState {
  const flow = tree.flows[flowId];
  if (!flow) {
    throw new Error(`Flow "${flowId}" not found in wizard tree.`);
  }

  return {
    currentStepId: flow.startStep,
    flow: flowId,
    history: [],
    flags: [],
  };
}

/**
 * Processes a user selecting one of the options in a question step.
 * Pushes the current step onto the history stack, applies any flags
 * set by the option, and navigates to the option's nextStep.
 */
export function selectOption(
  state: WizardState,
  optionIndex: number,
  tree: WizardTree
): WizardState {
  const currentStep = tree.steps[state.currentStepId];
  if (!currentStep) {
    throw new Error(`Step "${state.currentStepId}" not found in wizard tree.`);
  }

  if (currentStep.type !== "question") {
    throw new Error(
      `Cannot select option on step "${state.currentStepId}" of type "${currentStep.type}". Expected "question".`
    );
  }

  if (!currentStep.options || !currentStep.options[optionIndex]) {
    throw new Error(
      `Option index ${optionIndex} is out of range for step "${state.currentStepId}".`
    );
  }

  const option = currentStep.options[optionIndex];
  const newFlags = option.setsFlag
    ? state.flags.includes(option.setsFlag)
      ? state.flags
      : [...state.flags, option.setsFlag]
    : state.flags;

  return {
    ...state,
    currentStepId: option.nextStep,
    history: [...state.history, state.currentStepId],
    flags: newFlags,
  };
}

/**
 * Processes a user selecting a Brazilian state in a state-select step.
 * Pushes the current step onto the history stack, stores the selected state,
 * and navigates to the step's nextStep.
 */
export function selectState(
  state: WizardState,
  stateCode: EstadoBR,
  tree: WizardTree
): WizardState {
  const currentStep = tree.steps[state.currentStepId];
  if (!currentStep) {
    throw new Error(`Step "${state.currentStepId}" not found in wizard tree.`);
  }

  if (currentStep.type !== "state-select") {
    throw new Error(
      `Cannot select state on step "${state.currentStepId}" of type "${currentStep.type}". Expected "state-select".`
    );
  }

  if (!currentStep.nextStep) {
    throw new Error(
      `Step "${state.currentStepId}" of type "state-select" has no nextStep defined.`
    );
  }

  return {
    ...state,
    currentStepId: currentStep.nextStep,
    history: [...state.history, state.currentStepId],
    selectedState: stateCode,
  };
}

/**
 * Navigates back to the previous step by popping from the history stack.
 * If the history is empty, returns the state unchanged.
 */
export function goBack(state: WizardState): WizardState {
  if (state.history.length === 0) {
    return state;
  }

  const newHistory = [...state.history];
  const previousStepId = newHistory.pop()!;

  return {
    ...state,
    currentStepId: previousStepId,
    history: newHistory,
  };
}

/**
 * Returns the WizardStepData for the current step in the given state.
 */
export function getCurrentStep(
  state: WizardState,
  tree: WizardTree
): WizardStepData {
  const step = tree.steps[state.currentStepId];
  if (!step) {
    throw new Error(`Step "${state.currentStepId}" not found in wizard tree.`);
  }

  return step;
}
