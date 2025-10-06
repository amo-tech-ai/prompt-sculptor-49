import { FeaturesData } from "@/types/wizard";
import { useFeaturesStage } from "@/hooks/wizard/useFeaturesStage";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { BreezeTextarea } from "@/components/wizard/BreezeTextarea";
import { TagInput } from "@/components/wizard/TagInput";
import { Layers } from "lucide-react";

interface FeaturesStageProps {
  data: FeaturesData;
  onUpdate: (data: Partial<FeaturesData>) => void;
}

export function FeaturesStage({ data, onUpdate }: FeaturesStageProps) {
  const {
    updateField,
    addMustHave,
    removeMustHave,
    addNiceToHave,
    removeNiceToHave,
    addIntegration,
    removeIntegration,
  } = useFeaturesStage({ data, onUpdate });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-orange/10 mb-4">
          <Layers className="w-8 h-8 text-breeze-orange" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Features & Functionality
        </h2>
        <p className="text-breeze-text-muted">
          What capabilities should your product have?
        </p>
      </div>

      <BreezeCard>
        <div className="space-y-6">
          <TagInput
            label="Must-Have Features"
            placeholder="e.g., User authentication, Dashboard, Payment processing"
            tags={data.mustHaveFeatures}
            onAdd={addMustHave}
            onRemove={removeMustHave}
            helperText="Essential features your product needs to have"
            required
          />

          <TagInput
            label="Nice-to-Have Features"
            placeholder="e.g., Mobile app, Advanced analytics, Social sharing"
            tags={data.niceToHaveFeatures}
            onAdd={addNiceToHave}
            onRemove={removeNiceToHave}
            helperText="Features you'd like but aren't critical for launch"
          />

          <TagInput
            label="Integrations"
            placeholder="e.g., Stripe, Google Analytics, Mailchimp"
            tags={data.integrations}
            onAdd={addIntegration}
            onRemove={removeIntegration}
            helperText="Third-party services you want to connect with"
          />

          <BreezeTextarea
            label="Special Requirements (Optional)"
            placeholder="Any technical constraints, compliance needs, or unique requirements..."
            value={data.specialRequirements || ""}
            onChange={(e) => updateField("specialRequirements", e.target.value)}
            helperText="Security standards, performance needs, accessibility, etc."
          />
        </div>
      </BreezeCard>
    </div>
  );
}
