'use client';

import { useState, useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';

export function NotificationBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-[#F5A623] text-white py-2 px-4 relative flex items-center justify-center gap-3 sm:gap-6 z-[100]">
            <div className="flex items-center gap-2">
                <Megaphone className="w-5 h-5" strokeWidth={2.5} />
                <p className="text-sm sm:text-base font-medium tracking-wide">
                    The BEST UPSC 2027 Strategy
                </p>
            </div>



            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 sm:right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Close notification"
            >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
            </button>
        </div>
    );
}
