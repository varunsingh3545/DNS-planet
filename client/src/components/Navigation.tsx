import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, TreePine, Waves, Thermometer, BarChart3, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Globe },
    { path: '/wildlife', label: 'Wildlife', icon: TreePine },
    { path: '/marine', label: 'Marine', icon: Waves },
    { path: '/climate', label: 'Climate', icon: Thermometer },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  // Get theme-specific text colors and active colors based on current page
  const getThemeColors = () => {
    if (location === '/wildlife') return {
      text: 'text-wildlife-foreground',
      active: 'bg-wildlife-foreground/20 text-wildlife-foreground'
    };
    if (location === '/marine') return {
      text: 'text-marine-foreground',
      active: 'bg-marine-foreground/20 text-marine-foreground'
    };
    if (location === '/climate') return {
      text: 'text-climate-foreground',
      active: 'bg-climate-foreground/20 text-climate-foreground'
    };
    if (location === '/dashboard') return {
      text: 'text-dashboard-foreground',
      active: 'bg-dashboard-foreground/20 text-dashboard-foreground'
    };
    if (location === '/contact') return {
      text: 'text-contact-foreground',
      active: 'bg-contact-foreground/20 text-contact-foreground'
    };
    return {
      text: 'text-cosmic-foreground',
      active: 'bg-cosmic-foreground/20 text-cosmic-foreground'
    }; // Home and default
  };

  const themeColors = getThemeColors();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
            <Globe className="h-8 w-8 text-accent animate-spin-slow transition-transform duration-300 hover:rotate-180" />
            <span className={`text-xl font-bold ${themeColors.text} drop-shadow-sm transition-all duration-300`}>
              Digital <span className="text-accent">Nervous</span> System
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link group flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 drop-shadow-sm transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 ${
                    isActive ? themeColors.active : `${themeColors.text}/80 hover:${themeColors.text} hover:bg-white/10`
                  }`}
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className={`md:hidden ${themeColors.text} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass border-t border-white/10 animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 drop-shadow-sm transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 ${
                      isActive 
                        ? themeColors.active
                        : `${themeColors.text}/80 hover:${themeColors.text} hover:bg-white/10`
                    }`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;