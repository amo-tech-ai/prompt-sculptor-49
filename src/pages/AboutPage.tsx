import { Helmet } from "react-helmet-async";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutWhyChooseUs } from "@/components/sections/AboutWhyChooseUs";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { AboutProcess } from "@/components/sections/AboutProcess";
import { AboutTrustedBy } from "@/components/sections/AboutTrustedBy";
import { AboutCTA } from "@/components/sections/AboutCTA";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About AMO AI - Launching AI Applications in Weeks, Not Months</title>
        <meta 
          name="description" 
          content="Learn about AMO AI's mission to help businesses launch AI-powered applications in 2-8 weeks. Meet our team of AI engineers, product strategists, and designers." 
        />
        <meta name="keywords" content="AMO AI, About Us, AI Applications, Team, Mission, AI Development Company" />
        <link rel="canonical" href="/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About AMO AI - AI Application Development Experts" />
        <meta property="og:description" content="Discover how AMO AI transforms businesses with AI-powered applications delivered in weeks. Meet our expert team and learn our proven process." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AMO AI - AI Development Experts" />
        <meta name="twitter:description" content="Meet the team behind AMO AI's rapid AI application development process. 2-8 week delivery, 293% average ROI." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <AboutHero />
        <AboutMission />
        <AboutWhyChooseUs />
        <AboutTeam />
        <AboutProcess />
        <AboutTrustedBy />
        <AboutCTA />
      </main>
    </>
  );
};

export default AboutPage;