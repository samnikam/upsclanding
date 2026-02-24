import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      {/* Main Footer */}
      <div className="px-3 md:px-4 py-8 md:py-12 lg:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif text-base md:text-lg font-bold">U</span>
              </div>
              <span className="font-serif font-bold text-base md:text-lg">upscguide</span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              India's most trusted UPSC Guide platform with 5,000+ successful selections and proven track record of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              <li>
                <a href="#courses" className="hover:text-accent transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg">Policies</h3>
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-bold text-base md:text-lg">Get In Touch</h3>
            <div className="space-y-3 text-white/80 text-sm md:text-base">
              <div className="flex items-start gap-2 md:gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1 text-accent md:w-5 md:h-5" />
                <div>
                  <p className="font-semibold text-white text-sm md:text-base">+91 98765 43210</p>
                  <p className="text-xs md:text-sm">Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1 text-accent md:w-5 md:h-5" />
                <p className="text-xs md:text-sm">info@upscguide.com</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-accent md:w-5 md:h-5" />
                <p className="text-xs md:text-sm">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-3 md:px-4 py-4 md:py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-white/70 text-xs md:text-sm">
          <p>
            © 2024 upscguide. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
