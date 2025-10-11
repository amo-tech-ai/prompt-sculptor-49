import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { SkipToContent } from "@/components/ui/skip-to-content";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { usePageTracking } from "@/hooks/usePageTracking";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProcessPage from "./pages/ProcessPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { WhatsAppAutomationPage } from "./pages/WhatsAppAutomationPage";
import CopilotKitServicesPage from "./pages/CopilotKitServicesPage";
import CrewAIServicesPage from "./pages/CrewAIServicesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import BriefWizard from "./pages/BriefWizard";
import BriefSuccess from "./pages/BriefSuccess";
import LoginPage from "./pages/crm/LoginPage";
import SignupPage from "./pages/crm/SignupPage";
import DashboardPage from "./pages/crm/DashboardPage";
import ClientsPage from "./pages/crm/ClientsPage";
import ClientDetailPage from "./pages/crm/ClientDetailPage";
import DealsPage from "./pages/crm/DealsPage";
import DealDetailPage from "./pages/crm/DealDetailPage";
import InvoicesPage from "./pages/crm/InvoicesPage";

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const AppRoutes = () => {
  // Track page views automatically (must be inside Router)
  usePageTracking();
  
  return (
    <>
      <SkipToContent />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/whatsapp-automation" element={<WhatsAppAutomationPage />} />
            <Route path="/services/copilotkit" element={<CopilotKitServicesPage />} />
            <Route path="/services/crewai" element={<CrewAIServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/brief" element={<BriefWizard />} />
            <Route path="/brief/success" element={<BriefSuccess />} />
            {/* CRM Routes */}
            <Route path="/crm/login" element={<LoginPage />} />
            <Route path="/crm/signup" element={<SignupPage />} />
            <Route path="/crm/dashboard" element={<DashboardPage />} />
            <Route path="/crm/clients" element={<ClientsPage />} />
            <Route path="/crm/clients/:id" element={<ClientDetailPage />} />
            <Route path="/crm/deals" element={<DealsPage />} />
            <Route path="/crm/deals/:id" element={<DealDetailPage />} />
            <Route path="/crm/invoices" element={<InvoicesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ErrorBoundary>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </ErrorBoundary>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
