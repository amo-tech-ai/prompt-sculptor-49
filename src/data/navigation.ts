export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { title: 'Home', href: '/' },
  { 
    title: 'Services', 
    href: '/services',
    children: [
      { title: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
      { title: 'CopilotKit AI', href: '/services/copilotkit' },
      { title: 'CrewAI Multi-Agent', href: '/services/crewai' }
    ]
  },
  { title: 'Projects', href: '/projects' },
  { title: 'About', href: '/about' },
  { title: 'Process', href: '/process' },
  { title: 'AI Brief', href: '/brief' },
  { title: 'Contact', href: '/contact' }
];

export const footerLinks = {
  services: [
    { title: 'AI Web Applications', href: '/services/ai-applications' },
    { title: 'Conversational AI', href: '/services/conversational-ai' },
    { title: 'Process Automation', href: '/services/automation' },
    { title: 'Multi-Agent Systems', href: '/services/multi-agent' },
    { title: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
    { title: 'CopilotKit AI', href: '/services/copilotkit' },
    { title: 'CrewAI Multi-Agent', href: '/services/crewai' }
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' }
  ]
};