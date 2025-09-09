"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  useStageBusiness,
  useStageRequirements,
  useStageTechnical,
  useStageIntelligence,
  useStageDecision,
  useStageAnalysis,
  useStageConfirmation,
} from "@/lib/copilot/stages";

import { useCopilotChat } from "@copilotkit/react-core";
import { TextMessage, MessageRole } from "@copilotkit/runtime-client-gql";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export interface BriefCollectionChatProps {
  className?: string;
}

export function BriefCollectionChat({ className }: BriefCollectionChatProps) {
  const { appendMessage, isLoading } = useCopilotChat();
  const [initialMessageSent, setInitialMessageSent] = useState(false);

  // Add all stages of the state machine
  useStageBusiness();
  useStageRequirements();
  useStageTechnical();
  useStageIntelligence();
  useStageDecision();
  useStageAnalysis();
  useStageConfirmation();

  // Render an initial message when the chat is first loaded
  useEffect(() => {
    if (initialMessageSent || isLoading) return;

    setTimeout(() => {
      appendMessage(
        new TextMessage({
          content:
            "Hi! I'm your AMO AI project consultant. I'm here to help you create a comprehensive project brief that will ensure we build exactly what you need. Let's start by understanding your business and the challenge you're trying to solve.",
          role: MessageRole.Assistant,
        }),
      );
      setInitialMessageSent(true);
    }, 500);
  }, [initialMessageSent, appendMessage, isLoading]);

  return (
    <div
      className={cn(
        "flex flex-col h-full max-h-full w-full rounded-xl shadow-sm border border-neutral-200",
        className,
      )}
    >
      <div className={cn("flex-1 w-full rounded-xl overflow-y-auto")}>
        <CopilotChat
          className="h-full w-full"
          instructions={systemPrompt}
        />
      </div>
    </div>
  );
}

const systemPrompt = `
GOAL
You are helping a client create a comprehensive project brief for their digital project. You will guide them through a structured process to collect all necessary information for accurate project planning, cost estimation, and successful delivery.

BACKGROUND
You are built by AMO AI, a leading digital agency specializing in AI-powered solutions, web applications, and automation systems.

PROCESS OVERVIEW
You will guide the client through 6 stages:
1. Business Discovery - Understanding their business and core challenge
2. Requirements Gathering - Detailed feature and functionality needs
3. Technical Specifications - Implementation details and constraints
4. Business Intelligence - Goals, metrics, and growth plans
5. Decision Making - Stakeholders and potential blockers
6. Analysis & Confirmation - AI analysis, recommendations, and project creation

DETAILS
Each stage has specific questions and guidelines. Follow the stage instructions carefully and don't skip ahead. Collect complete information before moving to the next stage. Use the provided actions to save information and progress through stages.

NOTICES
- Be professional, helpful, and conversational
- Ask one question at a time to avoid overwhelming the client
- Provide context for why you're asking each question
- Don't mention "stages" or "state machine" - keep it natural
- Focus on understanding their needs, not selling services
- Once you have complete information, provide comprehensive analysis and recommendations
`;
