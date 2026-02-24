'use client';

import Image from 'next/image';

const educators = [

    {
        name: "Sumit Konde Sir",
        role: "Geography & Environment Expert",
        details: "Geography, Environment & Current Affairs Specialist",
        image: "/sumit-kondesir.png"
    },
    {
        name: "Akshay Kadam Sir",
        role: "Science & Technology Expert",
        details: "Science & Tech, Environment and Ecology Specialist",
        image: "/akshay-kadam.png"
    },
    {
        name: "Dr. Kaustubh Bondre Sir",
        role: "History & Culture Specialist",
        details: "Ancient, Medieval & Modern History, Art and Culture",
        image: "/kaustubh-bondre.png"
    },
    {
        name: "Harshal Patil Sir",
        role: "CSAT & Mathematics Expert",
        details: "Logical Reasoning, Quantitative Aptitude & Data Interpretation",
        image: "/harshal-patil.png"
    },
    {
        name: "Jawwad Kazi Sir",
        role: "International Relations Expert",
        details: "IR, Internal Security and Social Issues Specialist",
        image: "/jawwad-kazi.png"
    },
    {
        name: "Ramesh Shingade Sir",
        role: "Geography Specialist",
        details: "Physical Geography, Agriculture and Mapping Expert",
        image: "/ramesh-shingade.png"
    }
];

export function EducatorsSection() {
    return (
        <section className="py-6 md:py-10 lg:py-12 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-3 md:px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 lg:mb-16 space-y-3 md:space-y-4">
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        Meet Your Educators
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium px-4">
                        Learn from India's most experienced mentors who have guided thousands of successful aspirants.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-8 lg:gap-y-12 gap-x-6 md:gap-x-8">
                    {educators.map((educator, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Profile Image Container */}
                            <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
                                <div className="absolute inset-0 rounded-full border-2 border-blue-200 scale-[1.02]"></div>
                                <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-100">
                                    <img
                                        src={educator.image}
                                        alt={educator.name}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Name Badge */}
                            <div className="relative -mt-6 md:-mt-8 z-10 flex items-center justify-center">
                                <div className="flex items-stretch shadow-md">
                                    {/* Left Accent */}
                                    <div className="w-1 md:w-1.5 bg-[#0B1F4E]/20"></div>

                                    {/* Main Yellow Background */}
                                    <div className="bg-[#F5A623] py-1.5 px-4 md:py-2 md:px-5 lg:px-6 border-r border-[#0B1F4E]/10">
                                        <h3 className="text-xs md:text-sm lg:text-base font-bold text-[#0B1F4E] text-center whitespace-nowrap">
                                            {educator.name}
                                        </h3>
                                    </div>

                                    {/* Right Blue Accent */}
                                    <div className="w-2 md:w-3 bg-[#002147] border-l border-white/10"></div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mt-4 md:mt-6 text-center space-y-1.5 md:space-y-2 px-2">
                                <p className="text-[#0B1F4E] text-[10px] md:text-xs font-semibold opacity-80 uppercase tracking-tight">
                                    {educator.role}
                                </p>
                                <div className="h-px w-6 bg-[#F5A623]/40 mx-auto"></div>
                                <p className="text-[#0B1F4E] text-xs md:text-sm font-bold leading-tight max-w-[200px] md:max-w-[220px] mx-auto">
                                    {educator.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
