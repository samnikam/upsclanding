'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { TrustBar } from '@/components/trust-bar';
import { WhyChooseUs } from '@/components/why-choose-us';
import { EducatorsSection } from '@/components/educators-section';
import { CoursesSection } from '@/components/courses-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FaqSection } from '@/components/faq-section';
import { StepByStep } from '@/components/step-by-step';
import { Footer } from '@/components/footer';
import { StickyBottomBar } from '@/components/sticky-bottom-bar';

import { NotificationBanner } from '@/components/notification-banner';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NotificationBanner />
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <WhyChooseUs />
        <EducatorsSection />
        <CoursesSection />
        <TestimonialsSection />
        <FaqSection />
        <StepByStep />
        <Footer />
        <StickyBottomBar />
        <WhatsAppFloat />

        {/* Add padding to bottom for mobile sticky bar */}
        <div className="md:hidden h-20"></div>
      </main>
    </>
  );
}
