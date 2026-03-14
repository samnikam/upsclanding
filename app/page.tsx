'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { TrustBar } from '@/components/trust-bar';
import { WhyChooseUs } from '@/components/why-choose-us';
import { EducatorsSection } from '@/components/educators-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { OfficersTestimonials } from '@/components/officers-testimonials';
import { FaqSection } from '@/components/faq-section';
import { PreparationPhases } from '@/components/preparation-phases';
import { Footer } from '@/components/footer';
import { StickyBottomBar } from '@/components/sticky-bottom-bar';
import { QuickLeadCapture } from '@/components/quick-lead-capture';
import { CourseHighlights } from '@/components/course-highlights';
import { UrgencyBanner } from '@/components/urgency-banner';
import { PuneLocationHighlight } from '@/components/pune-location-highlight';

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
      <UrgencyBanner />
      <main className="overflow-x-hidden">
        <BannerSection />
        <TrustBar />
        <HeroSection />
        <CourseHighlights />
        <WhyChooseUs />
        <EducatorsSection />
        <PreparationPhases />
        <TestimonialsSection />
        <OfficersTestimonials />
        <FaqSection />
        <PuneLocationHighlight />
        <Footer />
        <StickyBottomBar />
        <WhatsAppFloat />

        {/* Add padding to bottom for mobile sticky bar */}
        <div className="md:hidden h-20"></div>
      </main>
    </>
  );
}
