# 🔐 AMO AI CRM - Authentication & Security Plan

**Version:** 1.0  
**Date:** January 6, 2025  
**Status:** Design Phase

---

## 📋 Overview

Comprehensive authentication and security implementation for AMO AI CRM, ensuring role-based access control, data protection, and compliance with security best practices.

---

## 🎯 Security Objectives

1. **Authentication**: Secure user identity verification
2. **Authorization**: Role-based access control (RBAC)
3. **Data Protection**: Row-Level Security (RLS) on all tables
4. **Audit Trail**: Complete activity logging
5. **Compliance**: GDPR-ready data handling

---

## 🔑 Authentication System

### Supported Methods

1. **Email/Password** (Primary)
   - Standard signup and login
   - Email verification (optional in dev, required in prod)
   - Password reset flow
   - Minimum password requirements: 8+ chars, 1 uppercase, 1 number

2. **Google OAuth** (Recommended)
   - One-click social login
   - Auto-creates profile
   - Links to existing account if email matches

3. **Future**: Microsoft/LinkedIn OAuth for B2B

### Implementation

```typescript
// src/hooks/useCRMAuth.ts
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

export function useCRMAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/crm/dashboard`
      }
    });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  };
}
```

---

## 👥 Role-Based Access Control (RBAC)

### Roles Definition

| Role | Access Level | Permissions |
|------|--------------|-------------|
| **Admin** | Full access | All CRUD operations, user management, settings |
| **Sales** | Limited write | View/edit assigned clients, create deals, send invoices |
| **Viewer** | Read-only | View active clients, deals, reports (no editing) |

### Role Assignment

**CRITICAL: Never store roles in profiles table or client-side storage!**

```sql
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'sales', 'viewer');

-- User roles table (separate for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, role)
);

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
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
  )
$$;

-- Helper functions
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

CREATE OR REPLACE FUNCTION public.is_sales(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'sales')
$$;
```

### Frontend Role Checking

```typescript
// src/hooks/useUserRole.ts
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useUserRole() {
  const [role, setRole] = useState<'admin' | 'sales' | 'viewer' | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
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
        .single();

      if (data && !error) {
        setRole(data.role);
      }
      setLoading(false);
    }

    fetchRole();
  }, []);

  return { role, loading, isAdmin: role === 'admin', isSales: role === 'sales' };
}
```

---

## 🔒 Row-Level Security (RLS) Policies

### Enable RLS on All Tables

```sql
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
```

### Complete RLS Policies

#### Clients Table

```sql
-- Admin: Full access
CREATE POLICY "Admins have full access to clients"
  ON public.clients FOR ALL
  USING (public.is_admin(auth.uid()));

-- Sales: View assigned + unassigned clients
CREATE POLICY "Sales can view clients"
  ON public.clients FOR SELECT
  USING (
    public.is_sales(auth.uid()) AND
    (assigned_to = auth.uid() OR assigned_to IS NULL OR status = 'prospect')
  );

-- Sales: Insert new clients
CREATE POLICY "Sales can insert clients"
  ON public.clients FOR INSERT
  WITH CHECK (public.is_sales(auth.uid()));

-- Sales: Update assigned clients only
CREATE POLICY "Sales can update assigned clients"
  ON public.clients FOR UPDATE
  USING (
    public.is_sales(auth.uid()) AND
    (assigned_to = auth.uid() OR assigned_to IS NULL)
  );

-- Viewer: Read-only active clients
CREATE POLICY "Viewers can view active clients"
  ON public.clients FOR SELECT
  USING (
    public.has_role(auth.uid(), 'viewer') AND
    status = 'active'
  );
```

#### Deals Table

```sql
-- Admin: Full access
CREATE POLICY "Admins have full access to deals"
  ON public.deals FOR ALL
  USING (public.is_admin(auth.uid()));

-- Sales: View deals for their clients
CREATE POLICY "Sales can view their deals"
  ON public.deals FOR SELECT
  USING (
    public.is_sales(auth.uid()) AND
    (assigned_to = auth.uid() OR assigned_to IS NULL)
  );

-- Sales: Create deals
CREATE POLICY "Sales can create deals"
  ON public.deals FOR INSERT
  WITH CHECK (public.is_sales(auth.uid()));

-- Sales: Update their deals
CREATE POLICY "Sales can update their deals"
  ON public.deals FOR UPDATE
  USING (
    public.is_sales(auth.uid()) AND
    assigned_to = auth.uid()
  );

-- Viewer: Read-only open deals
CREATE POLICY "Viewers can view open deals"
  ON public.deals FOR SELECT
  USING (
    public.has_role(auth.uid(), 'viewer') AND
    stage NOT IN ('lost')
  );
```

#### Invoices Table

```sql
-- Admin: Full access
CREATE POLICY "Admins have full access to invoices"
  ON public.invoices FOR ALL
  USING (public.is_admin(auth.uid()));

-- Sales: View/create/update invoices for their deals
CREATE POLICY "Sales can manage their invoices"
  ON public.invoices FOR ALL
  USING (
    public.is_sales(auth.uid()) AND
    EXISTS (
      SELECT 1 FROM public.deals 
      WHERE deals.id = invoices.deal_id 
      AND deals.assigned_to = auth.uid()
    )
  );

-- Viewer: Read-only invoices
CREATE POLICY "Viewers can view invoices"
  ON public.invoices FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));
```

#### Documents Table

```sql
-- Admin: Full access
CREATE POLICY "Admins have full access to documents"
  ON public.documents FOR ALL
  USING (public.is_admin(auth.uid()));

-- Sales: Manage documents for their entities
CREATE POLICY "Sales can manage their documents"
  ON public.documents FOR ALL
  USING (
    public.is_sales(auth.uid()) AND
    uploaded_by = auth.uid()
  );

-- Viewer: View documents
CREATE POLICY "Viewers can view documents"
  ON public.documents FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));
```

#### Activities Table

```sql
-- Admin: Full access
CREATE POLICY "Admins have full access to activities"
  ON public.activities FOR ALL
  USING (public.is_admin(auth.uid()));

-- Sales: View and create activities
CREATE POLICY "Sales can manage activities"
  ON public.activities FOR ALL
  USING (
    public.is_sales(auth.uid()) AND
    (created_by = auth.uid() OR created_by IS NULL)
  );

-- Viewer: Read-only
CREATE POLICY "Viewers can view activities"
  ON public.activities FOR SELECT
  USING (public.has_role(auth.uid(), 'viewer'));
```

---

## 🛡️ Data Protection

### Input Validation

**CRITICAL: Always validate user input on both client and server**

```typescript
// src/lib/crm-validation.ts
import { z } from 'zod';

export const clientSchema = z.object({
  name: z.string().min(1).max(200),
  company_name: z.string().min(1).max(200),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  industry: z.string().optional(),
  status: z.enum(['active', 'inactive', 'prospect', 'archived']),
  notes: z.string().max(5000).optional()
});

export const dealSchema = z.object({
  client_id: z.string().uuid(),
  deal_name: z.string().min(1).max(200),
  deal_value: z.number().positive(),
  stage: z.enum(['lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost']),
  expected_close_date: z.string().optional(),
  description: z.string().max(5000).optional()
});

export const invoiceSchema = z.object({
  client_id: z.string().uuid(),
  deal_id: z.string().uuid().optional(),
  amount: z.number().positive(),
  due_date: z.string(),
  description: z.string().max(1000).optional()
});
```

### SQL Injection Prevention

✅ **SAFE: Always use parameterized queries**
```typescript
// Using Supabase client (automatically parameterized)
const { data } = await supabase
  .from('clients')
  .select('*')
  .eq('id', clientId); // Safe - parameterized
```

❌ **NEVER: Raw SQL with string interpolation**
```typescript
// DON'T DO THIS!
const query = `SELECT * FROM clients WHERE id = '${clientId}'`; // SQL injection risk!
```

### XSS Prevention

✅ **SAFE: React automatically escapes**
```tsx
<div>{client.name}</div> // Safe - React escapes
```

❌ **NEVER: dangerouslySetInnerHTML with user content**
```tsx
// DON'T DO THIS!
<div dangerouslySetInnerHTML={{ __html: client.notes }} /> // XSS risk!
```

---

## 📊 Audit Logging

### Automatic Audit Trail

```sql
-- Audit log function
CREATE OR REPLACE FUNCTION public.audit_table_changes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.audit_log (
      table_name, record_id, action, new_data, user_id
    ) VALUES (
      TG_TABLE_NAME, NEW.id, 'INSERT', to_jsonb(NEW), auth.uid()
    );
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.audit_log (
      table_name, record_id, action, old_data, new_data, user_id
    ) VALUES (
      TG_TABLE_NAME, NEW.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW), auth.uid()
    );
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO public.audit_log (
      table_name, record_id, action, old_data, user_id
    ) VALUES (
      TG_TABLE_NAME, OLD.id, 'DELETE', to_jsonb(OLD), auth.uid()
    );
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply to all tables
CREATE TRIGGER audit_clients_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.audit_table_changes();

CREATE TRIGGER audit_deals_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.deals
  FOR EACH ROW EXECUTE FUNCTION public.audit_table_changes();

-- Repeat for other tables...
```

---

## 🔐 Secrets Management

### Required Secrets

```bash
# Stripe integration
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email service
SENDGRID_API_KEY=SG....
MAILGUN_API_KEY=...

# AI features
LOVABLE_API_KEY=... # Auto-provided by Lovable Cloud

# WhatsApp (if integrating)
WHATSAPP_API_KEY=...
```

### Setting Secrets

Use Lovable Cloud secrets management - never hardcode in code!

```typescript
// Edge function usage
const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
```

---

## 🧪 Security Testing Checklist

Before production launch:

- [ ] All tables have RLS enabled
- [ ] All RLS policies tested with different roles
- [ ] SQL injection testing passed
- [ ] XSS vulnerability testing passed
- [ ] CSRF protection enabled
- [ ] Rate limiting implemented on auth endpoints
- [ ] Password reset flow tested
- [ ] Email verification flow tested
- [ ] OAuth integration tested
- [ ] Audit logging verified for all tables
- [ ] Data export/deletion (GDPR) implemented
- [ ] Security headers configured
- [ ] SSL/TLS enforced

---

## 📋 GDPR Compliance

### User Rights

1. **Right to Access**: Users can export their data
2. **Right to Deletion**: Users can request account deletion
3. **Right to Rectification**: Users can update their info
4. **Data Portability**: Export data in JSON format

### Implementation

```typescript
// Edge function: export-user-data
export async function exportUserData(userId: string) {
  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .eq('assigned_to', userId);

  const { data: deals } = await supabase
    .from('deals')
    .select('*')
    .eq('assigned_to', userId);

  return {
    user: user,
    clients,
    deals,
    activities,
    // ... all user data
  };
}
```

---

**Next Document:** [06-edge-functions.md](./06-edge-functions.md)

**Status:** ✅ Ready for Implementation  
**Security Level:** ⚠️ Critical - Must Review Before Production
