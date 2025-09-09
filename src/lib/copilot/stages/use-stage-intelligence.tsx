import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { BusinessIntelligence } from "../types";

/**
 * useStageIntelligence handles the business intelligence and growth planning stage.
 * It collects:
 * - Success metrics and KPIs
 * - Growth projections
 * - Current and target revenue
 */
export function useStageIntelligence() {
  const { setBusinessIntelligence, stage, setStage } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Business Intelligence & Growth Planning
You are now gathering information about business goals, metrics, and growth plans.

QUESTIONS TO ASK (in order):
1. "What metrics define success for this project in 3 months and 1 year?"
2. "What's your growth projection - where do you see the business in 2 years?"
3. "What's your current monthly revenue and target after implementation?"

GUIDELINES:
- Help them think about measurable success criteria
- Understand their growth trajectory for scalability planning
- Consider ROI and business impact
- This information helps with project prioritization and architecture decisions
- Once business intelligence is collected, move to decision stage
      `,
      available: stage === "intelligence" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to collect business intelligence information
  useCopilotAction(
    {
      name: "collectBusinessIntelligence",
      description: "Collect business intelligence and growth planning information",
      parameters: [
        {
          name: "successMetrics",
          type: "string[]",
          description: "List of metrics that define success for the project",
          required: true,
        },
        {
          name: "growthProjection",
          type: "string",
          description: "Growth projection and where they see the business in 2 years",
          required: true,
        },
        {
          name: "currentRevenue",
          type: "string",
          description: "Current monthly revenue",
          required: true,
        },
        {
          name: "targetRevenue",
          type: "string",
          description: "Target revenue after implementation",
          required: true,
        },
      ],
      handler: async ({ successMetrics, growthProjection, currentRevenue, targetRevenue }) => {
        const businessIntelligence: BusinessIntelligence = {
          successMetrics,
          growthProjection,
          currentRevenue,
          targetRevenue,
        };

        // Save to global state
        setBusinessIntelligence(businessIntelligence);

        // Move to next stage
        setStage("decision");

        return `Excellent! I have a complete picture of your business goals. Now let's discuss any potential blockers and decision-making process.`;
      },
      available: stage === "intelligence" ? "enabled" : "disabled",
    },
    [stage, setBusinessIntelligence, setStage],
  );
}
