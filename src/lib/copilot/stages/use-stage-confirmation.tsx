import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";

/**
 * useStageConfirmation handles the final confirmation and project creation stage.
 * It presents the complete brief and analysis for client approval.
 */
export function useStageConfirmation() {
  const { stage, businessInfo, requirementsInfo, technicalInfo, businessIntelligence, decisionInfo, analysis } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Final Confirmation & Project Creation
You are now presenting the complete project brief and analysis for client approval.

PRESENTATION TO INCLUDE:
1. Summary of all collected information
2. AI analysis and recommendations
3. Cost and timeline estimates
4. Technology stack recommendations
5. Matched services from AMO AI portfolio
6. Risk assessment and mitigation
7. Next steps and project kickoff process

GUIDELINES:
- Present everything in a clear, professional manner
- Highlight key benefits and value proposition
- Address any concerns or questions
- Provide clear next steps for moving forward
- Be ready to create the project if approved
      `,
      available: stage === "confirmation" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to present final brief and create project
  useCopilotAction(
    {
      name: "presentFinalBrief",
      description: "Present the complete project brief and analysis for client approval",
      parameters: [
        {
          name: "approved",
          type: "boolean",
          description: "Whether the client approves the brief and wants to proceed",
          required: true,
        },
        {
          name: "additionalNotes",
          type: "string",
          description: "Any additional notes or modifications requested by the client",
          required: false,
        },
      ],
      handler: async ({ approved, additionalNotes }) => {
        if (approved) {
          // Here you would typically:
          // 1. Save the complete brief to the database
          // 2. Create a new project record
          // 3. Generate initial tasks
          // 4. Send confirmation email
          // 5. Schedule kickoff meeting
          
          return `Excellent! I'm creating your project now. You'll receive a confirmation email with next steps and your project dashboard access. Thank you for choosing AMO AI!`;
        } else {
          return `No problem! I can help you refine the brief or address any concerns. What would you like to modify or discuss further?`;
        }
      },
      available: stage === "confirmation" ? "enabled" : "disabled",
    },
    [stage, businessInfo, requirementsInfo, technicalInfo, businessIntelligence, decisionInfo, analysis],
  );
}
