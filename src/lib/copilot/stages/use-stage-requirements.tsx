import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { RequirementsInfo } from "../types";

/**
 * useStageRequirements handles the requirements collection stage.
 * It collects:
 * - Target customers and user personas
 * - Must-have features
 * - Manual processes to automate
 * - Current systems integration needs
 * - Monthly volume/scale requirements
 */
export function useStageRequirements() {
  const { setRequirementsInfo, stage, setStage } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Requirements Discovery
You are now collecting detailed requirements to understand what needs to be built.

QUESTIONS TO ASK (in order):
1. "Describe your ideal customer and how they currently interact with your business."
2. "What are the 3-5 must-have features that would make this project successful?"
3. "What manual processes are eating up most of your team's time right now?"
4. "What systems or tools do you currently use that this needs to work with?"
5. "How many users/customers/transactions do you handle monthly?"

GUIDELINES:
- Build on the business context from previous stage
- Ask follow-up questions to clarify requirements
- Help them think through features they might not have considered
- Focus on automation opportunities
- Understand scale requirements for technical planning
- Once all requirements are clear, move to technical stage
      `,
      available: stage === "requirements" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to collect requirements information
  useCopilotAction(
    {
      name: "collectRequirementsInfo",
      description: "Collect detailed project requirements from the client",
      parameters: [
        {
          name: "targetCustomers",
          type: "string",
          description: "Description of ideal customers and how they interact with the business",
          required: true,
        },
        {
          name: "mustHaveFeatures",
          type: "string[]",
          description: "List of 3-5 must-have features for project success",
          required: true,
        },
        {
          name: "manualProcesses",
          type: "string[]",
          description: "Manual processes that are time-consuming and could be automated",
          required: true,
        },
        {
          name: "currentSystems",
          type: "string[]",
          description: "Current systems and tools that need integration",
          required: true,
        },
        {
          name: "monthlyVolume",
          type: "string",
          description: "Monthly volume of users/customers/transactions",
          required: true,
        },
      ],
      handler: async ({ targetCustomers, mustHaveFeatures, manualProcesses, currentSystems, monthlyVolume }) => {
        const requirementsInfo: RequirementsInfo = {
          targetCustomers,
          mustHaveFeatures,
          manualProcesses,
          currentSystems,
          monthlyVolume,
        };

        // Save to global state
        setRequirementsInfo(requirementsInfo);

        // Move to next stage
        setStage("technical");

        return `Excellent! I have a clear picture of your requirements. Now let's discuss the technical aspects and implementation details.`;
      },
      available: stage === "requirements" ? "enabled" : "disabled",
    },
    [stage, setRequirementsInfo, setStage],
  );
}
