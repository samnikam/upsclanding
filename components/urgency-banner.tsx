'use client';

import { Clock, Users, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UrgencyBanner() {
  return (
    <section className="py-2 md:py-6 bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between gap-2 text-gray-700">
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <AlertCircle className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
              <span className="font-bold hidden sm:inline">URGENT NOTICE</span>
              <span className="font-bold sm:hidden">URGENT</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 md:w-5 md:h-5" />
              <span className="font-medium">15 Seats Left</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 md:w-5 md:h-5" />
              <span className="font-medium hidden sm:inline">Admissions Closing Soon</span>
              <span className="font-medium sm:hidden">Closing Soon</span>
            </div>
          </div>
          
          <Button 
            onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#002147] hover:bg-[#001a38] text-white font-bold px-2 py-1 md:px-6 md:py-3 rounded text-xs md:text-base transition-all shadow-lg flex-shrink-0"
          >
            <span className="hidden sm:inline">Secure Your Seat Now</span>
            <span className="sm:hidden">Secure Your Seat</span>
          </Button>
        </div>
      </div>
    </section>
  );
}