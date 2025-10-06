import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

/**
 * Hook to automatically track page views when route changes
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if analytics is enabled
    const consentGiven = localStorage.getItem('cookie-consent') === 'accepted';
    
    if (consentGiven) {
      // Get page title from document or generate from path
      const pageTitle = document.title || `AMO AI - ${location.pathname}`;
      
      trackPageView({
        path: location.pathname + location.search,
        title: pageTitle,
        referrer: document.referrer,
      });
    }
  }, [location]);
};
