# 📊 Analytics & Monitoring Setup Guide

## Overview

AMO AI platform uses a comprehensive monitoring and analytics stack to track user behavior, performance, and errors.

---

## 🎯 Analytics Providers

### Google Analytics 4 (Primary)

**Setup Steps:**

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure Environment Variable**
   ```bash
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **What's Tracked:**
   - Page views (automatic on route change)
   - Brief wizard events (started, stage completed, submitted)
   - CTA clicks
   - Contact form submissions
   - External link clicks
   - Service page views
   - WhatsApp button clicks

### Plausible Analytics (Privacy-Focused Alternative)

**Setup Steps:**

1. **Create Plausible Account**
   - Go to [Plausible.io](https://plausible.io/)
   - Add your domain
   - No tracking code needed, just configure the domain

2. **Configure Environment Variable**
   ```bash
   VITE_PLAUSIBLE_DOMAIN=amoai.agency
   ```

3. **Benefits:**
   - GDPR compliant
   - Lightweight (< 1KB)
   - No cookies
   - Privacy-focused
   - Simple dashboard

### Using Both Providers

You can run both GA4 and Plausible simultaneously. The platform will initialize both if environment variables are present.

---

## 🐛 Error Tracking

### Sentry (Recommended)

**Setup Steps:**

1. **Create Sentry Project**
   - Go to [Sentry.io](https://sentry.io/)
   - Create a new React project
   - Copy your DSN (format: `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`)

2. **Configure Environment Variable**
   ```bash
   VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
   ```

3. **Features Enabled:**
   - Error tracking
   - Performance monitoring (10% sampling in production)
   - Session replay (10% of sessions, 100% of errors)
   - Source maps support
   - User context tracking
   - Breadcrumbs

4. **Automatic Error Filtering:**
   - Browser extension errors filtered
   - Non-critical warnings ignored
   - Rate limiting applied

---

## 📝 Tracked Events

### Brief Wizard Events

| Event Name | Description | Data Tracked |
|------------|-------------|--------------|
| `brief_started` | User lands on /brief page | Timestamp, referrer |
| `brief_stage_completed` | User completes a wizard stage | Stage name, timestamp |
| `brief_submitted` | User submits complete brief | Brief ID, email, timestamp |

### User Engagement

| Event Name | Description | Data Tracked |
|------------|-------------|--------------|
| `cta_clicked` | CTA button clicked | Button name, page location |
| `contact_form_viewed` | Contact page visited | Timestamp |
| `contact_form_submitted` | Contact form submitted | Timestamp |
| `service_viewed` | Service page viewed | Service name |
| `project_viewed` | Project/case study viewed | Project name |
| `whatsapp_clicked` | WhatsApp float clicked | Source page |
| `external_link_clicked` | External link clicked | URL, link text |

---

## 🔐 Privacy & Compliance

### Cookie Consent

The platform includes a GDPR-compliant cookie consent banner:

- **Displays on first visit**
- **Analytics only initialize after consent**
- **Error tracking always active** (for monitoring, not marketing)
- **Stored in localStorage** (`cookie-consent` key)
- **User can decline** (analytics disabled, error tracking continues)

### Data Collection

**When consent is given:**
- ✅ Page views
- ✅ Custom events
- ✅ User interactions
- ✅ Performance metrics

**Always collected (legitimate interest):**
- ✅ Error logs
- ✅ Performance monitoring
- ✅ Security events

---

## 🚀 Implementation Details

### Files Created

```
src/lib/
├── analytics.ts          # Analytics initialization and tracking
├── errorTracking.ts      # Error monitoring with Sentry
└── ...

src/hooks/
├── usePageTracking.ts    # Automatic page view tracking
└── ...

src/components/ui/
├── cookie-consent.tsx    # GDPR consent banner
└── ...
```

### How It Works

1. **Initialization** (`src/main.tsx`)
   - Checks for cookie consent
   - Initializes analytics if consent given
   - Always initializes error tracking

2. **Page Tracking** (`src/hooks/usePageTracking.ts`)
   - Automatic on route change
   - Tracks page path, title, referrer
   - Only when consent is given

3. **Event Tracking** (`src/lib/analytics.ts`)
   - Convenience functions for common events
   - Tracks to both GA4 and Plausible
   - Console logging in development

4. **Error Tracking** (`src/lib/errorTracking.ts`)
   - Global error handlers
   - Automatic error categorization
   - Context enrichment
   - Stores last 10 errors in localStorage

---

## 📊 Viewing Analytics

### Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your AMO AI property
3. Key reports:
   - **Realtime** → See active users now
   - **Reports > Engagement > Events** → Custom events
   - **Reports > Engagement > Pages** → Page views
   - **Explore** → Custom reports

### Plausible

1. Go to [Plausible Dashboard](https://plausible.io/)
2. Select amoai.agency domain
3. Key metrics:
   - Unique visitors
   - Page views
   - Bounce rate
   - Top pages
   - Referrers
   - Goals (custom events)

### Sentry

1. Go to [Sentry Dashboard](https://sentry.io/)
2. Select AMO AI project
3. Key views:
   - **Issues** → All errors and warnings
   - **Performance** → Slow transactions
   - **Replays** → Session recordings of errors
   - **Releases** → Error tracking by version

---

## 🧪 Testing Analytics

### Development Mode

```bash
# Analytics will log to console
npm run dev

# Check console for:
✅ Google Analytics initialized
✅ Plausible Analytics initialized
✅ Sentry error tracking initialized
📊 Page view tracked: /brief
📊 Event tracked: { action: 'brief_started', ... }
```

### Production Testing

1. **Accept cookies** on the banner
2. **Open browser DevTools** → Network tab
3. **Look for requests to:**
   - `google-analytics.com/g/collect` (GA4)
   - `plausible.io/api/event` (Plausible)
   - `sentry.io/api/*/envelope/` (Sentry)

---

## 🛠️ Troubleshooting

### Analytics Not Tracking

**Issue:** No events appear in GA4/Plausible

**Solutions:**
1. Check if cookie consent was accepted
2. Verify environment variables are set
3. Check browser console for initialization messages
4. Disable ad blockers (they block analytics)
5. Check Network tab for blocked requests

### Sentry Not Capturing Errors

**Issue:** Errors not appearing in Sentry dashboard

**Solutions:**
1. Verify `VITE_SENTRY_DSN` is set correctly
2. Check browser console for Sentry initialization
3. Trigger a test error: `throw new Error('Test Sentry')`
4. Check Sentry project settings (DSN correct?)
5. Verify source maps are uploaded (for production)

### Cookie Banner Not Showing

**Issue:** Cookie consent banner doesn't appear

**Solutions:**
1. Clear localStorage: `localStorage.removeItem('cookie-consent')`
2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. Check if banner was previously dismissed

---

## 📈 Best Practices

### Event Naming

- **Use snake_case**: `brief_submitted` not `BriefSubmitted`
- **Be descriptive**: `cta_clicked` better than `click`
- **Include context**: `contact_form_submitted` not just `submitted`

### Performance

- Analytics scripts load asynchronously
- Don't track PII (emails, names, etc.) in events
- Keep event properties minimal
- Use error tracking for debugging, not analytics

### Privacy

- Always respect user consent choices
- Don't track sensitive data
- Review GDPR compliance regularly
- Provide opt-out options

---

## 📚 Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Plausible Documentation](https://plausible.io/docs)
- [Sentry React SDK](https://docs.sentry.io/platforms/javascript/guides/react/)
- [GDPR Compliance Guide](https://gdpr.eu/cookies/)

---

**Last Updated:** January 6, 2025  
**Maintained By:** AMO AI Team
