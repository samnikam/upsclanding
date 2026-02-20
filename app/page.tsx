'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { TrustBar } from '@/components/trust-bar';
import { WhyChooseUs } from '@/components/why-choose-us';
import { EducatorsSection } from '@/components/educators-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FaqSection } from '@/components/faq-section';
import { PreparationPhases } from '@/components/preparation-phases';
import { Footer } from '@/components/footer';
import { StickyBottomBar } from '@/components/sticky-bottom-bar';

import { NotificationBanner } from '@/components/notification-banner';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { BannerSection } from '@/components/banner-section';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <BannerSection />
        <TrustBar />
        <HeroSection />
        <WhyChooseUs />
        <EducatorsSection />
        <PreparationPhases />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
        <StickyBottomBar />
        <WhatsAppFloat />

        {/* Add padding to bottom for mobile sticky bar */}
        <div className="md:hidden h-20"></div>
      </main>
    </>
  );
}
