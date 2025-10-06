import { TimelineData } from "@/types/wizard";
import { useTimelineStage } from "@/hooks/wizard/useTimelineStage";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { BreezeInput } from "@/components/wizard/BreezeInput";
import { SelectionCard } from "@/components/wizard/SelectionCard";
import { Calendar } from "lucide-react";

interface TimelineStageProps {
  data: TimelineData;
  onUpdate: (data: Partial<TimelineData>) => void;
}

const budgetOptions = [
  { value: "starter", label: "Starter", description: "$5K - $15K" },
  { value: "professional", label: "Professional", description: "$15K - $50K" },
  { value: "enterprise", label: "Enterprise", description: "$50K+" },
];

const priorityOptions = [
  { value: "speed", label: "Speed", description: "Launch as soon as possible" },
  { value: "quality", label: "Quality", description: "Take time to get it right" },
  { value: "budget", label: "Budget", description: "Keep costs under control" },
];

export function TimelineStage({ data, onUpdate }: TimelineStageProps) {
  const { updateField } = useTimelineStage({ data, onUpdate });

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-orange/10 mb-4">
          <Calendar className="w-8 h-8 text-breeze-orange" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Timeline & Budget
        </h2>
        <p className="text-breeze-text-muted">
          Help us understand your project constraints
        </p>
      </div>

      <BreezeCard>
        <div className="space-y-6">
          <BreezeInput
            label="Desired Launch Date (Optional)"
            type="date"
            value={data.desiredLaunchDate || ""}
            onChange={(e) => updateField("desiredLaunchDate", e.target.value)}
            helperText="When would you like to launch?"
          />
        </div>
      </BreezeCard>

      <div>
        <label className="text-sm font-medium text-breeze-text block mb-3">
          Budget Range <span className="text-breeze-orange">*</span>
        </label>
        <p className="text-sm text-breeze-text-muted mb-4">
          Select your estimated budget for this project
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {budgetOptions.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.label}
              description={option.description}
              selected={data.budget === option.value}
              onClick={() => updateField("budget", option.value)}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-breeze-text block mb-3">
          Top Priority <span className="text-breeze-orange">*</span>
        </label>
        <p className="text-sm text-breeze-text-muted mb-4">
          What matters most for this project?
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {priorityOptions.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.label}
              description={option.description}
              selected={data.priority === option.value}
              onClick={() => updateField("priority", option.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
