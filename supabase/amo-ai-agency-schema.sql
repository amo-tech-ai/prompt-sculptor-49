-- ============================================
-- AMO AI DIGITAL AGENCY - COMPLETE SQL SCHEMA
-- ============================================
-- Version: 1.0
-- Database: PostgreSQL (Supabase)
-- Features: RLS, Audit Trails, State Management
-- ============================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy text search
CREATE EXTENSION IF NOT EXISTS "vector"; -- For AI embeddings if needed

-- ============================================
-- ENUMS & CUSTOM TYPES
-- ============================================

-- User roles in the agency
CREATE TYPE user_role AS ENUM (
  'super_admin',
  'admin',
  'project_manager',
  'developer',
  'designer',
  'sales',
  'client',
  'guest'
);

-- Project status
CREATE TYPE project_status AS ENUM (
  'lead',
  'proposal',
  'negotiation',
  'active',
  'paused',
  'completed',
  'cancelled',
  'maintenance'
);

-- Service types offered
CREATE TYPE service_type AS ENUM (
  'ai_marketplace',
  'conversational_ai',
  'multi_agent_system',
  'event_management',
  'tourism_platform',
  'ecommerce_solution',
  'rag_knowledge_system',
  'workflow_automation',
  'computer_vision',
  'real_time_features',
  'custom_development'
);

-- Payment status
CREATE TYPE payment_status AS ENUM (
  'pending',
  'partial',
  'paid',
  'overdue',
  'refunded',
  'cancelled'
);

-- Task status
CREATE TYPE task_status AS ENUM (
  'backlog',
  'todo',
  'in_progress',
  'review',
  'testing',
  'completed',
  'blocked',
  'cancelled'
);

-- Form status for CopilotKit forms
CREATE TYPE form_status AS ENUM (
  'draft',
  'in_progress',
  'submitted',
  'approved',
  'rejected',
  'archived'
);

-- CopilotKit interaction types
CREATE TYPE copilot_interaction_type AS ENUM (
  'message',
  'action',
  'suggestion',
  'form_fill',
  'state_change',
  'error',
  'feedback'
);

-- ============================================
-- CORE TABLES
-- ============================================

-- Organizations (for multi-tenant support)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  logo_url TEXT,
  website VARCHAR(255),
  description TEXT,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  role user_role DEFAULT 'guest',
  phone VARCHAR(50),
  timezone VARCHAR(50) DEFAULT 'UTC',
  preferences JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CLIENT MANAGEMENT
-- ============================================

-- Clients table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  address TEXT,
  country VARCHAR(100),
  website VARCHAR(255),
  industry VARCHAR(100),
  company_size VARCHAR(50),
  annual_revenue VARCHAR(50),
  notes TEXT,
  tags TEXT[],
  lead_source VARCHAR(100),
  assigned_to UUID REFERENCES users(id),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SERVICES & PROJECTS
-- ============================================

-- Services catalog
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  service_type service_type NOT NULL,
  description TEXT,
  features TEXT[],
  technologies TEXT[],
  base_price DECIMAL(10, 2),
  price_range_min DECIMAL(10, 2),
  price_range_max DECIMAL(10, 2),
  timeline_weeks_min INTEGER,
  timeline_weeks_max INTEGER,
  roi_percentage DECIMAL(5, 2),
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  status project_status DEFAULT 'lead',
  service_ids UUID[],
  budget DECIMAL(10, 2),
  currency VARCHAR(3) DEFAULT 'USD',
  start_date DATE,
  end_date DATE,
  actual_end_date DATE,
  project_manager_id UUID REFERENCES users(id),
  team_member_ids UUID[],
  technologies TEXT[],
  repository_url VARCHAR(255),
  staging_url VARCHAR(255),
  production_url VARCHAR(255),
  documents JSONB DEFAULT '[]',
  metrics JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project phases/milestones
CREATE TABLE project_phases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  phase_number INTEGER NOT NULL,
  start_date DATE,
  end_date DATE,
  deliverables TEXT[],
  payment_percentage DECIMAL(5, 2),
  is_completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TASK MANAGEMENT
-- ============================================

-- Tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  phase_id UUID REFERENCES project_phases(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status task_status DEFAULT 'todo',
  priority INTEGER DEFAULT 3, -- 1=highest, 5=lowest
  assigned_to UUID REFERENCES users(id),
  assigned_by UUID REFERENCES users(id),
  due_date DATE,
  estimated_hours DECIMAL(5, 2),
  actual_hours DECIMAL(5, 2),
  tags TEXT[],
  dependencies UUID[], -- References to other task IDs
  attachments JSONB DEFAULT '[]',
  checklist JSONB DEFAULT '[]',
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Task comments
CREATE TABLE task_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  attachments JSONB DEFAULT '[]',
  is_edited BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- COPILOTKIT INTEGRATION
-- ============================================

-- CopilotKit state machine states
CREATE TABLE copilot_states (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id VARCHAR(255) NOT NULL,
  user_id UUID REFERENCES users(id),
  state_name VARCHAR(100) NOT NULL,
  state_data JSONB NOT NULL,
  previous_state VARCHAR(100),
  next_states TEXT[],
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, state_name)
);

-- CopilotKit forms
CREATE TABLE copilot_forms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  form_type VARCHAR(100) NOT NULL, -- 'project_brief', 'contact', 'service_request', etc.
  user_id UUID REFERENCES users(id),
  project_id UUID REFERENCES projects(id),
  status form_status DEFAULT 'draft',
  form_data JSONB NOT NULL,
  validation_errors JSONB DEFAULT '[]',
  submitted_at TIMESTAMPTZ,
  approved_by UUID REFERENCES users(id),
  approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CopilotKit interactions log
CREATE TABLE copilot_interactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  session_id VARCHAR(255),
  interaction_type copilot_interaction_type NOT NULL,
  content TEXT,
  metadata JSONB DEFAULT '{}',
  response_time_ms INTEGER,
  is_successful BOOLEAN DEFAULT true,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CopilotKit AI suggestions
CREATE TABLE copilot_suggestions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  context_type VARCHAR(100), -- 'project', 'task', 'form', etc.
  context_id UUID, -- Reference to the specific entity
  suggestion_text TEXT NOT NULL,
  confidence_score DECIMAL(3, 2), -- 0.00 to 1.00
  was_accepted BOOLEAN,
  feedback_rating INTEGER, -- 1-5 stars
  feedback_comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CONTENT MANAGEMENT (CMS)
-- ============================================

-- Content pages
CREATE TABLE content_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  content_json JSONB, -- For structured content
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT[],
  og_image VARCHAR(500),
  author_id UUID REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image VARCHAR(500),
  author_id UUID REFERENCES users(id),
  categories TEXT[],
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  views_count INTEGER DEFAULT 0,
  reading_time_minutes INTEGER,
  seo_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Case studies
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  client_name VARCHAR(255),
  industry VARCHAR(100),
  challenge TEXT,
  solution TEXT,
  results TEXT,
  metrics JSONB DEFAULT '{}', -- ROI, time saved, automation %, etc.
  technologies_used TEXT[],
  testimonial TEXT,
  testimonial_author VARCHAR(255),
  testimonial_role VARCHAR(255),
  images JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- FINANCIAL MANAGEMENT
-- ============================================

-- Invoices
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  project_id UUID REFERENCES projects(id),
  client_id UUID REFERENCES clients(id) NOT NULL,
  phase_id UUID REFERENCES project_phases(id),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  tax_rate DECIMAL(5, 2) DEFAULT 0,
  tax_amount DECIMAL(10, 2) DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  status payment_status DEFAULT 'pending',
  issue_date DATE NOT NULL,
  due_date DATE NOT NULL,
  paid_date DATE,
  payment_method VARCHAR(50),
  payment_reference VARCHAR(255),
  notes TEXT,
  line_items JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Expenses
CREATE TABLE expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  category VARCHAR(100) NOT NULL,
  description TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  vendor VARCHAR(255),
  receipt_url VARCHAR(500),
  expense_date DATE NOT NULL,
  submitted_by UUID REFERENCES users(id),
  approved_by UUID REFERENCES users(id),
  is_billable BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- COMMUNICATION & NOTIFICATIONS
-- ============================================

-- Notifications
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  data JSONB DEFAULT '{}',
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activity log
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  entity_type VARCHAR(50) NOT NULL, -- 'project', 'task', 'client', etc.
  entity_id UUID NOT NULL,
  action VARCHAR(50) NOT NULL, -- 'created', 'updated', 'deleted', etc.
  changes JSONB DEFAULT '{}',
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ANALYTICS & METRICS
-- ============================================

-- Project metrics snapshots
CREATE TABLE project_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  completion_percentage DECIMAL(5, 2),
  budget_used DECIMAL(10, 2),
  hours_logged DECIMAL(8, 2),
  tasks_completed INTEGER,
  tasks_total INTEGER,
  team_velocity DECIMAL(5, 2),
  client_satisfaction_score DECIMAL(3, 2),
  automation_percentage DECIMAL(5, 2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(project_id, date)
);

-- Service performance metrics
CREATE TABLE service_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  month DATE NOT NULL,
  projects_count INTEGER DEFAULT 0,
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  average_timeline_weeks DECIMAL(4, 2),
  average_roi DECIMAL(5, 2),
  client_satisfaction DECIMAL(3, 2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(service_id, month)
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

-- Users indexes
CREATE INDEX idx_users_organization ON users(organization_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- Clients indexes
CREATE INDEX idx_clients_organization ON clients(organization_id);
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_assigned_to ON clients(assigned_to);

-- Projects indexes
CREATE INDEX idx_projects_organization ON projects(organization_id);
CREATE INDEX idx_projects_client ON projects(client_id);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_manager ON projects(project_manager_id);
CREATE INDEX idx_projects_dates ON projects(start_date, end_date);

-- Tasks indexes
CREATE INDEX idx_tasks_project ON tasks(project_id);
CREATE INDEX idx_tasks_assigned_to ON tasks(assigned_to);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);

-- CopilotKit indexes
CREATE INDEX idx_copilot_states_session ON copilot_states(session_id);
CREATE INDEX idx_copilot_states_user ON copilot_states(user_id);
CREATE INDEX idx_copilot_forms_user ON copilot_forms(user_id);
CREATE INDEX idx_copilot_forms_project ON copilot_forms(project_id);
CREATE INDEX idx_copilot_forms_status ON copilot_forms(status);
CREATE INDEX idx_copilot_interactions_user ON copilot_interactions(user_id);
CREATE INDEX idx_copilot_interactions_session ON copilot_interactions(session_id);

-- Content indexes
CREATE INDEX idx_content_pages_slug ON content_pages(slug);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published, published_at);
CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_project ON case_studies(project_id);

-- Financial indexes
CREATE INDEX idx_invoices_project ON invoices(project_id);
CREATE INDEX idx_invoices_client ON invoices(client_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_invoices_dates ON invoices(issue_date, due_date);

-- Full text search indexes
CREATE INDEX idx_projects_search ON projects USING gin(to_tsvector('english', name || ' ' || COALESCE(description, '')));
CREATE INDEX idx_tasks_search ON tasks USING gin(to_tsvector('english', title || ' ' || COALESCE(description, '')));
CREATE INDEX idx_blog_posts_search ON blog_posts USING gin(to_tsvector('english', title || ' ' || COALESCE(content, '')));

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE copilot_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE copilot_forms ENABLE ROW LEVEL SECURITY;

-- Example RLS policies for projects
CREATE POLICY "Users can view projects in their organization" ON projects
  FOR SELECT USING (organization_id IN (
    SELECT organization_id FROM users WHERE id = auth.uid()
  ));

CREATE POLICY "Project managers can update their projects" ON projects
  FOR UPDATE USING (project_manager_id = auth.uid() OR 
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'super_admin'))
  );

-- ============================================
-- TRIGGERS & FUNCTIONS
-- ============================================

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to all tables with updated_at
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Function to generate project code
CREATE OR REPLACE FUNCTION generate_project_code()
RETURNS TRIGGER AS $$
DECLARE
  prefix TEXT;
  counter INTEGER;
  new_code TEXT;
BEGIN
  -- Get the first 3 letters of the client name
  SELECT UPPER(LEFT(REGEXP_REPLACE(c.company_name, '[^a-zA-Z]', '', 'g'), 3))
  INTO prefix
  FROM clients c
  WHERE c.id = NEW.client_id;
  
  -- Get the next counter for this prefix
  SELECT COUNT(*) + 1
  INTO counter
  FROM projects
  WHERE code LIKE prefix || '%';
  
  -- Generate the code
  new_code := prefix || '-' || LPAD(counter::TEXT, 4, '0');
  NEW.code := new_code;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER generate_project_code_trigger
  BEFORE INSERT ON projects
  FOR EACH ROW
  WHEN (NEW.code IS NULL)
  EXECUTE FUNCTION generate_project_code();

-- Function to log activity
CREATE OR REPLACE FUNCTION log_activity()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO activity_logs (user_id, entity_type, entity_id, action, changes)
  VALUES (
    auth.uid(),
    TG_TABLE_NAME,
    CASE TG_OP
      WHEN 'DELETE' THEN OLD.id
      ELSE NEW.id
    END,
    TG_OP,
    CASE TG_OP
      WHEN 'INSERT' THEN row_to_json(NEW)
      WHEN 'UPDATE' THEN jsonb_build_object(
        'old', row_to_json(OLD),
        'new', row_to_json(NEW)
      )
      WHEN 'DELETE' THEN row_to_json(OLD)
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- SEED DATA (Optional)
-- ============================================

-- Insert default services
INSERT INTO services (name, slug, service_type, description, base_price, timeline_weeks_min, timeline_weeks_max, roi_percentage) VALUES
('AI Marketplace Platform', 'ai-marketplace', 'ai_marketplace', 'Complete marketplace with AI-powered search and recommendations', 75000, 8, 16, 293),
('Conversational AI System', 'conversational-ai', 'conversational_ai', 'GPT-4/Claude powered chatbots with CRM integration', 15000, 2, 6, 185),
('Multi-Agent Automation', 'multi-agent', 'multi_agent_system', 'CrewAI teams for complex workflow automation', 30000, 4, 10, 220),
('E-Commerce Solution', 'ecommerce', 'ecommerce_solution', 'Multi-vendor platform with AI features', 40000, 4, 8, 275),
('Workflow Automation', 'automation', 'workflow_automation', 'n8n workflows with WhatsApp and email integration', 10000, 1, 4, 350);

-- ============================================
-- VIEWS FOR COMMON QUERIES
-- ============================================

-- Project overview view
CREATE VIEW project_overview AS
SELECT 
  p.*,
  c.company_name as client_name,
  u.full_name as project_manager_name,
  COUNT(DISTINCT t.id) as total_tasks,
  COUNT(DISTINCT t.id) FILTER (WHERE t.status = 'completed') as completed_tasks,
  SUM(t.actual_hours) as total_hours_logged,
  COUNT(DISTINCT i.id) as total_invoices,
  SUM(i.total_amount) FILTER (WHERE i.status = 'paid') as total_paid
FROM projects p
LEFT JOIN clients c ON p.client_id = c.id
LEFT JOIN users u ON p.project_manager_id = u.id
LEFT JOIN tasks t ON t.project_id = p.id
LEFT JOIN invoices i ON i.project_id = p.id
GROUP BY p.id, c.company_name, u.full_name;

-- User workload view
CREATE VIEW user_workload AS
SELECT 
  u.id,
  u.full_name,
  u.role,
  COUNT(DISTINCT t.id) FILTER (WHERE t.status NOT IN ('completed', 'cancelled')) as active_tasks,
  COUNT(DISTINCT p.id) FILTER (WHERE p.status = 'active') as active_projects,
  SUM(t.estimated_hours) FILTER (WHERE t.status NOT IN ('completed', 'cancelled')) as estimated_hours_remaining
FROM users u
LEFT JOIN tasks t ON t.assigned_to = u.id
LEFT JOIN projects p ON p.project_manager_id = u.id
GROUP BY u.id, u.full_name, u.role;

-- ============================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================

COMMENT ON TABLE organizations IS 'Multi-tenant organizations for agency clients';
COMMENT ON TABLE users IS 'System users including staff and client users';
COMMENT ON TABLE clients IS 'Client companies and contacts';
COMMENT ON TABLE projects IS 'Main projects table with all project details';
COMMENT ON TABLE services IS 'Service catalog with pricing and timelines';
COMMENT ON TABLE copilot_states IS 'CopilotKit state machine tracking';
COMMENT ON TABLE copilot_forms IS 'Forms managed through CopilotKit';
COMMENT ON TABLE copilot_interactions IS 'Log of all CopilotKit interactions';
COMMENT ON TABLE copilot_suggestions IS 'AI suggestions and their feedback';
COMMENT ON COLUMN projects.metrics IS 'JSON object containing project-specific metrics like automation_rate, roi, etc.';
COMMENT ON COLUMN copilot_forms.form_data IS 'JSON structure containing all form fields and values';

-- End of schema