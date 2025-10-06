import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    
    // Initialize analytics here after consent
    if (import.meta.env.PROD) {
      // TODO: Initialize Google Analytics or Plausible
      console.log("Analytics initialized after consent");
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                We use cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience on our site and to show you relevant content. 
                By continuing to use this site, you consent to our use of cookies. 
                Read our{" "}
                <a href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="flex-1 sm:flex-initial"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 sm:flex-initial"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleDecline}
        className="absolute top-2 right-2 p-2 rounded-md hover:bg-muted transition-colors"
        aria-label="Close cookie banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
