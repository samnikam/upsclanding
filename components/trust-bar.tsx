import { Award, TrendingUp, Users, Zap, Star, ShieldCheck } from 'lucide-react';

export function TrustBar() {
  const stats = [
    {
      icon: Star,
      value: '4.9/5',
      label: 'Student Rating',
      description: 'Verified Reviews',
      accent: 'text-yellow-500'
    },
    {
      icon: TrendingUp,
      value: '2,847+',
      label: 'Success Stories',
      description: 'Last 5 Years',
      accent: 'text-green-500'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Aspirants',
      description: 'Community Members',
      accent: 'text-blue-500'
    },
    {
      icon: ShieldCheck,
      value: '15+',
      label: 'Years Legacy',
      description: 'Of Trust & Quality',
      accent: 'text-accent'
    }
  ];

  return (
    <section className="relative py-8 md:py-10 px-4 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.accent.replace('text-', 'bg-').replace('500', '50')}`}>
                    <Icon className={stat.accent} size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-2xl font-black text-primary tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-[10px] font-medium text-gray-500">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Decorative background glow on hover */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
