import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { DecisionInfo } from "../types";

/**
 * useStageDecision handles the final decision-making and stakeholder information stage.
 * It collects:
 * - Potential blockers or concerns
 * - Stakeholder information and decision-making process
 */
export function useStageDecision() {
  const { setDecisionInfo, stage, setStage } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Decision Making & Stakeholder Information
You are now gathering final information about decision-making process and potential blockers.

QUESTIONS TO ASK (in order):
1. "What would prevent you from moving forward with this project?"
2. "Who else needs to be involved in the decision-making process?"

GUIDELINES:
- Address any concerns or objections proactively
- Understand the full decision-making process
- Identify all stakeholders who need to be involved
- This helps with project planning and communication strategy
- Once decision info is collected, move to analysis stage
      `,
      available: stage === "decision" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to collect decision information
  useCopilotAction(
    {
      name: "collectDecisionInfo",
      description: "Collect decision-making process and stakeholder information",
      parameters: [
        {
          name: "blockers",
          type: "string[]",
          description: "List of potential blockers or concerns that could prevent moving forward",
          required: true,
        },
        {
          name: "stakeholders",
          type: "string[]",
          description: "List of people who need to be involved in the decision-making process",
          required: true,
        },
      ],
      handler: async ({ blockers, stakeholders }) => {
        const decisionInfo: DecisionInfo = {
          blockers,
          stakeholders,
        };

        // Save to global state
        setDecisionInfo(decisionInfo);

        // Move to analysis stage
        setStage("analysis");

        return `Perfect! I have all the information needed. Now let me analyze everything and provide you with recommendations, cost estimates, and next steps.`;
      },
      available: stage === "decision" ? "enabled" : "disabled",
    },
    [stage, setDecisionInfo, setStage],
  );
}
