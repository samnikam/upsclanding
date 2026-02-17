import { BookOpen, Users, BarChart3, Zap, Award, Globe } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete UPSC syllabus coverage with latest exam patterns and MCQ strategy'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from IAS officers, UPSC toppers, and domain specialists'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time analytics on your progress with personalized recommendations'
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Live classes, doubt clearing sessions, and peer learning community'
    },
    {
      icon: Award,
      title: 'Proven Success Rate',
      description: '2,847 successful selections in last 5 years with highest rankings'
    },
    {
      icon: Globe,
      title: 'Flexible Learning',
      description: 'Online, offline, and hybrid modes. Learn at your own pace and time'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Why Choose UPSC Academy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expert mentorship with innovative technology to create the perfect learning environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-secondary rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
