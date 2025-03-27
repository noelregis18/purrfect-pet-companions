
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-pet-dark-blue font-semibold text-xl tracking-tight">
              PurrfectCare
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-pet-slate hover:text-pet-blue transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-pet-slate hover:text-pet-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-pet-slate hover:text-pet-blue transition-colors">
              Contact
            </a>
            <button className="bg-pet-blue hover:bg-pet-dark-blue text-white px-4 py-2 rounded-md transition-colors duration-300">
              Book Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2" 
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <a 
              href="#services" 
              className="block py-2 text-pet-slate hover:text-pet-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 text-pet-slate hover:text-pet-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-pet-slate hover:text-pet-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="mt-2 w-full bg-pet-blue hover:bg-pet-dark-blue text-white px-4 py-2 rounded-md transition-colors duration-300">
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
