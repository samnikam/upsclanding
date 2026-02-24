'use client';

import {
    BookOpen,
    FileText,
    PenTool,
    Target,
    Users,
    CheckCircle2,
    ArrowRight,
    ChevronRight,
    Layers,
    Sparkles
} from 'lucide-react';

const phases = [
    {
        id: "I",
        title: "FOUNDATION BUILDING PHASE",
        subtitle: "The Core Foundation",
        points: [
            "600+ Hours with India's Best Faculty",
            "Weekly Plans & Assignments",
            "Classes for Clarifying Doubts",
            "Mentorship Sessions",
            "Daily Target & Performance Monitoring",
            "Weekly Test Series"
        ],
        icon: BookOpen,
        accent: "bg-blue-600",
        lightAccent: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        id: "II",
        title: "MAINS FOUNDATION PHASE",
        subtitle: "In-Depth Mastery",
        points: [
            "Complete Coverage of GS-1, GS-2, GS-3, GS-4 & Essay",
            "Video Tutorials & Mains-focused Material for each topic",
            "Specialized Ethics & Essay Session Resources",
            "Periodic Mentorship Session by UPSC Toppers"
        ],
        icon: Layers,
        accent: "bg-purple-600",
        lightAccent: "bg-purple-50",
        textColor: "text-purple-600"
    },
    {
        id: "III",
        title: "ART OF ANSWER WRITING",
        subtitle: "Practical Implementation",
        points: [
            "Dedicated Answer Writing Classes",
            "Expert Answer Writing Evaluation",
            "Write Smart Program (Mains PYQ Answer Writing)",
            "Enriched & Updated Study Materials"
        ],
        icon: PenTool,
        accent: "bg-orange-500",
        lightAccent: "bg-orange-50",
        textColor: "text-orange-500"
    },
    {
        id: "IV",
        title: "PRELIMS REVIEW STAGE",
        subtitle: "Final Refinement",
        points: [
            "CSAT Foundation Instruction",
            "Comprehensive Current Affairs Review",
            "Previous Years' Questions Analysis & Practice",
            "Intensive Revision for Prelims Readiness",
            "50+ Prelims Test Series Practice"
        ],
        icon: Target,
        accent: "bg-emerald-600",
        lightAccent: "bg-emerald-50",
        textColor: "text-emerald-600"
    },
    {
        id: "V",
        title: "INTERVIEW PHASE",
        subtitle: "Personality Development",
        points: [
            "Professional Mock Interviews",
            "Personalized DAF Filling Guidance",
            "DAF-Focused Strategy Sessions with Experts"
        ],
        icon: Users,
        accent: "bg-accent",
        lightAccent: "bg-accent/5",
        textColor: "text-accent"
    }
];

export function PreparationPhases() {
    return (
        <section id="preparation-phases" className="py-8 md:py-12 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-3 md:px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 lg:mb-16 space-y-3 md:space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        Phases of Preparation
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium px-4">
                        Our scientifically structured 5-Phase approach ensures you are ready for every challenge of the UPSC journey.
                    </p>
                </div>

                {/* Phases Container */}
                <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
                        {phases.map((phase, index) => (
                            <div key={index} className="group flex flex-col items-center">
                                {/* Visual Step Marker */}
                                <div className="mb-6 md:mb-8 relative">
                                    {/* Number Background */}
                                    <span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-black text-gray-50 opacity-50 z-0 group-hover:text-gray-100 transition-colors">
                                        {phase.id}
                                    </span>
                                    {/* Icon Circular Badge */}
                                    <div className={`w-14 h-14 md:w-16 md:h-16 ${phase.lightAccent} rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                        <phase.icon className={`w-6 h-6 md:w-7 md:h-7 ${phase.textColor}`} />
                                    </div>
                                    {/* Connection arrow for desktop */}
                                    {index < phases.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2">
                                            <ChevronRight className="w-8 h-8 text-gray-200" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="w-full bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center text-center group-hover:-translate-y-2">
                                    <h3 className={`text-xs md:text-sm font-bold ${phase.textColor} mb-1 uppercase tracking-widest`}>
                                        Phase {phase.id}
                                    </h3>
                                    <h4 className="text-base md:text-lg font-black text-primary mb-2 md:mb-3 leading-tight min-h-[36px] md:min-h-[44px]">
                                        {phase.title}
                                    </h4>

                                    <div className="w-8 h-1 bg-gray-100 mb-4 md:mb-6 rounded-full group-hover:bg-accent transition-colors"></div>

                                    {/* Points List */}
                                    <ul className="space-y-2 md:space-y-3 text-left w-full mt-auto">
                                        {phase.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 group/item">
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${phase.accent} mt-1`}></div>
                                                </div>
                                                <span className="text-[11px] md:text-xs font-semibold text-gray-600 leading-tight group-hover/item:text-primary transition-colors">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Footer */}
                <div className="mt-8 md:mt-10 lg:mt-20 text-center">
                    <div className="inline-block p-1 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-4 md:px-10 md:py-6">
                            <p className="text-primary font-bold text-base md:text-lg">
                                Ready to start your Phase I today?
                            </p>
                            <a
                                href="#enquiry-form"
                                className="bg-[#002147] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 md:gap-3 hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-accent/20 active:scale-95 scroll-smooth"
                            >
                                Book A Strategy Session
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
