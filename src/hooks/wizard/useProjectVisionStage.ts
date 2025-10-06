import { useCallback } from "react";
import { ProjectVisionData } from "@/types/wizard";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

interface UseProjectVisionStageProps {
  data: ProjectVisionData;
  onUpdate: (data: Partial<ProjectVisionData>) => void;
}

export function useProjectVisionStage({ data, onUpdate }: UseProjectVisionStageProps) {
  // Provide context to AI
  useCopilotReadable({
    description: "Current project vision data",
    value: data,
  });

  // AI action to suggest project goals
  useCopilotAction({
    name: "suggestProjectGoals",
    description: "Suggest relevant project goals based on the project description",
    parameters: [
      {
        name: "goals",
        type: "string[]",
        description: "Array of suggested project goals",
        required: true,
      },
    ],
    handler: async ({ goals }) => {
      goals.forEach((goal: string) => addGoal(goal));
    },
  });

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
