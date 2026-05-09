'use client';

import { Menu, X, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('enquiry-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/uglogo.png" 
              alt="UPSC Guide Logo" 
              className="h-12 sm:h-16 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#preparation-phases" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Preparation Phases
            </a>
            <a href="#why-choose-us" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Success Stories
            </a>
            <a href="#enquiry-form" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <a href="tel:+917887888819" className="text-primary font-semibold text-sm hover:text-accent transition-colors hidden lg:block">
              +91 788 788 8819
            </a>
            <div className="flex items-center gap-2">
              <Button
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-primary rounded-full px-5 py-2 text-xs font-bold cursor-pointer h-9"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#preparation-phases"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preparation Phases
              </a>
              <a
                href="#why-choose-us"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#enquiry-form"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              <Button
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-primary rounded-xl w-full font-bold cursor-pointer py-6 shadow-lg"
              >
                Enquire Now
              </Button>

              <a
                href="tel:+917887888819"
                className="text-primary font-bold text-center py-4 bg-secondary/50 rounded-xl mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call: +91 788 788 8819
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
