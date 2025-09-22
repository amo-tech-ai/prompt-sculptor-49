// AMO AI - React Hooks for Strapi Integration
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { strapiAPI, type Client, type Project, type DiscoverySession, type AIInteraction, type Proposal } from '@/lib/strapi';
import { toast } from 'sonner';

// Client Hooks
export const useClients = (filters?: any) => {
  return useQuery({
    queryKey: ['clients', filters],
    queryFn: () => strapiAPI.getClients(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useClient = (id: number) => {
  return useQuery({
    queryKey: ['client', id],
    queryFn: () => strapiAPI.getClient(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateClient = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Client>) => strapiAPI.createClient(data),
    onSuccess: (newClient) => {
      // Invalidate and refetch clients
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success(`Client "${newClient.company_name}" created successfully!`);
    },
    onError: (error) => {
      console.error('Failed to create client:', error);
      toast.error('Failed to create client. Please try again.');
    },
  });
};

export const useUpdateClient = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Client> }) => 
      strapiAPI.updateClient(id, data),
    onSuccess: (updatedClient) => {
      // Update specific client in cache
      queryClient.setQueryData(['client', updatedClient.id], updatedClient);
      // Invalidate clients list
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Client updated successfully!');
    },
    onError: (error) => {
      console.error('Failed to update client:', error);
      toast.error('Failed to update client. Please try again.');
    },
  });
};

// Discovery Session Hooks
export const useCreateDiscoverySession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<DiscoverySession>) => strapiAPI.createDiscoverySession(data),
    onSuccess: (session) => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['client', session.client] });
      toast.success('Discovery session created successfully!');
    },
    onError: (error) => {
      console.error('Failed to create discovery session:', error);
      toast.error('Failed to save discovery session. Please try again.');
    },
  });
};

export const useUpdateDiscoverySession = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<DiscoverySession> }) =>
      strapiAPI.updateDiscoverySession(id, data),
    onSuccess: (session) => {
      queryClient.invalidateQueries({ queryKey: ['client', session.client] });
      toast.success('Discovery session updated successfully!');
    },
    onError: (error) => {
      console.error('Failed to update discovery session:', error);
      toast.error('Failed to update discovery session. Please try again.');
    },
  });
};

// Project Hooks
export const useProjects = (filters?: any) => {
  return useQuery({
    queryKey: ['projects', filters],
    queryFn: () => strapiAPI.getProjects(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Project>) => strapiAPI.createProject(data),
    onSuccess: (project) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['client', project.client] });
      toast.success(`Project "${project.name}" created successfully!`);
    },
    onError: (error) => {
      console.error('Failed to create project:', error);
      toast.error('Failed to create project. Please try again.');
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Project> }) =>
      strapiAPI.updateProject(id, data),
    onSuccess: (project) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['client', project.client] });
      toast.success('Project updated successfully!');
    },
    onError: (error) => {
      console.error('Failed to update project:', error);
      toast.error('Failed to update project. Please try again.');
    },
  });
};

// AI Interaction Hooks
export const useLogAIInteraction = () => {
  return useMutation({
    mutationFn: (data: Partial<AIInteraction>) => strapiAPI.logAIInteraction(data),
    onError: (error) => {
      console.error('Failed to log AI interaction:', error);
      // Don't show toast for this as it's background logging
    },
  });
};

export const useAIInteractions = (sessionId?: string, clientId?: number) => {
  return useQuery({
    queryKey: ['ai-interactions', sessionId, clientId],
    queryFn: () => strapiAPI.getAIInteractions(sessionId, clientId),
    enabled: !!(sessionId || clientId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Proposal Hooks
export const useProposals = (clientId?: number) => {
  return useQuery({
    queryKey: ['proposals', clientId],
    queryFn: () => strapiAPI.getProposals(clientId),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCreateProposal = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Proposal>) => strapiAPI.createProposal(data),
    onSuccess: (proposal) => {
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
      queryClient.invalidateQueries({ queryKey: ['proposals', proposal.client] });
      toast.success('Proposal created successfully!');
    },
    onError: (error) => {
      console.error('Failed to create proposal:', error);
      toast.error('Failed to create proposal. Please try again.');
    },
  });
};

export const useUpdateProposalStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: Proposal['status'] }) =>
      strapiAPI.updateProposalStatus(id, status),
    onSuccess: (proposal) => {
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
      queryClient.invalidateQueries({ queryKey: ['proposals', proposal.client] });
      toast.success('Proposal status updated successfully!');
    },
    onError: (error) => {
      console.error('Failed to update proposal status:', error);
      toast.error('Failed to update proposal status. Please try again.');
    },
  });
};

// Utility hook for AI Assistant integration
export const useCopilotStrapiIntegration = () => {
  const logInteraction = useLogAIInteraction();
  const createClient = useCreateClient();
  const createDiscoverySession = useCreateDiscoverySession();
  const createProposal = useCreateProposal();

  const handleCopilotInteraction = async (
    sessionId: string,
    userInput: string,
    aiResponse: string,
    context: any,
    metadata: any = {}
  ) => {
    try {
      await logInteraction.mutateAsync({
        session_id: sessionId,
        user_input: userInput,
        ai_response: aiResponse,
        copilot_context: context,
        metadata,
        interaction_type: 'discovery', // or determine based on context
        created_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Failed to log AI Assistant interaction:', error);
    }
  };

  return {
    handleCopilotInteraction,
    createClient,
    createDiscoverySession,
    createProposal,
  };
};
