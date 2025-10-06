import { useCallback } from "react";
import { ProjectVisionData } from "@/types/wizard";

interface UseProjectVisionStageProps {
  data: ProjectVisionData;
  onUpdate: (data: Partial<ProjectVisionData>) => void;
}

export function useProjectVisionStage({ data, onUpdate }: UseProjectVisionStageProps) {
  const updateField = useCallback(
    (field: keyof ProjectVisionData, value: any) => {
      onUpdate({ [field]: value });
    },
    [onUpdate]
  );

  const addGoal = useCallback(
    (goal: string) => {
      if (goal.trim() && !data.goals.includes(goal.trim())) {
        onUpdate({ goals: [...data.goals, goal.trim()] });
      }
    },
    [data.goals, onUpdate]
  );

  const removeGoal = useCallback(
    (index: number) => {
      onUpdate({ goals: data.goals.filter((_, i) => i !== index) });
    },
    [data.goals, onUpdate]
  );

  const canAdvance = useCallback(() => {
    return (
      data.projectName.trim().length > 0 &&
      data.projectDescription.trim().length > 0 &&
      data.problemStatement.trim().length > 0 &&
      data.goals.length > 0
    );
  }, [data]);

  return {
    updateField,
    addGoal,
    removeGoal,
    canAdvance,
  };
}
