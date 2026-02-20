'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function EnquiryFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    aspirantType: '',
    attemptYear: '',
    program: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact && formData.aspirantType && formData.attemptYear && formData.program) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          contact: '',
          aspirantType: '',
          attemptYear: '',
          program: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const benefits = [
    'Personalized Learning Path',
    'Expert Doubt Clearing',
    'Live Mock Tests',
    'Study Material Access',
    'Mentorship Sessions',
    'Performance Analytics'
  ];

  return (
    <section id="enquiry" className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-accent uppercase tracking-wide">Limited Seats Available</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Schedule Your 1:1 Free Session with Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your free consultation with our expert mentors and get a personalized roadmap to success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Benefits List */}
            <div className="space-y-4">
              <p className="font-bold text-primary text-lg">
                What You Get With Free Consultation
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-accent">
                        <Check size={16} className="text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-secondary rounded-lg p-4 flex items-center gap-3">
              <div className="text-2xl">🔒</div>
              <div>
                <p className="font-semibold text-sm text-primary">100% Secure & Private</p>
                <p className="text-xs text-muted-foreground">Your information is safe with us</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl border-4 border-accent p-8 shadow-2xl shadow-accent/20 hover:shadow-accent/30 transition-shadow duration-300">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Check className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Our team will contact you within 24 hours with your personalized plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-foreground mb-2">
                    Contact <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="aspirantType" className="block text-sm font-semibold text-foreground mb-2">
                    Type of Aspirants <span className="text-accent">*</span>
                  </label>
                  <select
                    id="aspirantType"
                    name="aspirantType"
                    value={formData.aspirantType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-muted-foreground"
                  >
                    <option value="">Select type</option>
                    <option value="full-time">Full Time Preparation</option>
                    <option value="college">College Going Student</option>
                    <option value="working">Working Professional</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="attemptYear" className="block text-sm font-semibold text-foreground mb-2">
                    Year of Attempt <span className="text-accent">*</span>
                  </label>
                  <select
                    id="attemptYear"
                    name="attemptYear"
                    value={formData.attemptYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-muted-foreground"
                  >
                    <option value="">Select year</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029-above">2029 & above</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-foreground mb-2">
                    Choose Your Interested Program <span className="text-accent">*</span>
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-muted-foreground"
                  >
                    <option value="">Select program</option>
                    <option value="upsc-gs">UPSC GS Foundation Batch</option>
                    <option value="mpsc">MPSC Integrated Batch</option>
                    <option value="mentorship">Personal Mentorship Program</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 rounded-lg text-sm md:text-base mt-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Register Now
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
