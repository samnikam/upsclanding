'use call';

import { MousePointerClick, CalendarCheck, Rocket } from 'lucide-react';

export function StepByStep() {
    const steps = [
        {
            icon: MousePointerClick,
            title: "Fill the Form",
            description: "Quickly submit your details in the enquiry form above to show interest."
        },
        {
            icon: CalendarCheck,
            title: "Talk to Expert",
            description: "Our mentor calls you to understand your goals and suggest a path."
        },
        {
            icon: Rocket,
            title: "Start Learning",
            description: "Unlock the portal, join live classes, and begin your IAS journey."
        }
    ];

    return (
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                        3 Simple Steps to Start
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto font-medium">
                        Your path to IAS success is just a few clicks away. Here is how we get you started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (Desktop Only) */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-accent/30 z-0"></div>
                            )}

                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-accent/20">
                                    <step.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed px-4">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
