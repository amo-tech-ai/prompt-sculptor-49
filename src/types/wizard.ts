/**
 * Brief Wizard Types
 * Follows CopilotKit state machine pattern
 */

export enum BriefWizardStage {
  ProjectVision = "project-vision",
  TargetAudience = "target-audience",
  Features = "features",
  DesignPreferences = "design-preferences",
  Timeline = "timeline",
  Review = "review",
}

export interface ProjectVisionData {
  projectName: string;
  projectDescription: string;
  problemStatement: string;
  goals: string[];
}

export interface TargetAudienceData {
  primaryAudience: string;
  audienceAge?: string;
  audienceLocation?: string;
  painPoints: string[];
  desiredOutcomes: string[];
}

export interface FeaturesData {
  mustHaveFeatures: string[];
  niceToHaveFeatures: string[];
  integrations: string[];
  specialRequirements?: string;
}

export interface DesignPreferencesData {
  style: "modern" | "classic" | "minimal" | "bold" | "playful" | "";
  colorPreferences?: string;
  inspirationUrls: string[];
  brandGuidelines?: string;
}

export interface TimelineData {
  desiredLaunchDate?: string;
  budget: "starter" | "professional" | "enterprise" | "";
  priority: "speed" | "quality" | "budget" | "";
}

export interface WizardStateData {
  currentStage: BriefWizardStage;
  projectVision: ProjectVisionData;
  targetAudience: TargetAudienceData;
  features: FeaturesData;
  designPreferences: DesignPreferencesData;
  timeline: TimelineData;
  completedAt?: string;
}

export const initialWizardState: WizardStateData = {
  currentStage: BriefWizardStage.ProjectVision,
  projectVision: {
    projectName: "",
    projectDescription: "",
    problemStatement: "",
    goals: [],
  },
  targetAudience: {
    primaryAudience: "",
    painPoints: [],
    desiredOutcomes: [],
  },
  features: {
    mustHaveFeatures: [],
    niceToHaveFeatures: [],
    integrations: [],
  },
  designPreferences: {
    style: "",
    inspirationUrls: [],
  },
  timeline: {
    budget: "",
    priority: "",
  },
};
