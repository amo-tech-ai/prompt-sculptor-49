-- ============================================================================
-- AMO AI CRM - Stage 1: Foundation Database Schema (FIXED ORDERING)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- STEP 1: Create Enum Types
-- ----------------------------------------------------------------------------

CREATE TYPE public.app_role AS ENUM ('admin', 'sales', 'viewer');
CREATE TYPE public.client_status AS ENUM ('prospect', 'active', 'inactive', 'archived');
CREATE TYPE public.deal_stage AS ENUM ('lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost');
CREATE TYPE public.invoice_status AS ENUM ('draft', 'sent', 'paid', 'overdue', 'cancelled');
CREATE TYPE public.activity_type AS ENUM ('call', 'email', 'meeting', 'note', 'task');
CREATE TYPE public.notification_type AS ENUM ('deal_assigned', 'invoice_due', 'activity_reminder', 'system');

-- ----------------------------------------------------------------------------
-- STEP 2: Create update_updated_at function (no dependencies)
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- ----------------------------------------------------------------------------
-- STEP 3: Create Core Tables (before functions that reference them)
-- ----------------------------------------------------------------------------

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, role)
);

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  website TEXT,
  industry TEXT,
  status public.client_status NOT NULL DEFAULT 'prospect',
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  position TEXT,
  is_primary BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (client_id, email)
);

CREATE TABLE public.deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  deal_name TEXT NOT NULL,
  deal_value NUMERIC(12, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  stage public.deal_stage NOT NULL DEFAULT 'lead',
  probability INTEGER DEFAULT 0 CHECK (probability >= 0 AND probability <= 100),
  expected_close_date DATE,
  actual_close_date DATE,
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  description TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES public.deals(id) ON DELETE SET NULL,
  invoice_number TEXT UNIQUE,
  amount NUMERIC(12, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  status public.invoice_status NOT NULL DEFAULT 'draft',
  issue_date DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date DATE NOT NULL,
  paid_date DATE,
  description TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT valid_dates CHECK (due_date >= issue_date),
  CONSTRAINT paid_date_when_paid CHECK (status != 'paid' OR paid_date IS NOT NULL)
);

CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type TEXT NOT NULL CHECK (entity_type IN ('client', 'deal', 'invoice', 'contact')),
  entity_id UUID NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER,
  file_type TEXT,
  storage_path TEXT NOT NULL,
  public_url TEXT,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type TEXT NOT NULL CHECK (entity_type IN ('client', 'deal', 'contact')),
  entity_id UUID NOT NULL,
  activity_type public.activity_type NOT NULL,
  subject TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  notification_type public.notification_type NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  entity_type TEXT CHECK (entity_type IN ('client', 'deal', 'invoice', 'activity')),
  entity_id UUID,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  old_data JSONB,
  new_data JSONB,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.industries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

-- ----------------------------------------------------------------------------
-- STEP 4: Create Role Helper Functions (after user_roles table exists)
-- ----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin');
$$;

CREATE OR REPLACE FUNCTION public.is_sales(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'sales');
$$;

-- ----------------------------------------------------------------------------
-- STEP 5: Create Indexes for Performance
-- ----------------------------------------------------------------------------

CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX idx_clients_assigned_to ON public.clients(assigned_to);
CREATE INDEX idx_clients_status ON public.clients(status);
CREATE INDEX idx_contacts_client_id ON public.contacts(client_id);
CREATE INDEX idx_contacts_email ON public.contacts(LOWER(email));
CREATE INDEX idx_deals_client_id ON public.deals(client_id);
CREATE INDEX idx_deals_assigned_to ON public.deals(assigned_to);
CREATE INDEX idx_deals_stage ON public.deals(stage);
CREATE INDEX idx_invoices_client_id ON public.invoices(client_id);
CREATE INDEX idx_invoices_deal_id ON public.invoices(deal_id);
CREATE INDEX idx_invoices_status ON public.invoices(status);
CREATE INDEX idx_documents_entity ON public.documents(entity_type, entity_id);
CREATE INDEX idx_activities_entity ON public.activities(entity_type, entity_id);
CREATE INDEX idx_activities_assigned_to ON public.activities(assigned_to);
CREATE INDEX idx_notifications_user_id_unread ON public.notifications(user_id, is_read) WHERE is_read = FALSE;
CREATE INDEX idx_audit_log_table_record ON public.audit_log(table_name, record_id);

-- ----------------------------------------------------------------------------
-- STEP 6: Create Triggers for updated_at columns
-- ----------------------------------------------------------------------------

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON public.contacts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_deals_updated_at BEFORE UPDATE ON public.deals
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_activities_updated_at BEFORE UPDATE ON public.activities
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ----------------------------------------------------------------------------
-- STEP 7: Enable Row Level Security
-- ----------------------------------------------------------------------------

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- STEP 8: Create RLS Policies (after functions exist)
-- ----------------------------------------------------------------------------

-- User Roles
CREATE POLICY "Admins can manage all user roles" ON public.user_roles FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Clients
CREATE POLICY "Admins have full access to clients" ON public.clients FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can view assigned clients" ON public.clients FOR SELECT
  USING (public.is_sales(auth.uid()) AND (assigned_to = auth.uid() OR assigned_to IS NULL OR status = 'prospect'));
CREATE POLICY "Sales can insert clients" ON public.clients FOR INSERT WITH CHECK (public.is_sales(auth.uid()));
CREATE POLICY "Sales can update assigned clients" ON public.clients FOR UPDATE
  USING (public.is_sales(auth.uid()) AND (assigned_to = auth.uid() OR assigned_to IS NULL));
CREATE POLICY "Viewers can view active clients" ON public.clients FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer') AND status = 'active');

-- Contacts
CREATE POLICY "Admins have full access to contacts" ON public.contacts FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can manage contacts for their clients" ON public.contacts FOR ALL
  USING (public.is_sales(auth.uid()) AND EXISTS (
    SELECT 1 FROM public.clients WHERE clients.id = contacts.client_id 
    AND (clients.assigned_to = auth.uid() OR clients.assigned_to IS NULL)
  ));
CREATE POLICY "Viewers can view contacts" ON public.contacts FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer') AND EXISTS (
    SELECT 1 FROM public.clients WHERE clients.id = contacts.client_id AND clients.status = 'active'
  ));

-- Deals
CREATE POLICY "Admins have full access to deals" ON public.deals FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can view their deals" ON public.deals FOR SELECT
  USING (public.is_sales(auth.uid()) AND (assigned_to = auth.uid() OR assigned_to IS NULL));
CREATE POLICY "Sales can create deals" ON public.deals FOR INSERT WITH CHECK (public.is_sales(auth.uid()));
CREATE POLICY "Sales can update their deals" ON public.deals FOR UPDATE
  USING (public.is_sales(auth.uid()) AND assigned_to = auth.uid());
CREATE POLICY "Viewers can view open deals" ON public.deals FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer') AND stage NOT IN ('lost'));

-- Invoices
CREATE POLICY "Admins have full access to invoices" ON public.invoices FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can manage invoices for their deals" ON public.invoices FOR ALL
  USING (public.is_sales(auth.uid()) AND EXISTS (
    SELECT 1 FROM public.deals WHERE deals.id = invoices.deal_id AND deals.assigned_to = auth.uid()
  ));
CREATE POLICY "Viewers can view invoices" ON public.invoices FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));

-- Documents
CREATE POLICY "Admins have full access to documents" ON public.documents FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can manage their documents" ON public.documents FOR ALL
  USING (public.is_sales(auth.uid()) AND uploaded_by = auth.uid());
CREATE POLICY "Viewers can view documents" ON public.documents FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));

-- Activities
CREATE POLICY "Admins have full access to activities" ON public.activities FOR ALL
  USING (public.is_admin(auth.uid()));
CREATE POLICY "Sales can manage their activities" ON public.activities FOR ALL
  USING (public.is_sales(auth.uid()) AND (created_by = auth.uid() OR assigned_to = auth.uid()));
CREATE POLICY "Viewers can view activities" ON public.activities FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));

-- Notifications
CREATE POLICY "Users can view own notifications" ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY "Users can update own notifications" ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);
CREATE POLICY "System can insert notifications" ON public.notifications FOR INSERT WITH CHECK (true);

-- Audit Log
CREATE POLICY "Admins can view audit log" ON public.audit_log FOR SELECT
  USING (public.is_admin(auth.uid()));
CREATE POLICY "System can insert audit log" ON public.audit_log FOR INSERT WITH CHECK (true);

-- Industries
CREATE POLICY "Anyone authenticated can view industries" ON public.industries FOR SELECT TO authenticated
  USING (is_active = true);
CREATE POLICY "Admins can manage industries" ON public.industries FOR ALL
  USING (public.is_admin(auth.uid()));

-- ----------------------------------------------------------------------------
-- STEP 9: Seed Reference Data
-- ----------------------------------------------------------------------------

INSERT INTO public.industries (name, display_order, is_active) VALUES
  ('Technology', 1, true), ('E-commerce', 2, true), ('Healthcare', 3, true),
  ('Finance', 4, true), ('Education', 5, true), ('Real Estate', 6, true),
  ('Manufacturing', 7, true), ('Retail', 8, true), ('Professional Services', 9, true),
  ('Non-Profit', 10, true), ('Other', 99, true)
ON CONFLICT (name) DO NOTHING;