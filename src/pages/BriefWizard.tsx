import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWizardState } from "@/hooks/useWizardState";
import { useSubmitBrief } from "@/hooks/wizard/useSubmitBrief";
import { BriefWizardStage } from "@/types/wizard";
import { WizardProgress } from "@/components/wizard/WizardProgress";
import { NavigationFooter } from "@/components/wizard/NavigationFooter";
import { ProjectVisionStage } from "@/components/wizard/stages/ProjectVisionStage";
import { TargetAudienceStage } from "@/components/wizard/stages/TargetAudienceStage";
import { FeaturesStage } from "@/components/wizard/stages/FeaturesStage";
import { DesignPreferencesStage } from "@/components/wizard/stages/DesignPreferencesStage";
import { TimelineStage } from "@/components/wizard/stages/TimelineStage";
import { ReviewStage } from "@/components/wizard/stages/ReviewStage";
import { useProjectVisionStage } from "@/hooks/wizard/useProjectVisionStage";
import { useTargetAudienceStage } from "@/hooks/wizard/useTargetAudienceStage";
import { useFeaturesStage } from "@/hooks/wizard/useFeaturesStage";
import { useDesignPreferencesStage } from "@/hooks/wizard/useDesignPreferencesStage";
import { useTimelineStage } from "@/hooks/wizard/useTimelineStage";
import { BreezeInput } from "@/components/wizard/BreezeInput";
import { BreezeCard } from "@/components/wizard/BreezeCard";

export default function BriefWizard() {
  const navigate = useNavigate();
  const { state, updateStage, nextStage, previousStage, canGoBack, completedStages, reset } = useWizardState();
  const { submitBrief, isSubmitting } = useSubmitBrief();
  const [userEmail, setUserEmail] = useState("");

  const projectVisionStage = useProjectVisionStage({
    data: state.projectVision,
    onUpdate: (data) => updateStage(state.currentStage, { projectVision: { ...state.projectVision, ...data } }),
  });

  const targetAudienceStage = useTargetAudienceStage({
    data: state.targetAudience,
    onUpdate: (data) => updateStage(state.currentStage, { targetAudience: { ...state.targetAudience, ...data } }),
  });

  const featuresStage = useFeaturesStage({
    data: state.features,
    onUpdate: (data) => updateStage(state.currentStage, { features: { ...state.features, ...data } }),
  });

  const designPreferencesStage = useDesignPreferencesStage({
    data: state.designPreferences,
    onUpdate: (data) => updateStage(state.currentStage, { designPreferences: { ...state.designPreferences, ...data } }),
  });

  const timelineStage = useTimelineStage({
    data: state.timeline,
    onUpdate: (data) => updateStage(state.currentStage, { timeline: { ...state.timeline, ...data } }),
  });

  const handleSubmit = async () => {
    const result = await submitBrief(state, userEmail);
    
    if (result.success) {
      reset();
      navigate(`/brief/success?id=${result.briefId}`);
    }
  };

  const canContinue = () => {
    switch (state.currentStage) {
      case BriefWizardStage.ProjectVision:
        return projectVisionStage.canAdvance();
      case BriefWizardStage.TargetAudience:
        return targetAudienceStage.canAdvance();
      case BriefWizardStage.Features:
        return featuresStage.canAdvance();
      case BriefWizardStage.DesignPreferences:
        return designPreferencesStage.canAdvance();
      case BriefWizardStage.Timeline:
        return timelineStage.canAdvance();
      case BriefWizardStage.Review:
        return userEmail.trim().length > 0 && userEmail.includes("@");
      default:
        return false;
    }
  };

  const renderStage = () => {
    switch (state.currentStage) {
      case BriefWizardStage.ProjectVision:
        return (
          <ProjectVisionStage
            data={state.projectVision}
            onUpdate={(data) => updateStage(state.currentStage, { projectVision: { ...state.projectVision, ...data } })}
          />
        );
      case BriefWizardStage.TargetAudience:
        return (
          <TargetAudienceStage
            data={state.targetAudience}
            onUpdate={(data) => updateStage(state.currentStage, { targetAudience: { ...state.targetAudience, ...data } })}
          />
        );
      case BriefWizardStage.Features:
        return (
          <FeaturesStage
            data={state.features}
            onUpdate={(data) => updateStage(state.currentStage, { features: { ...state.features, ...data } })}
          />
        );
      case BriefWizardStage.DesignPreferences:
        return (
          <DesignPreferencesStage
            data={state.designPreferences}
            onUpdate={(data) => updateStage(state.currentStage, { designPreferences: { ...state.designPreferences, ...data } })}
          />
        );
      case BriefWizardStage.Timeline:
        return (
          <TimelineStage
            data={state.timeline}
            onUpdate={(data) => updateStage(state.currentStage, { timeline: { ...state.timeline, ...data } })}
          />
        );
      case BriefWizardStage.Review:
        return (
          <div className="space-y-6">
            <ReviewStage
              data={state}
              userEmail={userEmail}
              onEdit={(stage: BriefWizardStage) => {
                updateStage(stage, {});
              }}
            />
            <BreezeCard>
              <BreezeInput
                label="Your Email Address"
                type="email"
                placeholder="your@email.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                helperText="We'll use this to send you the proposal and stay in touch"
              />
            </BreezeCard>
          </div>
        );
      default:
        return <div>Stage not implemented yet</div>;
    }
  };

  return (
    <div className="min-h-screen bg-breeze-bg">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <WizardProgress
          currentStage={state.currentStage}
          completedStages={Array.from(completedStages)}
        />

        <div className="mt-8">
          {renderStage()}
        </div>

        <NavigationFooter
          onBack={previousStage}
          onNext={state.currentStage === BriefWizardStage.Review ? undefined : nextStage}
          onSubmit={state.currentStage === BriefWizardStage.Review ? handleSubmit : undefined}
          canGoBack={canGoBack()}
          canGoNext={canContinue()}
          loading={isSubmitting}
        />
      </div>
    </div>
  );
}
