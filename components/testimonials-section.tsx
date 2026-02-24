'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Parsanjeet Kour',
    rank: 'AIR 11, UPSC CSE 2022',
    achievement: 'IAS Officer',
    quote: 'The personalized guidance and strategy sessions were instrumental in my journey. The focus on analytical writing and current affairs simplified the most complex topics.',
    image: '/1up.jpg',
    rating: 5
  },
  {
    name: 'Waseem Ahmad Bhat',
    rank: 'AIR 07, UPSC CSE 2022',
    achievement: 'IAS Officer',
    quote: 'Regular mock tests and detailed feedback helped me identify my weak areas early on. The mentorship here is truly dedicated to student success.',
    image: '/2up.jpg',
    rating: 5
  },
  {
    name: 'Nittin Singh',
    rank: 'AIR 32, UPSC CSE 2022',
    achievement: 'IAS Officer',
    quote: 'I found the study material and the teaching methodology very effective. It provided the clarity I needed to navigate the vast syllabus with confidence.',
    image: '/3up.jpg',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-8 md:py-12 lg:py-24 bg-[#f8fbff] relative overflow-hidden text-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 relative z-10">
        <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-10 lg:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Success Stories
          </h2>
          <div className="w-12 md:w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium px-4">
            Join the ranks of our successful candidates who turned their IAS dreams into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col text-left relative overflow-hidden">
              {/* Quote Icon - Smaller */}
              <div className="absolute top-3 right-4 md:top-4 md:right-6 text-slate-50 group-hover:text-accent/5 transition-colors">
                <Quote size={32} fill="currentColor" className="md:w-10 md:h-10" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Rating - Smaller */}
                <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={10} fill="#F5A623" className="text-[#F5A623] md:w-3 md:h-3" />
                  ))}
                </div>

                {/* Quote - Smaller font */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 italic font-medium">
                  "{testimonial.quote}"
                </p>

                {/* Divider - Pushed to bottom */}
                <div className="mt-auto">
                  <div className="h-px w-full bg-gray-50 mb-4 md:mb-6"></div>

                  {/* Author Info - Enhanced Size */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-2 border-accent/10 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <h4 className="font-bold text-primary text-sm md:text-base leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-accent font-black text-[9px] md:text-[10px] uppercase tracking-widest mt-0.5">
                        {testimonial.rank}
                      </p>
                      <p className="text-gray-400 text-[9px] md:text-[10px] font-bold">
                        {testimonial.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
