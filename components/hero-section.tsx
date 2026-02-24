'use client';

import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function HeroSection() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact && formData.aspirantType && formData.attemptYear && formData.program) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
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
        } else {
          alert(result.message || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
      }
    }
  };

  return (
    <section id="enquiry-form" className="relative bg-[#f8fbff] py-6 md:py-12 px-3 md:px-4 overflow-hidden border-t border-blue-50">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-3 md:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-12">

          {/* Left Content - Center Focused */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] leading-tight">
                Unlock Your Path to <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-4">IAS Success</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
                Get personalized guidance from India's top UPSC mentors. Take the first step towards your dream career in civil services.
              </p>
            </div>

            {/* Quick Benefits - Minimalist */}
            <div className="grid gap-3 md:gap-5">
              {[
                '1:1 Personalized Roadmapping with Faculty',
                'Comprehensive 2027 Study Strategy',
                'Deep Conceptual Clarity for Prelims & Mains',
                'Exclusive Mentorship & Doubt Sessions'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form Optimized with Top/Bottom Bars */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-full max-w-[500px] bg-white rounded-2xl md:rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col border-b-4 md:border-b-[8px] border-[#002147]">
              {/* Orange/Yellow Top Bar - Matching Image */}
              <div className="w-full h-[6px] md:h-[8px] bg-accent"></div>

              <div className="p-5 md:p-8 lg:p-10 flex flex-col flex-grow">
                <div className="text-center mb-5 md:mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#002147] leading-tight">
                    Book Your First Free Counseling Session!
                  </h3>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 md:py-16 text-center space-y-3 md:space-y-4 flex-grow">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#002147]">Request Sent!</h4>
                    <p className="text-sm md:text-base text-gray-500">Our mentors will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div className="space-y-3 md:space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-700 font-medium placeholder:text-gray-400 shadow-sm text-sm"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-700 font-medium placeholder:text-gray-400 shadow-sm text-sm"
                      />

                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        placeholder="Contact No."
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-700 font-medium placeholder:text-gray-400 shadow-sm text-sm"
                      />

                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        <select
                          name="attemptYear"
                          value={formData.attemptYear}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-600 font-medium shadow-sm bg-white text-sm"
                        >
                          <option value="">Year of Attempt</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029-above">2029 & Above</option>
                        </select>

                        <select
                          name="aspirantType"
                          value={formData.aspirantType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-600 font-medium shadow-sm bg-white text-sm"
                        >
                          <option value="">Aspirant Type</option>
                          <option value="full-time">Full Time</option>
                          <option value="college">College Student</option>
                          <option value="working">Work Professional</option>
                        </select>

                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-md focus:border-[#002147] outline-none transition-all text-gray-600 font-medium shadow-sm bg-white text-sm"
                        >
                          <option value="">Interested Program</option>
                          <option value="upsc-gs">UPSC GS</option>
                          <option value="mpsc">MPSC Integrated</option>
                          <option value="mentorship">Mentorship</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#002147] hover:bg-[#001a38] text-white font-bold py-5 md:py-7 rounded-md text-base md:text-lg transition-all active:scale-[0.98] mt-4 md:mt-6 shadow-lg flex items-center justify-center"
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
