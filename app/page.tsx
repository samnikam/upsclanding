'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { TrustBar } from '@/components/trust-bar';
import { WhyChooseUs } from '@/components/why-choose-us';
import { CoursesSection } from '@/components/courses-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FaqSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { StickyBottomBar } from '@/components/sticky-bottom-bar';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <CoursesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
      <StickyBottomBar />

      {/* Add padding to bottom for mobile sticky bar */}
      <div className="md:hidden h-20"></div>
    </main>
  );
}
