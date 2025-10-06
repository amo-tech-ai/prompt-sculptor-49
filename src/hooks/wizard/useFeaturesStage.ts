import { useCallback } from "react";
import { FeaturesData } from "@/types/wizard";

interface UseFeaturesStageProps {
  data: FeaturesData;
  onUpdate: (data: Partial<FeaturesData>) => void;
}

export function useFeaturesStage({ data, onUpdate }: UseFeaturesStageProps) {
  const updateField = useCallback(
    (field: keyof FeaturesData, value: any) => {
      onUpdate({ [field]: value });
    },
    [onUpdate]
  );

  const addMustHave = useCallback(
    (feature: string) => {
      if (feature.trim() && !data.mustHaveFeatures.includes(feature.trim())) {
        onUpdate({ mustHaveFeatures: [...data.mustHaveFeatures, feature.trim()] });
      }
    },
    [data.mustHaveFeatures, onUpdate]
  );

  const removeMustHave = useCallback(
    (index: number) => {
      onUpdate({ mustHaveFeatures: data.mustHaveFeatures.filter((_, i) => i !== index) });
    },
    [data.mustHaveFeatures, onUpdate]
  );

  const addNiceToHave = useCallback(
    (feature: string) => {
      if (feature.trim() && !data.niceToHaveFeatures.includes(feature.trim())) {
        onUpdate({ niceToHaveFeatures: [...data.niceToHaveFeatures, feature.trim()] });
      }
    },
    [data.niceToHaveFeatures, onUpdate]
  );

  const removeNiceToHave = useCallback(
    (index: number) => {
      onUpdate({ niceToHaveFeatures: data.niceToHaveFeatures.filter((_, i) => i !== index) });
    },
    [data.niceToHaveFeatures, onUpdate]
  );

  const addIntegration = useCallback(
    (integration: string) => {
      if (integration.trim() && !data.integrations.includes(integration.trim())) {
        onUpdate({ integrations: [...data.integrations, integration.trim()] });
      }
    },
    [data.integrations, onUpdate]
  );

  const removeIntegration = useCallback(
    (index: number) => {
      onUpdate({ integrations: data.integrations.filter((_, i) => i !== index) });
    },
    [data.integrations, onUpdate]
  );

  const canAdvance = useCallback(() => {
    return data.mustHaveFeatures.length > 0;
  }, [data]);

  return {
    updateField,
    addMustHave,
    removeMustHave,
    addNiceToHave,
    removeNiceToHave,
    addIntegration,
    removeIntegration,
    canAdvance,
  };
}
