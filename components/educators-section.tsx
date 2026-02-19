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
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                        Meet Your Educators
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                    {educators.map((educator, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            {/* Profile Image Container */}
                            <div className="relative w-44 h-44 md:w-52 md:h-52">
                                <div className="absolute inset-0 rounded-full border-2 border-[#F5A623] scale-[1.02]"></div>
                                <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-100">
                                    <img
                                        src={educator.image}
                                        alt={educator.name}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Name Badge */}
                            <div className="relative -mt-8 z-10 flex items-center justify-center">
                                <div className="flex items-stretch transform -skew-x-12 shadow-md">
                                    {/* Left Accent */}
                                    <div className="w-1.5 bg-[#0B1F4E]/20"></div>

                                    {/* Main Yellow Background */}
                                    <div className="bg-[#F5A623] py-2 px-5 md:px-6 border-r border-[#0B1F4E]/10">
                                        <h3 className="text-sm md:text-base font-bold text-[#0B1F4E] text-center transform skew-x-12 whitespace-nowrap">
                                            {educator.name}
                                        </h3>
                                    </div>

                                    {/* Right Blue Accent */}
                                    <div className="w-3 bg-[#0B1F4E] border-l border-white/10"></div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mt-6 text-center space-y-2 px-2">
                                <p className="text-[#0B1F4E] text-xs font-semibold opacity-80 uppercase tracking-tight">
                                    {educator.role}
                                </p>
                                <div className="h-px w-6 bg-[#F5A623]/40 mx-auto"></div>
                                <p className="text-[#0B1F4E] text-xs md:text-sm font-bold leading-tight max-w-[220px] mx-auto">
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
