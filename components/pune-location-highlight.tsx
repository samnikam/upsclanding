'use client';

import { MapPin, Clock, Users, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PuneLocationHighlight() {
  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#002147] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#002147]">
                    Now in Pune!
                  </h3>
                  <p className="text-gray-600 text-sm">Premium UPSC Coaching Center</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                We're excited to bring our proven UPSC preparation methodology to Pune. 
                Join hundreds of successful candidates who have achieved their IAS dreams with our guidance.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#002147]" />
                  <span className="text-sm md:text-base text-gray-700">
                    <strong>Batch Timing:</strong> 6:00 AM - 8:00 AM (Morning) | 6:00 PM - 8:00 PM (Evening)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#002147]" />
                  <span className="text-sm md:text-base text-gray-700">
                    <strong>Batch Size:</strong> Limited to 25 students for personalized attention
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#002147]" />
                  <span className="text-sm md:text-base text-gray-700">
                    <strong>Location:</strong> Easily accessible by public transport
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#002147] hover:bg-[#001a38] text-white font-bold px-6 py-3 rounded-lg flex-1"
                >
                  Book Center Visit
                </Button>
                <Button 
                  onClick={() => window.open('tel:+917887888819', '_self')}
                  className="bg-accent hover:bg-accent/90 text-[#002147] font-bold px-6 py-3 rounded-lg flex-1"
                >
                  Call for Directions
                </Button>
              </div>
            </div>
            
            {/* Right Image/Map */}
            <div className="bg-gradient-to-br from-[#002147] to-[#003366] p-4 md:p-6 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3">Visit Our Pune Center</h4>
                <p className="text-white/80 text-sm md:text-base mb-4">
                  Experience our world-class infrastructure and meet our expert faculty team
                </p>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-sm md:text-base font-medium">
                    📍 Address will be shared after enrollment confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}