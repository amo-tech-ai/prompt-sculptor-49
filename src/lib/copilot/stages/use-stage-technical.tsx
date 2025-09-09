import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { TechnicalInfo } from "../types";

/**
 * useStageTechnical handles the technical requirements collection stage.
 * It collects:
 * - Branding and design status
 * - Data compliance requirements
 * - Platform preferences (web/mobile)
 * - Payment method needs
 * - Real-time functionality requirements
 */
export function useStageTechnical() {
  const { setTechnicalInfo, stage, setStage } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Technical Requirements
You are now gathering technical specifications and implementation details.

QUESTIONS TO ASK (in order):
1. "Do you have existing branding, designs, or style guidelines we should follow?"
2. "What type of data do you collect, and what compliance requirements do you have?"
3. "Do you need mobile apps, or is web-based sufficient for your users?"
4. "How do you currently handle payments and what payment methods do you need?"
5. "What level of real-time functionality do you need (chat, notifications, updates)?"

GUIDELINES:
- Translate technical concepts into business language
- Help them understand the implications of their choices
- Consider their budget and timeline from earlier stages
- Focus on scalability and future growth
- Once technical requirements are clear, move to business intelligence stage
      `,
      available: stage === "technical" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to collect technical information
  useCopilotAction(
    {
      name: "collectTechnicalInfo",
      description: "Collect technical requirements and implementation details",
      parameters: [
        {
          name: "branding",
          type: "string",
          description: "Branding status: 'have_designs', 'need_designs', or 'have_brand'",
          required: true,
        },
        {
          name: "dataCompliance",
          type: "string[]",
          description: "List of data compliance requirements (GDPR, HIPAA, PCI, etc.)",
          required: true,
        },
        {
          name: "platform",
          type: "string",
          description: "Platform preference: 'web', 'mobile', or 'both'",
          required: true,
        },
        {
          name: "paymentMethods",
          type: "string[]",
          description: "Required payment methods and processing needs",
          required: true,
        },
        {
          name: "realTimeNeeds",
          type: "string[]",
          description: "Real-time functionality requirements (chat, notifications, etc.)",
          required: true,
        },
      ],
      handler: async ({ branding, dataCompliance, platform, paymentMethods, realTimeNeeds }) => {
        const technicalInfo: TechnicalInfo = {
          branding: branding as 'have_designs' | 'need_designs' | 'have_brand',
          dataCompliance,
          platform: platform as 'web' | 'mobile' | 'both',
          paymentMethods,
          realTimeNeeds,
        };

        // Save to global state
        setTechnicalInfo(technicalInfo);

        // Move to next stage
        setStage("intelligence");

        return `Perfect! I have all the technical details. Now let's discuss your business goals and success metrics.`;
      },
      available: stage === "technical" ? "enabled" : "disabled",
    },
    [stage, setTechnicalInfo, setStage],
  );
}
