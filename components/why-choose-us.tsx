'use client';

import {
  Users, Award, BookOpen, Clock, FileText, CheckCircle2,
  MessagesSquare, Book, Star, Calendar, RefreshCcw,
  Target, Edit3, GraduationCap, PlayCircle, Trophy, BarChart3
} from 'lucide-react';

const features = [
  {
    title: 'Expert Faculty',
    description: 'Learn from India’s Best Faculties & UPSC Rank Holders with proven expertise.',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    title: 'Complete GS Coverage',
    description: 'Comprehensive coverage for both Prelims & Mains with updated syllabus.',
    icon: BookOpen,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    title: 'NCERT Foundation',
    description: 'Special NCERT-Focused Classes designed to build a rock-solid basic foundation.',
    icon: GraduationCap,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    title: '550+ Teaching Hours',
    description: 'Extensive classroom teaching hours to ensure deep understanding of every topic.',
    icon: Clock,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    title: 'Daily DPP & Notes',
    description: 'Daily Practice Problems (DPP) & high-quality Lecture Notes provided consistently.',
    icon: FileText,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    title: 'Detailed Evaluation',
    description: 'Weekly Prelims & Mains Tests with detailed evaluation by senior faculty members.',
    icon: CheckCircle2,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    title: '1:1 Mentorship',
    description: 'Weekly 1:1 Personal Mentorship Session directly with our Academic Director.',
    icon: MessagesSquare,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Hard Copy Notes',
    description: 'Structured Hard Copy Notes delivered to your doorstep for focused self-study.',
    icon: Book,
    color: 'text-pink-500',
    bg: 'bg-pink-50'
  },
  {
    title: 'Current Affairs',
    description: 'Dedicated Weekly & Monthly Sessions to master current affairs comprehensively.',
    icon: Calendar,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    title: 'Revision Access',
    description: 'Full Recorded Lecture Access anytime, anywhere for multiple revisions.',
    icon: PlayCircle,
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    title: 'Prelims Mastery',
    description: '40+ Advanced Prelims Test Series with in-depth discussion and analysis.',
    icon: Target,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Mains Answer Writing',
    description: '20 Focused Mains Answer Writing Tests with professional evaluation.',
    icon: Edit3,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Why Choose UPSC Academy?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-base text-gray-500 max-w-2xl mx-auto font-medium">
            "Your Dream, Our Commitment. Step into Administrative Excellence."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group ${feature.bg} p-6 rounded-3xl border border-white shadow-[0_10px_25px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-12 h-12 bg-white ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#002147] mb-2 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-700/80 leading-relaxed font-semibold">
                  {feature.description}
                </p>
              </div>
              <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-1 bg-accent/30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
