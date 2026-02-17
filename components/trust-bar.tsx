import { Award, TrendingUp, Users, Zap } from 'lucide-react';

export function TrustBar() {
  const stats = [
    {
      icon: Award,
      value: '4.9/5',
      label: 'Student Rating',
      description: 'Rated by 5000+ students'
    },
    {
      icon: TrendingUp,
      value: '2,847',
      label: 'UPSC Selections',
      description: 'In Last 5 Years'
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Students',
      description: 'Learning with us'
    },
    {
      icon: Zap,
      value: '15+',
      label: 'Years Experience',
      description: 'In UPSC Coaching'
    }
  ];

  return (
    <section className="bg-secondary py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-3 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold font-serif text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-foreground">
                    {stat.label}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
