import { ReactNode, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCRMAuth } from '@/hooks/useCRMAuth';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileText, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CRMLayoutProps {
  children: ReactNode;
}

export function CRMLayout({ children }: CRMLayoutProps) {
  const { user, signOut, loading: authLoading } = useCRMAuth();
  const { role, loading: roleLoading } = useUserRole();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/crm/login');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  const navigation = [
    { name: 'Dashboard', href: '/crm/dashboard', icon: LayoutDashboard },
    { name: 'Clients', href: '/crm/clients', icon: Users },
    { name: 'Deals', href: '/crm/deals', icon: Briefcase },
    { name: 'Invoices', href: '/crm/invoices', icon: FileText },
  ];

  const userInitials = user.email?.substring(0, 2).toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-200 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          <Link to="/crm/dashboard" className="text-xl font-bold text-foreground">
            AMO AI CRM
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {user.email}
              </p>
              <p className="text-xs text-muted-foreground capitalize">{role || 'User'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className={cn(
        "transition-all duration-200 ease-in-out",
        sidebarOpen ? "lg:pl-64" : ""
      )}>
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-card px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
