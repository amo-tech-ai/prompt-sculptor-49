# 🎯 Brief Collection Wizard - Implementation Plan
## AI-Powered Project Discovery & Requirements Gathering

**Created**: January 2025  
**Status**: 🔄 Planning Phase  
**Version**: 1.0  
**Estimated Time**: 6-8 hours total implementation

---

## 📋 TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Business Context](#business-context)
3. [Wizard Architecture](#wizard-architecture)
4. [Database Schema](#database-schema)
5. [Stage-by-Stage Breakdown](#stage-by-stage-breakdown)
6. [Implementation Checklist](#implementation-checklist)
7. [AI Integration Strategy](#ai-integration-strategy)
8. [Success Criteria](#success-criteria)

---

## 🎯 EXECUTIVE SUMMARY

### What This Wizard Does
The **Brief Collection Wizard** is an AI-powered project discovery tool that:
- Guides clients through comprehensive project scoping
- Uses CopilotKit AI to ask intelligent follow-up questions
- Captures business goals, technical requirements, and constraints
- Generates a professional project brief document
- Automatically routes to appropriate AMO AI service offering

### Why This Matters
- **Replaces**: Manual intake forms and discovery calls
- **Reduces**: Initial consultation time by 60%
- **Improves**: Lead qualification accuracy by 85%
- **Delivers**: Complete project brief in 15-20 minutes

### Target Users
- Potential clients exploring AMO AI services
- Existing clients starting new projects
- Partners referring projects
- Internal team for client intake

---

## 🏢 BUSINESS CONTEXT

### Current State (src/pages/BriefCollection.tsx)
```
❌ "Coming Soon" placeholder page
❌ No data collection mechanism
❌ Manual discovery process required
❌ No lead qualification automation
```

### Desired State
```
✅ Intelligent 6-stage wizard
✅ AI-assisted requirement gathering
✅ Automatic service matching
✅ Lead scoring and routing
✅ Professional brief generation
✅ CRM integration ready
```

### Business Impact
- **Time Savings**: 2 hours → 20 minutes per brief
- **Lead Quality**: Auto-qualify and score leads
- **Conversion**: Better prepared sales calls
- **Scale**: Handle 10x more inquiries
- **Experience**: Professional, modern intake process

---

## 🏗️ WIZARD ARCHITECTURE

### Wizard Configuration
```typescript
Wizard Type: "brief"
Route: /wizard/brief/*
Total Stages: 6
Estimated Completion: 15-20 minutes
Auth Required: No (guest-friendly, optional sign-up at end)
```

### Stage Flow
```
Stage 1: Project Vision (3 min)
    ↓
Stage 2: Business Context (3 min)
    ↓
Stage 3: Technical Requirements (4 min)
    ↓
Stage 4: Constraints & Timeline (3 min)
    ↓
Stage 5: Budget & Investment (2 min)
    ↓
Stage 6: Contact & Review (3 min)
    ↓
[Generate Brief PDF + Route to Services]
```

### Data Flow Architecture
```
User Input → AI Enhancement → Validation → Database → Brief Generation → Service Matching
```

---

## 🗄️ DATABASE SCHEMA

### Table 1: project_briefs (Main Storage)

```sql
CREATE TABLE IF NOT EXISTS public.project_briefs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- User & Session
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id text NOT NULL, -- For guest users
  wizard_session_id uuid REFERENCES wizard_sessions(id) ON DELETE CASCADE,
  
  -- Stage 1: Project Vision
  project_name text,
  project_type text, -- 'web_app' | 'mobile_app' | 'ai_automation' | 'crewai' | 'copilotkit' | 'whatsapp' | 'other'
  project_description text,
  target_audience text,
  primary_goal text, -- 'increase_revenue' | 'reduce_costs' | 'improve_efficiency' | 'new_product' | 'scale_business'
  success_metrics text[], -- Array of measurable outcomes
  
  -- Stage 2: Business Context
  company_name text,
  company_size text, -- 'startup' | 'small' | 'medium' | 'enterprise'
  industry text,
  current_solution text, -- What they're using now
  pain_points text[], -- Array of problems
  competitors text[], -- Competitors or inspiration
  unique_value_proposition text,
  
  -- Stage 3: Technical Requirements
  required_features jsonb, -- Structured feature list
  integrations_needed text[], -- CRMs, APIs, databases, etc.
  user_roles text[], -- Different user types
  expected_users_count text, -- 'less_100' | '100_1000' | '1000_10000' | 'more_10000'
  data_sensitivity text, -- 'public' | 'internal' | 'confidential' | 'highly_confidential'
  compliance_requirements text[], -- GDPR, HIPAA, SOC2, etc.
  technical_stack_preferences jsonb, -- Preferred technologies
  
  -- Stage 4: Constraints & Timeline
  timeline_urgency text, -- 'asap' | '1_month' | '2_3_months' | '3_6_months' | 'flexible'
  launch_date date,
  must_have_features text[], -- Non-negotiable
  nice_to_have_features text[], -- Optional
  known_constraints text[], -- Technical, legal, or business constraints
  existing_assets text[], -- Design, code, data they already have
  
  -- Stage 5: Budget & Investment
  budget_range text, -- '10k_25k' | '25k_50k' | '50k_100k' | '100k_250k' | '250k_plus' | 'not_sure'
  budget_flexibility text, -- 'fixed' | 'flexible' | 'outcome_based'
  funding_status text, -- 'funded' | 'bootstrapped' | 'seeking_funding' | 'revenue_generating'
  roi_expectations text,
  
  -- Stage 6: Contact & Finalization
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text,
  contact_company_role text,
  preferred_contact_method text, -- 'email' | 'phone' | 'whatsapp' | 'video_call'
  preferred_contact_time text,
  how_heard_about_us text,
  additional_notes text,
  
  -- AI Enhancement
  ai_generated_summary text, -- AI-generated executive summary
  ai_suggested_service text, -- Recommended AMO AI service
  ai_complexity_score integer, -- 1-10 complexity rating
  ai_estimated_timeline text, -- AI's timeline estimate
  ai_estimated_investment text, -- AI's budget estimate
  
  -- Lead Scoring & Routing
  lead_score integer, -- 0-100 automatic scoring
  lead_status text DEFAULT 'new', -- 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
  assigned_to uuid REFERENCES auth.users(id), -- Sales rep assignment
  
  -- Document Generation
  brief_pdf_url text, -- Generated PDF in storage
  brief_version integer DEFAULT 1,
  
  -- Metadata
  status text DEFAULT 'draft', -- 'draft' | 'submitted' | 'reviewed' | 'approved'
  submitted_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  
  CONSTRAINT valid_email CHECK (contact_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indexes for performance
CREATE INDEX idx_project_briefs_user_id ON public.project_briefs(user_id);
CREATE INDEX idx_project_briefs_session_id ON public.project_briefs(session_id);
CREATE INDEX idx_project_briefs_status ON public.project_briefs(status);
CREATE INDEX idx_project_briefs_lead_status ON public.project_briefs(lead_status);
CREATE INDEX idx_project_briefs_created_at ON public.project_briefs(created_at DESC);
CREATE INDEX idx_project_briefs_lead_score ON public.project_briefs(lead_score DESC);

-- Enable RLS
ALTER TABLE public.project_briefs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own briefs"
  ON public.project_briefs FOR SELECT
  USING (
    auth.uid() = user_id OR 
    auth.uid() = assigned_to OR
    has_role(auth.uid(), 'admin') OR
    has_role(auth.uid(), 'sales')
  );

CREATE POLICY "Users can create own briefs"
  ON public.project_briefs FOR INSERT
  WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL); -- Allow guest submissions

CREATE POLICY "Users can update own draft briefs"
  ON public.project_briefs FOR UPDATE
  USING (auth.uid() = user_id AND status = 'draft');

CREATE POLICY "Admins can update all briefs"
  ON public.project_briefs FOR UPDATE
  USING (has_role(auth.uid(), 'admin') OR has_role(auth.uid(), 'sales'));

-- Trigger for updated_at
CREATE TRIGGER update_project_briefs_updated_at
  BEFORE UPDATE ON public.project_briefs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
```

### Table 2: brief_activities (Activity Log)

```sql
CREATE TABLE IF NOT EXISTS public.brief_activities (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  brief_id uuid NOT NULL REFERENCES project_briefs(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  activity_type text NOT NULL, -- 'created' | 'stage_completed' | 'submitted' | 'reviewed' | 'status_changed' | 'assigned' | 'note_added'
  description text,
  metadata jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_brief_activities_brief_id ON public.brief_activities(brief_id);
CREATE INDEX idx_brief_activities_created_at ON public.brief_activities(created_at DESC);

ALTER TABLE public.brief_activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view activities for accessible briefs"
  ON public.brief_activities FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.project_briefs
      WHERE id = brief_id
      AND (user_id = auth.uid() OR assigned_to = auth.uid() OR has_role(auth.uid(), 'admin'))
    )
  );
```

### Storage Bucket for Brief PDFs

```sql
-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-briefs', 'project-briefs', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Users can view own brief PDFs"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'project-briefs' AND
    (auth.uid()::text = (storage.foldername(name))[1] OR
     has_role(auth.uid(), 'admin'))
  );

CREATE POLICY "System can upload brief PDFs"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'project-briefs');
```

---

## 📝 STAGE-BY-STAGE BREAKDOWN

### Stage 1: Project Vision (3 minutes)

**Goal**: Capture the essence and vision of the project

**Fields**:
- `project_name` (string, 3-100 chars, required)
- `project_type` (select, required)
  - Options: Web Application, Mobile App, AI Automation, CrewAI System, CopilotKit Integration, WhatsApp Automation, Other
- `project_description` (textarea, 50-1000 chars, required)
- `target_audience` (textarea, 20-500 chars, required)
- `primary_goal` (select, required)
  - Options: Increase Revenue, Reduce Costs, Improve Efficiency, Launch New Product, Scale Business
- `success_metrics` (multi-select tags, min 1, max 5)
  - Examples: "User Growth", "Cost Reduction %", "Time Savings", "Revenue Increase", "Customer Satisfaction"

**AI Assistance**:
- Suggest project name if description provided
- Recommend project type based on description
- Generate example success metrics
- Ask clarifying questions about vision

**Validation**:
```typescript
const stage1Schema = z.object({
  project_name: z.string().min(3).max(100),
  project_type: z.enum(['web_app', 'mobile_app', 'ai_automation', 'crewai', 'copilotkit', 'whatsapp', 'other']),
  project_description: z.string().min(50).max(1000),
  target_audience: z.string().min(20).max(500),
  primary_goal: z.enum(['increase_revenue', 'reduce_costs', 'improve_efficiency', 'new_product', 'scale_business']),
  success_metrics: z.array(z.string()).min(1).max(5)
});
```

**UI Components**:
- Text input (project name)
- Select dropdown (project type)
- Rich textarea with character count (description)
- Textarea (target audience)
- Radio group (primary goal)
- Tag input (success metrics)

---

### Stage 2: Business Context (3 minutes)

**Goal**: Understand the business environment and current situation

**Fields**:
- `company_name` (string, optional)
- `company_size` (select, required)
  - Options: Startup (1-10), Small (11-50), Medium (51-200), Enterprise (200+)
- `industry` (select/autocomplete, required)
  - 20+ industry options
- `current_solution` (textarea, optional)
- `pain_points` (multi-select tags, min 2, max 6)
- `competitors` (tag input, optional, max 5)
- `unique_value_proposition` (textarea, 100-500 chars, required)

**AI Assistance**:
- Suggest industry based on project description
- Generate pain point examples
- Help articulate value proposition
- Identify common competitors in industry

**Validation**:
```typescript
const stage2Schema = z.object({
  company_size: z.enum(['startup', 'small', 'medium', 'enterprise']),
  industry: z.string().min(1),
  pain_points: z.array(z.string()).min(2).max(6),
  unique_value_proposition: z.string().min(100).max(500)
});
```

---

### Stage 3: Technical Requirements (4 minutes)

**Goal**: Define technical scope and requirements

**Fields**:
- `required_features` (structured checklist + custom, min 3)
  - Pre-defined features by project type
  - Custom feature input
- `integrations_needed` (multi-select, optional)
  - Options: CRM (Salesforce, HubSpot), Payment (Stripe, PayPal), Analytics, Email, SMS, Social Media, Custom API
- `user_roles` (dynamic list, min 1, max 10)
- `expected_users_count` (select, required)
- `data_sensitivity` (radio, required)
- `compliance_requirements` (multi-select, optional)
  - Options: GDPR, HIPAA, SOC2, PCI-DSS, None
- `technical_stack_preferences` (optional)

**AI Assistance**:
- Suggest features based on project type
- Recommend integrations for industry
- Identify compliance needs based on industry/data
- Estimate user scalability requirements

**Validation**:
```typescript
const stage3Schema = z.object({
  required_features: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
    priority: z.enum(['must_have', 'should_have', 'nice_to_have'])
  })).min(3),
  user_roles: z.array(z.string()).min(1).max(10),
  expected_users_count: z.enum(['less_100', '100_1000', '1000_10000', 'more_10000']),
  data_sensitivity: z.enum(['public', 'internal', 'confidential', 'highly_confidential'])
});
```

---

### Stage 4: Constraints & Timeline (3 minutes)

**Goal**: Define project boundaries and timeline

**Fields**:
- `timeline_urgency` (select, required)
  - Options: ASAP (< 1 month), 1-2 months, 2-3 months, 3-6 months, Flexible
- `launch_date` (date picker, optional)
- `must_have_features` (from Stage 3 features, drag to prioritize)
- `nice_to_have_features` (from Stage 3 features)
- `known_constraints` (textarea, optional)
- `existing_assets` (checklist + file upload, optional)
  - Design files, Brand guidelines, Existing codebase, Data/content, Documentation

**AI Assistance**:
- Suggest realistic timeline based on scope
- Identify potential constraints
- Recommend MVP vs full feature set
- Estimate complexity

**Validation**:
```typescript
const stage4Schema = z.object({
  timeline_urgency: z.enum(['asap', '1_month', '2_3_months', '3_6_months', 'flexible']),
  must_have_features: z.array(z.string()).min(1),
  launch_date: z.date().optional()
});
```

---

### Stage 5: Budget & Investment (2 minutes)

**Goal**: Understand financial parameters

**Fields**:
- `budget_range` (select, required)
  - Options: $10k-$25k, $25k-$50k, $50k-$100k, $100k-$250k, $250k+, Not Sure
- `budget_flexibility` (radio, required)
  - Fixed budget, Flexible if value shown, Outcome-based pricing
- `funding_status` (select, required)
- `roi_expectations` (textarea, optional)

**AI Assistance**:
- Estimate typical project costs based on scope
- Explain pricing models
- Calculate potential ROI
- Suggest phased approach if budget constrained

**Validation**:
```typescript
const stage5Schema = z.object({
  budget_range: z.enum(['10k_25k', '25k_50k', '50k_100k', '100k_250k', '250k_plus', 'not_sure']),
  budget_flexibility: z.enum(['fixed', 'flexible', 'outcome_based']),
  funding_status: z.enum(['funded', 'bootstrapped', 'seeking_funding', 'revenue_generating'])
});
```

---

### Stage 6: Contact & Review (3 minutes)

**Goal**: Finalize contact details and submit

**Sections**:

**A. Contact Information**:
- `contact_name` (string, required)
- `contact_email` (email, required)
- `contact_phone` (tel, optional)
- `contact_company_role` (string, required)
- `preferred_contact_method` (select)
- `preferred_contact_time` (select)
- `how_heard_about_us` (select/other)

**B. AI-Generated Summary** (read-only):
- Executive summary of the project
- Recommended AMO AI service
- Estimated timeline
- Estimated investment range
- Complexity score

**C. Review All Sections**:
- Expandable accordions showing all collected data
- Edit buttons to go back to any stage
- Terms acceptance checkbox

**D. Additional Notes**:
- `additional_notes` (textarea, optional)

**AI Assistance**:
- Generate professional executive summary
- Match to best AMO AI service
- Provide timeline and budget estimates
- Suggest next steps

**Validation**:
```typescript
const stage6Schema = z.object({
  contact_name: z.string().min(2).max(100),
  contact_email: z.string().email(),
  contact_company_role: z.string().min(2),
  terms_accepted: z.boolean().refine(val => val === true, "Must accept terms")
});
```

**On Submit**:
1. Update `submitted_at` timestamp
2. Change status to 'submitted'
3. Generate brief PDF
4. Send confirmation email to user
5. Send notification to sales team
6. Calculate lead score
7. Route to appropriate service page
8. Show success message with next steps

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (2 hours)

- [ ] **Step 1.1**: Create database schema (30 min)
  - [ ] Create `project_briefs` table
  - [ ] Create `brief_activities` table
  - [ ] Set up RLS policies
  - [ ] Create storage bucket
  - [ ] Test with sample data

- [ ] **Step 1.2**: Update types (30 min)
  - [ ] Add `BriefWizardStage` enum to `src/types/wizard.ts`
  - [ ] Add brief fields to `WizardStateData` interface
  - [ ] Create `src/types/brief.ts` for specific types

- [ ] **Step 1.3**: Create validation schemas (30 min)
  - [ ] `src/lib/validations/brief.ts`
  - [ ] Schema for each stage (6 total)
  - [ ] Export TypeScript types

- [ ] **Step 1.4**: Add routes (30 min)
  - [ ] Update `src/App.tsx` with `/wizard/brief/*` route
  - [ ] Add to navbar (if applicable)
  - [ ] Update `src/pages/BriefCollection.tsx` to redirect to wizard

---

### Phase 2: Container & Hooks (2 hours)

- [ ] **Step 2.1**: Create wizard container (30 min)
  - [ ] `src/pages/wizard/BriefWizardContainer.tsx`
  - [ ] Initialize `useWizardState` with `"brief"` type
  - [ ] Set up global CopilotKit context
  - [ ] Create stage rendering logic

- [ ] **Step 2.2**: Create stage hooks (1.5 hours)
  - [ ] `src/hooks/stages/brief/useProjectVisionStage.ts`
  - [ ] `src/hooks/stages/brief/useBusinessContextStage.ts`
  - [ ] `src/hooks/stages/brief/useTechnicalRequirementsStage.ts`
  - [ ] `src/hooks/stages/brief/useConstraintsTimelineStage.ts`
  - [ ] `src/hooks/stages/brief/useBudgetInvestmentStage.ts`
  - [ ] `src/hooks/stages/brief/useContactReviewStage.ts`
  - Each hook needs:
    - [ ] CopilotKit instructions
    - [ ] Readable context
    - [ ] Update actions
    - [ ] Complete stage action
    - [ ] Validation logic

---

### Phase 3: UI Pages (2-3 hours)

- [ ] **Step 3.1**: Create stage pages (2 hours)
  - [ ] `src/pages/wizard/brief/ProjectVision.tsx`
  - [ ] `src/pages/wizard/brief/BusinessContext.tsx`
  - [ ] `src/pages/wizard/brief/TechnicalRequirements.tsx`
  - [ ] `src/pages/wizard/brief/ConstraintsTimeline.tsx`
  - [ ] `src/pages/wizard/brief/BudgetInvestment.tsx`
  - [ ] `src/pages/wizard/brief/ContactReview.tsx`

- [ ] **Step 3.2**: Create custom components (1 hour)
  - [ ] Feature selector component (drag & drop)
  - [ ] Tag input with suggestions
  - [ ] Integration selector
  - [ ] Budget range slider
  - [ ] Review summary cards

---

### Phase 4: AI Enhancement (1-2 hours)

- [ ] **Step 4.1**: Create edge function (1 hour)
  - [ ] `supabase/functions/generate-brief-summary/index.ts`
  - [ ] Accept brief data
  - [ ] Call Lovable AI
  - [ ] Generate executive summary
  - [ ] Recommend service
  - [ ] Estimate timeline and budget
  - [ ] Return structured response

- [ ] **Step 4.2**: Integrate AI in wizard (30 min)
  - [ ] Call edge function in Stage 6
  - [ ] Display AI insights
  - [ ] Handle errors gracefully
  - [ ] Add loading states

---

### Phase 5: PDF Generation & Routing (1 hour)

- [ ] **Step 5.1**: Create PDF generator (45 min)
  - [ ] Edge function or client-side PDF library
  - [ ] Professional template design
  - [ ] Include all sections
  - [ ] Include AI summary
  - [ ] Upload to storage bucket

- [ ] **Step 5.2**: Post-submission logic (15 min)
  - [ ] Update database status
  - [ ] Send confirmation email (if email function exists)
  - [ ] Route to appropriate service page
  - [ ] Show success message with download link

---

### Phase 6: Testing & Polish (1 hour)

- [ ] **Step 6.1**: Functional testing (30 min)
  - [ ] Complete wizard end-to-end
  - [ ] Test validation on each stage
  - [ ] Test navigation forward/backward
  - [ ] Test AI assistance
  - [ ] Test PDF generation
  - [ ] Test guest vs authenticated flow

- [ ] **Step 6.2**: UI polish (30 min)
  - [ ] Mobile responsive
  - [ ] Loading states
  - [ ] Error messages
  - [ ] Success feedback
  - [ ] Accessibility (keyboard nav, ARIA labels)

---

## 🤖 AI INTEGRATION STRATEGY

### CopilotKit Instructions Per Stage

**Stage 1 - Project Vision**:
```
You are helping a user articulate their project vision.

Your role:
- Ask clarifying questions about their project goals
- Help them identify their target audience
- Suggest measurable success metrics
- Ensure they have a clear vision statement

Be conversational, encouraging, and help them think through their ideas.
If they're vague, ask specific questions to get concrete details.
```

**Stage 2 - Business Context**:
```
You are helping a user provide business context for their project.

Your role:
- Understand their current situation and pain points
- Identify competitive landscape
- Help articulate their unique value proposition
- Ensure they know why this project matters to their business

Ask about what's not working now and what success looks like.
```

**Stage 3 - Technical Requirements**:
```
You are a technical consultant helping scope a project.

Your role:
- Recommend features based on their goals
- Suggest necessary integrations for their industry
- Identify compliance requirements they might not know about
- Help them distinguish must-haves from nice-to-haves

Be specific about technical considerations and trade-offs.
```

**Stage 4 - Constraints & Timeline**:
```
You are helping a user set realistic expectations.

Your role:
- Suggest realistic timelines based on scope
- Identify potential constraints or blockers
- Recommend MVP approach if timeline is aggressive
- Help prioritize features

Be honest about complexity and provide options for phasing.
```

**Stage 5 - Budget & Investment**:
```
You are a business advisor discussing project investment.

Your role:
- Help them understand typical project costs
- Explain different pricing models
- Calculate potential ROI based on their goals
- Suggest budget-conscious approaches if needed

Be transparent and focus on value, not just cost.
```

**Stage 6 - Contact & Review**:
```
You are finalizing the project brief.

Your role:
- Review all collected information
- Generate a professional executive summary
- Recommend the best AMO AI service for their needs
- Estimate timeline and investment range
- Suggest next steps

Be thorough and ensure they feel confident in the submission.
```

### AI Actions Available in Each Stage

**Readable Context** (All Stages):
- Current wizard progress
- All collected data so far
- Validation state
- User interaction history

**Actions** (All Stages):
- `updateStageData` - Update current stage fields
- `completeStage` - Validate and advance
- `suggestContent` - Provide AI suggestions
- `explainField` - Explain what a field means

**Special Actions**:
- `generateSummary` (Stage 6) - Create executive summary
- `estimateProject` (Stage 6) - Estimate timeline/budget
- `recommendService` (Stage 6) - Match to AMO AI service
- `validateBrief` (Stage 6) - Final validation check

---

## 🎯 SUCCESS CRITERIA

### Technical Success
- [ ] All 6 stages render without errors
- [ ] Navigation works forward and backward
- [ ] Data persists to database correctly
- [ ] AI assistance responds contextually
- [ ] PDF generates successfully
- [ ] Guest users can complete without login
- [ ] Authenticated users see their briefs saved
- [ ] RLS policies secure data properly

### User Experience Success
- [ ] Completion time < 20 minutes average
- [ ] Completion rate > 70%
- [ ] Mobile responsive works perfectly
- [ ] Loading states clear and fast
- [ ] Error messages helpful and actionable
- [ ] AI assistance used by > 50% of users
- [ ] Users feel guided, not overwhelmed

### Business Success
- [ ] Briefs contain actionable information
- [ ] Lead scoring accurately predicts quality
- [ ] Service recommendations align with needs
- [ ] Sales team gets qualified leads
- [ ] Reduces discovery call time by 50%+
- [ ] Improves proposal accuracy
- [ ] Creates professional first impression

---

## 📊 METRICS TO TRACK

### Conversion Metrics
- **Wizard Start Rate**: % of visitors who start wizard
- **Stage Completion Rates**: % completing each stage
- **Overall Completion Rate**: % who submit final brief
- **Time to Complete**: Average and median time
- **Drop-off Points**: Which stages lose users

### Engagement Metrics
- **AI Interaction Rate**: % using CopilotKit assistance
- **Average AI Messages**: Per user session
- **Edit Rate**: % going back to edit previous stages
- **PDF Download Rate**: % downloading their brief

### Quality Metrics
- **Data Completeness**: % of optional fields filled
- **Lead Score Distribution**: Average score, range
- **Service Match Accuracy**: % where AI recommendation matches sales assessment
- **Follow-up Conversion**: % of briefs that become proposals

### Business Impact
- **Discovery Call Reduction**: Time saved per brief
- **Proposal Close Rate**: Compared to manual intake
- **Time to Proposal**: Brief to proposal timeline
- **Customer Satisfaction**: Post-brief survey score

---

## 🚀 NEXT STEPS

### Immediate (This Week)
1. **Review & Approve Plan** (30 min)
   - Stakeholder review
   - Finalize stage content
   - Confirm database schema

2. **Start Phase 1: Foundation** (2 hours)
   - Set up database tables
   - Create type definitions
   - Build validation schemas

### Week 1
3. **Complete Phase 2: Container & Hooks** (2 hours)
   - Build wizard container
   - Create all 6 stage hooks
   - Test CopilotKit integration

4. **Complete Phase 3: UI Pages** (3 hours)
   - Build all 6 stage pages
   - Create custom components
   - Implement responsive design

### Week 2
5. **Complete Phase 4-5: AI & PDF** (2 hours)
   - Build AI edge functions
   - Implement PDF generation
   - Set up post-submission flow

6. **Complete Phase 6: Testing & Launch** (1 hour)
   - End-to-end testing
   - Fix bugs
   - Deploy to production

### Post-Launch
7. **Monitor & Iterate**
   - Track metrics daily
   - Gather user feedback
   - A/B test variations
   - Optimize AI prompts

---

## 📚 REFERENCE FILES

### Files to Create
```
src/types/brief.ts
src/lib/validations/brief.ts
src/pages/wizard/BriefWizardContainer.tsx
src/pages/wizard/brief/ProjectVision.tsx
src/pages/wizard/brief/BusinessContext.tsx
src/pages/wizard/brief/TechnicalRequirements.tsx
src/pages/wizard/brief/ConstraintsTimeline.tsx
src/pages/wizard/brief/BudgetInvestment.tsx
src/pages/wizard/brief/ContactReview.tsx
src/hooks/stages/brief/useProjectVisionStage.ts
src/hooks/stages/brief/useBusinessContextStage.ts
src/hooks/stages/brief/useTechnicalRequirementsStage.ts
src/hooks/stages/brief/useConstraintsTimelineStage.ts
src/hooks/stages/brief/useBudgetInvestmentStage.ts
src/hooks/stages/brief/useContactReviewStage.ts
supabase/functions/generate-brief-summary/index.ts
supabase/functions/generate-brief-pdf/index.ts
```

### Files to Modify
```
src/types/wizard.ts - Add BriefWizardStage enum
src/App.tsx - Add /wizard/brief/* route
src/pages/BriefCollection.tsx - Redirect to wizard
```

### Database Migrations
```
supabase/migrations/XXX_create_project_briefs.sql
supabase/migrations/XXX_create_brief_activities.sql
supabase/migrations/XXX_create_brief_storage.sql
```

---

## 🎉 CONCLUSION

This brief collection wizard will:
- **Transform** the client intake process from manual to automated
- **Improve** lead quality and qualification accuracy
- **Reduce** discovery time by 60%+
- **Scale** AMO AI's capacity to handle inquiries
- **Create** professional first impression with AI assistance

**Estimated Total Time**: 8-10 hours
**Expected ROI**: 10x in first quarter
**Risk Level**: Low (proven architecture pattern)

**Ready to Build?** Follow the implementation checklist step-by-step.

---

**Document Status**: ✅ Planning Complete  
**Last Updated**: January 2025  
**Maintained By**: AMO AI Development Team  
**Next Review**: After Phase 1 completion
