# Responsive Breakpoints — AMO AI Agency

## Overview
This document defines how the AMO AI interface adapts across different device sizes, ensuring optimal user experience on mobile, tablet, and desktop screens.

---

## 1. Breakpoint System

### 1.1 Core Breakpoints
```
Mobile:        < 768px   (sm)
Tablet:        768px - 1023px   (md)
Desktop:       1024px - 1279px  (lg)
Large Desktop: 1280px+  (xl)
Extra Large:   1536px+  (2xl)
```

### 1.2 Tailwind Breakpoint Syntax
```css
/* Mobile-first approach */
.element {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles (md:) */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles (lg:) */
  }
}
```

---

## 2. Mobile Layout (< 768px)

### 2.1 General Principles
- **Single-column layouts**
- **Full-width components** (minus 16px padding)
- **Stacked navigation**
- **Bottom-sheet modals** (slide up from bottom)
- **Touch-optimized targets** (minimum 44px × 44px)
- **Reduced spacing** (75% of desktop spacing)

### 2.2 Header (Mobile)
```
┌─────────────────────────────────┐
│ [Logo]              [≡]         │
└─────────────────────────────────┘

Height: 60px
Logo: 100px width
Menu icon: 24px × 24px
Background: Solid (no transparency)
Position: Sticky
```

**Navigation Drawer**:
```
Full-screen overlay from right
Width: 280px (or 85vw, whichever is smaller)
Animation: Slide-in from right (300ms)
Backdrop: Dark overlay with blur
```

### 2.3 Hero Section (Mobile)
```
┌───────────────────────┐
│                       │
│  [Badge]              │
│                       │
│  TURN 3-DAY           │
│  PROCESSES            │
│  INTO 3-MINUTE        │
│  SOLUTIONS            │
│                       │
│  Description text...  │
│                       │
│  [CTA Button]         │
│  [CTA Button]         │
│                       │
│  ✓ Stat               │
│  ✓ Stat               │
│  ✓ Stat               │
│                       │
└───────────────────────┘

Padding: 16px horizontal, 32px vertical
Font sizes: 75-85% of desktop
Button width: Full width (100%)
Button spacing: 12px vertical gap
Stats: Stacked vertically
```

### 2.4 Card Grids (Mobile)
```
Single column layout
Full width (minus 16px padding)
Vertical spacing: 16px between cards
Cards: Slightly reduced padding (20px vs 24px)
```

### 2.5 Forms (Mobile)
```
Input width: 100%
Input height: 48px (increased for touch)
Label position: Above input
Button: Full width
Spacing: 16px between fields
```

### 2.6 Tables (Mobile)
**Convert to card layout**:
```
┌─────────────────────────┐
│ Name: John Doe          │
│ Status: Active          │
│ Value: $5,000           │
│ Date: Jan 10, 2025      │
│ [Actions ▾]             │
└─────────────────────────┘

Each row becomes a card
Labels shown inline with values
Actions menu at bottom of card
```

---

## 3. Tablet Layout (768px - 1023px)

### 3.1 General Principles
- **2-column layouts** for grids
- **Sidebar collapses** to drawer
- **Moderate spacing** (85% of desktop)
- **Touch targets maintained** (44px minimum)
- **Hybrid navigation** (some desktop, some mobile patterns)

### 3.2 Header (Tablet)
```
┌────────────────────────────────────────┐
│ [Logo]  [Nav Links...]      [≡] [CTA] │
└────────────────────────────────────────┘

Height: 64px
Navigation: Visible but condensed
CTA: Shown
User menu: Icon only (no text)
```

### 3.3 Hero Section (Tablet)
```
Similar to desktop but:
- Font sizes: 90% of desktop
- Padding: Reduced to 48px vertical
- CTAs: Side-by-side (not full width)
- Stats: 3-column grid maintained
```

### 3.4 Card Grids (Tablet)
```
2-column layout
Gap: 20px between cards
Card padding: 24px (same as desktop)
Hover states: Maintained
```

### 3.5 CRM Sidebar (Tablet)
```
Behavior: Drawer (not fixed)
Trigger: Hamburger menu in header
Width: 280px
Overlay: Dark backdrop when open
Closes on: Backdrop click, navigation selection
```

### 3.6 Dashboard (Tablet)
```
Metric Cards: 2-column grid
Charts: Full width (1-column)
Activity feed: Full width
Tables: Show fewer columns (hide less critical data)
```

---

## 4. Desktop Layout (1024px - 1279px)

### 4.1 General Principles
- **Multi-column layouts** (3-4 columns)
- **Fixed sidebars** in CRM
- **Full spacing** (100%)
- **Hover states** enabled
- **Full navigation** visible
- **Optimal line length** (60-80 characters)

### 4.2 Header (Desktop)
```
┌──────────────────────────────────────────────────┐
│ [Logo] [Home] [Services▾] [Projects]... [CTA1] [CTA2] │
└──────────────────────────────────────────────────┘

Height: 72px
Logo: 140px width
Navigation: Fully expanded
Dropdown menus: On hover
CTAs: Both visible with full text
```

### 4.3 Hero Section (Desktop)
```
Full viewport height (100vh)
Max width: 1200px centered
Font sizes: Full scale (48-56px headlines)
CTAs: Side by side, auto width
Background: Animated gradient blobs
Padding: 64px vertical
```

### 4.4 Card Grids (Desktop)
```
3-column layout (standard)
4-column layout (services with many items)
Gap: 24px between cards
Hover effects: Elevation, scale, color changes
```

### 4.5 CRM Layout (Desktop)
```
┌────────┬──────────────────────┐
│ Side   │  Main Content        │
│ bar    │  Header              │
│ (256px)│  ────────────────    │
│        │  Content area        │
│        │  (flexible width)    │
│        │                      │
└────────┴──────────────────────┘

Sidebar: Fixed, always visible
Main content: Responsive width
Padding: 24px in main area
```

### 4.6 Detail Pages (Desktop)
```
Two-column layout:
- Left: 60% (primary content)
- Right: 40% (activity timeline, related items)

Three-column layout (dashboard):
- Metric cards: 33.33% width each
- Charts: 66.66% width
- Activity: 33.33% width
```

---

## 5. Large Desktop (1280px+)

### 5.1 Container Behavior
```
Max width: 1400px
Centering: margin: 0 auto
Padding: 32px horizontal
Background: Full viewport
```

### 5.2 Increased Spacing
```
Section spacing: 96px vertical
Component spacing: 48px
Element spacing: 24px
Grid gaps: 32px
```

### 5.3 Typography
```
Headings: Full scale (no reduction)
Body text: 18px (increased from 16px for readability)
Line height: 1.7 (increased from 1.6)
Max content width: 720px for long-form text
```

---

## 6. Component Responsive Patterns

### 6.1 Navigation Menu
```
Mobile (<768px):
- Hamburger menu
- Full-screen drawer
- Vertical list

Tablet (768px-1023px):
- Condensed horizontal menu
- Dropdowns on click
- Some items hidden

Desktop (1024px+):
- Full horizontal menu
- Dropdowns on hover
- All items visible
```

### 6.2 Card Components
```
Mobile:
- 1 column
- Full width
- Stacked content
- Larger padding

Tablet:
- 2 columns
- Fixed width
- Maintained layout
- Standard padding

Desktop:
- 3-4 columns
- Responsive width
- Grid layout
- Full features
```

### 6.3 Forms
```
Mobile:
- Full width inputs
- Stacked labels
- Single column
- Large touch targets

Tablet:
- Two-column for short inputs
- Inline labels (some)
- Mixed layout
- Standard sizing

Desktop:
- Multi-column complex forms
- Inline labels
- Grouped fields
- Optimal sizing
```

### 6.4 Modals/Dialogs
```
Mobile:
- Full screen or bottom sheet
- 100% width
- Reduced padding
- Fixed height content

Tablet:
- Centered modal
- 90% max-width
- Standard padding
- Scrollable content

Desktop:
- Centered modal
- 500-600px width
- Full padding
- Constrained height
```

### 6.5 Data Tables
```
Mobile:
- Card layout
- Vertical list
- All data visible
- Action menu

Tablet:
- Responsive table
- Hide 2-3 columns
- Horizontal scroll
- Compact spacing

Desktop:
- Full table
- All columns
- Fixed headers
- Full spacing
```

---

## 7. Image Handling

### 7.1 Hero Images
```
Mobile:
- Width: 100vw
- Height: 40vh
- Object-fit: cover
- Position: center

Tablet:
- Width: 100vw
- Height: 50vh
- Object-fit: cover

Desktop:
- Width: 100vw
- Height: 70vh
- Object-fit: cover
```

### 7.2 Card Images
```
Mobile:
- Width: 100%
- Height: 200px
- Aspect ratio: 16:9

Tablet:
- Width: 100%
- Height: 240px
- Aspect ratio: 16:9

Desktop:
- Width: 100%
- Height: 280px
- Aspect ratio: 16:9
```

### 7.3 Logo/Icon Sizes
```
Mobile: 80% of desktop size
Tablet: 90% of desktop size
Desktop: 100% (base size)
```

---

## 8. Touch vs. Hover Interactions

### 8.1 Mobile/Tablet (Touch)
- **Tap targets**: Minimum 44px × 44px
- **Hover effects**: Disabled (or shown on tap)
- **Click/tap**: Primary interaction
- **Swipe gestures**: Enabled for carousels, drawers
- **Long press**: Context menus

### 8.2 Desktop (Mouse)
- **Hover effects**: Enabled for all interactive elements
- **Click**: Primary interaction
- **Tooltips**: Show on hover
- **Context menus**: Right-click
- **Keyboard navigation**: Fully supported

---

## 9. Performance Considerations

### 9.1 Image Loading
```
Mobile:
- Load smaller images (e.g., 800px width)
- Use WebP format
- Lazy load below fold

Tablet:
- Load medium images (e.g., 1200px width)
- Use WebP format
- Lazy load strategically

Desktop:
- Load full-size images (e.g., 1920px width)
- Use WebP with fallback
- Lazy load non-critical images
```

### 9.2 JavaScript Bundles
```
Mobile:
- Split code for route-based loading
- Defer non-critical scripts
- Minimize third-party libraries

All devices:
- Tree-shaking enabled
- Code splitting by route
- Lazy load heavy components
```

---

## 10. Testing Checklist

### 10.1 Device Testing
- ✓ iPhone SE (375px) - Smallest common mobile
- ✓ iPhone 12/13/14 (390px)
- ✓ iPhone Pro Max (428px)
- ✓ iPad (768px) - Tablet baseline
- ✓ iPad Pro (1024px) - Large tablet
- ✓ Laptop (1366px) - Common desktop
- ✓ Desktop (1920px) - Standard monitor
- ✓ Ultra-wide (2560px+)

### 10.2 Orientation Testing
- ✓ Portrait mode (mobile/tablet)
- ✓ Landscape mode (mobile/tablet)
- ✓ Desktop doesn't break at any width

### 10.3 Browser Testing
- ✓ Chrome (latest)
- ✓ Safari (latest)
- ✓ Firefox (latest)
- ✓ Edge (latest)
- ✓ Safari iOS (latest)
- ✓ Chrome Android (latest)

---

## 11. Recommendations

1. **Mobile-First Development**: Start with mobile designs, progressively enhance
2. **Test on Real Devices**: Simulators don't catch all issues
3. **Performance Budget**: < 3s load time on 3G connection
4. **Flexible Grids**: Use CSS Grid and Flexbox for adaptability
5. **Touch Testing**: Verify all touch targets are adequate size
6. **Orientation Handling**: Test both portrait and landscape modes
7. **Breakpoint Consistency**: Don't create too many custom breakpoints
8. **Content Priority**: Most important content visible on mobile first

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
