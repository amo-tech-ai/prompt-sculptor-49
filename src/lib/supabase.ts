import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Database types (will be generated from schema)
export type Database = {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string;
          name: string;
          slug: string;
          logo_url: string | null;
          website: string | null;
          description: string | null;
          settings: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          logo_url?: string | null;
          website?: string | null;
          description?: string | null;
          settings?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          logo_url?: string | null;
          website?: string | null;
          description?: string | null;
          settings?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          organization_id: string | null;
          email: string;
          full_name: string;
          avatar_url: string | null;
          role: 'super_admin' | 'admin' | 'project_manager' | 'developer' | 'designer' | 'sales' | 'client' | 'guest';
          phone: string | null;
          timezone: string;
          preferences: Record<string, any>;
          is_active: boolean;
          last_login_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organization_id?: string | null;
          email: string;
          full_name: string;
          avatar_url?: string | null;
          role?: 'super_admin' | 'admin' | 'project_manager' | 'developer' | 'designer' | 'sales' | 'client' | 'guest';
          phone?: string | null;
          timezone?: string;
          preferences?: Record<string, any>;
          is_active?: boolean;
          last_login_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_id?: string | null;
          email?: string;
          full_name?: string;
          avatar_url?: string | null;
          role?: 'super_admin' | 'admin' | 'project_manager' | 'developer' | 'designer' | 'sales' | 'client' | 'guest';
          phone?: string | null;
          timezone?: string;
          preferences?: Record<string, any>;
          is_active?: boolean;
          last_login_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      clients: {
        Row: {
          id: string;
          organization_id: string | null;
          company_name: string;
          contact_person: string | null;
          email: string;
          phone: string | null;
          address: string | null;
          country: string | null;
          website: string | null;
          industry: string | null;
          company_size: string | null;
          annual_revenue: string | null;
          notes: string | null;
          tags: string[] | null;
          lead_source: string | null;
          assigned_to: string | null;
          metadata: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organization_id?: string | null;
          company_name: string;
          contact_person?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          website?: string | null;
          industry?: string | null;
          company_size?: string | null;
          annual_revenue?: string | null;
          notes?: string | null;
          tags?: string[] | null;
          lead_source?: string | null;
          assigned_to?: string | null;
          metadata?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_id?: string | null;
          company_name?: string;
          contact_person?: string | null;
          email?: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          website?: string | null;
          industry?: string | null;
          company_size?: string | null;
          annual_revenue?: string | null;
          notes?: string | null;
          tags?: string[] | null;
          lead_source?: string | null;
          assigned_to?: string | null;
          metadata?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          name: string;
          slug: string;
          service_type: 'ai_marketplace' | 'conversational_ai' | 'multi_agent_system' | 'event_management' | 'tourism_platform' | 'ecommerce_solution' | 'rag_knowledge_system' | 'workflow_automation' | 'computer_vision' | 'real_time_features' | 'custom_development';
          description: string | null;
          features: string[] | null;
          technologies: string[] | null;
          base_price: number | null;
          price_range_min: number | null;
          price_range_max: number | null;
          timeline_weeks_min: number | null;
          timeline_weeks_max: number | null;
          roi_percentage: number | null;
          is_active: boolean;
          metadata: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          service_type: 'ai_marketplace' | 'conversational_ai' | 'multi_agent_system' | 'event_management' | 'tourism_platform' | 'ecommerce_solution' | 'rag_knowledge_system' | 'workflow_automation' | 'computer_vision' | 'real_time_features' | 'custom_development';
          description?: string | null;
          features?: string[] | null;
          technologies?: string[] | null;
          base_price?: number | null;
          price_range_min?: number | null;
          price_range_max?: number | null;
          timeline_weeks_min?: number | null;
          timeline_weeks_max?: number | null;
          roi_percentage?: number | null;
          is_active?: boolean;
          metadata?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          service_type?: 'ai_marketplace' | 'conversational_ai' | 'multi_agent_system' | 'event_management' | 'tourism_platform' | 'ecommerce_solution' | 'rag_knowledge_system' | 'workflow_automation' | 'computer_vision' | 'real_time_features' | 'custom_development';
          description?: string | null;
          features?: string[] | null;
          technologies?: string[] | null;
          base_price?: number | null;
          price_range_min?: number | null;
          price_range_max?: number | null;
          timeline_weeks_min?: number | null;
          timeline_weeks_max?: number | null;
          roi_percentage?: number | null;
          is_active?: boolean;
          metadata?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          organization_id: string | null;
          client_id: string;
          name: string;
          code: string;
          description: string | null;
          status: 'lead' | 'proposal' | 'negotiation' | 'active' | 'paused' | 'completed' | 'cancelled' | 'maintenance';
          service_ids: string[] | null;
          budget: number | null;
          currency: string;
          start_date: string | null;
          end_date: string | null;
          actual_end_date: string | null;
          project_manager_id: string | null;
          team_member_ids: string[] | null;
          technologies: string[] | null;
          repository_url: string | null;
          staging_url: string | null;
          production_url: string | null;
          documents: any[] | null;
          metrics: Record<string, any>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          organization_id?: string | null;
          client_id: string;
          name: string;
          code?: string;
          description?: string | null;
          status?: 'lead' | 'proposal' | 'negotiation' | 'active' | 'paused' | 'completed' | 'cancelled' | 'maintenance';
          service_ids?: string[] | null;
          budget?: number | null;
          currency?: string;
          start_date?: string | null;
          end_date?: string | null;
          actual_end_date?: string | null;
          project_manager_id?: string | null;
          team_member_ids?: string[] | null;
          technologies?: string[] | null;
          repository_url?: string | null;
          staging_url?: string | null;
          production_url?: string | null;
          documents?: any[] | null;
          metrics?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          organization_id?: string | null;
          client_id?: string;
          name?: string;
          code?: string;
          description?: string | null;
          status?: 'lead' | 'proposal' | 'negotiation' | 'active' | 'paused' | 'completed' | 'cancelled' | 'maintenance';
          service_ids?: string[] | null;
          budget?: number | null;
          currency?: string;
          start_date?: string | null;
          end_date?: string | null;
          actual_end_date?: string | null;
          project_manager_id?: string | null;
          team_member_ids?: string[] | null;
          technologies?: string[] | null;
          repository_url?: string | null;
          staging_url?: string | null;
          production_url?: string | null;
          documents?: any[] | null;
          metrics?: Record<string, any>;
          created_at?: string;
          updated_at?: string;
        };
      };
      case_studies: {
        Row: {
          id: string;
          project_id: string | null;
          slug: string;
          title: string;
          client_name: string | null;
          industry: string | null;
          challenge: string | null;
          solution: string | null;
          results: string | null;
          metrics: Record<string, any>;
          technologies_used: string[] | null;
          testimonial: string | null;
          testimonial_author: string | null;
          testimonial_role: string | null;
          images: any[] | null;
          is_featured: boolean;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          slug: string;
          title: string;
          client_name?: string | null;
          industry?: string | null;
          challenge?: string | null;
          solution?: string | null;
          results?: string | null;
          metrics?: Record<string, any>;
          technologies_used?: string[] | null;
          testimonial?: string | null;
          testimonial_author?: string | null;
          testimonial_role?: string | null;
          images?: any[] | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          slug?: string;
          title?: string;
          client_name?: string | null;
          industry?: string | null;
          challenge?: string | null;
          solution?: string | null;
          results?: string | null;
          metrics?: Record<string, any>;
          technologies_used?: string[] | null;
          testimonial?: string | null;
          testimonial_author?: string | null;
          testimonial_role?: string | null;
          images?: any[] | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      project_overview: {
        Row: {
          id: string;
          organization_id: string | null;
          client_id: string;
          name: string;
          code: string;
          description: string | null;
          status: string;
          service_ids: string[] | null;
          budget: number | null;
          currency: string;
          start_date: string | null;
          end_date: string | null;
          actual_end_date: string | null;
          project_manager_id: string | null;
          team_member_ids: string[] | null;
          technologies: string[] | null;
          repository_url: string | null;
          staging_url: string | null;
          production_url: string | null;
          documents: any[] | null;
          metrics: Record<string, any>;
          created_at: string;
          updated_at: string;
          client_name: string | null;
          project_manager_name: string | null;
          total_tasks: number | null;
          completed_tasks: number | null;
          total_hours_logged: number | null;
          total_invoices: number | null;
          total_paid: number | null;
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: 'super_admin' | 'admin' | 'project_manager' | 'developer' | 'designer' | 'sales' | 'client' | 'guest';
      project_status: 'lead' | 'proposal' | 'negotiation' | 'active' | 'paused' | 'completed' | 'cancelled' | 'maintenance';
      service_type: 'ai_marketplace' | 'conversational_ai' | 'multi_agent_system' | 'event_management' | 'tourism_platform' | 'ecommerce_solution' | 'rag_knowledge_system' | 'workflow_automation' | 'computer_vision' | 'real_time_features' | 'custom_development';
      payment_status: 'pending' | 'partial' | 'paid' | 'overdue' | 'refunded' | 'cancelled';
      task_status: 'backlog' | 'todo' | 'in_progress' | 'review' | 'testing' | 'completed' | 'blocked';
    };
  };
};

// Helper functions for common operations
export const supabaseHelpers = {
  // Get all services
  async getServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('name');
    
    if (error) throw error;
    return data;
  },

  // Get featured case studies
  async getFeaturedCaseStudies() {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_featured', true)
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get project overview
  async getProjectOverview(projectId: string) {
    const { data, error } = await supabase
      .from('project_overview')
      .select('*')
      .eq('id', projectId)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create new client
  async createClient(clientData: Database['public']['Tables']['clients']['Insert']) {
    const { data, error } = await supabase
      .from('clients')
      .insert(clientData)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create new project
  async createProject(projectData: Database['public']['Tables']['projects']['Insert']) {
    const { data, error } = await supabase
      .from('projects')
      .insert(projectData)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

export default supabase;
