import { BriefWizardStage } from "@/types/wizard";
import { Check } from "lucide-react";

const stages = [
  { id: BriefWizardStage.ProjectVision, label: "Vision", number: 1 },
  { id: BriefWizardStage.TargetAudience, label: "Audience", number: 2 },
  { id: BriefWizardStage.Features, label: "Features", number: 3 },
  { id: BriefWizardStage.DesignPreferences, label: "Design", number: 4 },
  { id: BriefWizardStage.Timeline, label: "Timeline", number: 5 },
  { id: BriefWizardStage.Review, label: "Review", number: 6 },
];

interface WizardProgressProps {
  currentStage: BriefWizardStage;
  completedStages: BriefWizardStage[];
}

export function WizardProgress({ currentStage, completedStages }: WizardProgressProps) {
  const currentIndex = stages.findIndex((s) => s.id === currentStage);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6">
      {/* Mobile: Vertical Progress */}
      <div className="md:hidden space-y-2">
        {stages.map((stage, index) => {
          const isCompleted = completedStages.includes(stage.id);
          const isCurrent = stage.id === currentStage;
          const isPast = index < currentIndex;

          return (
            <div key={stage.id} className="flex items-center gap-3">
              <div
                className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-300 font-medium text-sm
                  ${
                    isCompleted || isPast
                      ? "bg-breeze-success text-white"
                      : isCurrent
                        ? "bg-breeze-orange text-white"
                        : "bg-breeze-border text-breeze-text-muted"
                  }
                `}
              >
                {isCompleted || isPast ? <Check className="w-4 h-4" /> : stage.number}
              </div>
              <span
                className={`
                  text-sm font-medium transition-colors
                  ${isCurrent ? "text-breeze-text" : "text-breeze-text-muted"}
                `}
              >
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Desktop: Horizontal Progress */}
      <div className="hidden md:flex items-center justify-between">
        {stages.map((stage, index) => {
          const isCompleted = completedStages.includes(stage.id);
          const isCurrent = stage.id === currentStage;
          const isPast = index < currentIndex;
          const isLast = index === stages.length - 1;

          return (
            <div key={stage.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    transition-all duration-300 font-semibold
                    ${
                      isCompleted || isPast
                        ? "bg-breeze-success text-white"
                        : isCurrent
                          ? "bg-breeze-orange text-white shadow-lg"
                          : "bg-breeze-border text-breeze-text-muted"
                    }
                  `}
                >
                  {isCompleted || isPast ? <Check className="w-5 h-5" /> : stage.number}
                </div>
                <span
                  className={`
                    mt-2 text-xs font-medium transition-colors
                    ${isCurrent ? "text-breeze-text" : "text-breeze-text-muted"}
                  `}
                >
                  {stage.label}
                </span>
              </div>
              {!isLast && (
                <div className="flex-1 h-0.5 mx-2 mt-[-20px]">
                  <div
                    className={`
                      h-full transition-all duration-300
                      ${isPast || isCompleted ? "bg-breeze-success" : "bg-breeze-border"}
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
