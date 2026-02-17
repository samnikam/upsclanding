'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('enquiry');
    formSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-serif text-sm sm:text-lg font-bold">U</span>
            </div>
            <span className="font-serif font-bold text-sm sm:text-lg text-primary">upscguide</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Courses
            </a>
            <a href="#about" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA & Phone */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+919876543210" className="text-primary font-semibold text-sm hover:text-accent transition-colors">
              +91 98765 43210
            </a>
            <Button 
              onClick={scrollToForm}
              className="bg-accent hover:bg-accent/90 text-primary rounded-full px-6 font-semibold cursor-pointer"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="#courses" 
                className="text-foreground hover:text-primary text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground hover:text-primary text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-primary rounded-full w-full font-semibold cursor-pointer"
              >
                Enquire Now
              </Button>
              <a 
                href="tel:+919876543210" 
                className="text-primary font-semibold text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
