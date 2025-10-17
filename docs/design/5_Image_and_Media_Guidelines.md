# Image and Media Guidelines — AMO AI Agency

## Overview
This document establishes standards for image usage, optimization, file formats, sizing, and accessibility to ensure fast load times and visual consistency across the AMO AI platform.

---

## 1. Image Formats

### 1.1 Recommended Formats by Use Case

| Use Case | Primary Format | Fallback | Notes |
|----------|---------------|----------|-------|
| Hero images | WebP | JPG | Large, photographic |
| Product photos | WebP | JPG | Complex colors |
| Logos/icons | SVG | PNG | Vector preferred |
| Screenshots | WebP | PNG | Preserve text clarity |
| Illustrations | SVG | PNG | Vector for scalability |
| Avatars | WebP | JPG | Small, circular |
| Thumbnails | WebP | JPG | Small previews |

### 1.2 Format Details

**WebP**:
- **Pros**: 25-35% smaller than JPG/PNG, supports transparency
- **Cons**: Not supported in very old browsers (< IE11)
- **When to use**: All modern web images (default choice)

**SVG**:
- **Pros**: Infinite scalability, tiny file size, CSS-editable
- **Cons**: Not suitable for photos, can be security risk if not sanitized
- **When to use**: Logos, icons, simple illustrations

**JPG**:
- **Pros**: Universal support, good for photos
- **Cons**: No transparency, lossy compression
- **When to use**: Fallback for complex images

**PNG**:
- **Pros**: Lossless, supports transparency
- **Cons**: Larger file sizes
- **When to use**: Logos with transparency (fallback), screenshots

---

## 2. Image Sizing Standards

### 2.1 Hero Images
```
Desktop:    1920px × 1080px  (16:9)
Tablet:     1280px × 720px   (16:9)
Mobile:     800px × 450px    (16:9)

File size target: < 300KB (WebP)
Compression: 80-85% quality
```

### 2.2 Section Background Images
```
Desktop:    1600px × 900px
Tablet:     1200px × 675px
Mobile:     800px × 450px

File size target: < 200KB (WebP)
Compression: 75-80% quality
```

### 2.3 Card Images
```
Desktop:    800px × 600px   (4:3)
Tablet:     600px × 450px   (4:3)
Mobile:     400px × 300px   (4:3)

File size target: < 100KB (WebP)
Compression: 80% quality
```

### 2.4 Thumbnails
```
Standard:   300px × 200px   (3:2)
Small:      150px × 100px   (3:2)

File size target: < 30KB (WebP)
Compression: 75% quality
```

### 2.5 Profile/Avatar Images
```
Large:      256px × 256px   (1:1)
Medium:     128px × 128px   (1:1)
Small:      64px × 64px     (1:1)

File size target: < 20KB (WebP)
Compression: 80% quality
```

### 2.6 Logos
```
SVG:        Scalable (preferred)
PNG:        512px × 512px (fallback)

Variations:
- Full logo (with text)
- Icon only (square)
- White version (for dark backgrounds)
```

### 2.7 Technology Logos
```
Size:       120px × 120px   (1:1)
Format:     SVG (preferred), PNG fallback
Background: Transparent
Padding:    10px internal padding for safety
```

---

## 3. Responsive Image Implementation

### 3.1 Using `srcset` and `sizes`
```html
<img
  src="hero-800.webp"
  srcset="
    hero-800.webp 800w,
    hero-1280.webp 1280w,
    hero-1920.webp 1920w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1280px) 90vw,
    1920px
  "
  alt="AI automation hero image"
  loading="lazy"
/>
```

### 3.2 Using `<picture>` for Art Direction
```html
<picture>
  <source
    media="(max-width: 768px)"
    srcset="hero-mobile.webp"
    type="image/webp"
  />
  <source
    media="(max-width: 1280px)"
    srcset="hero-tablet.webp"
    type="image/webp"
  />
  <source
    srcset="hero-desktop.webp"
    type="image/webp"
  />
  <img
    src="hero-desktop.jpg"
    alt="Fallback description"
    loading="lazy"
  />
</picture>
```

---

## 4. Image Optimization

### 4.1 Compression Targets

| Image Type | Quality | Target Size | Max Size |
|------------|---------|-------------|----------|
| Hero | 80-85% | < 300KB | 500KB |
| Section background | 75-80% | < 200KB | 350KB |
| Card image | 80% | < 100KB | 150KB |
| Thumbnail | 75% | < 30KB | 50KB |
| Avatar | 80% | < 20KB | 30KB |
| Logo (PNG) | 100% | < 20KB | 30KB |

### 4.2 Compression Tools
- **Online**: TinyPNG, Squoosh, ImageOptim
- **CLI**: `cwebp` (WebP conversion), `imagemagick`
- **Build process**: `vite-imagetools`, `sharp`

### 4.3 Automated Optimization
```javascript
// vite.config.ts example
import { imagetools } from 'vite-imagetools';

export default {
  plugins: [
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('hero')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '85',
            width: '1920'
          });
        }
        return new URLSearchParams({
          format: 'webp',
          quality: '80'
        });
      }
    })
  ]
};
```

---

## 5. Loading Strategies

### 5.1 Lazy Loading
```html
<!-- Apply to below-the-fold images -->
<img src="image.webp" alt="Description" loading="lazy" />
```

**When to use**:
- ✅ Images below the fold
- ✅ Card images in lists
- ✅ Gallery images
- ✅ Thumbnails

**When NOT to use**:
- ❌ Hero/above-the-fold images
- ❌ Logo in header
- ❌ Critical UI icons

### 5.2 Eager Loading
```html
<!-- For critical images -->
<img src="hero.webp" alt="Description" loading="eager" />
```

### 5.3 Preloading Critical Images
```html
<head>
  <link rel="preload" as="image" href="hero.webp" type="image/webp" />
</head>
```

---

## 6. Accessibility Standards

### 6.1 Alt Text Guidelines

**Good Alt Text**:
- ✅ "AI automation dashboard showing client metrics"
- ✅ "Team member Sarah, Product Manager"
- ✅ "WhatsApp integration flowchart"

**Bad Alt Text**:
- ❌ "image1.jpg"
- ❌ "click here"
- ❌ Empty alt attribute for meaningful images

**Alt Text Rules**:
- Describe the content and function
- Keep under 125 characters
- Don't say "image of" or "picture of"
- Decorative images: Use empty alt (`alt=""`)
- Complex diagrams: Provide longer description nearby

### 6.2 Decorative vs. Informative

**Decorative** (use `alt=""`):
- Background patterns
- Design flourishes
- Purely aesthetic images

**Informative** (use descriptive alt):
- Content images
- Product photos
- Diagrams/charts
- Avatars
- Logos

---

## 7. Video Guidelines

### 7.1 Video Formats
```
Primary:    MP4 (H.264 codec)
Fallback:   WebM (VP9 codec)
Streaming:  HLS for longer videos
```

### 7.2 Video Sizes
```
Full HD:    1920px × 1080px (max)
HD:         1280px × 720px (recommended)
Mobile:     720px × 480px

Bitrate:
- 1080p: 8 Mbps
- 720p:  5 Mbps
- 480p:  2.5 Mbps
```

### 7.3 Video Implementation
```html
<video
  controls
  preload="metadata"
  poster="video-poster.webp"
  width="1280"
  height="720"
>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    kind="captions"
    src="captions-en.vtt"
    srclang="en"
    label="English"
  />
  Your browser does not support the video tag.
</video>
```

### 7.4 Background Videos
- **File size**: < 5MB
- **Length**: < 30 seconds (looped)
- **No audio** (accessibility)
- **Provide pause button**
- **Poster image** for slow connections

---

## 8. Icon System

### 8.1 Icon Library
**Primary**: Lucide React (already installed)
- Consistent style
- 24px base size
- 2px stroke width
- Customizable colors

### 8.2 Icon Sizing
```
xs:   12px × 12px   (Inline with small text)
sm:   16px × 16px   (List items, tight spaces)
md:   20px × 20px   (Buttons, navigation)
lg:   24px × 24px   (Headers, cards)
xl:   32px × 32px   (Feature sections)
2xl:  48px × 48px   (Hero icons)
```

### 8.3 Icon Colors
- Inherit from text color by default
- Use semantic color tokens for status icons
- Maintain 4.5:1 contrast ratio

---

## 9. Image Storage & Organization

### 9.1 Directory Structure
```
public/
├── images/
│   ├── hero/
│   │   ├── home-hero-1920.webp
│   │   ├── home-hero-1280.webp
│   │   └── home-hero-800.webp
│   ├── services/
│   │   ├── whatsapp-800.webp
│   │   ├── copilotkit-800.webp
│   │   └── crewai-800.webp
│   ├── team/
│   │   └── (profile images)
│   ├── logos/
│   │   ├── amo-ai-logo.svg
│   │   ├── amo-ai-icon.svg
│   │   └── tech-logos/
│   └── thumbnails/
│       └── (thumbnail images)
src/assets/
├── icons/
│   └── (custom SVG icons)
└── illustrations/
    └── (custom illustrations)
```

### 9.2 Naming Conventions
```
Format: [section]-[description]-[size].[ext]

Examples:
- hero-homepage-1920.webp
- service-whatsapp-800.webp
- team-john-256.webp
- logo-amo-ai.svg
- icon-check-circle.svg
- thumbnail-project1-300.webp
```

---

## 10. Performance Checklist

### 10.1 Before Adding an Image
- ✓ Is this image necessary?
- ✓ Can SVG be used instead?
- ✓ Is it properly sized (not oversized)?
- ✓ Is it compressed?
- ✓ Does it have WebP + fallback?
- ✓ Is lazy loading applied (if below fold)?
- ✓ Does it have descriptive alt text?

### 10.2 Optimization Checklist
- ✓ Resize to exact dimensions needed
- ✓ Compress (80% quality for photos)
- ✓ Convert to WebP
- ✓ Remove EXIF data
- ✓ Use `srcset` for responsive images
- ✓ Specify width and height attributes
- ✓ Apply lazy loading
- ✓ Add alt text

---

## 11. Common Mistakes to Avoid

### 11.1 Don'ts
- ❌ Using 5000px images when 1920px is max display size
- ❌ Forgetting alt text
- ❌ Using PNG for photos (use WebP or JPG)
- ❌ Not lazy loading below-fold images
- ❌ Omitting width/height (causes layout shift)
- ❌ Using background-image for content images
- ❌ Auto-playing videos with sound
- ❌ Not providing video captions

### 11.2 Do's
- ✅ Compress all images before upload
- ✅ Use responsive image techniques
- ✅ Provide fallbacks for modern formats
- ✅ Write descriptive alt text
- ✅ Test on slow connections (3G)
- ✅ Specify dimensions to prevent layout shift
- ✅ Use vector formats when possible
- ✅ Optimize for Core Web Vitals

---

## 12. Testing Recommendations

### 12.1 Visual Testing
- ✓ Images render correctly on all breakpoints
- ✓ No pixelation or blurriness
- ✓ Correct aspect ratios maintained
- ✓ Colors accurate

### 12.2 Performance Testing
- ✓ Lighthouse score > 90
- ✓ Largest Contentful Paint < 2.5s
- ✓ Cumulative Layout Shift < 0.1
- ✓ Images load progressively (not all at once)

### 12.3 Accessibility Testing
- ✓ All images have alt text (or alt="")
- ✓ Alt text is descriptive
- ✓ Screen reader reads images correctly
- ✓ Text overlays have sufficient contrast

---

**Last Updated**: 2025-01-10  
**Version**: 1.0
