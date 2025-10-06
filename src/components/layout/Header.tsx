import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';
import { mainNav } from '@/data/navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="hidden sm:block text-xl font-bold text-gray-900">
                AMO AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNav.map((item) => (
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-blue-600 text-gray-600 cursor-pointer">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          to={child.href}
                          className="w-full text-sm font-medium transition-colors hover:text-blue-600"
                        >
                          {child.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/crm/login">CRM Login</Link>
            </Button>
            <Button asChild>
              <Link to="/brief">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {mainNav.map((item) => (
                  item.children ? (
                    <div key={item.href} className="space-y-2">
                      <div className="text-lg font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block text-md font-medium transition-colors hover:text-blue-600 ${
                              location.pathname === child.href
                                ? 'text-blue-600'
                                : 'text-gray-600'
                            }`}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                        location.pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-600'
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/crm/login">CRM Login</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/brief">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
