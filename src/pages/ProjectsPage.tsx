import { Helmet } from 'react-helmet-async';
import { ProjectsHero } from '@/components/sections/ProjectsHero';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { PortfolioStatistics } from '@/components/sections/PortfolioStatistics';
import { TechnologyShowcase } from '@/components/sections/TechnologyShowcase';
import { ProjectsCTA } from '@/components/sections/ProjectsCTA';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our AI Success Stories | Portfolio | AMO AI Agency</title>
        <meta name="description" content="Explore our portfolio of successful AI applications. See how we've helped businesses automate processes, increase revenue, and achieve 3x ROI in just 8 weeks." />
        <meta name="keywords" content="AI portfolio, successful AI projects, AI case studies, business automation, AI ROI, AI applications" />
        <link rel="canonical" href="https://amoai.agency/projects" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our AI Success Stories | Portfolio | AMO AI Agency" />
        <meta property="og:description" content="Explore our portfolio of successful AI applications. See how we've helped businesses automate processes, increase revenue, and achieve 3x ROI in just 8 weeks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amoai.agency/projects" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our AI Success Stories | Portfolio | AMO AI Agency" />
        <meta name="twitter:description" content="Explore our portfolio of successful AI applications. See how we've helped businesses automate processes, increase revenue, and achieve 3x ROI in just 8 weeks." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AMO AI Portfolio",
            "description": "Successful AI projects and applications delivered by AMO AI",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "name": "FashionOS - Event Management Platform",
                "description": "Revolutionary fashion week management platform reducing 3-day setup to 3 minutes",
                "author": {
                  "@type": "Organization",
                  "name": "AMO AI"
                }
              },
              {
                "@type": "CreativeWork",
                "name": "AutoMax AI Marketplace",
                "description": "Enterprise automotive marketplace with $4.3M monthly GMV",
                "author": {
                  "@type": "Organization",
                  "name": "AMO AI"
                }
              },
              {
                "@type": "CreativeWork",
                "name": "I Love Medellín Tourism Platform",
                "description": "Multi-vertical tourism marketplace with AI concierge",
                "author": {
                  "@type": "Organization",
                  "name": "AMO AI"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <ProjectsHero />
      <FeaturedProjects />
      <PortfolioStatistics />
      <TechnologyShowcase />
      <ProjectsCTA />
    </>
  );
};

export default ProjectsPage;