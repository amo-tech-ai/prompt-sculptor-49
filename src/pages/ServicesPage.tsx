import { Helmet } from 'react-helmet-async';
import { ServicesHero } from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ServicesTechnology } from '@/components/sections/ServicesTechnology';
import { ServicesInvestment } from '@/components/sections/ServicesInvestment';
import { ServicesCTA } from '@/components/sections/ServicesCTA';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Services | AMO AI - Digital Transformation in Weeks</title>
        <meta name="description" content="Transform your business with our AI-powered services. From marketplace solutions to automation workflows, we deliver cutting-edge AI applications in weeks, not months." />
        <meta name="keywords" content="AI services, conversational AI, automation, multi-agent systems, web development, marketplace solutions" />
        <link rel="canonical" href="https://amoai.agency/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI-Powered Services | AMO AI" />
        <meta property="og:description" content="Transform your business with our AI-powered services. We deliver cutting-edge solutions in weeks, not months." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amoai.agency/services" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Powered Digital Services",
            "provider": {
              "@type": "Organization",
              "name": "AMO AI",
              "url": "https://amoai.agency"
            },
            "description": "Complete AI-powered digital transformation services including marketplace solutions, conversational AI, automation, and custom development.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Marketplace Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conversational AI Systems"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <ServicesHero />
      <ServicesGrid />
      <ServicesTechnology />
      <ServicesInvestment />
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;