import { useWizardState } from "@/hooks/useWizardState";
import { BriefWizardStage } from "@/types/wizard";
import { WizardProgress } from "@/components/wizard/WizardProgress";
import { NavigationFooter } from "@/components/wizard/NavigationFooter";
import { ProjectVisionStage } from "@/components/wizard/stages/ProjectVisionStage";
import { useProjectVisionStage } from "@/hooks/wizard/useProjectVisionStage";

export default function BriefWizard() {
  const { state, updateStage, nextStage, previousStage, canGoBack, completedStages } = useWizardState();

  const projectVisionStage = useProjectVisionStage({
    data: state.projectVision,
    onUpdate: (data) => updateStage(state.currentStage, { projectVision: { ...state.projectVision, ...data } }),
  });

  const canContinue = () => {
    switch (state.currentStage) {
      case BriefWizardStage.ProjectVision:
        return projectVisionStage.canAdvance();
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
