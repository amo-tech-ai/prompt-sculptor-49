import { useState } from "react";
import { ProjectVisionData } from "@/types/wizard";
import { useProjectVisionStage } from "@/hooks/wizard/useProjectVisionStage";
import { BreezeInput } from "@/components/wizard/BreezeInput";
import { BreezeTextarea } from "@/components/wizard/BreezeTextarea";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { BreezeButton } from "@/components/wizard/BreezeButton";
import { X, Plus, Lightbulb } from "lucide-react";

interface ProjectVisionStageProps {
  data: ProjectVisionData;
  onUpdate: (data: Partial<ProjectVisionData>) => void;
}

export function ProjectVisionStage({ data, onUpdate }: ProjectVisionStageProps) {
  const { updateField, addGoal, removeGoal, canAdvance } = useProjectVisionStage({
    data,
    onUpdate,
  });

  const [goalInput, setGoalInput] = useState("");

  const handleAddGoal = () => {
    if (goalInput.trim()) {
      addGoal(goalInput);
      setGoalInput("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-orange/10 mb-4">
          <Lightbulb className="w-8 h-8 text-breeze-orange" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Let's Start with Your Vision
        </h2>
        <p className="text-breeze-text-muted">
          Tell us about your project. What are you building and why?
        </p>
      </div>

      <BreezeCard>
        <div className="space-y-6">
          <BreezeInput
            label="Project Name"
            placeholder="e.g., My Amazing App"
            value={data.projectName}
            onChange={(e) => updateField("projectName", e.target.value)}
            required
            helperText="Give your project a name"
          />

          <BreezeTextarea
            label="Project Description"
            placeholder="Describe what your project does and who it's for..."
            value={data.projectDescription}
            onChange={(e) => updateField("projectDescription", e.target.value)}
            required
            helperText="A brief overview of your project (2-3 sentences)"
          />

          <BreezeTextarea
            label="Problem Statement"
            placeholder="What problem does your project solve?"
            value={data.problemStatement}
            onChange={(e) => updateField("problemStatement", e.target.value)}
            required
            helperText="What pain point or challenge are you addressing?"
          />

          <div>
            <label className="text-sm font-medium text-breeze-text block mb-2">
              Goals <span className="text-breeze-orange">*</span>
            </label>
            <p className="text-sm text-breeze-text-muted mb-3">
              What do you want to achieve with this project?
            </p>

            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddGoal()}
                placeholder="Enter a goal and press Enter"
                className="flex-1 bg-white border border-breeze-border text-breeze-text rounded-xl px-4 py-3 placeholder:text-breeze-text-muted focus:border-breeze-orange focus:ring-2 focus:ring-breeze-orange/20 outline-none transition-all"
              />
              <BreezeButton
                onClick={handleAddGoal}
                variant="secondary"
                size="md"
              >
                <Plus className="w-4 h-4" />
              </BreezeButton>
            </div>

            {data.goals.length > 0 && (
              <div className="space-y-2">
                {data.goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-breeze-cream/30 rounded-xl px-4 py-3 group"
                  >
                    <span className="text-breeze-text">{goal}</span>
                    <button
                      onClick={() => removeGoal(index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-breeze-text-muted hover:text-breeze-orange"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </BreezeCard>

      {!canAdvance() && (
        <div className="text-center text-sm text-breeze-text-muted">
          Please fill in all required fields to continue
        </div>
      )}
    </div>
  );
}
