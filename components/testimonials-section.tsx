import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aditya Srivastava',
      rank: 'AIR 01, UPSC CSE 2023',
      achievement: 'IAS Officer',
      quote: 'The personalized guidance and strategy sessions were instrumental in my journey. The focus on analytical writing and current affairs simplified the most complex topics.',
      rating: 5
    },
    {
      name: 'Animesh Pradhan',
      rank: 'AIR 02, UPSC CSE 2023',
      achievement: 'IAS Officer',
      quote: 'Regular mock tests and detailed feedback helped me identify my weak areas early on. The mentorship here is truly dedicated to student success.',
      rating: 5
    },
    {
      name: 'Donuru Ananya Reddy',
      rank: 'AIR 03, UPSC CSE 2023',
      achievement: 'IAS Officer',
      quote: 'I found the study material and the teaching methodology very effective. It provided the clarity I needed to navigate the vast syllabus with confidence.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-[#F0F7FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Success Stories
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-medium">
            Hear from our students who've successfully cleared UPSC and secured their dream positions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#F5A623" className="text-[#F5A623]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary/90 leading-relaxed mb-6 italic font-medium">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-blue-50 mb-6"></div>

              {/* Author Info */}
              <div>
                <p className="font-bold text-primary mb-1 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-accent font-bold text-sm mb-1">
                  {testimonial.rank}
                </p>
                <p className="text-primary/60 text-sm font-semibold">
                  {testimonial.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
