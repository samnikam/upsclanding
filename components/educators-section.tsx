'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const educators = [
    {
        name: "Akshay Kadam Sir",
        subject: "Ethics & Indian Society",
        credentials: ["4 Mains 2 Interviews", "10 Years+ Experience"],
        image: "/akshay-kadam.png"
    },
    {
        name: "Jawwad Kazi Sir",
        subject: "History, Art & Culture, IR",
        credentials: ["MBA & PGDMM", "15 Years+ Experience"],
        image: "/jawwad-kazi.png"
    },
    {
        name: "Dr. Kaustubh Bondre Sir",
        subject: "Geography",
        credentials: ["MBBS from GMCH Nagpur", "3 Interview + 4 Mains", "9 Years + Experience"],
        image: "/kaustubh-bondre.png"
    },
    {
        name: "Ramesh Shingade Sir",
        subject: "Polity",
        credentials: ["5 Mains 3 Interviews", "10 Years + Experience"],
        image: "/ramesh-shingade.png"
    },
    {
        name: "Sumit Konde Sir",
        subject: "Geography & Environment",
        credentials: ["8 Years+ Experience"],
        image: "/sumit-kondesir.png"
    },
    {
        name: "Harshal Patil Sir",
        subject: "Economy",
        credentials: ["AIR 833, UPSC CSE | AIR 84, UPSC CAPF", "Given 5 CSE Interview & 6 Mains", "7 Years+ Experience"],
        image: "/harshal-patil.png"
    }
];

export function EducatorsSection() {
    return (
        <section className="py-4 md:py-6 lg:py-8 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-3 md:px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-4 md:mb-6 lg:mb-10 space-y-2 md:space-y-3">
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                        Meet Your Educators
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium px-4">
                        Learn from India's most experienced mentors who have guided thousands of successful aspirants.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-6 lg:gap-y-8 gap-x-6 md:gap-x-8">
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

                            {/* Details */}
                            <div className="mt-4 md:mt-5 text-center space-y-1 px-2">
                                <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#0B1F4E]">
                                    {educator.name}
                                </h3>
                                <p className="text-[#0B1F4E] text-xs md:text-sm italic font-medium">
                                    {educator.subject}
                                </p>
                                <div className="space-y-0.5 pt-1">
                                    {educator.credentials.map((line, i) => (
                                        <p key={i} className="text-gray-600 text-[11px] md:text-xs font-medium leading-snug">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 md:mt-8 text-center">
                    <a
                        href="https://wa.me/917887888819"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#128C7E] hover:bg-[#0B1F4E] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Talk to Your Favourite Educator
                    </a>
                </div>
            </div>
        </section>
    );
}
