import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/sections/HeroSection';
import { UpdatedSpecialServices } from '@/components/sections/UpdatedSpecialServices';
import { AMOCards } from '@/components/sections/AMOCards';
import { PlatformsInProduction } from '@/components/sections/PlatformsInProduction';
import { ServicePillars } from '@/components/sections/ServicePillars';
import { TechStackShowcase } from '@/components/sections/TechStackShowcase';
import { JourneyToSuccess } from '@/components/sections/JourneyToSuccess';
import { PricingSection } from '@/components/sections/PricingSection';
import { AIBriefTool } from '@/components/sections/AIBriefTool';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { defaultMeta } from '@/lib/seo';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{defaultMeta.defaultTitle}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
        <link rel="canonical" href={defaultMeta.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={defaultMeta.defaultTitle} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:type" content={defaultMeta.openGraph.type} />
        <meta property="og:url" content={defaultMeta.openGraph.url} />
        <meta property="og:site_name" content={defaultMeta.openGraph.siteName} />
        <meta property="og:image" content={defaultMeta.openGraph.images[0].url} />
        <meta property="og:image:width" content={defaultMeta.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={defaultMeta.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={defaultMeta.openGraph.images[0].alt} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={defaultMeta.twitter.cardType} />
        <meta name="twitter:site" content={defaultMeta.twitter.site} />
        <meta name="twitter:creator" content={defaultMeta.twitter.handle} />
        <meta name="twitter:title" content={defaultMeta.defaultTitle} />
        <meta name="twitter:description" content={defaultMeta.description} />
        <meta name="twitter:image" content={defaultMeta.openGraph.images[0].url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AMO AI",
            "url": "https://amoai.agency",
            "logo": "https://amoai.agency/logo.webp",
            "description": defaultMeta.description,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "email": "hello@amoai.agency"
            },
            "sameAs": [
              "https://twitter.com/amoai",
              "https://linkedin.com/company/amoai"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>

      <HeroSection />
      <UpdatedSpecialServices />
      <AMOCards />
      <PlatformsInProduction />
      <ServicePillars />
      <TechStackShowcase />
      <JourneyToSuccess />
      <PricingSection />
      <AIBriefTool />
      <FinalCTA />
    </>
  );
};

export default HomePage;