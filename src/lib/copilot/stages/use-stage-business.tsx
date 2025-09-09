import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { BusinessInfo } from "../types";

/**
 * useStageBusiness is a hook that handles the business information collection stage.
 * It collects:
 * - Business name and industry
 * - Main problem to solve
 * - Competitors and differentiation
 * - Timeline and budget
 */
export function useStageBusiness() {
  const { setBusinessInfo, stage, setStage } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: Business Discovery
You are collecting basic business information to understand the client's context and needs.

QUESTIONS TO ASK (in order):
1. "What's your business name and what industry are you in?"
   - AI Context: "I need to understand your business context to recommend the right solutions"
   - Maps to: Industry templates, service matching
   - Triggers: Industry-specific follow-ups

2. "What's the main problem you're trying to solve with this project?"
   - AI Context: "Understanding your core challenge helps me suggest the most effective approach"
   - Maps to: Problem-solution fit, ROI calculation
   - Triggers: Solution recommendations

3. "Who are your main competitors and what makes you different?"
   - AI Context: "This helps me position your solution strategically in the market"
   - Maps to: Competitive analysis, feature requirements
   - Triggers: Differentiation strategies

4. "When do you need this project completed and live?"
   - AI Context: "Your timeline determines our development approach and resource allocation"
   - Maps to: Project phases, resource allocation
   - Triggers: Feasibility assessment

5. "What's your budget range for this project?"
   - AI Context: "This helps me recommend the right scope and technology stack for your budget"
   - Maps to: Service tier, phasing options
   - Triggers: Budget optimization suggestions

GUIDELINES:
- Ask one question at a time with the AI context explanation
- Be conversational and professional
- Don't overwhelm with multiple questions
- Wait for complete answers before moving to next question
- If answers are incomplete, ask follow-up questions
- Use the AI context to explain why each question matters
- Once all 5 questions are answered, move to requirements stage
      `,
      available: stage === "business" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to collect business information
  useCopilotAction(
    {
      name: "collectBusinessInfo",
      description: "Collect comprehensive business information from the client",
      parameters: [
        {
          name: "businessName",
          type: "string",
          description: "The name of the client's business",
          required: true,
        },
        {
          name: "industry",
          type: "string", 
          description: "The industry the business operates in",
          required: true,
        },
        {
          name: "problem",
          type: "string",
          description: "The main problem they're trying to solve",
          required: true,
        },
        {
          name: "competitors",
          type: "string",
          description: "Main competitors mentioned",
          required: true,
        },
        {
          name: "differentiation",
          type: "string",
          description: "What makes them different from competitors",
          required: true,
        },
        {
          name: "timeline",
          type: "string",
          description: "When they need the project completed",
          required: true,
        },
        {
          name: "budget",
          type: "string",
          description: "Their budget range for the project",
          required: true,
        },
      ],
      handler: async ({ businessName, industry, problem, competitors, differentiation, timeline, budget }) => {
        const businessInfo: BusinessInfo = {
          businessName,
          industry,
          problem,
          competitors,
          differentiation,
          timeline,
          budget,
        };

        // Save to global state
        setBusinessInfo(businessInfo);

        // Move to next stage
        setStage("requirements");

        return `Great! I've collected your business information. Now let's dive into your specific requirements and needs.`;
      },
      available: stage === "business" ? "enabled" : "disabled",
    },
    [stage, setBusinessInfo, setStage],
  );
}
