import { TargetAudienceData } from "@/types/wizard";
import { useTargetAudienceStage } from "@/hooks/wizard/useTargetAudienceStage";
import { BreezeInput } from "@/components/wizard/BreezeInput";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { TagInput } from "@/components/wizard/TagInput";
import { Users } from "lucide-react";

interface TargetAudienceStageProps {
  data: TargetAudienceData;
  onUpdate: (data: Partial<TargetAudienceData>) => void;
}

export function TargetAudienceStage({ data, onUpdate }: TargetAudienceStageProps) {
  const {
    updateField,
    addPainPoint,
    removePainPoint,
    addDesiredOutcome,
    removeDesiredOutcome,
  } = useTargetAudienceStage({ data, onUpdate });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-orange/10 mb-4">
          <Users className="w-8 h-8 text-breeze-orange" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Who's Your Audience?
        </h2>
        <p className="text-breeze-text-muted">
          Help us understand who will be using your product
        </p>
      </div>

      <BreezeCard>
        <div className="space-y-6">
          <BreezeInput
            label="Primary Audience"
            placeholder="e.g., Small business owners, Students, Healthcare professionals"
            value={data.primaryAudience}
            onChange={(e) => updateField("primaryAudience", e.target.value)}
            required
            helperText="Who is the main user of your product?"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <BreezeInput
              label="Age Range (Optional)"
              placeholder="e.g., 25-45"
              value={data.audienceAge || ""}
              onChange={(e) => updateField("audienceAge", e.target.value)}
            />

            <BreezeInput
              label="Location (Optional)"
              placeholder="e.g., United States, Global"
              value={data.audienceLocation || ""}
              onChange={(e) => updateField("audienceLocation", e.target.value)}
            />
          </div>

          <TagInput
            label="Pain Points"
            placeholder="What problems does your audience face?"
            tags={data.painPoints}
            onAdd={addPainPoint}
            onRemove={removePainPoint}
            helperText="List the challenges your audience is experiencing"
            required
          />

          <TagInput
            label="Desired Outcomes"
            placeholder="What does your audience want to achieve?"
            tags={data.desiredOutcomes}
            onAdd={addDesiredOutcome}
            onRemove={removeDesiredOutcome}
            helperText="What results are they hoping for?"
            required
          />
        </div>
      </BreezeCard>
    </div>
  );
}
