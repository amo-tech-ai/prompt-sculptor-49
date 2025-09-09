import { useBriefState } from "../global-state";
import { useCopilotAction, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { BriefAnalysis } from "../types";

/**
 * useStageAnalysis handles the AI analysis and recommendation generation stage.
 * It analyzes all collected information and provides:
 * - Complexity assessment
 * - Technology stack recommendations
 * - Cost and timeline estimates
 * - Service matching
 * - Risk assessment
 */
export function useStageAnalysis() {
  const { setAnalysis, stage, setStage, businessInfo, requirementsInfo, technicalInfo, businessIntelligence, decisionInfo } = useBriefState();

  // Add stage-specific instructions
  useCopilotAdditionalInstructions(
    {
      instructions: `
CURRENT STAGE: AI Analysis & Recommendations
You are now analyzing all collected information to provide comprehensive recommendations.

ANALYSIS TO PROVIDE:
1. Project complexity assessment (simple/medium/complex)
2. Recommended technology stack
3. Cost estimates (min/max range)
4. Timeline estimates (weeks)
5. Matched services from AMO AI portfolio
6. Risk assessment and mitigation strategies

GUIDELINES:
- Use all collected information to make informed recommendations
- Consider budget, timeline, and technical requirements
- Match to appropriate AMO AI services
- Provide realistic cost and timeline estimates
- Identify potential risks and mitigation strategies
- Once analysis is complete, move to confirmation stage
      `,
      available: stage === "analysis" ? "enabled" : "disabled",
    },
    [stage],
  );

  // Action to perform analysis and generate recommendations
  useCopilotAction(
    {
      name: "performAnalysis",
      description: "Analyze all collected information and generate comprehensive recommendations",
      parameters: [
        {
          name: "complexity",
          type: "string",
          description: "Project complexity: 'simple', 'medium', or 'complex'",
          required: true,
        },
        {
          name: "recommendedStack",
          type: "string[]",
          description: "Recommended technology stack based on requirements",
          required: true,
        },
        {
          name: "estimatedCostMin",
          type: "number",
          description: "Minimum estimated cost in USD",
          required: true,
        },
        {
          name: "estimatedCostMax",
          type: "number",
          description: "Maximum estimated cost in USD",
          required: true,
        },
        {
          name: "estimatedWeeksMin",
          type: "number",
          description: "Minimum estimated timeline in weeks",
          required: true,
        },
        {
          name: "estimatedWeeksMax",
          type: "number",
          description: "Maximum estimated timeline in weeks",
          required: true,
        },
        {
          name: "matchedServices",
          type: "string[]",
          description: "List of AMO AI services that match this project",
          required: true,
        },
        {
          name: "risks",
          type: "string[]",
          description: "List of potential risks and mitigation strategies",
          required: true,
        },
      ],
      handler: async ({ 
        complexity, 
        recommendedStack, 
        estimatedCostMin, 
        estimatedCostMax, 
        estimatedWeeksMin, 
        estimatedWeeksMax, 
        matchedServices, 
        risks 
      }) => {
        const analysis: BriefAnalysis = {
          complexity: complexity as 'simple' | 'medium' | 'complex',
          recommendedStack,
          estimatedCost: { min: estimatedCostMin, max: estimatedCostMax },
          estimatedWeeks: { min: estimatedWeeksMin, max: estimatedWeeksMax },
          matchedServices,
          risks,
        };

        // Save to global state
        setAnalysis(analysis);

        // Move to confirmation stage
        setStage("confirmation");

        return `Analysis complete! I've generated comprehensive recommendations based on all your information. Let me present the final proposal for your review.`;
      },
      available: stage === "analysis" ? "enabled" : "disabled",
    },
    [stage, setAnalysis, setStage, businessInfo, requirementsInfo, technicalInfo, businessIntelligence, decisionInfo],
  );
}
