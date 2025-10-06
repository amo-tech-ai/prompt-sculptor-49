import { useCallback } from "react";
import { DesignPreferencesData } from "@/types/wizard";

interface UseDesignPreferencesStageProps {
  data: DesignPreferencesData;
  onUpdate: (data: Partial<DesignPreferencesData>) => void;
}

export function useDesignPreferencesStage({ data, onUpdate }: UseDesignPreferencesStageProps) {
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
