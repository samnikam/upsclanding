import Image from 'next/image';

export function TrustBar() {
  const stats = [
    {
      image: '/a.png',
      value: '11 Lakhs+',
      label: 'Students',
      description: 'Trusted by',
      accent: 'text-blue-500',
      useIcon: false
    },
    {
      image: '/b.png',
      value: '3.5 Crore+',
      label: 'Minutes',
      description: 'Session Watched',
      accent: 'text-blue-500',
      useIcon: false
    },
    {
      image: '/c.png',
      value: '1.2 Crore+',
      label: 'Attempted',
      description: 'Questions',
      accent: 'text-blue-500',
      useIcon: false
    },
    {
      image: '/d.png',
      value: '300+',
      label: 'Lectures',
      description: "Officer's Guest",
      accent: 'text-blue-500',
      useIcon: false
    }
  ];

  return (
    <section className="relative py-4 md:py-6 lg:py-10 px-3 md:px-4 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <path d="M10 10L90 90M90 10L10 90" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.accent.replace('text-', 'bg-').replace('500', '50')}`}>
                    <Image src={stat.image!} alt="" width={32} height={32} className="object-contain" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xl md:text-2xl font-black text-primary tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="text-[9px] md:text-[10px] font-medium text-gray-500">
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
