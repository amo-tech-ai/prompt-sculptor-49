/**
 * Analytics tracking utilities
 * Supports Google Analytics 4 and Plausible Analytics
 */

// Types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PageViewData {
  path: string;
  title: string;
  referrer?: string;
}

// Initialize analytics based on environment
export const initAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

  // Google Analytics 4
  if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
    // Load GA4 script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // We'll manually track page views
      cookie_flags: 'SameSite=None;Secure',
    });

    console.log('✅ Google Analytics initialized');
  }

  // Plausible Analytics
  if (PLAUSIBLE_DOMAIN && typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', PLAUSIBLE_DOMAIN);
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);

    console.log('✅ Plausible Analytics initialized');
  }

  if (!GA_MEASUREMENT_ID && !PLAUSIBLE_DOMAIN) {
    console.warn('⚠️ No analytics providers configured');
  }
};

// Track page views
export const trackPageView = (data: PageViewData) => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: data.path,
      page_title: data.title,
      page_referrer: data.referrer,
    });
  }

  // Plausible (automatic, but we can trigger custom events)
  if (window.plausible) {
    window.plausible('pageview');
  }

  console.log('📊 Page view tracked:', data.path);
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
  const { action, category, label, value } = event;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible custom events
  if (window.plausible) {
    window.plausible(action, {
      props: {
        category,
        label: label || '',
      },
    });
  }

  console.log('📊 Event tracked:', { action, category, label, value });
};

// Specific tracking functions for common events
export const analytics = {
  // Brief wizard events
  briefStarted: () => {
    trackEvent({
      action: 'brief_started',
      category: 'Wizard',
      label: 'User started project brief',
    });
  },

  briefStageCompleted: (stageName: string) => {
    trackEvent({
      action: 'brief_stage_completed',
      category: 'Wizard',
      label: stageName,
    });
  },

  briefSubmitted: (briefId: string) => {
    trackEvent({
      action: 'brief_submitted',
      category: 'Conversion',
      label: briefId,
      value: 1,
    });
  },

  // Contact events
  contactFormViewed: () => {
    trackEvent({
      action: 'contact_form_viewed',
      category: 'Engagement',
    });
  },

  contactFormSubmitted: () => {
    trackEvent({
      action: 'contact_form_submitted',
      category: 'Conversion',
      value: 1,
    });
  },

  // CTA clicks
  ctaClicked: (ctaName: string, location: string) => {
    trackEvent({
      action: 'cta_clicked',
      category: 'Engagement',
      label: `${ctaName} - ${location}`,
    });
  },

  // Service page views
  serviceViewed: (serviceName: string) => {
    trackEvent({
      action: 'service_viewed',
      category: 'Content',
      label: serviceName,
    });
  },

  // WhatsApp float button
  whatsappClicked: (source: string) => {
    trackEvent({
      action: 'whatsapp_clicked',
      category: 'Engagement',
      label: source,
    });
  },

  // Project views
  projectViewed: (projectName: string) => {
    trackEvent({
      action: 'project_viewed',
      category: 'Content',
      label: projectName,
    });
  },

  // External link clicks
  externalLinkClicked: (url: string, linkText: string) => {
    trackEvent({
      action: 'external_link_clicked',
      category: 'Engagement',
      label: `${linkText} -> ${url}`,
    });
  },
};

// Type declarations for window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    plausible: (event: string, options?: { props: Record<string, string> }) => void;
  }
}
