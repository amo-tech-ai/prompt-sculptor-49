import { ComponentType } from 'react';
import { MultiAgentSystemsService } from '@/components/services/MultiAgentSystemsService';

interface ServiceContent {
  component: ComponentType;
  seo: {
    title: string;
    description: string;
    keywords: string;
    structuredData: object;
  };
}

const serviceContentMap: Record<string, ServiceContent> = {
  'multi-agent-systems': {
    component: MultiAgentSystemsService,
    seo: {
      title: 'Multi-Agent AI Systems | AMO AI - 90% Automation in 16 Weeks',
      description: 'Transform your business with intelligent AI agents that collaborate like a team. Achieve 90% automation with our multi-agent systems in just 12-16 weeks.',
      keywords: 'multi-agent AI, AI automation, business process automation, AI agents, artificial intelligence consulting',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Multi-Agent AI Systems",
        "provider": {
          "@type": "Organization",
          "name": "AMO AI",
          "url": "https://amoai.agency"
        },
        "description": "Specialized AI agents that collaborate to run business workflows at scale, delivering up to 90% automation in 12-16 weeks.",
        "areaServed": "Worldwide"
      }
    }
  }
};

export const getServiceContent = (serviceId: string): ServiceContent | null => {
  return serviceContentMap[serviceId] || null;
};