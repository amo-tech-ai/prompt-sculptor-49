import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, User, LogOut } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
const location = useLocation();
  const hasClerk = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-brand-divider shadow-card' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - AMO AI style - responsive sizing */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 font-heading font-bold text-xl sm:text-2xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">A</span>
              </div>
              <span className="text-brand-dark">AMO AI</span>
            </Link>

            {/* Desktop Navigation - responsive spacing */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {mainNav.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`text-sm lg:text-base font-medium transition-colors hover:text-brand-orange ${
                      location.pathname === item.href ? 'text-brand-orange' : 'text-brand-dark'
                    }`}
                  >
                    {item.title}
                  </Link>
                  
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-56 lg:w-64 bg-background border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA - AMO AI style - responsive sizing */}
<div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              {hasClerk ? (
                <>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button variant="outline" size="sm" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-xs lg:text-sm px-3 lg:px-4">
                        Sign In
                      </Button>
                    </SignInButton>
                    <Button size="sm" className="bg-brand-orange hover:bg-brand-orange2 text-white rounded-full px-4 lg:px-6 text-xs lg:text-sm" asChild>
                      <Link to="/brief">Start Project</Link>
                    </Button>
                  </SignedOut>
                  
                  <SignedIn>
                    <Button variant="outline" size="sm" className="text-xs lg:text-sm" asChild>
                      <Link to="/projects">My Projects</Link>
                    </Button>
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8 rounded-full",
                        },
                      }}
                    />
                  </SignedIn>
                </>
              ) : (
                <>
                  <Button size="sm" className="bg-brand-orange hover:bg-brand-orange2 text-white rounded-full px-4 lg:px-6 text-xs lg:text-sm" asChild>
                    <Link to="/brief">Start Project</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Trigger - responsive sizing */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button 
                  variant="ghost" 
                  size="sm"
                  aria-label="Open navigation menu"
                  aria-expanded={isMobileOpen}
                  className="p-2"
                >
                  {isMobileOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-72 sm:w-80">
                <nav className="flex flex-col space-y-4 mt-6 sm:mt-8" role="navigation" aria-label="Mobile navigation">
                  {mainNav.map((item) => (
                    <div key={item.href}>
                      <Link
                        to={item.href}
                        className={`block text-base sm:text-lg font-medium transition-colors ${
                          location.pathname === item.href ? 'text-primary' : 'text-foreground'
                        }`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.title}
                      </Link>
                      
                      {item.children && (
                        <div className="ml-3 sm:ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
<div className="pt-4 sm:pt-6 space-y-3">
                    {hasClerk ? (
                      <>
                        <SignedOut>
                          <SignInButton mode="modal">
                            <Button variant="outline" className="w-full text-sm sm:text-base">
                              Sign In
                            </Button>
                          </SignInButton>
                          <Button className="w-full text-sm sm:text-base" asChild>
                            <Link to="/brief" onClick={() => setIsMobileOpen(false)}>Start Project</Link>
                          </Button>
                        </SignedOut>
                        
                        <SignedIn>
                          <Button variant="outline" className="w-full text-sm sm:text-base" asChild>
                            <Link to="/projects" onClick={() => setIsMobileOpen(false)}>My Projects</Link>
                          </Button>
                          <div className="flex justify-center pt-2">
                            <UserButton 
                              afterSignOutUrl="/"
                              appearance={{
                                elements: {
                                  avatarBox: "w-10 h-10",
                                },
                              }}
                            />
                          </div>
                        </SignedIn>
                      </>
                    ) : (
                      <>
                        <Button className="w-full text-sm sm:text-base" asChild>
                          <Link to="/brief" onClick={() => setIsMobileOpen(false)}>Start Project</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};