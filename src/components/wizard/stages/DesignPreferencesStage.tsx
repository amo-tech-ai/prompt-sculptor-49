import { DesignPreferencesData } from "@/types/wizard";
import { useDesignPreferencesStage } from "@/hooks/wizard/useDesignPreferencesStage";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { BreezeInput } from "@/components/wizard/BreezeInput";
import { BreezeTextarea } from "@/components/wizard/BreezeTextarea";
import { SelectionCard } from "@/components/wizard/SelectionCard";
import { TagInput } from "@/components/wizard/TagInput";
import { Palette } from "lucide-react";

interface DesignPreferencesStageProps {
  data: DesignPreferencesData;
  onUpdate: (data: Partial<DesignPreferencesData>) => void;
}

const styleOptions = [
  { value: "modern", label: "Modern", description: "Clean, sleek, and contemporary" },
  { value: "classic", label: "Classic", description: "Timeless and traditional" },
  { value: "minimal", label: "Minimal", description: "Simple and uncluttered" },
  { value: "bold", label: "Bold", description: "Vibrant and eye-catching" },
  { value: "playful", label: "Playful", description: "Fun and creative" },
];

export function DesignPreferencesStage({ data, onUpdate }: DesignPreferencesStageProps) {
  const { updateField, addInspirationUrl, removeInspirationUrl } = useDesignPreferencesStage({
    data,
    onUpdate,
  });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-orange/10 mb-4">
          <Palette className="w-8 h-8 text-breeze-orange" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Design Preferences
        </h2>
        <p className="text-breeze-text-muted">
          Help us understand your visual preferences
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-breeze-text block mb-3">
          Design Style <span className="text-breeze-orange">*</span>
        </label>
        <p className="text-sm text-breeze-text-muted mb-4">
          Select the style that best matches your vision
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {styleOptions.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.label}
              description={option.description}
              selected={data.style === option.value}
              onClick={() => updateField("style", option.value)}
            />
          ))}
        </div>
      </div>

      <BreezeCard>
        <div className="space-y-6">
          <BreezeInput
            label="Color Preferences (Optional)"
            placeholder="e.g., Blue and white, Warm earth tones"
            value={data.colorPreferences || ""}
            onChange={(e) => updateField("colorPreferences", e.target.value)}
            helperText="Any specific colors you'd like to use?"
          />

          <TagInput
            label="Inspiration URLs"
            placeholder="Paste a website URL you like"
            tags={data.inspirationUrls}
            onAdd={addInspirationUrl}
            onRemove={removeInspirationUrl}
            helperText="Share examples of designs you admire"
          />

          <BreezeTextarea
            label="Brand Guidelines (Optional)"
            placeholder="Share any existing brand guidelines, fonts, or design rules..."
            value={data.brandGuidelines || ""}
            onChange={(e) => updateField("brandGuidelines", e.target.value)}
            helperText="Logo specs, typography, colors, tone, etc."
          />
        </div>
      </BreezeCard>
    </div>
  );
}
