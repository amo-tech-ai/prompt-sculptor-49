/**
 * Error tracking and monitoring utilities
 * Supports Sentry and custom error logging
 */

interface ErrorContext {
  user?: {
    id?: string;
    email?: string;
  };
  tags?: Record<string, string>;
  extra?: Record<string, any>;
}

interface ErrorReport {
  message: string;
  stack?: string;
  level: 'error' | 'warning' | 'info';
  timestamp: string;
  context?: ErrorContext;
}

// Initialize error tracking
export const initErrorTracking = () => {
  const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

  if (SENTRY_DSN && typeof window !== 'undefined') {
    // Load Sentry SDK dynamically
    import('@sentry/react').then((Sentry) => {
      Sentry.init({
        dsn: SENTRY_DSN,
        environment: import.meta.env.MODE,
        integrations: [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
        // Performance Monitoring
        tracesSampleRate: import.meta.env.MODE === 'production' ? 0.1 : 1.0,
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        // Filter out common non-critical errors
        beforeSend(event, hint) {
          // Filter out errors from browser extensions
          if (event.exception?.values?.[0]?.value?.includes('Extension')) {
            return null;
          }
          return event;
        },
      });

      console.log('✅ Sentry error tracking initialized');
    }).catch((error) => {
      console.error('❌ Failed to initialize Sentry:', error);
    });
  } else {
    // Fallback to console logging in development
    if (import.meta.env.MODE === 'development') {
      console.log('📝 Using console-based error tracking (development mode)');
    } else {
      console.warn('⚠️ No error tracking configured for production');
    }
  }

  // Set up global error handlers
  window.addEventListener('error', (event) => {
    logError({
      message: event.message,
      stack: event.error?.stack,
      level: 'error',
      timestamp: new Date().toISOString(),
      context: {
        extra: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      },
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError({
      message: `Unhandled Promise Rejection: ${event.reason}`,
      stack: event.reason?.stack,
      level: 'error',
      timestamp: new Date().toISOString(),
    });
  });
};

// Log errors with context
export const logError = (report: ErrorReport) => {
  const { message, stack, level, context } = report;

  // Send to Sentry if available
  if (window.Sentry) {
    const captureMethod = level === 'error' ? 'captureException' : 'captureMessage';
    
    window.Sentry.withScope((scope) => {
      if (context?.user) {
        scope.setUser(context.user);
      }
      if (context?.tags) {
        Object.entries(context.tags).forEach(([key, value]) => {
          scope.setTag(key, value);
        });
      }
      if (context?.extra) {
        scope.setContext('additional', context.extra);
      }

      if (level === 'error' && stack) {
        window.Sentry.captureException(new Error(message));
      } else {
        window.Sentry.captureMessage(message, level);
      }
    });
  }

  // Console logging for development
  if (import.meta.env.MODE === 'development') {
    const logMethod = level === 'error' ? console.error : level === 'warning' ? console.warn : console.log;
    logMethod('🐛 Error Report:', { message, stack, context });
  }

  // Store critical errors in localStorage for debugging
  if (level === 'error') {
    try {
      const errors = JSON.parse(localStorage.getItem('app_errors') || '[]');
      errors.push(report);
      // Keep only last 10 errors
      localStorage.setItem('app_errors', JSON.stringify(errors.slice(-10)));
    } catch (e) {
      // Ignore localStorage errors
    }
  }
};

// Convenience functions
export const errorTracking = {
  // Track caught errors
  captureError: (error: Error, context?: ErrorContext) => {
    logError({
      message: error.message,
      stack: error.stack,
      level: 'error',
      timestamp: new Date().toISOString(),
      context,
    });
  },

  // Track warnings
  captureWarning: (message: string, context?: ErrorContext) => {
    logError({
      message,
      level: 'warning',
      timestamp: new Date().toISOString(),
      context,
    });
  },

  // Track info messages
  captureInfo: (message: string, context?: ErrorContext) => {
    logError({
      message,
      level: 'info',
      timestamp: new Date().toISOString(),
      context,
    });
  },

  // API error tracking
  captureApiError: (endpoint: string, error: any, requestData?: any) => {
    logError({
      message: `API Error: ${endpoint}`,
      stack: error?.stack,
      level: 'error',
      timestamp: new Date().toISOString(),
      context: {
        tags: {
          endpoint,
          error_type: 'api_error',
        },
        extra: {
          requestData,
          responseError: error?.response?.data,
          statusCode: error?.response?.status,
        },
      },
    });
  },

  // Form validation errors
  captureFormError: (formName: string, errors: any) => {
    logError({
      message: `Form Validation Error: ${formName}`,
      level: 'warning',
      timestamp: new Date().toISOString(),
      context: {
        tags: {
          form_name: formName,
          error_type: 'validation_error',
        },
        extra: { errors },
      },
    });
  },

  // Set user context for tracking
  setUser: (user: { id?: string; email?: string }) => {
    if (window.Sentry) {
      window.Sentry.setUser(user);
    }
  },

  // Clear user context
  clearUser: () => {
    if (window.Sentry) {
      window.Sentry.setUser(null);
    }
  },
};

// Type declarations
declare global {
  interface Window {
    Sentry?: any;
  }
}
