// Types for the CopilotKit brief collection state machine

export interface BusinessInfo {
  businessName: string;
  industry: string;
  problem: string;
  competitors: string;
  differentiation: string;
  timeline: string;
  budget: string;
}

export interface RequirementsInfo {
  targetCustomers: string;
  mustHaveFeatures: string[];
  manualProcesses: string[];
  currentSystems: string[];
  monthlyVolume: string;
}

export interface TechnicalInfo {
  branding: 'have_designs' | 'need_designs' | 'have_brand';
  dataCompliance: string[];
  platform: 'web' | 'mobile' | 'both';
  paymentMethods: string[];
  realTimeNeeds: string[];
}

export interface BusinessIntelligence {
  successMetrics: string[];
  growthProjection: string;
  currentRevenue: string;
  targetRevenue: string;
}

export interface DecisionInfo {
  blockers: string[];
  stakeholders: string[];
}

export interface BriefAnalysis {
  complexity: 'simple' | 'medium' | 'complex';
  recommendedStack: string[];
  estimatedCost: { min: number; max: number };
  estimatedWeeks: { min: number; max: number };
  matchedServices: string[];
  risks: string[];
}

export type BriefStage = 
  | "business"
  | "requirements" 
  | "technical"
  | "intelligence"
  | "decision"
  | "analysis"
  | "confirmation";

export interface BriefState {
  stage: BriefStage;
  businessInfo: BusinessInfo | null;
  requirementsInfo: RequirementsInfo | null;
  technicalInfo: TechnicalInfo | null;
  businessIntelligence: BusinessIntelligence | null;
  decisionInfo: DecisionInfo | null;
  analysis: BriefAnalysis | null;
  sessionId: string;
  userId?: string;
}
