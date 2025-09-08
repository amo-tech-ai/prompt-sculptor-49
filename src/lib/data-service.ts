import { supabase } from './supabase';

// Service types
export interface Service {
  id: string;
  name: string;
  slug: string;
  service_type: string;
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
  created_at: string;
  updated_at: string;
}

export interface CaseStudy {
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
}

export interface Project {
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
}

export interface Client {
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
}

// Data service class
export class DataService {
  // Services
  static async getServices(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('name');
    
    if (error) throw error;
    return data || [];
  }

  static async getServiceBySlug(slug: string): Promise<Service | null> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }
    return data;
  }

  // Case Studies
  static async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_featured', true)
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async getAllCaseStudies(): Promise<CaseStudy[]> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data;
  }

  // Projects
  static async getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async getProjectByCode(code: string): Promise<Project | null> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('code', code)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return data;
  }

  // Clients
  static async getClients(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async createClient(clientData: Partial<Client>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .insert(clientData)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  // Analytics
  static async getServiceMetrics() {
    const { data, error } = await supabase
      .from('service_metrics')
      .select('*')
      .order('month', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async getProjectMetrics(projectId: string) {
    const { data, error } = await supabase
      .from('project_metrics')
      .select('*')
      .eq('project_id', projectId)
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  // Search
  static async searchServices(query: string): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .eq('is_active', true)
      .order('name');
    
    if (error) throw error;
    return data || [];
  }

  static async searchCaseStudies(query: string): Promise<CaseStudy[]> {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .or(`title.ilike.%${query}%,client_name.ilike.%${query}%,industry.ilike.%${query}%`)
      .eq('is_published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }
}

// Hook for React components
export const useDataService = () => {
  return {
    services: {
      getAll: DataService.getServices,
      getBySlug: DataService.getServiceBySlug,
      search: DataService.searchServices,
    },
    caseStudies: {
      getFeatured: DataService.getFeaturedCaseStudies,
      getAll: DataService.getAllCaseStudies,
      getBySlug: DataService.getCaseStudyBySlug,
      search: DataService.searchCaseStudies,
    },
    projects: {
      getAll: DataService.getProjects,
      getByCode: DataService.getProjectByCode,
    },
    clients: {
      getAll: DataService.getClients,
      create: DataService.createClient,
    },
    analytics: {
      getServiceMetrics: DataService.getServiceMetrics,
      getProjectMetrics: DataService.getProjectMetrics,
    },
  };
};

export default DataService;
