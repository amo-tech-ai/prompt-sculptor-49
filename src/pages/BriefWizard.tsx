import { useWizardState } from "@/hooks/useWizardState";
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

export default function BriefWizard() {
  const { state, updateStage, nextStage, previousStage, canGoBack, completedStages } = useWizardState();

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
        return true;
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
          <ReviewStage
            data={state}
            onEdit={(stage) => console.log("Edit", stage)}
          />
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
          onSubmit={state.currentStage === BriefWizardStage.Review ? () => console.log("Submit") : undefined}
          canGoBack={canGoBack()}
          canGoNext={canContinue()}
        />
      </div>
    </div>
  );
}
