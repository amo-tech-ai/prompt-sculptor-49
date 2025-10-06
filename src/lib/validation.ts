import { WizardStateData, ProjectVisionData, TargetAudienceData, FeaturesData, DesignPreferencesData, TimelineData } from "@/types/wizard";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export const validateProjectVision = (data: ProjectVisionData): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.projectName.trim()) {
    errors.push({ field: "projectName", message: "Project name is required" });
  } else if (data.projectName.trim().length < 3) {
    errors.push({ field: "projectName", message: "Project name must be at least 3 characters" });
  }

  if (!data.projectDescription.trim()) {
    errors.push({ field: "projectDescription", message: "Project description is required" });
  } else if (data.projectDescription.trim().length < 20) {
    errors.push({ field: "projectDescription", message: "Please provide more details (minimum 20 characters)" });
  }

  if (!data.problemStatement.trim()) {
    errors.push({ field: "problemStatement", message: "Problem statement is required" });
  } else if (data.problemStatement.trim().length < 20) {
    errors.push({ field: "problemStatement", message: "Please provide more details (minimum 20 characters)" });
  }

  if (data.goals.length === 0) {
    errors.push({ field: "goals", message: "At least one goal is required" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateTargetAudience = (data: TargetAudienceData): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.primaryAudience.trim()) {
    errors.push({ field: "primaryAudience", message: "Primary audience is required" });
  } else if (data.primaryAudience.trim().length < 5) {
    errors.push({ field: "primaryAudience", message: "Please provide more details about your audience" });
  }

  if (data.painPoints.length === 0) {
    errors.push({ field: "painPoints", message: "At least one pain point is required" });
  }

  if (data.desiredOutcomes.length === 0) {
    errors.push({ field: "desiredOutcomes", message: "At least one desired outcome is required" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateFeatures = (data: FeaturesData): ValidationResult => {
  const errors: ValidationError[] = [];

  if (data.mustHaveFeatures.length === 0) {
    errors.push({ field: "mustHaveFeatures", message: "At least one must-have feature is required" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateDesignPreferences = (data: DesignPreferencesData): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.style) {
    errors.push({ field: "style", message: "Please select a design style" });
  }

  // Validate URLs if provided
  if (data.inspirationUrls.length > 0) {
    data.inspirationUrls.forEach((url, index) => {
      try {
        new URL(url);
      } catch {
        errors.push({ 
          field: `inspirationUrls[${index}]`, 
          message: `Invalid URL format: ${url}` 
        });
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateTimeline = (data: TimelineData): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!data.budget) {
    errors.push({ field: "budget", message: "Please select a budget range" });
  }

  if (!data.priority) {
    errors.push({ field: "priority", message: "Please select a priority" });
  }

  // Validate launch date if provided
  if (data.desiredLaunchDate) {
    const launchDate = new Date(data.desiredLaunchDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (launchDate < today) {
      errors.push({ 
        field: "desiredLaunchDate", 
        message: "Launch date cannot be in the past" 
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const errors: ValidationError[] = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateCompleteWizard = (data: WizardStateData, email: string): ValidationResult => {
  const allErrors: ValidationError[] = [];

  const projectVisionResult = validateProjectVision(data.projectVision);
  const targetAudienceResult = validateTargetAudience(data.targetAudience);
  const featuresResult = validateFeatures(data.features);
  const designResult = validateDesignPreferences(data.designPreferences);
  const timelineResult = validateTimeline(data.timeline);
  const emailResult = validateEmail(email);

  allErrors.push(
    ...projectVisionResult.errors,
    ...targetAudienceResult.errors,
    ...featuresResult.errors,
    ...designResult.errors,
    ...timelineResult.errors,
    ...emailResult.errors
  );

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  };
};
