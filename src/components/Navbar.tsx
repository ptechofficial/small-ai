
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section for highlighting in navbar
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 glassmorphism dark:bg-black/50' : 'py-6 dark:bg-transparent bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-white dark:text-white">Small </span>
            <span className="text-smallai-purple">AI</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.section); }}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-white",
                activeSection === link.section ? "text-smallai-purple" : "text-white dark:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <Button 
            className="bg-smallai-purple hover:bg-smallai-purple-dark hover:text-white text-white rounded-full px-6 button-glow"
            asChild
          >
            <a href="https://calendly.com/prakarshgupta" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-white dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black dark:bg-black py-4 border-t border-gray-800 animate-fade-in">
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.section); }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white py-2",
                    activeSection === link.section ? "text-smallai-purple" : "text-white dark:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-smallai-purple hover:bg-smallai-purple-dark hover:text-white text-white rounded-full px-6 w-full mt-4 button-glow"
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
