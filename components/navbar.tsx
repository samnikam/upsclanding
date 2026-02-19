'use client';

import { Menu, X, Smartphone } from 'lucide-react';
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
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
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
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            <a href="tel:+919876543210" className="text-primary font-semibold text-sm hover:text-accent transition-colors hidden lg:block">
              +91 98765 43210
            </a>
            <div className="flex items-center gap-2">
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-1.5 text-xs font-bold flex items-center gap-2 cursor-pointer h-9 shadow-md transition-all active:scale-95"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <Smartphone size={16} />
                Download App
              </Button>
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
                href="#courses"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary text-sm font-medium p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>

              <div className="grid grid-cols-2 gap-3 mt-2 px-1">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl w-full font-bold flex items-center justify-center gap-2 cursor-pointer py-6 shadow-lg"
                  onClick={() => {
                    window.open('https://play.google.com/store', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  <Smartphone size={18} />
                  App
                </Button>
                <Button
                  onClick={scrollToForm}
                  className="bg-accent hover:bg-accent/90 text-primary rounded-xl w-full font-bold cursor-pointer py-6 shadow-lg"
                >
                  Enquire
                </Button>
              </div>

              <a
                href="tel:+919876543210"
                className="text-primary font-bold text-center py-4 bg-secondary/50 rounded-xl mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
