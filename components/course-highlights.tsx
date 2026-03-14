'use client';

import { 
  BookOpen, 
  Users, 
  FileText, 
  MessageSquare, 
  Target, 
  Clock,
  Award,
  CheckCircle2
} from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    title: "Complete Syllabus Coverage",
    description: "Comprehensive coverage of UPSC Prelims & Mains syllabus with structured approach",
    features: ["GS 1-4 Complete", "Current Affairs", "Optional Subject", "Essay Writing"]
  },
  {
    icon: Users,
    title: "Personal Mentorship",
    description: "Weekly 1:1 mentorship sessions with UPSC toppers and experienced faculty",
    features: ["Individual Attention", "Strategy Building", "Performance Tracking", "Doubt Clearing"]
  },
  {
    icon: FileText,
    title: "Comprehensive Test Series",
    description: "40+ Prelims Tests and 20+ Mains Answer Writing Tests with detailed evaluation",
    features: ["All India Ranking", "Performance Analysis", "Detailed Feedback", "Improvement Plan"]
  },
  {
    icon: MessageSquare,
    title: "Answer Writing Practice",
    description: "Dedicated answer writing sessions with expert evaluation and improvement tips",
    features: ["Daily Practice", "Expert Evaluation", "Writing Techniques", "Time Management"]
  },
  {
    icon: Target,
    title: "Interview Guidance",
    description: "Comprehensive personality development and mock interview sessions",
    features: ["Mock Interviews", "DAF Preparation", "Communication Skills", "Confidence Building"]
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Online and offline classes with recorded lectures for revision",
    features: ["Live Classes", "Recorded Sessions", "Flexible Schedule", "24/7 Access"]
  }
];

export function CourseHighlights() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#002147] mb-4">
            Why Choose Our GS Foundation Batch 2027?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            A complete preparation ecosystem designed to transform your UPSC journey with proven methodologies and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#002147]/10 rounded-xl flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-[#002147]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#002147]">
                  {highlight.title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                {highlight.description}
              </p>
              
              <ul className="space-y-2">
                {highlight.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#002147] to-[#003366] rounded-2xl p-6 md:p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">550+</div>
              <div className="text-sm md:text-base text-white/80">Teaching Hours</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">60+</div>
              <div className="text-sm md:text-base text-white/80">Mock Tests</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">1:1</div>
              <div className="text-sm md:text-base text-white/80">Weekly Mentorship</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/80">Study Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}