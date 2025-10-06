import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/copilot-chat.css";
import { initAnalytics } from "./lib/analytics";
import { initErrorTracking } from "./lib/errorTracking";

// Initialize monitoring and analytics
if (typeof window !== 'undefined') {
  // Wait for cookie consent before initializing analytics
  const consentGiven = localStorage.getItem('cookie-consent') === 'accepted';
  
  if (consentGiven) {
    initAnalytics();
  }
  
  // Always initialize error tracking for monitoring
  initErrorTracking();
}

createRoot(document.getElementById("root")!).render(<App />);
