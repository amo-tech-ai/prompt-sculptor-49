export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: 'ai-web-apps',
    title: 'AI Web Applications',
    description: 'Build full-stack applications with AI assistants integrated at the core.',
    deliverables: [
      'Custom AI dashboards',
      'Auth & accounts',
      'Scalable Supabase backend'
    ],
    technologies: ['Webflow', 'Supabase'],
    href: '/services/ai-web-apps'
  },
  {
    id: 'conversational-ai',
    title: 'Conversational AI',
    description: 'Smart chatbots with Claude & ChatGPT for 24/7 support.',
    deliverables: [
      'Claude/ChatGPT integration',
      'Multilingual',
      'Human handoff'
    ],
    technologies: ['Claude', 'ChatGPT', 'OpenAI'],
    href: '/services/conversational-ai'
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Automate workflows across sales, marketing, ops with WhatsApp & n8n.',
    deliverables: [
      'WhatsApp flows',
      'n8n pipelines',
      'Reporting system'
    ],
    technologies: ['WhatsApp', 'n8n'],
    href: '/services/process-automation'
  },
  {
    id: 'multi-agent-systems',
    title: 'Multi-Agent Systems',
    description: 'AI agents collaborating on complex tasks (CopilotKit, CrewAI, LangChain).',
    deliverables: [
      'Multi-step reasoning',
      'Automated decisions',
      'Orchestration engine'
    ],
    technologies: ['CopilotKit', 'CrewAI', 'LangChain', 'LangGraph'],
    href: '/services/multi-agent-systems'
  },
  {
    id: 'data-and-accounts',
    title: 'Data & Accounts',
    description: 'Manage data, users, and payments with production-ready tools.',
    deliverables: [
      'Supabase DB',
      'Clerk auth',
      'Stripe billing'
    ],
    technologies: ['Supabase', 'Clerk', 'Cloudinary', 'Stripe'],
    href: '/services/data-and-accounts'
  },
  {
    id: 'web-design-prototyping',
    title: 'Web Design & Prototyping',
    description: 'Rapidly design, prototype, and launch modern sites with AI help.',
    deliverables: [
      'Webflow build',
      'Lovable prototyping',
      'Claude iteration'
    ],
    technologies: ['Webflow', 'Lovable', 'Claude'],
    href: '/services/web-design-prototyping'
  }
];