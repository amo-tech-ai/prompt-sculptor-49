# Sections and Components — AMO AI Agency

## Overview
This document catalogs all UI sections and components used across the AMO AI website and CRM dashboard, including structure, interactions, states, and usage guidelines.

---

## 1. Marketing Website Components

### 1.1 Hero Section

**Location**: Homepage, service pages  
**Purpose**: Primary attention-grabbing area with main value proposition

**Structure**:
```
- Badge component (small label with icon)
- Headline (H1) with gradient text effect
- Subheading paragraph
- Two CTA buttons (primary + secondary)
- Trust indicators (3 checkmarks with stats)
- Scroll indicator animation
- Animated background (gradient blobs)
```

**Interactive Elements**:
- **CTAs**: Hover scale (1.02), shadow glow
- **Scroll indicator**: Bouncing animation
- **Background blobs**: Slow pulse animation (3s cycle)

**States**:
- Default: Full viewport height, centered content
- Mobile: Stacked buttons, reduced text size
- Tablet: Maintained desktop layout with adjusted spacing

**Usage Notes**:
- Keep headline under 15 words
- Use gradient on key phrases only
- Trust indicators should be verifiable metrics

---

### 1.2 Service Cards Grid

**Location**: Homepage services section, Services page  
**Purpose**: Display service offerings in scannable format

**Structure**:
```
┌─────────────────────┐
│  [Icon/Image]       │
│  Service Title      │
│  Description text   │
│  • Deliverable      │
│  • Deliverable      │
│  • Deliverable      │
│  [Tech Badges]      │
│  [Learn More →]     │
└─────────────────────┘
```

**Interactive States**:
- **Hover**: Elevate 4px, shadow intensifies, title color shifts to primary
- **Click**: Navigate to detail page or scroll to section
- **Focus**: Primary ring with 2px offset

**Variants**:
- Standard card (equal height grid)
- Featured card (larger, different background)
- Compact card (no image, smaller padding)

**Responsive Behavior**:
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Single column, full width

---

### 1.3 AMO Cards (Special Services)

**Location**: Homepage, specialized service pages  
**Purpose**: Highlight key service integrations (WhatsApp, CopilotKit, CrewAI)

**Structure**:
```
- Large logo/icon (60px)
- Bold heading
- Descriptive paragraph
- Feature list with checkmarks
- Prominent CTA button
- Technology badge row
```

**Visual Style**:
- Rounded corners: `amo` (32px)
- Background: gradient or solid with subtle overlay
- Shadow: `--shadow-elegant`
- Border: Optional 1px accent

**Interactions**:
- **Card hover**: Scale 1.01, shadow increases
- **CTA hover**: Background darkens 10%, slight scale
- **Logo animation**: Subtle rotate on page load

---

### 1.4 Process Timeline

**Location**: Process page  
**Purpose**: Show workflow stages from consultation to launch

**Structure**:
```
Step 1 ──────→ Step 2 ──────→ Step 3 ──────→ Step 4
  │              │              │              │
[Icon]        [Icon]        [Icon]        [Icon]
Title         Title         Title         Title
Details       Details       Details       Details
```

**Interactive Elements**:
- Steps expand on click to show more details
- Progress line animates from left to right on scroll
- Active step highlighted with primary color

**Responsive Behavior**:
- Desktop: Horizontal timeline
- Mobile: Vertical stacked cards with left-side line

---

### 1.5 Statistics Section

**Location**: Homepage, About page  
**Purpose**: Display social proof metrics

**Structure**:
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   500+       │  │   90%        │  │   3-Month    │
│   Projects   │  │   Automation │  │   ROI        │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Visual Style**:
- Large number (48px, bold, primary color)
- Label text (16px, muted)
- Optional icon above number
- Minimal borders or backgrounds

**Interactions**:
- Counter animation on scroll into view
- Numbers animate from 0 to target value
- Subtle scale pulse on hover

---

### 1.6 Contact Form

**Location**: Contact page, modal dialogs  
**Purpose**: Collect user inquiries

**Structure**:
```
- Name input (required)
- Email input (required, validated)
- Phone input (optional)
- Message textarea (required, min 10 chars)
- Submit button
- Success/error message area
```

**Validation States**:
- **Default**: Gray border
- **Focus**: Primary ring
- **Valid**: Green border + checkmark icon
- **Invalid**: Red border + error message below
- **Disabled**: Gray background, cursor not-allowed

**Interactions**:
- Real-time validation on blur
- Submit button disabled until form valid
- Loading spinner on submit
- Success toast notification
- Error inline messages

---

### 1.7 Technology Showcase

**Location**: Homepage, Services pages  
**Purpose**: Display tech stack with logos

**Structure**:
```
Grid of technology logos:
[Webflow] [Supabase] [OpenAI] [Claude]
[Stripe]  [Shopify]  [CrewAI] [n8n]
```

**Visual Style**:
- Logo cards: 120px × 120px
- Background: subtle gradient or transparent
- Grayscale logos with color on hover
- Rounded corners: `lg`

**Interactions**:
- **Hover**: Logo animates to color, scale 1.1
- **Click**: Link to technology page or external site
- Tooltip on hover showing technology name

---

### 1.8 Testimonials Carousel

**Location**: Homepage, About page  
**Purpose**: Social proof through client quotes

**Structure**:
```
┌──────────────────────────────────┐
│  "Quote text here..."            │
│  — Name, Title, Company          │
│  [Avatar/Logo]                   │
│  ⬤ ○ ○   [← →]                   │
└──────────────────────────────────┘
```

**Interactive Elements**:
- Arrow navigation (previous/next)
- Dot indicators (clickable)
- Auto-advance every 5 seconds (pausable)
- Swipe gestures on mobile

**Variants**:
- Single testimonial
- Multi-column (3 visible at once)
- Video testimonial option

---

### 1.9 Footer

**Location**: All pages  
**Purpose**: Navigation, legal links, social media

**Structure**:
```
┌───────────────────────────────────────────┐
│  [Logo]                                   │
│                                           │
│  Services     Company      Legal          │
│  • Link       • Link       • Link         │
│  • Link       • Link       • Link         │
│                                           │
│  ──────────────────────────────────────  │
│  © 2025 AMO AI        [Social Icons]     │
└───────────────────────────────────────────┘
```

**Visual Style**:
- Dark background (primary-dark or muted)
- Light text (80% opacity)
- Links: Underline on hover
- Social icons: Circular, 32px, hover color change

**Interactive Elements**:
- Link hover: Underline animation, color to primary
- Social icons: Scale 1.1 on hover
- Newsletter signup (optional)

---

## 2. CRM Dashboard Components

### 2.1 Metric Card

**Location**: Dashboard page  
**Purpose**: Display key performance indicators

**Structure**:
```
┌──────────────────┐
│  [Icon]          │
│  Label           │
│  $1,234,567      │
│  +12.5% ↑        │
└──────────────────┘
```

**Visual Style**:
- Background: `--card`
- Border: 1px solid `--border`
- Padding: 24px
- Rounded: `xl`

**Icon Color Coding**:
- Revenue: Green
- Clients: Blue
- Deals: Orange
- Invoices: Purple

**States**:
- **Loading**: Skeleton loader
- **Error**: Red border, warning icon
- **Success**: Normal display
- **Hover**: Slight shadow increase

---

### 2.2 Client/Deal Card

**Location**: Clients page, Deals page  
**Purpose**: Display individual record in list view

**Structure**:
```
┌──────────────────────────────────────┐
│  [Avatar/Logo]  Company Name     [•••]│
│  Contact Name   | Status Badge        │
│  email@domain   | $Value | Date       │
└──────────────────────────────────────┘
```

**Interactive Elements**:
- **Card click**: Navigate to detail page
- **Menu button (•••)**: Open dropdown with Edit, Delete, View
- **Status badge**: Color-coded by status
- **Hover**: Border color changes to primary

**Status Colors**:
- Active: Green
- Pending: Orange
- Inactive: Gray
- Closed: Blue

---

### 2.3 Activity Timeline

**Location**: Client detail, Deal detail pages  
**Purpose**: Show chronological event history

**Structure**:
```
│  ⬤────  Activity Title
│  │      Timestamp
│  │      Description text
│  │
│  ⬤────  Activity Title
│  │      Timestamp
│  │      Description text
```

**Visual Style**:
- Vertical line: 2px, `--border` color
- Timeline dots: 12px circles, colored by event type
- Left-aligned text with 16px margin from line
- Gray background for older events

**Event Type Colors**:
- Created: Blue
- Updated: Orange
- Deleted: Red
- Note added: Gray
- Status change: Purple

---

### 2.4 Dialog/Modal Components

**Location**: All CRUD operations  
**Purpose**: Create or edit records without page navigation

**Structure**:
```
         ┌────────────────────┐
         │  Modal Title   [X] │
         │  ────────────────  │
         │  Form fields...    │
         │  [Input]           │
         │  [Select]          │
         │  [Textarea]        │
         │  ────────────────  │
         │  [Cancel] [Submit] │
         └────────────────────┘
```

**Interactive States**:
- **Open animation**: Fade in + scale from 0.95 to 1
- **Close animation**: Fade out + scale to 0.95
- **Backdrop click**: Close modal
- **Escape key**: Close modal
- **Form submit**: Disable submit button, show loading

**Variants**:
- Client dialog (name, email, phone, company)
- Deal dialog (title, value, stage, client)
- Invoice dialog (number, amount, status, due date)
- Delete confirmation dialog

---

### 2.5 Data Table

**Location**: List pages with many records  
**Purpose**: Sortable, filterable record display

**Structure**:
```
┌─────────┬──────────┬────────┬────────┬──────┐
│ Name ▼  │ Status   │ Value  │ Date   │ [•••]│
├─────────┼──────────┼────────┼────────┼──────┤
│ Client1 │ Active   │ $5,000 │ Jan 10 │ [•••]│
│ Client2 │ Pending  │ $3,200 │ Jan 09 │ [•••]│
└─────────┴──────────┴────────┴────────┴──────┘
```

**Interactive Elements**:
- **Column headers**: Click to sort (toggle asc/desc)
- **Sort indicator**: Arrow icon (▲/▼)
- **Row hover**: Background color change
- **Row click**: Navigate to detail page
- **Checkbox**: Multi-select for bulk actions

**Responsive Behavior**:
- Desktop: Full table
- Tablet: Hide less important columns
- Mobile: Card layout instead of table

---

### 2.6 Search & Filter Toolbar

**Location**: Top of list pages  
**Purpose**: Filter and search records

**Structure**:
```
[🔍 Search...]  [Filter ▾]  [Sort ▾]  [+ New]
```

**Interactive Elements**:
- **Search input**: Debounced search (300ms delay)
- **Filter dropdown**: Multi-select checkboxes
- **Sort dropdown**: Radio buttons for sort options
- **New button**: Open create dialog

**Filter Options**:
- Status (Active, Pending, Inactive)
- Date range
- Value range
- Client/category

---

### 2.7 Charts & Graphs

**Location**: Dashboard page  
**Purpose**: Visualize metrics and trends

**Types**:
- **Bar chart**: Compare categories (deals by stage)
- **Line chart**: Show trends over time (revenue)
- **Pie chart**: Show distribution (client types)
- **Area chart**: Cumulative trends

**Interactive Elements**:
- **Hover tooltips**: Show exact values
- **Legend toggles**: Show/hide data series
- **Zoom**: Click and drag to zoom on line charts

**Visual Style**:
- Primary color for main data
- Secondary colors for comparisons
- Grid lines: subtle gray
- Axis labels: 14px, muted color

---

### 2.8 Empty State

**Location**: Lists with no data  
**Purpose**: Guide users when no records exist

**Structure**:
```
       [Large Icon]
       
       No Clients Yet
       
       Get started by creating your first client.
       
       [+ Create Client]
```

**Visual Style**:
- Centered content
- Icon: 64px, muted color
- Text: Centered, 20px heading, 16px description
- CTA button: Primary style

**Variations**:
- No search results
- No clients
- No deals
- No invoices

---

### 2.9 Loading States

**Purpose**: Provide feedback during async operations

**Types**:

**Skeleton Loader** (Preferred for lists):
```
┌─────────────────────┐
│ ████████░░░░░░░░░░░ │
│ ████░░░░░░░░░░░░░░░ │
│ ██████████░░░░░░░░░ │
└─────────────────────┘
```

**Spinner** (For buttons/actions):
```
    ⟳ Loading...
```

**Progress Bar** (For file uploads):
```
[████████████░░░░░░░] 65%
```

---

### 2.10 Toast Notifications

**Location**: Fixed position (top-right or bottom-center)  
**Purpose**: Temporary feedback messages

**Structure**:
```
┌────────────────────────┐
│ [✓] Success message    │
└────────────────────────┘
```

**Variants**:
- **Success**: Green icon, "Record saved"
- **Error**: Red icon, "Failed to save"
- **Info**: Blue icon, "Changes detected"
- **Warning**: Orange icon, "Unsaved changes"

**Behavior**:
- Auto-dismiss after 4 seconds
- Dismissible by click
- Stack multiple toasts
- Slide-in animation from right

---

## 3. Shared Components

### 3.1 Button Component

**Variants**:
- **Primary**: Orange background, white text
- **Secondary**: Gray background, dark text
- **Outline**: Transparent with border
- **Ghost**: Transparent, hover background
- **Link**: No background, underline on hover

**Sizes**:
- **sm**: 32px height, 12px 16px padding
- **default**: 40px height, 16px 24px padding
- **lg**: 44px height, 16px 32px padding
- **icon**: 40px × 40px square

---

### 3.2 Badge Component

**Purpose**: Status indicators, labels, categories

**Variants**:
- **Default**: Gray background
- **Primary**: Orange background
- **Success**: Green background
- **Destructive**: Red background
- **Outline**: Transparent with border

**Sizes**:
- **sm**: 20px height, 8px padding
- **default**: 24px height, 12px padding

---

### 3.3 Avatar Component

**Purpose**: User profile pictures or initials

**Sizes**:
- **sm**: 32px × 32px
- **default**: 40px × 40px
- **lg**: 56px × 56px
- **xl**: 80px × 80px

**Fallback**: Display user initials if no image

---

### 3.4 Tooltip Component

**Purpose**: Provide additional context on hover

**Structure**:
```
[Element]
   ↓
┌─────────────┐
│ Tooltip text│
└─────────────┘
```

**Behavior**:
- Show on hover (200ms delay)
- Hide on mouse leave
- Position: Top, bottom, left, or right (auto-adjust)
- Max width: 250px

---

## 4. Usage Recommendations

### Component Hierarchy
1. Use semantic HTML elements first
2. Leverage shadcn/ui base components
3. Create custom compositions for complex patterns
4. Maintain consistent spacing and sizing

### Performance Considerations
- Lazy load images and heavy components
- Debounce search inputs
- Virtualize long lists (>100 items)
- Memoize expensive calculations

### Accessibility Checklist
- ✓ All buttons have accessible labels
- ✓ Form inputs have associated labels
- ✓ Color is not the only indicator
- ✓ Focus states are visible
- ✓ Keyboard navigation works
- ✓ ARIA attributes on interactive elements

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
