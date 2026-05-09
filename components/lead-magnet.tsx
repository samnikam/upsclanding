'use client';

import { FileText, Download, ArrowRight } from 'lucide-react';

export function LeadMagnet() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                <FileText size={18} />
                                Free Study Material
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                                Download the Ultimate <br />
                                <span className="text-accent underline decoration-accent/30 underline-offset-8">2027 UPSC Roadmap</span>
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                                Get our exclusive 25-page guide covering the entire path from Prelims basics to Interview mastery. Join 10,000+ aspirants who started their journey with this roadmap.
                            </p>

                            <ul className="space-y-3 text-white/90">
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    </div>
                                    Month-by-month study schedule
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    </div>
                                    Must-read booklist for 2027
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    </div>
                                    Current Affairs strategy
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Get Your Copy Instantly</h3>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg group"
                                    >
                                        Download Roadmap PDF
                                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                    </button>
                                    <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
                                        Safe & Secure • 100% Free
                                    </p>
                                </form>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold animate-pulse shadow-lg z-20">
                                PDF
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
