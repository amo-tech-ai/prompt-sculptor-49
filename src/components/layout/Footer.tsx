import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-foreground">AMO AI</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm">
                We specialize in rapid application development using Claude, GPT-4, CrewAI, Lovable, and 50+ cutting-edge technologies. From MVPs to enterprise solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@amoai.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Our Stack */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Our Stack
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">AI Development</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">No-Code Platforms</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Backend Solutions</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Automation</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/roi-calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 AMO AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-muted-foreground">50+ Live Applications</span>
              <span className="text-xs text-muted-foreground">2-16 Week Delivery</span>
              <span className="text-xs text-muted-foreground">Production-Ready Code</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};