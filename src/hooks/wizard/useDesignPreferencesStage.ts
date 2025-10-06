import { useCallback } from "react";
import { DesignPreferencesData } from "@/types/wizard";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

interface UseDesignPreferencesStageProps {
  data: DesignPreferencesData;
  onUpdate: (data: Partial<DesignPreferencesData>) => void;
}

export function useDesignPreferencesStage({ data, onUpdate }: UseDesignPreferencesStageProps) {
  // Provide context to AI
  useCopilotReadable({
    description: "Current design preferences data",
    value: data,
  });

  // AI action to suggest design styles
  useCopilotAction({
    name: "suggestDesignStyle",
    description: "Suggest a design style based on the project type",
    parameters: [
      {
        name: "style",
        type: "string",
        description: "Suggested design style",
        required: true,
      },
      {
        name: "reasoning",
        type: "string",
        description: "Why this style is recommended",
        required: false,
      },
    ],
    handler: async ({ style }) => {
      updateField("style", style);
    },
  });

  const updateField = useCallback(
    (field: keyof DesignPreferencesData, value: any) => {
      onUpdate({ [field]: value });
    },
    [onUpdate]
  );

  const addInspirationUrl = useCallback(
    (url: string) => {
      if (url.trim() && !data.inspirationUrls.includes(url.trim())) {
        onUpdate({ inspirationUrls: [...data.inspirationUrls, url.trim()] });
      }
    },
    [data.inspirationUrls, onUpdate]
  );

  const removeInspirationUrl = useCallback(
    (index: number) => {
      onUpdate({ inspirationUrls: data.inspirationUrls.filter((_, i) => i !== index) });
    },
    [data.inspirationUrls, onUpdate]
  );

  const canAdvance = useCallback(() => {
    return data.style !== "";
  }, [data]);

  return {
    updateField,
    addInspirationUrl,
    removeInspirationUrl,
    canAdvance,
  };
}
