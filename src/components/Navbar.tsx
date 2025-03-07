
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 glassmorphism' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a226a7a8-c250-4e97-8c32-842fd57d7a62.png" 
            alt="Small Group Logo" 
            className="h-10 w-auto mr-2"
          />
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-smallai-white">Small</span>
            <span className="text-smallai-purple">AI</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-smallai-purple",
                isActive(link.path) ? "text-smallai-purple" : "text-smallai-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 button-glow"
            asChild
          >
            <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-smallai-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-smallai-black py-4 border-t border-gray-800 animate-fade-in">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-smallai-purple py-2",
                    isActive(link.path) ? "text-smallai-purple" : "text-smallai-white"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="bg-smallai-purple hover:bg-smallai-purple-dark text-white rounded-full px-6 w-full mt-4 button-glow"
                asChild
              >
                <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
