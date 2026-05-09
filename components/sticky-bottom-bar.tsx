'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-border shadow-lg z-40">
      <div className="flex gap-2 p-3">
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-primary font-bold py-3 rounded-lg transition-colors"
        >
          <Phone size={20} />
          <span className="text-sm">Call Now</span>
        </a>
        <a
          href="#enquiry-form"
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-sm">Enquire</span>
        </a>
      </div>
    </div>
  );
}
