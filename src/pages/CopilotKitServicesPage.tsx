import { Helmet } from 'react-helmet-async';
import { CopilotKitHero } from '@/components/sections/copilotkit/CopilotKitHero';
import { CopilotKitProblem } from '@/components/sections/copilotkit/CopilotKitProblem';
import { CopilotKitSolution } from '@/components/sections/copilotkit/CopilotKitSolution';
import { CopilotKitFeatures } from '@/components/sections/copilotkit/CopilotKitFeatures';
import { CopilotKitUseCases } from '@/components/sections/copilotkit/CopilotKitUseCases';
import { CopilotKitProcess } from '@/components/sections/copilotkit/CopilotKitProcess';
import { CopilotKitDeliverables } from '@/components/sections/copilotkit/CopilotKitDeliverables';
import { CopilotKitResults } from '@/components/sections/copilotkit/CopilotKitResults';
import { CopilotKitFAQ } from '@/components/sections/copilotkit/CopilotKitFAQ';
import { CopilotKitFinalCTA } from '@/components/sections/copilotkit/CopilotKitFinalCTA';

const CopilotKitServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>CopilotKit AI Services | AMO AI - Embed AI Copilots in Your Apps</title>
        <meta name="description" content="Transform your applications with context-aware AI copilots. Automate workflows, reduce support costs, and delight users with CopilotKit integration services." />
        <meta name="keywords" content="CopilotKit, AI copilots, application integration, workflow automation, AI assistants, conversational AI" />
        <link rel="canonical" href="https://amoai.agency/services/copilotkit" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CopilotKit AI Services | AMO AI" />
        <meta property="og:description" content="Embed AI copilots into your applications with CopilotKit. Automate workflows, cut costs, and delight users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amoai.agency/services/copilotkit" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CopilotKit AI Services",
            "provider": {
              "@type": "Organization",
              "name": "AMO AI",
              "url": "https://amoai.agency"
            },
            "description": "Professional CopilotKit integration services to embed context-aware AI copilots into applications for workflow automation and enhanced user experience.",
            "areaServed": "Worldwide",
            "serviceType": "AI Integration Services"
          })}
        </script>
      </Helmet>

      <CopilotKitHero />
      <CopilotKitProblem />
      <CopilotKitSolution />
      <CopilotKitFeatures />
      <CopilotKitUseCases />
      <CopilotKitProcess />
      <CopilotKitDeliverables />
      <CopilotKitResults />
      <CopilotKitFAQ />
      <CopilotKitFinalCTA />
    </>
  );
};

export default CopilotKitServicesPage;