'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const faqs = [
    {
      question: 'What is the eligibility criteria for UPSC CSE?',
      answer: 'You must be an Indian citizen, have completed 21 years of age, and possess a Bachelor\'s degree from a recognized university. Maximum age limit is 32 years (with age relaxations for SC/ST/OBC categories).'
    },
    {
      question: 'How long should I prepare for UPSC exam?',
      answer: 'Typically, 1-2 years of dedicated preparation is recommended for UPSC CSE. However, it varies based on individual background, speed of learning, and previous knowledge. Our academy provides customized learning paths for different timelines.'
    },
    {
      question: 'Are classes available in both online and offline modes?',
      answer: 'Yes, we offer flexible learning options. You can choose online classes, offline classes at our centers, or a hybrid approach. All students get access to recorded lectures and study materials.'
    },
    {
      question: 'What is your success rate and placement assistance?',
      answer: 'We have a success rate of over 40% (significantly above national average of 0.2%). We provide interview preparation and coaching, career guidance, and direct placement assistance post-selection.'
    },
    {
      question: 'Do you provide study materials and test series?',
      answer: 'Yes, comprehensive study materials in both Hindi and English are provided. We offer 100+ full-length mock tests, daily MCQ practice, and detailed performance analytics.'
    },
    {
      question: 'Can I get a refund if I am not satisfied?',
      answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with the course. Additionally, if you don\'t clear Prelims after completing our course, we offer a free repeat batch.'
    },
    {
      question: 'How much does the course cost?',
      answer: 'Our courses range from ₹20,000 for test series to ₹99,999 for the complete UPSC package. We also offer EMI options and scholarships for meritorious candidates.'
    },
    {
      question: 'What support is available after enrollment?',
      answer: 'We provide lifetime support including access to updated study materials, recording of new classes, priority doubt clearing sessions, and continuous mentorship until you clear the exam.'
    }
  ];

  return (
    <section className="py-6 md:py-10 px-3 md:px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4 mb-6 md:mb-10 lg:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="w-12 md:w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium px-4">
            Find answers to common questions about UPSC preparation and our courses
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 md:px-6 data-[state=open]:border-accent transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <span className="text-left font-semibold text-foreground text-sm md:text-base">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-10 md:mt-16 bg-secondary rounded-xl md:rounded-2xl p-5 md:p-8 text-center space-y-3 md:space-y-4">
          <h3 className="text-xl md:text-2xl font-bold font-serif text-primary">
            Still have questions?
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
            Our experts are ready to help you. Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Call Us: +91 98765 43210
            </a>
            <a
              href="mailto:info@upscguide.com"
              className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Email: info@upscguide.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
