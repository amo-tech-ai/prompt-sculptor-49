# Sitemap and Pages — AMO AI Agency

## Overview
This document provides a complete sitemap of the AMO AI platform, organized by user role (visitor, client, admin) with page descriptions, routes, authentication requirements, and relationships.

---

## 1. Site Structure Overview

```
AMO AI Platform
├── Public Website (Marketing)
│   ├── Home
│   ├── Services
│   ├── Projects
│   ├── About
│   ├── Process
│   ├── AI Brief Wizard
│   ├── Contact
│   └── Legal
└── CRM Dashboard (Authenticated)
    ├── Dashboard
    ├── Clients
    ├── Deals
    ├── Invoices
    └── Settings
```

---

## 2. Public Website (Marketing)

### 2.1 Home Page
**Route**: `/`  
**Authentication**: None required  
**Purpose**: Primary landing page, value proposition, lead generation

**Sections**:
1. Hero Section
   - Value proposition headline
   - Two CTAs: "See Live Demo" + "Calculate ROI"
   - Trust indicators (500+ projects, 90% automation, 3-month ROI)

2. Updated Special Services
   - WhatsApp Automation card
   - CopilotKit AI card
   - CrewAI Multi-Agent card

3. AMO Cards
   - Service highlights with technology logos
   - Feature lists
   - CTA buttons

4. Statistics
   - Key metrics display
   - Social proof

5. Technology Showcase
   - Partner/tech stack logos

6. Testimonials (optional)
   - Client quotes
   - Company logos

7. Final CTA
   - Get started section
   - Contact form or link

**Meta Data**:
- Title: "AMO AI — Turn 3-Day Processes Into 3-Minute Solutions"
- Description: "AI-powered automation agency transforming businesses with intelligent systems. WhatsApp, CopilotKit, CrewAI solutions."
- Keywords: AI automation, business automation, WhatsApp automation, multi-agent systems

---

### 2.2 Services Overview Page
**Route**: `/services`  
**Authentication**: None required  
**Purpose**: Overview of all service offerings

**Sections**:
1. Services Hero
   - Headline: "AI Solutions That Scale Your Business"
   - Subheading explaining service approach

2. Services Grid
   - AI Web Applications card
   - Conversational AI card
   - Process Automation card
   - Multi-Agent Systems card
   - Data & Accounts card
   - Web Design & Prototyping card

3. Services Investment (Pricing)
   - Pricing tiers
   - Package comparisons

4. Technology Stack Showcase
   - Technologies used across services

5. Services CTA
   - Book consultation

**Navigation Links**:
- → `/services/whatsapp-automation`
- → `/services/copilotkit`
- → `/services/crewai`
- → `/services/[other-services]`

---

### 2.3 WhatsApp Automation Service
**Route**: `/services/whatsapp-automation`  
**Authentication**: None required  
**Purpose**: Detailed WhatsApp automation service offering

**Sections**:
1. WhatsApp Hero
2. WhatsApp Features
3. WhatsApp Use Cases
4. WhatsApp Process
5. WhatsApp ROI Calculator
6. WhatsApp Pricing
7. WhatsApp Advantage (Why Us)
8. WhatsApp FAQ
9. WhatsApp Final CTA

**Related**:
- Back to: `/services`
- Contact: `/contact`
- Brief: `/brief`

---

### 2.4 CopilotKit AI Service
**Route**: `/services/copilotkit`  
**Authentication**: None required  
**Purpose**: CopilotKit AI integration service details

**Sections**:
1. CopilotKit Hero
2. CopilotKit Problem (Pain points)
3. CopilotKit Solution
4. CopilotKit Features
5. CopilotKit Use Cases
6. CopilotKit Process
7. CopilotKit Deliverables
8. CopilotKit Results
9. CopilotKit FAQ
10. CopilotKit Final CTA

**Related**:
- Back to: `/services`

---

### 2.5 CrewAI Multi-Agent Service
**Route**: `/services/crewai`  
**Authentication**: None required  
**Purpose**: CrewAI multi-agent system service

**Sections**:
1. CrewAI Hero
2. CrewAI Problem
3. CrewAI Solution
4. CrewAI Features
5. CrewAI Use Cases
6. CrewAI Process
7. CrewAI Case Snapshot
8. CrewAI Deliverables
9. CrewAI Results
10. CrewAI FAQ
11. CrewAI Final CTA

**Related**:
- Back to: `/services`

---

### 2.6 Projects/Portfolio Page
**Route**: `/projects`  
**Authentication**: None required  
**Purpose**: Showcase completed projects and case studies

**Sections**:
1. Projects Hero
   - Headline: "Our Work in Action"
   
2. Featured Projects
   - Project cards with:
     - Project image
     - Client name
     - Project description
     - Technologies used
     - Results/metrics
     - Link to case study (if available)

3. Portfolio Statistics
   - Projects completed
   - Industries served
   - Average ROI

4. Projects CTA
   - "Start Your Project"

**Filters** (optional):
- By industry
- By technology
- By service type

---

### 2.7 About Page
**Route**: `/about`  
**Authentication**: None required  
**Purpose**: Company story, team, mission, values

**Sections**:
1. About Hero
   - Company mission statement

2. About Mission
   - Core values
   - Vision

3. About Team
   - Team member cards with photos, names, titles

4. About Process
   - How we work

5. About Why Choose Us
   - Differentiators

6. About Trusted By
   - Client logos

7. About CTA
   - Join us or work with us

---

### 2.8 Process Page
**Route**: `/process`  
**Authentication**: None required  
**Purpose**: Explain how AMO AI works with clients

**Sections**:
1. Process Hero
   - Headline: "From Idea to Impact in Weeks"

2. Process Timeline
   - Phase 1: Discovery & Planning
   - Phase 2: Design & Prototyping
   - Phase 3: Development & Integration
   - Phase 4: Testing & Launch
   - Phase 5: Support & Optimization

3. Process Phases (Detailed)
   - Step-by-step breakdown

4. Process Comparison
   - Traditional vs. AMO AI approach

5. Process Metrics
   - Time saved
   - Cost comparison

6. Process Calculator
   - Interactive ROI calculator

7. Process CTA
   - "Start Your Project"

---

### 2.9 AI Brief Wizard
**Route**: `/brief`  
**Authentication**: None required  
**Purpose**: Interactive form to collect project requirements

**Stages**:
1. Project Vision
   - Project name
   - Project type
   - Goals

2. Target Audience
   - User personas
   - Demographics

3. Features
   - Desired features
   - Must-haves vs. nice-to-haves

4. Design Preferences
   - Style preferences
   - Brand colors
   - Reference sites

5. Timeline
   - Launch deadline
   - Budget range

6. Review & Submit
   - Summary of selections
   - Contact information
   - Submit button

**Success Route**: `/brief/success`  
**Features**:
- Multi-step wizard with progress indicator
- Save progress (optional)
- Email summary to user
- Notification to AMO AI team

---

### 2.10 Contact Page
**Route**: `/contact`  
**Authentication**: None required  
**Purpose**: Contact form and company information

**Sections**:
1. Contact Hero
   - Headline: "Let's Build Something Amazing"

2. Contact Options
   - Email
   - Phone
   - WhatsApp
   - Social media

3. Contact Form
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Message (required)
   - Submit button

4. Contact Map (optional)
   - Office location

5. Contact CTA
   - Alternative CTAs (brief wizard, schedule call)

---

### 2.11 Privacy Policy
**Route**: `/privacy`  
**Authentication**: None required  
**Purpose**: Legal document explaining data handling

**Content**:
- Data collection practices
- Cookie usage
- Third-party services
- User rights
- Contact information

---

### 2.12 Terms of Service
**Route**: `/terms`  
**Authentication**: None required  
**Purpose**: Legal terms and conditions

**Content**:
- Service terms
- User responsibilities
- Liability limitations
- Dispute resolution

---

## 3. CRM Dashboard (Authenticated)

### 3.1 CRM Login Page
**Route**: `/crm/login`  
**Authentication**: None (public login page)  
**Purpose**: User authentication

**Form Fields**:
- Email (required)
- Password (required)
- "Remember me" checkbox
- "Forgot password?" link
- Submit button

**Actions**:
- Login success → `/crm/dashboard`
- Forgot password → Password reset flow
- No account → `/crm/signup`

---

### 3.2 CRM Signup Page
**Route**: `/crm/signup`  
**Authentication**: None (public registration)  
**Purpose**: New user registration

**Form Fields**:
- Email (required, validated)
- Password (required, min 8 chars)
- Confirm password (required)
- Full name (required)
- Company (optional)
- Submit button

**Actions**:
- Signup success → `/crm/dashboard`
- Already have account → `/crm/login`

---

### 3.3 CRM Dashboard
**Route**: `/crm/dashboard`  
**Authentication**: Required  
**Purpose**: Overview of CRM metrics and activity

**Sections**:
1. Metric Cards (4-column grid)
   - Total Clients
   - Active Deals
   - Total Revenue
   - Pipeline Value

2. Charts
   - Revenue trend (line chart)
   - Deals by stage (bar chart)
   - Invoice status (pie chart)

3. Recent Activity Feed
   - Latest client updates
   - Deal stage changes
   - Invoice status changes

4. Quick Actions
   - + New Client
   - + New Deal
   - + New Invoice

**Navigation**:
- Sidebar links to all CRM sections
- User menu in header

---

### 3.4 Clients List Page
**Route**: `/crm/clients`  
**Authentication**: Required  
**Purpose**: View and manage all clients

**Features**:
1. Search Bar
   - Real-time search by name, email, company

2. Filters
   - Status (Active, Pending, Inactive)
   - Date added
   - Value range

3. Sort Options
   - Name (A-Z, Z-A)
   - Date added (newest, oldest)
   - Value (high to low, low to high)

4. Client Cards Grid
   - Company name
   - Contact name
   - Email
   - Phone
   - Status badge
   - Total value
   - Actions menu (•••)

5. Actions
   - + New Client button
   - Edit client (from menu)
   - Delete client (from menu)
   - View client details (click card)

**Navigation**:
- Click client card → `/crm/clients/:id`

---

### 3.5 Client Detail Page
**Route**: `/crm/clients/:id`  
**Authentication**: Required  
**Purpose**: View and edit individual client details

**Layout** (Two-column):

**Left Column (60%)**:
1. Client Info Card
   - Company name
   - Contact name
   - Email
   - Phone
   - Status
   - Tags
   - Notes
   - Edit button
   - Delete button

2. Related Deals Section
   - List of deals associated with this client
   - Deal cards (title, value, stage)
   - + New Deal button

**Right Column (40%)**:
1. Activity Timeline
   - Chronological event history
   - Client created
   - Status changes
   - Deals added/updated
   - Notes added
   - Invoices sent

**Actions**:
- Edit client → Open edit dialog
- Delete client → Confirmation dialog
- Add deal → Open deal dialog with client pre-selected
- Add note → Quick note input

**Navigation**:
- Back to clients list: `/crm/clients`

---

### 3.6 Deals List Page
**Route**: `/crm/deals`  
**Authentication**: Required  
**Purpose**: View and manage all deals

**Features**:
1. Search Bar
   - Search by deal title, client name

2. Filters
   - Stage (Lead, Qualified, Proposal, Negotiation, Closed Won, Closed Lost)
   - Client
   - Value range
   - Date range

3. Sort Options
   - Value (high to low)
   - Date (newest, oldest)
   - Stage

4. Deal Cards Grid
   - Deal title
   - Client name
   - Value
   - Stage badge
   - Expected close date
   - Actions menu (•••)

5. Actions
   - + New Deal button
   - Edit deal
   - Delete deal
   - Move to stage (quick actions)

**Navigation**:
- Click deal card → `/crm/deals/:id`

---

### 3.7 Deal Detail Page
**Route**: `/crm/deals/:id`  
**Authentication**: Required  
**Purpose**: View and edit individual deal details

**Layout** (Two-column):

**Left Column (60%)**:
1. Deal Info Card
   - Deal title
   - Client (linked to client detail)
   - Value
   - Stage
   - Expected close date
   - Probability
   - Notes
   - Edit button
   - Delete button

2. Related Invoices Section
   - Invoices associated with this deal
   - Invoice cards

**Right Column (40%)**:
1. Activity Timeline
   - Deal created
   - Stage changes
   - Value updates
   - Notes added

**Actions**:
- Edit deal → Open edit dialog
- Delete deal → Confirmation dialog
- Change stage → Quick stage selector
- Add invoice → Open invoice dialog with deal pre-selected

**Navigation**:
- Back to deals list: `/crm/deals`
- View client: `/crm/clients/:clientId`

---

### 3.8 Invoices List Page
**Route**: `/crm/invoices`  
**Authentication**: Required  
**Purpose**: View and manage all invoices

**Features**:
1. Search Bar
   - Search by invoice number, client name

2. Filters
   - Status (Draft, Sent, Paid, Overdue, Cancelled)
   - Client
   - Amount range
   - Date range

3. Sort Options
   - Amount (high to low)
   - Date (newest, oldest)
   - Due date (soonest, latest)
   - Status

4. Invoice Cards Grid
   - Invoice number
   - Client name
   - Amount
   - Due date
   - Status badge
   - Actions menu (•••)

5. Actions
   - + New Invoice button
   - Edit invoice
   - Delete invoice
   - Mark as paid (quick action)
   - Download PDF

**Navigation**:
- Click invoice card → Invoice detail view (optional)

---

## 4. User Roles & Permissions

### 4.1 Visitor (Unauthenticated)
**Access**:
- ✅ All public website pages
- ✅ AI Brief Wizard
- ✅ Contact form
- ❌ CRM Dashboard

**Actions**:
- Browse services
- Submit brief
- Contact AMO AI
- Sign up for CRM

---

### 4.2 Client (Authenticated User)
**Access**:
- ✅ CRM Dashboard (read-only view of own data)
- ✅ Own client profile
- ✅ Own deals
- ✅ Own invoices
- ❌ Other clients' data
- ❌ Admin functions

**Actions**:
- View own metrics
- Update own profile
- View deal progress
- Download invoices
- Add notes

---

### 4.3 Admin (Authenticated Admin)
**Access**:
- ✅ Full CRM Dashboard
- ✅ All clients
- ✅ All deals
- ✅ All invoices
- ✅ Settings (future)
- ✅ User management (future)

**Actions**:
- Create, read, update, delete clients
- Create, read, update, delete deals
- Create, read, update, delete invoices
- View all activity
- Manage users
- Configure system settings

---

## 5. Page Relationships Diagram

```
[Homepage]
    ├─→ [Services Overview]
    │     ├─→ [WhatsApp Automation]
    │     ├─→ [CopilotKit AI]
    │     ├─→ [CrewAI Multi-Agent]
    │     └─→ [Other Services]
    │
    ├─→ [Projects]
    │     └─→ [Case Study Details] (future)
    │
    ├─→ [About]
    │
    ├─→ [Process]
    │
    ├─→ [AI Brief Wizard]
    │     └─→ [Brief Success]
    │
    └─→ [Contact]

[CRM Login]
    ├─→ [CRM Signup]
    └─→ [CRM Dashboard]
          ├─→ [Clients List]
          │     └─→ [Client Detail]
          │           └─→ [Related Deals]
          │
          ├─→ [Deals List]
          │     └─→ [Deal Detail]
          │           ├─→ [Related Client]
          │           └─→ [Related Invoices]
          │
          └─→ [Invoices List]

[Footer] (on all pages)
    ├─→ [Privacy Policy]
    └─→ [Terms of Service]
```

---

## 6. SEO & Meta Data Summary

### 6.1 Homepage
```
Title: AMO AI — AI Automation Agency | Turn Processes Into Solutions
Description: Transform 3-day processes into 3-minute solutions with AI automation. WhatsApp, CopilotKit, CrewAI. 500+ projects, 90% automation, 3-month ROI.
Keywords: AI automation, business automation, WhatsApp automation, CopilotKit, CrewAI, multi-agent systems
Canonical: https://amoai.com/
```

### 6.2 Services Pages
```
Title: [Service Name] — AI Automation Service | AMO AI
Description: [Service-specific value proposition and benefits]
Keywords: [Service-specific keywords]
Canonical: https://amoai.com/services/[service-slug]
```

### 6.3 CRM Pages
```
Title: CRM Dashboard — AMO AI
Description: Manage clients, deals, and invoices with AMO AI CRM
Robots: noindex, nofollow (private area)
```

---

## 7. Future Pages & Features

### 7.1 Planned Additions
- **Blog/Resources** (`/blog`): Content marketing, tutorials, case studies
- **Case Study Details** (`/projects/:slug`): In-depth project showcases
- **Pricing Page** (`/pricing`): Transparent pricing tiers
- **API Documentation** (`/docs/api`): Developer resources
- **Client Portal** (`/portal`): Enhanced client-facing dashboard
- **Help Center** (`/help`): FAQ, documentation, support
- **Settings** (`/crm/settings`): User preferences, notifications

### 7.2 CRM Enhancements
- **Reports** (`/crm/reports`): Custom report builder
- **Tasks** (`/crm/tasks`): Task management
- **Calendar** (`/crm/calendar`): Event scheduling
- **Email Integration** (`/crm/emails`): Email tracking
- **Documents** (`/crm/documents`): File management
- **Team** (`/crm/team`): User management

---

## 8. Recommendations

1. **Consistent Navigation**: Maintain header/footer across all pages
2. **Breadcrumbs**: Add to deep pages (detail views) for better navigation
3. **404 Page**: Custom not-found page with helpful links
4. **Sitemap.xml**: Auto-generate for SEO
5. **Robots.txt**: Configure for proper crawling
6. **Canonical URLs**: Prevent duplicate content issues
7. **OpenGraph Images**: Unique for each major page
8. **Loading States**: Skeleton loaders for async pages
9. **Error Handling**: Graceful error pages for all scenarios
10. **Analytics**: Track page views, conversions, user flows

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
