import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type UserRole = 'admin' | 'sales' | 'viewer' | null;

export function useUserRole() {
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setRole(null);
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        setRole(data?.role as UserRole || null);
      } catch (error) {
        console.error('Error fetching user role:', error);
        setRole(null);
      } finally {
        setLoading(false);
      }
    }

    fetchRole();
  }, []);

  return { 
    role, 
    loading, 
    isAdmin: role === 'admin', 
    isSales: role === 'sales',
    isViewer: role === 'viewer'
  };
}
