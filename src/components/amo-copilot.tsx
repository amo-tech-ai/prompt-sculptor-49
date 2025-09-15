// AMO AI - CopilotKit + Strapi Integration
import { useCopilotStrapiIntegration } from '@/hooks/useStrapi';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotSidebar } from '@copilotkit/react-ui';

interface AMOCopilotProviderProps {
  children: React.ReactNode;
  runtimeUrl?: string;
}

export const AMOCopilotProvider: React.FC<AMOCopilotProviderProps> = ({ 
  children,
  runtimeUrl = 'http://localhost:3001'
}) => {
  const { handleCopilotInteraction } = useCopilotStrapiIntegration();

  return (
    <CopilotKit 
      runtimeUrl={runtimeUrl}
    >
      <div style={{ "--copilot-kit-primary-color": "#2563eb" } as CopilotKitCSSProperties}>
        {children}
      </div>
    </CopilotKit>
  );
};

export const AMOCopilotSidebar: React.FC = () => {
  const { handleCopilotInteraction } = useCopilotStrapiIntegration();

  return (
    <CopilotSidebar
      instructions="You are an AI assistant for AMO AI, a digital agency platform that automates 90% of agency processes. Help users with discovery sessions, project planning, and proposal generation. Always be professional and focus on business outcomes."
      labels={{
        title: "AMO AI Assistant",
        initial: "Hi! I'm your AMO AI assistant. I can help you with client discovery, project planning, and proposal generation. What would you like to work on?",
      }}
      defaultOpen={false}
      onInProgress={(inProgress) => {
        if (!inProgress) {
          // Conversation completed, could trigger additional actions
          console.log('AMO AI conversation completed');
        }
      }}
    />
  );
};

// Action hooks for specific AMO AI workflows
export const useAMOCopilotActions = () => {
  const { createClient, createDiscoverySession, createProposal } = useCopilotStrapiIntegration();

  const actions = [
    {
      name: "createClient",
      description: "Create a new client in the CRM system",
      parameters: [
        {
          name: "companyName",
          type: "string",
          description: "The client's company name",
          required: true,
        },
        {
          name: "contactName", 
          type: "string",
          description: "The primary contact person's name",
          required: true,
        },
        {
          name: "contactEmail",
          type: "string", 
          description: "The primary contact email",
          required: true,
        },
        {
          name: "budget",
          type: "number",
          description: "Estimated project budget",
        },
        {
          name: "industry",
          type: "string",
          description: "The client's industry",
        },
      ],
      handler: async ({ companyName, contactName, contactEmail, budget, industry }) => {
        await createClient.mutateAsync({
          company_name: companyName,
          contact_name: contactName,
          contact_email: contactEmail,
          budget: budget ? parseInt(budget) : undefined,
          industry,
          status: 'lead',
          notes: `Created via AMO AI Assistant on ${new Date().toLocaleDateString()}`,
        });
        
        return `Client "${companyName}" has been successfully created in the CRM system.`;
      },
    },
    
    {
      name: "startDiscoverySession",
      description: "Start a new discovery session for a client",
      parameters: [
        {
          name: "clientId",
          type: "number", 
          description: "The client ID to start discovery for",
          required: true,
        },
      ],
      handler: async ({ clientId }) => {
        const sessionId = `discovery_${Date.now()}`;
        
        await createDiscoverySession.mutateAsync({
          client: clientId,
          session_transcript: { started_at: new Date().toISOString() },
          status: 'in_progress',
          automation_score: 0,
          complexity_score: 5,
          duration_minutes: 0,
        });
        
        return `Discovery session started for client. Session ID: ${sessionId}`;
      },
    },
    
    {
      name: "generateProposal",
      description: "Generate a project proposal based on discovery session",
      parameters: [
        {
          name: "clientId",
          type: "number",
          description: "The client ID",
          required: true,
        },
        {
          name: "projectName",
          type: "string", 
          description: "The proposed project name",
          required: true,
        },
        {
          name: "budget",
          type: "number",
          description: "Total project budget",
          required: true,
        },
        {
          name: "timelineWeeks",
          type: "number",
          description: "Project timeline in weeks",
          required: true,
        },
        {
          name: "scope",
          type: "string",
          description: "Project scope description", 
          required: true,
        },
      ],
      handler: async ({ clientId, projectName, budget, timelineWeeks, scope }) => {
        await createProposal.mutateAsync({
          client: clientId,
          project_name: projectName,
          total_budget: budget,
          timeline_weeks: timelineWeeks,
          scope_description: scope,
          status: 'draft',
          valid_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
          terms_conditions: 'Standard AMO AI terms and conditions apply.',
        });
        
        return `Proposal "${projectName}" has been generated successfully. Budget: $${budget.toLocaleString()}, Timeline: ${timelineWeeks} weeks.`;
      },
    },
  ];

  return { actions };
};
