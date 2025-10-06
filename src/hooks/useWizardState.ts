import { useState, useEffect, useCallback } from "react";
import { BriefWizardStage, WizardStateData, initialWizardState } from "@/types/wizard";

const STORAGE_KEY = "brief-wizard-state";

export function useWizardState() {
  const [state, setState] = useState<WizardStateData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialWizardState;
  });

  const [completedStages, setCompletedStages] = useState<Set<BriefWizardStage>>(
    new Set()
  );

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const updateStage = useCallback((stage: BriefWizardStage, data: Partial<WizardStateData>) => {
    setState((prev) => ({
      ...prev,
      ...data,
      currentStage: stage,
    }));
  }, []);

  const nextStage = useCallback(() => {
    const stages = Object.values(BriefWizardStage);
    const currentIndex = stages.indexOf(state.currentStage);
    
    if (currentIndex < stages.length - 1) {
      setCompletedStages((prev) => new Set(prev).add(state.currentStage));
      setState((prev) => ({
        ...prev,
        currentStage: stages[currentIndex + 1],
      }));
    }
  }, [state.currentStage]);

  const previousStage = useCallback(() => {
    const stages = Object.values(BriefWizardStage);
    const currentIndex = stages.indexOf(state.currentStage);
    
    if (currentIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentStage: stages[currentIndex - 1],
      }));
    }
  }, [state.currentStage]);

  const canGoBack = useCallback(() => {
    const stages = Object.values(BriefWizardStage);
    return stages.indexOf(state.currentStage) > 0;
  }, [state.currentStage]);

  const reset = useCallback(() => {
    setState(initialWizardState);
    setCompletedStages(new Set());
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    state,
    updateStage,
    nextStage,
    previousStage,
    canGoBack,
    completedStages,
    reset,
  };
}
