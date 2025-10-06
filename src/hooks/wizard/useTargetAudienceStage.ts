import { useCallback } from "react";
import { TargetAudienceData } from "@/types/wizard";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

interface UseTargetAudienceStageProps {
  data: TargetAudienceData;
  onUpdate: (data: Partial<TargetAudienceData>) => void;
}

export function useTargetAudienceStage({ data, onUpdate }: UseTargetAudienceStageProps) {
  // Provide context to AI
  useCopilotReadable({
    description: "Current target audience data",
    value: data,
  });

  // AI action to suggest pain points
  useCopilotAction({
    name: "suggestPainPoints",
    description: "Suggest relevant pain points for the target audience",
    parameters: [
      {
        name: "painPoints",
        type: "string[]",
        description: "Array of suggested pain points",
        required: true,
      },
    ],
    handler: async ({ painPoints }) => {
      painPoints.forEach((point: string) => addPainPoint(point));
    },
  });

  const updateField = useCallback(
    (field: keyof TargetAudienceData, value: any) => {
      onUpdate({ [field]: value });
    },
    [onUpdate]
  );

  const addPainPoint = useCallback(
    (painPoint: string) => {
      if (painPoint.trim() && !data.painPoints.includes(painPoint.trim())) {
        onUpdate({ painPoints: [...data.painPoints, painPoint.trim()] });
      }
    },
    [data.painPoints, onUpdate]
  );

  const removePainPoint = useCallback(
    (index: number) => {
      onUpdate({ painPoints: data.painPoints.filter((_, i) => i !== index) });
    },
    [data.painPoints, onUpdate]
  );

  const addDesiredOutcome = useCallback(
    (outcome: string) => {
      if (outcome.trim() && !data.desiredOutcomes.includes(outcome.trim())) {
        onUpdate({ desiredOutcomes: [...data.desiredOutcomes, outcome.trim()] });
      }
    },
    [data.desiredOutcomes, onUpdate]
  );

  const removeDesiredOutcome = useCallback(
    (index: number) => {
      onUpdate({ desiredOutcomes: data.desiredOutcomes.filter((_, i) => i !== index) });
    },
    [data.desiredOutcomes, onUpdate]
  );

  const canAdvance = useCallback(() => {
    return (
      data.primaryAudience.trim().length > 0 &&
      data.painPoints.length > 0 &&
      data.desiredOutcomes.length > 0
    );
  }, [data]);

  return {
    updateField,
    addPainPoint,
    removePainPoint,
    addDesiredOutcome,
    removeDesiredOutcome,
    canAdvance,
  };
}
