import { useCallback } from "react";
import { TimelineData } from "@/types/wizard";

interface UseTimelineStageProps {
  data: TimelineData;
  onUpdate: (data: Partial<TimelineData>) => void;
}

export function useTimelineStage({ data, onUpdate }: UseTimelineStageProps) {
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
