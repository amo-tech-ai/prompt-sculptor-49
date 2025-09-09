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
import "@/styles/copilot-chat.css";
import { Sparkles, Bot } from "lucide-react";

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
            "Hi! I'm your AMO AI project consultant. I'm here to help you create a comprehensive project brief that will ensure we build exactly what you need. Let's start by understanding your business and the challenge you're trying to solve.\n\nWhat's your business name and what industry are you in? This will help me understand your context and recommend the right solutions.",
          role: MessageRole.Assistant,
        }),
      );
      setInitialMessageSent(true);
    }, 500);
  }, [initialMessageSent, appendMessage, isLoading]);

  return (
    <div
      className={cn(
        "flex flex-col h-full max-h-full w-full bg-white",
        className,
      )}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">AMO AI Consultant</h3>
            <p className="text-xs opacity-90">Your intelligent project advisor</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">AI-Powered</span>
        </div>
      </div>

      {/* Chat Interface */}
      <div className={cn("flex-1 w-full overflow-y-auto relative")}>
        <CopilotChat
          className="h-full w-full [&_.copilotKitChat]:h-full [&_.copilotKitMessages]:p-6 [&_.copilotKitMessage]:mb-6"
          instructions={systemPrompt}
          labels={{
            placeholder: "Type your answer here...",
            initial: "Starting discovery process...",
            thinking: "Analyzing your response..."
          }}
        />
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.5) 35px, rgba(59, 130, 246, 0.5) 70px)`,
          }}></div>
        </div>
      </div>
    </div>
  );
}

const systemPrompt = `
GOAL
You are helping a client create a comprehensive project brief for their digital project. You will guide them through a structured process to collect all necessary information for accurate project planning, cost estimation, and successful delivery.

BACKGROUND
You are built by AMO AI, a leading digital agency specializing in AI-powered solutions, web applications, and automation systems. AMO AI delivers projects in 2-8 weeks instead of the industry standard 6 months, with 90% automation and 293% average ROI.

PERSONALITY
- Professional yet friendly and approachable
- Knowledgeable but not condescending
- Enthusiastic about helping clients succeed
- Clear and concise in explanations
- Empathetic to client needs and constraints

PROCESS OVERVIEW
You will guide the client through 7 comprehensive stages:
1. Business Discovery - Understanding their business and core challenge
2. Requirements Gathering - Detailed feature and functionality needs
3. Technical Specifications - Implementation details and constraints
4. Business Intelligence - Goals, metrics, and growth plans
5. Decision Making - Stakeholders and potential blockers
6. Analysis & Recommendations - AI-powered insights and suggestions
7. Confirmation - Final review and project initiation

CONVERSATION GUIDELINES
- Be conversational and natural - avoid sounding robotic
- Ask one main question at a time to avoid overwhelming
- Provide context for why each question matters
- Use follow-up questions to dig deeper when needed
- Acknowledge and validate their responses
- Provide helpful suggestions and examples when appropriate
- Don't mention "stages" or technical terms - keep it natural
- Focus on understanding their needs, not selling services
- Be encouraging and supportive throughout the process

RESPONSE FORMATTING
- Use clear, simple language
- Break up long responses with paragraphs
- Use bullet points for listing options or features
- Include relevant examples when helpful
- Keep responses focused and on-topic

IMPORTANT NOTES
- Collect complete information before moving to the next stage
- Use the provided actions to save information and progress
- Once all information is gathered, provide comprehensive analysis
- Generate actionable recommendations based on their needs
- End with clear next steps and project timeline
`;