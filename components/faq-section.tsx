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
      question: '1. What is the GS Foundation Batch 2027?',
      answer: 'GS Foundation Batch 2027 is a complete preparation program covering General Studies for both UPSC Prelims & Mains, designed for beginners as well as serious aspirants targeting UPSC CSE 2027.'
    },
    {
      question: '2. Who should join this batch?',
      answer: '• First-time UPSC aspirants\n• College students starting early preparation\n• Working professionals looking for structured guidance\n• Repeaters who want strong conceptual clarity'
    },
    {
      question: '3. What makes this Foundation Batch different from others?',
      answer: '• Learn from India\'s Best Faculties & UPSC Rank Holders\n• 550+ Hours of structured classroom teaching\n• Weekly 1:1 Personal Mentorship with Academic Director\n• 40+ Prelims Tests + 20 Mains Answer Writing Tests\n• Hard Copy Notes + Daily DPPs\n\nThis is not just coaching — it\'s a complete preparation ecosystem.'
    },
    {
      question: '4. Is both Prelims and Mains covered in this batch?',
      answer: 'Yes. The program is fully integrated:\n• Concept building for Prelims\n• Answer writing training for Mains\n• Weekly tests for both stages\n• Continuous performance evaluation'
    },
    {
      question: '5. How many teaching hours are included?',
      answer: 'The batch includes 550+ hours of comprehensive classroom teaching, ensuring complete syllabus coverage with depth and clarity.'
    },
    {
      question: '6. Are NCERTs covered separately?',
      answer: 'Yes. We provide Special NCERT-Focused Classes to build a strong base before moving to advanced concepts.'
    },
    {
      question: '7. Will I get study material?',
      answer: 'Yes, you will receive:\n• Structured Hard Copy Notes\n• Daily Practice Problems (DPP)\n• Lecture Notes\n• Free Access to UPSC GUIDE Publications (Books written by IAS & IPS Officers)'
    },
    {
      question: '8. What kind of test series is included?',
      answer: 'You will get:\n• 40+ Prelims Tests with discussion\n• 20 Mains Answer Writing Tests with evaluation\n• Weekly Prelims & Mains Tests\n• Detailed faculty feedback'
    },
    {
      question: '9. How does the mentorship work?',
      answer: 'Every student gets:\n• Weekly 1:1 Personal Mentorship Session\n• Strategy building & answer improvement guidance\n• Performance tracking\n• Personalized study plan\n\nThis ensures you never feel lost in your preparation.'
    },
    {
      question: '10. Are recorded lectures available?',
      answer: 'Yes. Recorded lectures are provided for revision and backup, so you can revisit any topic anytime.'
    },
    {
      question: '11. Is current affairs included?',
      answer: 'Yes. We provide:\n• Weekly Current Affairs Sessions\n• Monthly Consolidation Sessions\n• Integration with Prelims & Mains'
    },
    {
      question: '12. Is this batch available online or offline?',
      answer: 'The GS Foundation Batch 2027 is available in Online & Offline modes (as per center availability).'
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
              href="tel:+917887888819"
              className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Call Us: +91 788 788 8819
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
