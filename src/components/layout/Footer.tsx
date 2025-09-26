import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/navigation';
import { Mail, MapPin, Phone, MessageCircle, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/20" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand & Identity */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center space-x-3 font-heading font-bold text-2xl">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-primary-foreground">AMO AI</span>
              </Link>
              
              <p className="text-lg font-medium text-primary-foreground/90 max-w-md leading-relaxed">
                We build AI-powered platforms with speed, automation, and reliability.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:info@amoai.co" 
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-amo-orange transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">info@amoai.co</span>
                </a>
                <a 
                  href="tel:+14168003103" 
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-amo-orange transition-colors group"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">+1 416-800-3103</span>
                </a>
                <a 
                  href="https://wa.me/14168003103" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-green-400 transition-colors group"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-amo-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-amo-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-amo-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-amo-orange rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-amo-orange hover:bg-amo-orange-light text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  📩 Book a Consultation
                </Button>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-primary-foreground border-b-2 border-amo-orange pb-2 mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-primary-foreground/80 hover:text-amo-orange transition-colors cursor-pointer font-medium">
                    AI Development
                  </span>
                </li>
                <li>
                  <span className="text-primary-foreground/80 hover:text-amo-orange transition-colors cursor-pointer font-medium">
                    Process Automation
                  </span>
                </li>
                <li>
                  <span className="text-primary-foreground/80 hover:text-amo-orange transition-colors cursor-pointer font-medium">
                    Event Systems
                  </span>
                </li>
                <li>
                  <span className="text-primary-foreground/80 hover:text-amo-orange transition-colors cursor-pointer font-medium">
                    Multi-Agent Systems
                  </span>
                </li>
                <li>
                  <span className="text-primary-foreground/80 hover:text-amo-orange transition-colors cursor-pointer font-medium">
                    Backend APIs
                  </span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-primary-foreground border-b-2 border-amo-orange pb-2 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/case-studies" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/roi-calculator" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/documentation" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    FAQ & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-primary-foreground border-b-2 border-amo-orange pb-2 mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/legal/compliance" 
                    className="text-primary-foreground/80 hover:text-amo-orange transition-colors font-medium block"
                  >
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-primary-foreground/70 font-medium">
              © 2025 AMO AI – All Rights Reserved
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <span className="text-primary-foreground/80 font-medium bg-primary-foreground/10 px-3 py-1 rounded-full">
                50+ Live Applications
              </span>
              <span className="text-primary-foreground/80 font-medium bg-primary-foreground/10 px-3 py-1 rounded-full">
                8-Week Delivery
              </span>
              <span className="text-primary-foreground/80 font-medium bg-primary-foreground/10 px-3 py-1 rounded-full">
                Production-Ready Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};