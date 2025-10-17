# Layout and Wireframes — AMO AI Agency

## Overview
This document defines the layout structure, grid systems, spacing rules, and navigation patterns for both the **marketing website** and **CRM dashboard** of AMO AI.

---

## 1. Grid System & Spacing

### Container Widths
```
Mobile:     Full width with 16px padding (1rem)
Tablet:     Full width with 32px padding (2rem)
Desktop:    Max 1400px centered with 32px padding
```

### Column Grid
- **Marketing Pages**: 12-column responsive grid
- **Dashboard**: 24-column grid for detailed layouts
- **Gap spacing**: 24px (1.5rem) default, 16px on mobile

### Vertical Rhythm
```
Section spacing:     96px (6rem) desktop / 64px (4rem) mobile
Component spacing:   48px (3rem) desktop / 32px (2rem) mobile
Element spacing:     24px (1.5rem) desktop / 16px (1rem) mobile
Text spacing:        16px (1rem) between paragraphs
```

---

## 2. Marketing Website Layout

### 2.1 Header Structure
```
┌─────────────────────────────────────────────────────┐
│  [Logo] AMO AI    [Nav Links]    [CRM] [Get Started]│
│                                                       │
└─────────────────────────────────────────────────────┘

Components:
- Logo + brand name (left)
- Main navigation (center): Home, Services↓, Projects, About, Process, AI Brief, Contact
- CTA buttons (right): "CRM Login" (ghost), "Get Started" (primary)
- Mobile: Hamburger menu with slide-in drawer
- Sticky header with backdrop blur on scroll
```

**Behavior:**
- Default: transparent background
- On scroll (>50px): solid background with shadow
- Mobile: full-width with hamburger menu
- Active page: underline indicator

### 2.2 Hero Section Layout
```
┌───────────────────────────────────────────────────┐
│                                                   │
│              [Badge: AI Automation]               │
│                                                   │
│           TURN 3-DAY PROCESSES                    │
│           INTO 3-MINUTE SOLUTIONS                 │
│                                                   │
│     AI-powered automation that transforms...      │
│                                                   │
│     [See Live Demo]  [Calculate ROI]              │
│                                                   │
│   ✓ 500+ Projects  ✓ 90% Automation  ✓ 3-Month ROI│
│                                                   │
│              [Scroll Indicator]                   │
└───────────────────────────────────────────────────┘

Layout:
- Full viewport height (100vh)
- Centered content (max-width: 1200px)
- Gradient background with animated blobs
- Two-column CTA layout on desktop, stacked on mobile
- Trust indicators in 3-column grid
```

### 2.3 Content Sections Pattern
```
Standard Section Layout:

┌───────────────────────────────────────────────┐
│  [Eyebrow Text]                               │
│  Section Heading                              │
│  Subheading text explaining section           │
│                                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │  Card 1  │ │  Card 2  │ │  Card 3  │     │
│  │          │ │          │ │          │     │
│  └──────────┘ └──────────┘ └──────────┘     │
│                                               │
│           [Optional CTA Button]               │
└───────────────────────────────────────────────┘

Grid behavior:
- 3 columns on desktop (1200px+)
- 2 columns on tablet (768px-1199px)
- 1 column on mobile (<768px)
```

### 2.4 Footer Layout
```
┌─────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ Services │  │ Company  │  │ Legal    │         │
│  │ • Link   │  │ • Link   │  │ • Link   │         │
│  │ • Link   │  │ • Link   │  │ • Link   │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
│  ─────────────────────────────────────────────     │
│  © 2025 AMO AI    [Social Icons]                   │
└─────────────────────────────────────────────────────┘

Layout:
- 4-column on desktop, 2-column on tablet, 1-column on mobile
- Dark background with lighter text
- Social icons right-aligned
```

---

## 3. CRM Dashboard Layout

### 3.1 Sidebar Navigation
```
┌─────────────┐
│  AMO AI CRM │  [≡]
├─────────────┤
│             │
│ ◉ Dashboard │
│ ○ Clients   │
│ ○ Deals     │
│ ○ Invoices  │
│             │
│             │
│             │
├─────────────┤
│ [Avatar]    │
│ user@email  │
│ Admin       │
└─────────────┘

Width: 256px (16rem)
Behavior:
- Fixed position on desktop
- Slide-in drawer on mobile/tablet
- Active page highlighted with primary background
- Collapsible on toggle
```

### 3.2 Dashboard Main Area
```
┌────────────────────────────────────────────────────┐
│  [≡] Dashboard              [User Avatar ▾]        │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │  Metric  │ │  Metric  │ │  Metric  │          │
│  │  Card    │ │  Card    │ │  Card    │          │
│  └──────────┘ └──────────┘ └──────────┘          │
│                                                    │
│  ┌────────────────────┐  ┌──────────────────┐    │
│  │  Chart Area        │  │  Recent Activity │    │
│  │                    │  │  • Item          │    │
│  │                    │  │  • Item          │    │
│  └────────────────────┘  └──────────────────┘    │
│                                                    │
└────────────────────────────────────────────────────┘

Layout:
- Header: 64px height, sticky
- Content: padding 24px
- Metric cards: 4-column desktop, 2-column tablet, 1-column mobile
- Main content: 2-column layout (70/30 split) on desktop
```

### 3.3 List Pages (Clients/Deals/Invoices)
```
┌────────────────────────────────────────────────────┐
│  [≡] Clients                        [User Avatar ▾]│
├────────────────────────────────────────────────────┤
│                                                    │
│  [Search...]              [Filter ▾]  [+ New]     │
│                                                    │
│  ┌────────────────────────────────────────────┐  │
│  │ Client Card                    [•••]       │  │
│  │ Company Name | Status | $Value             │  │
│  └────────────────────────────────────────────┘  │
│                                                    │
│  ┌────────────────────────────────────────────┐  │
│  │ Client Card                    [•••]       │  │
│  └────────────────────────────────────────────┘  │
│                                                    │
│  [Pagination]                                     │
└────────────────────────────────────────────────────┘

Layout:
- Search + filters in sticky toolbar
- Cards with hover elevation
- Grid: 2-column desktop, 1-column mobile
```

### 3.4 Detail Pages (Client/Deal Detail)
```
┌────────────────────────────────────────────────────┐
│  [≡] ← Back to Clients          [User Avatar ▾]   │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌─────────────────────┐  ┌──────────────────┐   │
│  │  Client Info Card   │  │  Activity        │   │
│  │  • Name             │  │  Timeline        │   │
│  │  • Email            │  │                  │   │
│  │  • Phone            │  │  • Event         │   │
│  │  • Status           │  │  • Event         │   │
│  │                     │  │                  │   │
│  │  [Edit] [Delete]    │  └──────────────────┘   │
│  └─────────────────────┘                          │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  Related Deals                           │    │
│  │  [Deal Card] [Deal Card]                 │    │
│  └──────────────────────────────────────────┘    │
│                                                    │
└────────────────────────────────────────────────────┘

Layout:
- Two-column layout: 60/40 split
- Info card on left, activity on right
- Related items section full-width below
```

---

## 4. Component Spacing Tokens

### Padding Scale
```
p-0:    0px
p-1:    4px
p-2:    8px
p-3:    12px
p-4:    16px    ← Default button/input padding
p-6:    24px    ← Card padding
p-8:    32px    ← Section padding
p-12:   48px
p-16:   64px
```

### Margin Scale
```
mb-2:   8px     ← Tight spacing
mb-4:   16px    ← Paragraph spacing
mb-6:   24px    ← Component spacing
mb-8:   32px    ← Section spacing
mb-12:  48px
mb-16:  64px    ← Major section spacing
```

---

## 5. Navigation Flow

### Marketing Site Navigation
```
Home
 ├─ Services
 │   ├─ WhatsApp Automation
 │   ├─ CopilotKit AI
 │   └─ CrewAI Multi-Agent
 ├─ Projects
 ├─ About
 ├─ Process
 ├─ AI Brief
 │   └─ Brief Success
 └─ Contact

Legal
 ├─ Privacy Policy
 └─ Terms of Service
```

### CRM Navigation
```
CRM
 ├─ Login
 ├─ Signup
 └─ (Authenticated)
     ├─ Dashboard
     ├─ Clients
     │   └─ Client Detail
     ├─ Deals
     │   └─ Deal Detail
     └─ Invoices
```

---

## 6. Responsive Breakpoints

### Layout Adjustments
```
Mobile (<768px):
- Single column layouts
- Stacked navigation
- Full-width cards
- Bottom-fixed CTAs

Tablet (768px-1023px):
- 2-column grids
- Collapsed sidebar (drawer)
- Reduced spacing
- Touch-optimized targets (44px min)

Desktop (1024px+):
- Multi-column layouts
- Fixed sidebar
- Full spacing
- Hover states enabled
```

---

## 7. Accessibility Considerations

### Focus States
- All interactive elements have visible focus rings
- Focus ring: 2px offset, primary color
- Keyboard navigation follows logical tab order

### Skip Links
- "Skip to main content" link at top of page
- Hidden until focused

### Touch Targets
- Minimum size: 44x44px
- Adequate spacing between clickable elements

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Landmark regions: header, nav, main, aside, footer
- ARIA labels for icon-only buttons

---

## 8. Wireframe Examples

### Card Component Wireframe
```
┌─────────────────────────┐
│  [Icon]                 │
│                         │
│  Heading Text           │
│  Description text...    │
│                         │
│  [Button]               │
└─────────────────────────┘

Spacing:
- Padding: 24px
- Icon → Heading: 16px
- Heading → Description: 12px
- Description → Button: 20px
```

### Dialog/Modal Wireframe
```
         ┌───────────────────────┐
         │  [X]                  │
         │                       │
         │  Modal Title          │
         │                       │
         │  [Form fields...]     │
         │                       │
         │  [Cancel]  [Submit]   │
         └───────────────────────┘

Properties:
- Width: 500px max on desktop
- Full-width on mobile with 16px padding
- Centered vertically and horizontally
- Backdrop: blur + dark overlay
```

---

## Recommendations for Improvement

1. **Consistent Card Heights**: Implement `min-height` on card grids to prevent layout shifts
2. **Loading States**: Add skeleton loaders for async content
3. **Empty States**: Design illustrations/messages for empty lists
4. **Error States**: Consistent error handling UI across forms
5. **Breadcrumbs**: Add breadcrumb navigation to detail pages
6. **Sticky Elements**: Consider sticky CTAs on long pages
7. **Progressive Disclosure**: Use accordions for long content sections
8. **Grid Consistency**: Align all grid patterns to 8px base unit

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
