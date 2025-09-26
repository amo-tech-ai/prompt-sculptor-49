import { Helmet } from 'react-helmet-async';
import CrewAIHero from '@/components/sections/crewai/CrewAIHero';
import CrewAIProblem from '@/components/sections/crewai/CrewAIProblem';
import CrewAISolution from '@/components/sections/crewai/CrewAISolution';
import CrewAIFeatures from '@/components/sections/crewai/CrewAIFeatures';
import CrewAIUseCases from '@/components/sections/crewai/CrewAIUseCases';
import CrewAIProcess from '@/components/sections/crewai/CrewAIProcess';
import CrewAIDeliverables from '@/components/sections/crewai/CrewAIDeliverables';
import CrewAIResults from '@/components/sections/crewai/CrewAIResults';
import CrewAICaseSnapshot from '@/components/sections/crewai/CrewAICaseSnapshot';
import CrewAIFAQ from '@/components/sections/crewai/CrewAIFAQ';
import CrewAIFinalCTA from '@/components/sections/crewai/CrewAIFinalCTA';

const CrewAIServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>CrewAI Multi-Agent Systems | AI Crews for Business Automation | AMO AI</title>
        <meta 
          name="description" 
          content="Deploy CrewAI multi-agent systems for your business. Get 90% automation, 60% cost reduction, and ROI in 60 days with specialized AI crews that collaborate like your best teams."
        />
        <meta name="keywords" content="CrewAI, multi-agent systems, AI automation, business process automation, AI crews, workflow automation" />
        <link rel="canonical" href="https://amoai.dev/services/crewai" />
      </Helmet>

      <main>
        <CrewAIHero />
        <CrewAIProblem />
        <CrewAISolution />
        <CrewAIFeatures />
        <CrewAIUseCases />
        <CrewAIProcess />
        <CrewAIDeliverables />
        <CrewAIResults />
        <CrewAICaseSnapshot />
        <CrewAIFAQ />
        <CrewAIFinalCTA />
      </main>
    </>
  );
};

export default CrewAIServicesPage;