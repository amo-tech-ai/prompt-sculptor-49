// AMO AI - Strapi CMS Integration
// Mock implementation since Strapi client setup needs proper configuration
const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const strapiToken = import.meta.env.VITE_STRAPI_API_TOKEN;

// Simple fetch-based Strapi client
const strapi = {
  async find(endpoint: string, options?: any) {
    const url = new URL(`/api/${endpoint}`, strapiUrl);
    if (options?.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        url.searchParams.append(`filters[${key}]`, value as string);
      });
    }
    const response = await fetch(url.toString(), {
      headers: { 'Authorization': `Bearer ${strapiToken}` }
    });
    return response.json();
  },
  async findOne(endpoint: string, id: number) {
    const response = await fetch(`${strapiUrl}/api/${endpoint}/${id}`, {
      headers: { 'Authorization': `Bearer ${strapiToken}` }
    });
    return response.json();
  },
  async create(endpoint: string, payload: any) {
    const response = await fetch(`${strapiUrl}/api/${endpoint}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${strapiToken}` 
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  },
  async update(endpoint: string, id: number, payload: any) {
    const response = await fetch(`${strapiUrl}/api/${endpoint}/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${strapiToken}` 
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  }
};

// Type Definitions for AMO AI Content Types
export interface Client {
  id: number;
  company_name: string;
  contact_email: string;
  contact_name: string;
  phone?: string;
  status: 'lead' | 'prospect' | 'active' | 'completed' | 'inactive';
  budget?: number;
  industry?: string;
  website_url?: string;
  notes?: string;
  discovery_session?: DiscoverySession;
  projects?: Project[];
  created_at: string;
  updated_at: string;
}

export interface DiscoverySession {
  id: number;
  client: number; // Client ID
  session_transcript: any; // JSON object
  ai_recommendations: any; // JSON object
  tech_stack_suggestions: any; // JSON object
  budget_analysis: any; // JSON object
  timeline_estimate: number; // weeks
  automation_score: number; // 0-100
  complexity_score: number; // 1-10
  duration_minutes: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  client: number; // Client ID
  status: 'planning' | 'design' | 'development' | 'testing' | 'deployment' | 'completed' | 'on_hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  budget: number;
  timeline_weeks: number;
  start_date?: string;
  end_date?: string;
  tech_stack: any; // JSON object
  automation_level: number; // 0-100
  team_members: any; // JSON array
  deliverables: any; // JSON array
  created_at: string;
  updated_at: string;
}

export interface AIInteraction {
  id: number;
  session_id: string;
  user_id?: string;
  client?: number; // Client ID
  project?: number; // Project ID
  interaction_type: 'discovery' | 'proposal' | 'project_update' | 'support' | 'general';
  copilot_context: any; // JSON object
  user_input: string;
  ai_response: string;
  metadata: any; // JSON object
  tokens_used?: number;
  cost?: number;
  model_used?: string;
  created_at: string;
}

export interface Proposal {
  id: number;
  client: number; // Client ID
  project_name: string;
  total_budget: number;
  timeline_weeks: number;
  scope_description: string;
  tech_stack_recommended: any; // JSON object
  deliverables: any; // JSON array
  terms_conditions: string;
  status: 'draft' | 'sent' | 'under_review' | 'approved' | 'rejected' | 'expired';
  valid_until?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}

// Strapi API Helper Functions
export const strapiAPI = {
  // Client Operations
  async getClients(filters?: any) {
    const response = await strapi.find('clients', {
      populate: ['discovery_session', 'projects'],
      filters,
      sort: ['created_at:desc']
    });
    return response.data as Client[];
  },

  async getClient(id: number) {
    const response = await strapi.findOne('clients', id);
    return response.data as Client;
  },

  async createClient(data: Partial<Client>) {
    const response = await strapi.create('clients', { data });
    return response.data as Client;
  },

  async updateClient(id: number, data: Partial<Client>) {
    const response = await strapi.update('clients', id, { data });
    return response.data as Client;
  },

  // Discovery Session Operations
  async createDiscoverySession(data: Partial<DiscoverySession>) {
    const response = await strapi.create('discovery-sessions', { data });
    return response.data as DiscoverySession;
  },

  async updateDiscoverySession(id: number, data: Partial<DiscoverySession>) {
    const response = await strapi.update('discovery-sessions', id, { data });
    return response.data as DiscoverySession;
  },

  // Project Operations
  async getProjects(filters?: any) {
    const response = await strapi.find('projects', {
      populate: ['client'],
      filters,
      sort: ['created_at:desc']
    });
    return response.data as Project[];
  },

  async createProject(data: Partial<Project>) {
    const response = await strapi.create('projects', { data });
    return response.data as Project;
  },

  async updateProject(id: number, data: Partial<Project>) {
    const response = await strapi.update('projects', id, { data });
    return response.data as Project;
  },

  // AI Interaction Operations
  async logAIInteraction(data: Partial<AIInteraction>) {
    const response = await strapi.create('ai-interactions', { data });
    return response.data as AIInteraction;
  },

  async getAIInteractions(sessionId?: string, clientId?: number) {
    const filters: any = {};
    if (sessionId) filters.session_id = sessionId;
    if (clientId) filters.client = clientId;

    const response = await strapi.find('ai-interactions', {
      filters,
      sort: ['created_at:asc']
    });
    return response.data as AIInteraction[];
  },

  // Proposal Operations
  async createProposal(data: Partial<Proposal>) {
    const response = await strapi.create('proposals', { data });
    return response.data as Proposal;
  },

  async getProposals(clientId?: number) {
    const filters = clientId ? { client: clientId } : {};
    const response = await strapi.find('proposals', {
      populate: ['client'],
      filters,
      sort: ['created_at:desc']
    });
    return response.data as Proposal[];
  },

  async updateProposalStatus(id: number, status: Proposal['status']) {
    const response = await strapi.update('proposals', id, { data: { status } });
    return response.data as Proposal;
  }
};

export default strapi;
