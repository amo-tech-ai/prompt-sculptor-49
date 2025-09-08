import { useState, useEffect } from 'react';
import { DataService, Service, CaseStudy, Project, Client } from '@/lib/data-service';

// Generic hook for async data fetching
export function useAsyncData<T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFn();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { data, loading, error };
}

// Specific hooks for different data types
export function useServices() {
  return useAsyncData<Service[]>(() => DataService.getServices());
}

export function useService(slug: string) {
  return useAsyncData<Service | null>(
    () => DataService.getServiceBySlug(slug),
    [slug]
  );
}

export function useFeaturedCaseStudies() {
  return useAsyncData<CaseStudy[]>(() => DataService.getFeaturedCaseStudies());
}

export function useCaseStudies() {
  return useAsyncData<CaseStudy[]>(() => DataService.getAllCaseStudies());
}

export function useCaseStudy(slug: string) {
  return useAsyncData<CaseStudy | null>(
    () => DataService.getCaseStudyBySlug(slug),
    [slug]
  );
}

export function useProjects() {
  return useAsyncData<Project[]>(() => DataService.getProjects());
}

export function useProject(code: string) {
  return useAsyncData<Project | null>(
    () => DataService.getProjectByCode(code),
    [code]
  );
}

export function useClients() {
  return useAsyncData<Client[]>(() => DataService.getClients());
}

// Search hooks
export function useServiceSearch(query: string) {
  return useAsyncData<Service[]>(
    () => DataService.searchServices(query),
    [query]
  );
}

export function useCaseStudySearch(query: string) {
  return useAsyncData<CaseStudy[]>(
    () => DataService.searchCaseStudies(query),
    [query]
  );
}

// Analytics hooks
export function useServiceMetrics() {
  return useAsyncData(() => DataService.getServiceMetrics());
}

export function useProjectMetrics(projectId: string) {
  return useAsyncData(
    () => DataService.getProjectMetrics(projectId),
    [projectId]
  );
}

// Mutation hooks
export function useCreateClient() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createClient = async (clientData: Partial<Client>) => {
    try {
      setLoading(true);
      setError(null);
      const result = await DataService.createClient(clientData);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create client';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createClient, loading, error };
}
