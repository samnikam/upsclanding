'use client';

import { Award, Users, BookOpen, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
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
    if (formData.name && formData.phone && formData.email && formData.course) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="enquiry" className="relative pt-32 pb-28 px-4 overflow-hidden bg-gradient-to-br from-primary via-[#0d2557] to-primary">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
              <Sparkles className="w-5 h-5 text-accent fill-accent animate-pulse" />
              <span className="text-sm font-bold text-white">India's #1 UPSC Guide Platform</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-yellow-500 border-2 border-white shadow-sm"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-500 border-2 border-white shadow-sm"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-orange-500 border-2 border-white shadow-sm"></div>
              </div>
            </div>

            {/* Main Heading - Enhanced */}
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                Your Journey to
                <span className="block mt-3 bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                  IAS Success
                </span>
                <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl">Starts Here</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-xl font-medium">
                Join <span className="font-bold text-accent bg-accent/10 px-2 py-1 rounded">5,000+ successful selections</span> with India's most trusted UPSC Guide. Expert mentorship, proven strategies, and comprehensive preparation.
              </p>
            </div>

            {/* Enhanced Trust Indicators with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3.5 border border-white/20 hover:bg-white/15 transition-all group">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">24/7 Available</p>
                  <p className="text-sm text-white font-bold">Doubt Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3.5 border border-white/20 hover:bg-white/15 transition-all group">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Interactive</p>
                  <p className="text-sm text-white font-bold">Live Classes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3.5 border border-white/20 hover:bg-white/15 transition-all group">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Unlimited</p>
                  <p className="text-sm text-white font-bold">Course Access</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-4xl font-bold text-white">98.5%</p>
                <p className="text-sm text-white/70">Success Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-white">50K+</p>
                <p className="text-sm text-white/70">Active Students</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-sm text-white/70">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-accent/30 hover:border-accent/50 transition-all">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-3">
                  <span className="text-sm font-bold text-accent uppercase tracking-wide">🎯 Limited Seats</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
                  Book Your Free Demo
                </h3>
                <p className="text-sm text-gray-600">
                  Get personalized guidance from expert mentors
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-primary">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    We'll contact you within 24 hours with your personalized plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-gray-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Mobile Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 "
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-gray-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent placeholder:text-gray-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Interested In <span className="text-accent">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-gray-700 transition-all"
                    >
                      <option value="">Select course</option>
                      <option value="prelims">Prelims Foundation</option>
                      <option value="mains">Mains Comprehensive</option>
                      <option value="complete">Complete IAS Program</option>
                      <option value="optional">Optional Subject</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 rounded-lg text-base mt-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Get Free Demo Class
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <p className="text-xs text-gray-600">
                      Or call us: <a href="tel:+919876543210" className="font-semibold text-primary hover:text-accent">+91 98765 43210</a>
                    </p>
                  </div>
                </form>
              )}

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
