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
                </div>

                {/* Phases Container - Timeline Style */}
                <div className="relative">
                    {/* Vertical Timeline Line - Mobile */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>
                    
                    {/* Horizontal Timeline Line - Desktop */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
                        {phases.map((phase, index) => (
                            <div key={index} className="group flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                                {/* Timeline Dot & Number - Mobile/Desktop */}
                                <div className="flex-shrink-0 lg:mb-8 relative">
                                    {/* Large Number Background */}
                                    <div className="absolute -top-8 lg:-top-10 left-1/2 -translate-x-1/2 text-6xl lg:text-7xl font-black text-gray-50 opacity-50 z-0 group-hover:text-gray-100 transition-colors pointer-events-none">
                                        {phase.id}
                                    </div>
                                    
                                    {/* Icon Circle */}
                                    <div className={`relative w-12 h-12 lg:w-16 lg:h-16 ${phase.lightAccent} rounded-full flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 z-10`}>
                                        <phase.icon className={`w-5 h-5 lg:w-7 lg:h-7 ${phase.textColor}`} />
                                    </div>
                                    
                                    {/* Arrow - Desktop Only */}
                                    {index < phases.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-[4.5rem] -translate-y-1/2">
                                            <ChevronRight className="w-8 h-8 text-gray-300" />
                                        </div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 lg:w-full bg-white p-4 md:p-5 lg:p-6 rounded-2xl border-2 border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500 group-hover:-translate-y-2">
                                    {/* Phase Label */}
                                    <div className={`inline-block px-3 py-1 rounded-full ${phase.lightAccent} mb-3`}>
                                        <span className={`text-xs font-bold ${phase.textColor} uppercase tracking-wider`}>
                                            Phase {phase.id}
                                        </span>
                                    </div>
                                    
                                    {/* Title */}
                                    <h4 className="text-sm md:text-base lg:text-lg font-black text-primary mb-3 leading-tight">
                                        {phase.title}
                                    </h4>

                                    {/* Divider */}
                                    <div className={`w-12 h-1 ${phase.accent} mb-4 rounded-full group-hover:w-full transition-all duration-500`}></div>

                                    {/* Points List */}
                                    <ul className="space-y-2.5">
                                        {phase.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="mt-1 flex-shrink-0">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${phase.accent} mt-1`}></div>
                                                </div>
                                                <span className="text-[11px] md:text-xs font-semibold text-gray-600 leading-tight group-hover:text-primary transition-colors">
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
                <div className="mt-6 md:mt-8 lg:mt-12 text-center">
                    <div className="inline-block p-1 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-4 md:px-10 md:py-6">
                            <p className="text-primary font-bold text-base md:text-lg">
                                Ready to start your Phase I today?
                            </p>
                            <a
                                href="#enquiry-form"
                                className="bg-[#002147] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 md:gap-3 hover:bg-accent hover:text-primary transition-all shadow-lg hover:shadow-accent/20 active:scale-95 scroll-smooth"
                            >
                                Book A 1:1 Free Session
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
