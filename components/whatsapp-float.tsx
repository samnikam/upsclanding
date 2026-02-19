'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
            {/* Main Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 pointer-events-auto group"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="text-white w-7 h-7 group-hover:rotate-12 transition-transform" />
            </a>
        </div>
    );
}
