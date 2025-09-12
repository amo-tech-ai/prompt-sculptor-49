-- AMO AI Database Schema with Row Level Security
-- Execute this SQL in Supabase SQL Editor

-- ========================================
-- BRIEFS TABLE FOR AI DISCOVERY DATA
-- ========================================

-- Create briefs table to store AI discovery session data
CREATE TABLE IF NOT EXISTS briefs (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users NOT NULL,
    session_id text NOT NULL,
    stage text NOT NULL CHECK (stage IN (
        'business', 'requirements', 'technical', 
        'intelligence', 'decision', 'analysis', 'confirmation'
    )),
    data jsonb NOT NULL DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    
    -- Ensure one brief per user per session
    UNIQUE(user_id, session_id)
);

-- Add indexes for performance (Critical for RLS)
CREATE INDEX IF NOT EXISTS idx_briefs_user_id ON briefs(user_id);
CREATE INDEX IF NOT EXISTS idx_briefs_session_id ON briefs(session_id);
CREATE INDEX IF NOT EXISTS idx_briefs_stage ON briefs(stage);
CREATE INDEX IF NOT EXISTS idx_briefs_updated_at ON briefs(updated_at);

-- ========================================
-- ROW LEVEL SECURITY POLICIES
-- ========================================

-- Enable RLS on briefs table (REQUIRED for client access)
ALTER TABLE briefs ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only view their own briefs
CREATE POLICY "Users can view own briefs" ON briefs 
    FOR SELECT TO authenticated 
    USING (auth.uid() = user_id);

-- Policy: Users can create their own briefs  
CREATE POLICY "Users can create own briefs" ON briefs 
    FOR INSERT TO authenticated 
    WITH CHECK (auth.uid() = user_id);
    
-- Policy: Users can update their own briefs
CREATE POLICY "Users can update own briefs" ON briefs 
    FOR UPDATE TO authenticated 
    USING (auth.uid() = user_id) 
    WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own briefs
CREATE POLICY "Users can delete own briefs" ON briefs 
    FOR DELETE TO authenticated 
    USING (auth.uid() = user_id);

-- ========================================
-- ORGANIZATIONS TABLE (From existing schema)
-- ========================================

CREATE TABLE IF NOT EXISTS organizations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    slug text UNIQUE NOT NULL,
    logo_url text,
    website text,
    description text,
    settings jsonb DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

-- For now, allow authenticated users to read organizations
-- Later we'll add more specific policies
CREATE POLICY "Authenticated users can view organizations" ON organizations 
    FOR SELECT TO authenticated 
    USING (true);

-- ========================================
-- CLIENTS TABLE (From existing schema)
-- ========================================

CREATE TABLE IF NOT EXISTS clients (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_id uuid REFERENCES organizations(id),
    company_name text NOT NULL,
    contact_person text,
    email text NOT NULL,
    phone text,
    address text,
    country text,
    website text,
    industry text,
    company_size text,
    annual_revenue text,
    notes text,
    tags text[],
    lead_source text,
    assigned_to uuid REFERENCES auth.users(id),
    metadata jsonb DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_clients_organization_id ON clients(organization_id);
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_assigned_to ON clients(assigned_to);

-- Enable RLS
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view clients assigned to them or in their organization
CREATE POLICY "Users can view assigned clients" ON clients 
    FOR SELECT TO authenticated 
    USING (
        assigned_to = auth.uid() OR 
        organization_id IN (
            SELECT org.id FROM organizations org 
            WHERE org.id = clients.organization_id
            -- Add organization membership check here later
        )
    );

-- Policy: Users can create clients
CREATE POLICY "Users can create clients" ON clients 
    FOR INSERT TO authenticated 
    WITH CHECK (assigned_to = auth.uid());

-- Policy: Users can update clients they own
CREATE POLICY "Users can update assigned clients" ON clients 
    FOR UPDATE TO authenticated 
    USING (assigned_to = auth.uid()) 
    WITH CHECK (assigned_to = auth.uid());

-- ========================================
-- PROJECTS TABLE (From existing schema)
-- ========================================

CREATE TABLE IF NOT EXISTS projects (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    organization_id uuid REFERENCES organizations(id),
    client_id uuid REFERENCES clients(id) NOT NULL,
    name text NOT NULL,
    code text UNIQUE NOT NULL,
    description text,
    status text DEFAULT 'lead' CHECK (status IN (
        'lead', 'proposal', 'negotiation', 'active', 
        'paused', 'completed', 'cancelled', 'maintenance'
    )),
    service_ids uuid[],
    budget numeric,
    currency text DEFAULT 'USD',
    start_date date,
    end_date date,
    actual_end_date date,
    project_manager_id uuid REFERENCES auth.users(id),
    team_member_ids uuid[],
    technologies text[],
    repository_url text,
    staging_url text,
    production_url text,
    documents jsonb DEFAULT '[]',
    metrics jsonb DEFAULT '{}',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_project_manager_id ON projects(project_manager_id);
CREATE INDEX IF NOT EXISTS idx_projects_organization_id ON projects(organization_id);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view projects they manage or are team members of
CREATE POLICY "Users can view their projects" ON projects 
    FOR SELECT TO authenticated 
    USING (
        project_manager_id = auth.uid() OR 
        auth.uid() = ANY(team_member_ids)
    );

-- Policy: Project managers can create projects
CREATE POLICY "Users can create projects" ON projects 
    FOR INSERT TO authenticated 
    WITH CHECK (project_manager_id = auth.uid());

-- Policy: Project managers can update their projects
CREATE POLICY "Project managers can update projects" ON projects 
    FOR UPDATE TO authenticated 
    USING (project_manager_id = auth.uid()) 
    WITH CHECK (project_manager_id = auth.uid());

-- ========================================
-- UPDATED_AT TRIGGER FUNCTION
-- ========================================

-- Create or replace the function to update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_briefs_updated_at ON briefs;
CREATE TRIGGER update_briefs_updated_at 
    BEFORE UPDATE ON briefs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_organizations_updated_at ON organizations;
CREATE TRIGGER update_organizations_updated_at 
    BEFORE UPDATE ON organizations 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at 
    BEFORE UPDATE ON clients 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON projects 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- VERIFICATION QUERIES
-- ========================================

-- Check that RLS is enabled on all tables
SELECT 
    schemaname, 
    tablename, 
    rowsecurity as rls_enabled,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public' AND tablename = t.tablename) as policy_count
FROM pg_tables t 
WHERE schemaname = 'public' 
AND tablename IN ('briefs', 'organizations', 'clients', 'projects')
ORDER BY tablename;

-- ✅ SUCCESS: Database schema created with proper RLS security!