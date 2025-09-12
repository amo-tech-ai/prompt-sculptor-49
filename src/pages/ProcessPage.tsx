import { Helmet } from 'react-helmet-async';
import { ProcessHero } from '@/components/sections/ProcessHero';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { ProcessPhases } from '@/components/sections/ProcessPhases';
import { ProcessComparison } from '@/components/sections/ProcessComparison';
import { ProcessMetrics } from '@/components/sections/ProcessMetrics';
import { ProcessCalculator } from '@/components/sections/ProcessCalculator';
import { ProcessCTA } from '@/components/sections/ProcessCTA';

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>8-Week AI Development Process | AMO AI Agency</title>
        <meta name="description" content="Discover how AMO AI delivers complete AI applications in just 8 weeks, not months. See our proven process from design sprint to launch." />
        <meta name="keywords" content="AI development process, 8 week delivery, rapid AI development, AI project timeline, fast AI solutions" />
        <link rel="canonical" href="https://amoai.agency/process" />
        
        {/* Open Graph */}
        <meta property="og:title" content="8-Week AI Development Process | AMO AI Agency" />
        <meta property="og:description" content="Discover how AMO AI delivers complete AI applications in just 8 weeks, not months. See our proven process from design sprint to launch." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amoai.agency/process" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="8-Week AI Development Process | AMO AI Agency" />
        <meta name="twitter:description" content="Discover how AMO AI delivers complete AI applications in just 8 weeks, not months. See our proven process from design sprint to launch." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "8-Week AI Development Process",
            "description": "Complete AI application development and deployment in 8 weeks",
            "provider": {
              "@type": "Organization",
              "name": "AMO AI",
              "url": "https://amoai.agency"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Design Sprint"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rapid Build"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Integration & Testing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Launch & Scale"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <ProcessHero />
      <ProcessTimeline />
      <ProcessPhases />
      <ProcessComparison />
      <ProcessMetrics />
      <ProcessCalculator />
      <ProcessCTA />
    </>
  );
};

export default ProcessPage;