import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      rank: 'UPSC CSE Rank 12 (2023)',
      achievement: 'IAS Officer - Home Ministry',
      quote: 'The structured approach and personalized mentorship at UPSC Academy transformed my preparation. The faculty genuinely cares about student success.',
      rating: 5
    },
    {
      name: 'Rajesh Patel',
      rank: 'UPSC CSE Rank 8 (2023)',
      achievement: 'IAS Officer - Finance Ministry',
      quote: 'Best coaching I could have opted for. The mock tests and answer evaluations were incredibly helpful in improving my score.',
      rating: 5
    },
    {
      name: 'Ananya Gupta',
      rank: 'UPSC CSE Rank 24 (2022)',
      achievement: 'IFS Officer - Foreign Service',
      quote: 'Excellent support system and comprehensive study material. The online batch gave me the flexibility I needed while maintaining quality.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Success Stories
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from our students who've successfully cleared UPSC and secured their dream positions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-accent/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#F5A623" className="text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-white/20 mb-6"></div>

              {/* Author Info */}
              <div>
                <p className="font-bold text-white mb-1">
                  {testimonial.name}
                </p>
                <p className="text-accent font-semibold text-sm mb-1">
                  {testimonial.rank}
                </p>
                <p className="text-white/70 text-sm">
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
