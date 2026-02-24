'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
    return (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
            {/* Main Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 pointer-events-auto group"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="text-white w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
            </a>
        </div>
    );
}
