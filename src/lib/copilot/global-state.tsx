import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useCopilotReadable } from "@copilotkit/react-core";
import { BriefState, BriefStage, BusinessInfo, RequirementsInfo, TechnicalInfo, BusinessIntelligence, DecisionInfo, BriefAnalysis } from "./types";
import { loadBriefState, saveBriefState } from "./database";

interface GlobalBriefState {
  stage: BriefStage;
  setStage: React.Dispatch<React.SetStateAction<BriefStage>>;
  businessInfo: BusinessInfo | null;
  setBusinessInfo: React.Dispatch<React.SetStateAction<BusinessInfo | null>>;
  requirementsInfo: RequirementsInfo | null;
  setRequirementsInfo: React.Dispatch<React.SetStateAction<RequirementsInfo | null>>;
  technicalInfo: TechnicalInfo | null;
  setTechnicalInfo: React.Dispatch<React.SetStateAction<TechnicalInfo | null>>;
  businessIntelligence: BusinessIntelligence | null;
  setBusinessIntelligence: React.Dispatch<React.SetStateAction<BusinessIntelligence | null>>;
  decisionInfo: DecisionInfo | null;
  setDecisionInfo: React.Dispatch<React.SetStateAction<DecisionInfo | null>>;
  analysis: BriefAnalysis | null;
  setAnalysis: React.Dispatch<React.SetStateAction<BriefAnalysis | null>>;
  sessionId: string;
  userId?: string;
}

export const BriefStateContext = createContext<GlobalBriefState | null>(null);

export function useBriefState() {
  const context = useContext(BriefStateContext);
  if (!context) {
    throw new Error("useBriefState must be used within a BriefStateProvider");
  }
  return context;
}

export function BriefStateProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<BriefStage>("business");
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [requirementsInfo, setRequirementsInfo] = useState<RequirementsInfo | null>(null);
  const [technicalInfo, setTechnicalInfo] = useState<TechnicalInfo | null>(null);
  const [businessIntelligence, setBusinessIntelligence] = useState<BusinessIntelligence | null>(null);
  const [decisionInfo, setDecisionInfo] = useState<DecisionInfo | null>(null);
  const [analysis, setAnalysis] = useState<BriefAnalysis | null>(null);
  const [sessionId] = useState(() => {
    // Try to get existing session from localStorage or create new one
    const existingSession = localStorage.getItem('copilot_session_id');
    if (existingSession) {
      return existingSession;
    }
    const newSession = crypto.randomUUID();
    localStorage.setItem('copilot_session_id', newSession);
    return newSession;
  });
  const [userId] = useState<string | undefined>(undefined);

  // Load existing state on mount
  useEffect(() => {
    const loadExistingState = async () => {
      const existingState = await loadBriefState(sessionId);
      if (existingState) {
        console.log('Loading existing state:', existingState);
        if (existingState.stage) setStage(existingState.stage);
        if (existingState.businessInfo) setBusinessInfo(existingState.businessInfo);
        if (existingState.requirementsInfo) setRequirementsInfo(existingState.requirementsInfo);
        if (existingState.technicalInfo) setTechnicalInfo(existingState.technicalInfo);
        if (existingState.businessIntelligence) setBusinessIntelligence(existingState.businessIntelligence);
        if (existingState.decisionInfo) setDecisionInfo(existingState.decisionInfo);
        if (existingState.analysis) setAnalysis(existingState.analysis);
      }
    };
    loadExistingState();
  }, [sessionId]);

  // Save state changes to database
  useEffect(() => {
    const currentState: Partial<BriefState> = {
      stage,
      businessInfo,
      requirementsInfo,
      technicalInfo,
      businessIntelligence,
      decisionInfo,
      analysis,
      sessionId,
      userId
    };

    // Don't save on initial mount when everything is null
    const hasData = businessInfo || requirementsInfo || technicalInfo || 
                   businessIntelligence || decisionInfo || analysis;
    
    if (hasData) {
      saveBriefState(sessionId, stage, currentState).catch(console.error);
    }
  }, [stage, businessInfo, requirementsInfo, technicalInfo, businessIntelligence, decisionInfo, analysis, sessionId, userId]);

  // Make state readable to CopilotKit
  useCopilotReadable({
    description: "Current Brief Collection State",
    value: {
      currentStage: stage,
      businessInfo,
      requirementsInfo,
      technicalInfo,
      businessIntelligence,
      decisionInfo,
      analysis,
      sessionId,
      userId,
    },
  });

  return (
    <BriefStateContext.Provider
      value={{
        stage,
        setStage,
        businessInfo,
        setBusinessInfo,
        requirementsInfo,
        setRequirementsInfo,
        technicalInfo,
        setTechnicalInfo,
        businessIntelligence,
        setBusinessIntelligence,
        decisionInfo,
        setDecisionInfo,
        analysis,
        setAnalysis,
        sessionId,
        userId,
      }}
    >
      {children}
    </BriefStateContext.Provider>
  );
}
