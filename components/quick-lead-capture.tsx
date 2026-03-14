'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, Phone } from 'lucide-react';

export function QuickLeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    targetYear: ''
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
    if (formData.name && formData.phone && formData.targetYear) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            formType: 'quick-lead'
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setTimeout(() => {
            setFormData({
              name: '',
              phone: '',
              targetYear: ''
            });
            setSubmitted(false);
          }, 3000);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-[#002147] to-[#003366]">
      <div className="max-w-4xl mx-auto px-3 md:px-4">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#002147] mb-2">
              Get Course Details & Study Plan
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Download comprehensive course brochure and get personalized study roadmap
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#002147] mb-2">Thank You!</h4>
              <p className="text-gray-600">Course details will be sent to your WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:border-[#002147] outline-none transition-all text-sm"
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="WhatsApp Number"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:border-[#002147] outline-none transition-all text-sm"
                />
                
                <select
                  name="targetYear"
                  value={formData.targetYear}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:border-[#002147] outline-none transition-all text-sm bg-white"
                >
                  <option value="">Target Year</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  className="bg-[#002147] hover:bg-[#001a38] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 flex-1"
                >
                  <Download className="w-4 h-4" />
                  Download Course Details
                </Button>
                
                <Button
                  type="button"
                  onClick={() => window.open('tel:+917887888819', '_self')}
                  className="bg-accent hover:bg-accent/90 text-[#002147] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 flex-1"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}