import { useCallback } from "react";
import { TimelineData } from "@/types/wizard";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

interface UseTimelineStageProps {
  data: TimelineData;
  onUpdate: (data: Partial<TimelineData>) => void;
}

export function useTimelineStage({ data, onUpdate }: UseTimelineStageProps) {
  // Provide context to AI
  useCopilotReadable({
    description: "Current timeline and budget data",
    value: data,
  });

  // AI action to recommend budget and timeline
  useCopilotAction({
    name: "recommendBudgetTimeline",
    description: "Recommend appropriate budget range and priority based on project scope",
    parameters: [
      {
        name: "budget",
        type: "string",
        description: "Recommended budget range",
        required: true,
      },
      {
        name: "priority",
        type: "string",
        description: "Recommended priority level",
        required: true,
      },
    ],
    handler: async ({ budget, priority }) => {
      updateField("budget", budget);
      updateField("priority", priority);
    },
  });

  const updateField = useCallback(
    (field: keyof TimelineData, value: any) => {
      onUpdate({ [field]: value });
    },
    [onUpdate]
  );

  const canAdvance = useCallback(() => {
    return data.budget !== "" && data.priority !== "";
  }, [data]);

  return {
    updateField,
    canAdvance,
  };
}
