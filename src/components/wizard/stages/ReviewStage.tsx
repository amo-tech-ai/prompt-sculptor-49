import { WizardStateData } from "@/types/wizard";
import { BreezeCard } from "@/components/wizard/BreezeCard";
import { BreezeButton } from "@/components/wizard/BreezeButton";
import { CheckCircle, Download, Mail } from "lucide-react";

interface ReviewStageProps {
  data: WizardStateData;
  onEdit: (stage: string) => void;
}

export function ReviewStage({ data }: ReviewStageProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-breeze-success/10 mb-4">
          <CheckCircle className="w-8 h-8 text-breeze-success" />
        </div>
        <h2 className="text-3xl font-bold text-breeze-text mb-2">
          Review Your Brief
        </h2>
        <p className="text-breeze-text-muted">
          Here's a summary of everything you've shared
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <BreezeCard>
            <h3 className="text-xl font-semibold text-breeze-text mb-4">Project Vision</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-breeze-text-muted">Project Name</p>
                <p className="text-breeze-text font-medium">{data.projectVision.projectName}</p>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Description</p>
                <p className="text-breeze-text">{data.projectVision.projectDescription}</p>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Problem Statement</p>
                <p className="text-breeze-text">{data.projectVision.problemStatement}</p>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Goals</p>
                <ul className="list-disc list-inside text-breeze-text">
                  {data.projectVision.goals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </BreezeCard>

          <BreezeCard>
            <h3 className="text-xl font-semibold text-breeze-text mb-4">Target Audience</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-breeze-text-muted">Primary Audience</p>
                <p className="text-breeze-text font-medium">{data.targetAudience.primaryAudience}</p>
              </div>
              {data.targetAudience.audienceAge && (
                <div>
                  <p className="text-sm text-breeze-text-muted">Age Range</p>
                  <p className="text-breeze-text">{data.targetAudience.audienceAge}</p>
                </div>
              )}
              {data.targetAudience.audienceLocation && (
                <div>
                  <p className="text-sm text-breeze-text-muted">Location</p>
                  <p className="text-breeze-text">{data.targetAudience.audienceLocation}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-breeze-text-muted">Pain Points</p>
                <ul className="list-disc list-inside text-breeze-text">
                  {data.targetAudience.painPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Desired Outcomes</p>
                <ul className="list-disc list-inside text-breeze-text">
                  {data.targetAudience.desiredOutcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </BreezeCard>

          <BreezeCard>
            <h3 className="text-xl font-semibold text-breeze-text mb-4">Features</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-breeze-text-muted">Must-Have Features</p>
                <ul className="list-disc list-inside text-breeze-text">
                  {data.features.mustHaveFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {data.features.niceToHaveFeatures.length > 0 && (
                <div>
                  <p className="text-sm text-breeze-text-muted">Nice-to-Have Features</p>
                  <ul className="list-disc list-inside text-breeze-text">
                    {data.features.niceToHaveFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.features.integrations.length > 0 && (
                <div>
                  <p className="text-sm text-breeze-text-muted">Integrations</p>
                  <ul className="list-disc list-inside text-breeze-text">
                    {data.features.integrations.map((integration, i) => (
                      <li key={i}>{integration}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </BreezeCard>

          <BreezeCard>
            <h3 className="text-xl font-semibold text-breeze-text mb-4">Design & Timeline</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-breeze-text-muted">Design Style</p>
                <p className="text-breeze-text font-medium capitalize">{data.designPreferences.style}</p>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Budget</p>
                <p className="text-breeze-text font-medium capitalize">{data.timeline.budget}</p>
              </div>
              <div>
                <p className="text-sm text-breeze-text-muted">Priority</p>
                <p className="text-breeze-text font-medium capitalize">{data.timeline.priority}</p>
              </div>
              {data.timeline.desiredLaunchDate && (
                <div>
                  <p className="text-sm text-breeze-text-muted">Launch Date</p>
                  <p className="text-breeze-text">{data.timeline.desiredLaunchDate}</p>
                </div>
              )}
            </div>
          </BreezeCard>
        </div>

        <div className="space-y-4">
          <BreezeCard padding="md">
            <h3 className="text-lg font-semibold text-breeze-text mb-4">Next Steps</h3>
            <div className="space-y-3">
              <BreezeButton variant="outline" fullWidth>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </BreezeButton>
              <BreezeButton variant="outline" fullWidth>
                <Mail className="w-4 h-4 mr-2" />
                Email Brief
              </BreezeButton>
            </div>
          </BreezeCard>

          <BreezeCard padding="sm">
            <p className="text-sm text-breeze-text-muted">
              Once you submit, we'll review your brief and get back to you within 24 hours with a detailed proposal.
            </p>
          </BreezeCard>
        </div>
      </div>
    </div>
  );
}
