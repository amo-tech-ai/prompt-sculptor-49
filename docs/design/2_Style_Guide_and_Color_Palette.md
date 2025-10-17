# Style Guide and Color Palette — AMO AI Agency

## Overview
This document defines the visual language, color system, typography, and design tokens for AMO AI. All values use HSL format and semantic naming for theme flexibility.

---

## 1. Color Palette

### 1.1 Primary Brand Colors

#### AMO Orange (Primary)
```css
--amo-orange:       17 100% 60%     /* #FF6B35 - Main brand color */
--amo-orange-light: 17 100% 70%     /* Lighter variant */
```
**Usage**: Primary CTAs, active states, links, brand elements

#### AMO Orange 2 (Accent)
```css
--orange:           43 100% 50%     /* #FFB800 - Secondary orange */
```
**Usage**: Secondary CTAs, highlights, badges, success states

---

### 1.2 Semantic Color System

#### Background Colors
```css
Light Mode:
--background:        0 0% 100%      /* White */
--foreground:        224 71% 4%     /* Near-black text */
--card:             0 0% 100%       /* White cards */
--card-foreground:  224 71% 4%      /* Card text */

Dark Mode:
--background:        224 71% 4%     /* Deep blue-black */
--foreground:        0 0% 98%       /* Near-white text */
--card:             224 71% 6%      /* Slightly lighter cards */
--card-foreground:  0 0% 98%        /* Card text */
```

#### UI Element Colors
```css
--primary:          17 100% 60%     /* AMO Orange */
--primary-foreground: 0 0% 100%     /* White text on primary */

--secondary:        220 14% 96%     /* Light gray */
--secondary-foreground: 220 9% 46%  /* Gray text */

--accent:           43 100% 50%     /* Orange accent */
--accent-foreground: 0 0% 100%      /* White text on accent */

--muted:            220 14% 96%     /* Subtle backgrounds */
--muted-foreground: 220 9% 46%      /* Muted text */

--border:           220 13% 91%     /* Borders */
--input:            220 13% 91%     /* Input borders */
--ring:             17 100% 60%     /* Focus rings - primary */
```

#### Status Colors
```css
--success:          142 76% 36%     /* Green */
--success-foreground: 0 0% 100%     /* White text */

--destructive:      0 84% 60%       /* Red */
--destructive-foreground: 0 0% 100% /* White text */

--warning:          38 92% 50%      /* Amber */
--warning-foreground: 0 0% 100%     /* White text */

--info:             217 91% 60%     /* Blue */
--info-foreground:  0 0% 100%       /* White text */
```

---

### 1.3 Breeze Wizard Colors (Special Use)
```css
--breeze-cream:     38 100% 97%     /* Soft background */
--breeze-peach:     17 100% 95%     /* Peach tint */
--breeze-orange:    17 100% 60%     /* Primary orange */
--breeze-orange-hover: 17 100% 55%  /* Hover state */
--breeze-text:      0 0% 20%        /* Dark text */
--breeze-text-muted: 0 0% 60%       /* Muted text */
--breeze-border:    17 20% 90%      /* Subtle borders */
--breeze-success:   142 76% 36%     /* Success green */
--breeze-info:      217 91% 60%     /* Info blue */
```
**Usage**: AI Brief Wizard pages only

---

### 1.4 Gradient System

#### Primary Gradient
```css
--gradient-primary: linear-gradient(135deg, 
  hsl(17, 100%, 60%), 
  hsl(43, 100%, 50%)
);
```
**Usage**: Hero sections, feature highlights, CTA backgrounds

#### Hero Gradient
```css
--gradient-hero: linear-gradient(135deg, 
  hsl(17, 100%, 60%) 0%, 
  hsl(340, 82%, 52%) 100%
);
```
**Usage**: Main hero section background

#### Accent Gradient
```css
--gradient-accent: linear-gradient(90deg, 
  hsl(17, 100%, 60%), 
  hsl(43, 100%, 50%)
);
```
**Usage**: Text gradients, small accents, badges

---

## 2. Typography

### 2.1 Font Families
```css
--font-heading: 'Inter', system-ui, sans-serif;
--font-body:    system-ui, -apple-system, 'Segoe UI', sans-serif;
```

### 2.2 Type Scale

#### Desktop Scale
```
H1 (Hero):       56px / 3.5rem      Line height: 1.1    Weight: 700
H1 (Standard):   48px / 3rem        Line height: 1.2    Weight: 700
H2:              40px / 2.5rem      Line height: 1.2    Weight: 700
H3:              32px / 2rem        Line height: 1.3    Weight: 600
H4:              24px / 1.5rem      Line height: 1.4    Weight: 600
H5:              20px / 1.25rem     Line height: 1.4    Weight: 600
H6:              16px / 1rem        Line height: 1.5    Weight: 600

Body Large:      20px / 1.25rem     Line height: 1.6    Weight: 400
Body:            16px / 1rem        Line height: 1.6    Weight: 400
Body Small:      14px / 0.875rem    Line height: 1.5    Weight: 400
Caption:         12px / 0.75rem     Line height: 1.4    Weight: 400
```

#### Mobile Scale (Reduction Factor: 0.75-0.85)
```
H1 (Hero):       40px / 2.5rem      Line height: 1.1    Weight: 700
H1 (Standard):   36px / 2.25rem     Line height: 1.2    Weight: 700
H2:              30px / 1.875rem    Line height: 1.2    Weight: 700
H3:              24px / 1.5rem      Line height: 1.3    Weight: 600
H4:              20px / 1.25rem     Line height: 1.4    Weight: 600
H5:              18px / 1.125rem    Line height: 1.4    Weight: 600
H6:              16px / 1rem        Line height: 1.5    Weight: 600

Body:            16px / 1rem        Line height: 1.6    Weight: 400
Body Small:      14px / 0.875rem    Line height: 1.5    Weight: 400
```

### 2.3 Font Weight Usage
```
Regular (400):   Body text, descriptions
Medium (500):    Emphasized text, subheadings
Semibold (600):  H3-H6, labels, navigation
Bold (700):      H1-H2, important CTAs
```

### 2.4 Text Colors by Context
```
Primary Text:        --foreground
Secondary Text:      --muted-foreground
Disabled Text:       --muted-foreground (opacity: 0.5)
Link Text:           --primary
Link Hover:          --primary (darker variant)
Error Text:          --destructive
Success Text:        --success
```

---

## 3. Spacing & Layout Tokens

### 3.1 Border Radius
```css
--radius:       0.5rem   /* 8px - Default */

sm:             0.25rem  /* 4px - Small elements */
md:             0.375rem /* 6px - Medium elements */
lg:             0.5rem   /* 8px - Cards, buttons */
xl:             1.75rem  /* 28px - Large cards */
2xl:            2rem     /* 32px - Hero elements */
amo:            2rem     /* 32px - Brand standard */
amo-sm:         1.75rem  /* 28px - Brand small */
```

**Usage Guide**:
- Buttons: `lg` (8px)
- Input fields: `lg` (8px)
- Cards: `xl` or `amo` (28-32px)
- Modals: `xl` (28px)
- Hero sections: `2xl` (32px)
- Small badges: `sm` (4px)

---

### 3.2 Shadow System

#### Elevation Levels
```css
--shadow-elegant: 0 10px 30px -10px hsl(17 100% 60% / 0.3);
--shadow-glow:    0 0 40px hsl(17 100% 70% / 0.4);
--shadow-card:    0 8px 24px rgba(0, 0, 0, 0.06);
--shadow-amo-card: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-amo-hover: 0 12px 32px rgba(0, 0, 0, 0.12);
```

**Usage**:
- `elegant`: Primary CTAs, hero elements
- `glow`: Active states, hover effects on primary buttons
- `card`: Standard cards, list items
- `amo-card`: Default AMO card style
- `amo-hover`: Hover state for cards

---

### 3.3 Transition Timings
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Default Usage**:
- Hover states: `smooth` (300ms)
- Focus states: `smooth` (300ms)
- Modal enter/exit: `smooth` (300ms)
- Bouncy animations: `bounce` (500ms)

---

## 4. Component Styles

### 4.1 Buttons

#### Primary Button
```
Background:      --primary (AMO Orange)
Text:            --primary-foreground (White)
Hover:           --primary with 90% opacity
Border:          None
Shadow:          --shadow-glow
Border Radius:   lg (8px)
Padding:         16px 32px (lg size)
Font:            600 weight, 16px
```

#### Secondary Button
```
Background:      --secondary
Text:            --secondary-foreground
Hover:           --secondary with 80% opacity
Border:          None
Shadow:          None
```

#### Outline Button
```
Background:      Transparent
Text:            --primary
Hover:           --accent background, --accent-foreground text
Border:          1px solid --input
```

#### Ghost Button
```
Background:      Transparent
Text:            --foreground
Hover:           --accent background
Border:          None
```

---

### 4.2 Cards

#### Standard Card
```
Background:      --card
Border:          1px solid --border
Border Radius:   xl (28px)
Padding:         24px (p-6)
Shadow:          --shadow-card
Hover:           --shadow-amo-hover, translate-y: -4px
```

#### Elevated Card (Premium)
```
Background:      --card
Border:          None
Border Radius:   amo (32px)
Padding:         32px (p-8)
Shadow:          --shadow-elegant
Hover:           Scale: 1.02, shadow intensifies
```

---

### 4.3 Inputs & Forms

#### Text Input
```
Background:      --background
Border:          1px solid --input
Border Radius:   lg (8px)
Padding:         12px 16px
Font:            16px, 400 weight
Focus:           --ring color, 2px offset
```

#### Select Dropdown
```
Same as text input
Icon:            Chevron down, --muted-foreground
```

#### Checkbox/Radio
```
Size:            20px × 20px
Border:          2px solid --input
Checked:         --primary background, white checkmark
Border Radius:   4px (checkbox), 50% (radio)
```

---

### 4.4 Badges & Pills

#### Status Badge
```
Background:      Status color (10% opacity)
Text:            Status color (full opacity)
Border:          None
Border Radius:   sm (4px)
Padding:         4px 8px
Font:            12px, 500 weight
```

#### Pill Button
```
Background:      --muted
Text:            --foreground
Border:          None
Border Radius:   9999px (full)
Padding:         8px 16px
Font:            14px, 500 weight
Hover:           --accent background
```

---

## 5. Iconography

### Icon Sizes
```
sm:    16px × 16px    (List items, inline text)
md:    20px × 20px    (Buttons, navigation)
lg:    24px × 24px    (Headers, feature icons)
xl:    32px × 32px    (Hero sections)
2xl:   48px × 48px    (Large features)
```

### Icon Library
- **Primary**: Lucide React icons
- **Style**: 2px stroke width, rounded line caps
- **Color**: Inherit from parent or `--muted-foreground`

---

## 6. Animation Guidelines

### Standard Animations
```css
Fade In:     opacity 0 → 1, translateY 10px → 0, 300ms
Scale In:    scale 0.95 → 1, opacity 0 → 1, 200ms
Slide Up:    translateY 100% → 0, 300ms
Float:       translateY 0 → -10px → 0, 3000ms infinite
```

### Hover Interactions
```
Cards:       translateY: -4px, shadow increase, 200ms
Buttons:     scale: 1.02, shadow glow, 200ms
Links:       Underline animation (width 0 → 100%), 300ms
```

### Loading States
```
Spinner:     Rotate 360deg, 1000ms linear infinite
Skeleton:    Shimmer effect with gradient, 1500ms
Pulse:       opacity 0.5 → 1 → 0.5, 2000ms infinite
```

---

## 7. Dark Mode Adaptations

### Color Adjustments
```
Background:      Darker (hsl(224 71% 4%))
Cards:           Slightly lighter than background
Borders:         Reduced opacity (20%)
Text:            Near-white (98% lightness)
Shadows:         More subtle, darker tones
```

### Contrast Requirements
- Minimum ratio: 4.5:1 for body text
- Minimum ratio: 3:1 for large text (18px+)
- Test with both light and dark backgrounds

---

## 8. Accessibility Standards

### Color Contrast
- All text meets WCAG AA standards
- Focus states have 3:1 contrast minimum
- Error states are not color-only (include icons/text)

### Focus Indicators
```
Style:       2px solid --ring
Offset:      2px
Radius:      Matches element radius
```

---

## 9. Brand Usage Guidelines

### Logo Usage
- Minimum size: 120px width
- Clear space: Minimum 16px on all sides
- Don't place on busy backgrounds
- Use white version on dark backgrounds

### Color Combinations to Avoid
- ❌ Orange on red backgrounds
- ❌ Low-contrast gray on gray
- ❌ Multiple gradients competing
- ❌ More than 3 brand colors in one section

### Recommended Pairings
- ✅ AMO Orange + White
- ✅ AMO Orange + Dark background
- ✅ Accent Orange + Muted gray
- ✅ Gradient on dark/neutral backgrounds

---

## 10. Recommendations for Improvement

1. **Standardize Card Shadows**: Some components use different shadow values
2. **Define Disabled States**: Create explicit disabled color tokens
3. **Icon Color Consistency**: Ensure icons use semantic color tokens
4. **Animation Prefers-Reduced-Motion**: Respect user motion preferences
5. **Gradient Variants**: Create light/dark mode gradient alternatives
6. **Print Styles**: Define print-specific color overrides

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
