export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Projects', href: '/projects' },
  { title: 'Process', href: '/process' },
  { title: 'AI Brief', href: '/brief' },
  { title: 'Contact', href: '/contact' }
];

export const footerLinks = {
  services: [
    { title: 'AI Web Applications', href: '/services/ai-applications' },
    { title: 'Conversational AI', href: '/services/conversational-ai' },
    { title: 'Process Automation', href: '/services/automation' },
    { title: 'Multi-Agent Systems', href: '/services/multi-agent' }
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    { title: 'Blog', href: '/blog' }
  ],
  legal: [
    { title: 'Privacy Policy', href: '/legal/privacy' },
    { title: 'Terms of Service', href: '/legal/terms' },
    { title: 'Cookie Policy', href: '/legal/cookies' }
  ]
};