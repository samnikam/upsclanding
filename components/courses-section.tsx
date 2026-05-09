'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function CoursesSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('enquiry');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Foundation Batch',
      duration: '12 Months',
      price: '₹45,000',
      level: '12th Pass',
      features: [
        'Complete Basics Coverage',
        'Hindi & English Medium',
        'Weekly Mock Tests',
        'Doubt Solving Sessions',
        'Study Material Included'
      ],
      highlighted: false
    },
    {
      title: 'Live GS Foundation 2027',
      duration: '18 Months',
      price: '₹55,000',
      level: 'UPSC 2027 Aspirants',
      features: [
        'Live Interactive GS Classes',
        'Personalized Study Plan',
        'Daily Answer Writing',
        'NCERT + Standard Books',
        'Comprehensive Test Series'
      ],
      highlighted: true
    },
    {
      title: 'Mains Mastery',
      duration: '9 Months',
      price: '₹50,000',
      level: 'Prelims Qualified',
      features: [
        'Essay Writing Techniques',
        'Answer Sheet Evaluation',
        'Interview Preparation',
        'Leadership Coaching',
        'Lifetime Support'
      ],
      highlighted: false
    },
    {
      title: 'Test Series Plus',
      duration: '3 Months',
      price: '₹20,000',
      level: 'All Levels',
      features: [
        '100+ Full Tests',
        'Detailed Solutions',
        'Rank Predictor',
        'Performance Review',
        'Expert Feedback'
      ],
      highlighted: false
    },
    {
      title: 'Complete UPSC Package',
      duration: '24 Months',
      price: '₹99,999',
      level: '10+2 Pass',
      features: [
        'Foundation + Prelims + Mains',
        'All Study Material',
        'Interview Coaching',
        'Lifetime Updates',
        'Priority Support'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect course tailored to your current level and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${course.highlighted
                  ? 'md:col-span-2 lg:col-span-1 border-4 border-accent shadow-2xl transform scale-105 bg-white'
                  : 'border border-border bg-white hover:shadow-lg'
                }`}
            >
              {course.highlighted && (
                <div className="bg-accent text-primary py-2 px-4 text-center font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Level: <span className="font-semibold text-foreground">{course.level}</span>
                </p>

                <div className="space-y-1 mb-6">
                  <p className="text-3xl font-bold font-serif text-primary">
                    {course.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.duration} program
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToForm}
                  className={`w-full rounded-lg font-bold py-2 cursor-pointer ${course.highlighted
                      ? 'bg-accent hover:bg-accent/90 text-primary'
                      : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
