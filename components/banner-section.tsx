'use client';

import * as React from 'react';
import Image from 'next/image';
import { Trophy, Star } from 'lucide-react';

export function BannerSection() {
    return (
        <section className="w-full bg-white pb-2">
            {/* Prime Highlight Header */}
            <div className="w-full bg-primary py-2 md:py-3 lg:py-4 mb-4 md:mb-6 lg:mb-10 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-3 md:px-4 flex flex-col items-center justify-center text-center relative z-10">
                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <Trophy className="text-accent w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        <h2 className="text-white text-sm md:text-xl lg:text-3xl font-black uppercase tracking-wide md:tracking-widest flex items-center gap-2 md:gap-3">
                            <span className="hidden sm:inline-block w-8 md:w-12 h-0.5 bg-accent/50 rounded-full"></span>
                            India's First UPSC Academy
                            <span className="hidden sm:inline-block w-8 md:w-12 h-0.5 bg-accent/50 rounded-full"></span>
                        </h2>
                        <Trophy className="text-accent w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex items-center gap-0.5 md:gap-1 text-accent/80 mb-0.5 md:mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent" />)}
                        <span className="text-white/80 text-[10px] md:text-xs font-bold ml-1 md:ml-2 tracking-tighter uppercase italic">The Legacy of Excellence</span>
                    </div>
                </div>
            </div>

            <div className="max-w-[1500px] mx-auto px-3 md:px-4 lg:px-10">
                <div className="relative group">
                    {/* Main Single Image Banner */}
                    <div className="bg-white rounded-xl md:rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] md:shadow-[0_22px_70px_-15px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden">
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[28/9] bg-white flex items-center justify-center">
                            <Image
                                src="/UP.jpeg"
                                alt="UPSC Coaching Main Banner"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
