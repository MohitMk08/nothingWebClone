import React from 'react';
import { Play } from 'lucide-react';
import phone3a from "../assets/nothing3a.webp"

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
            {/* Animated Background Lines */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50"></div>
                <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            <div className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-medium text-gray-400 tracking-wider">
                                NOTHING PHONE (3a Pro)
                            </div>
                            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                                Power in
                                <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                                    perspective.
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-lg">
                                Experience the perfect balance of performance and design with Glyph Interface.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                                <span>Pre-order now</span>
                            </button>
                            <button className="group px-8 py-4 bg-transparent text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                                <Play className="h-5 w-5" />
                                <span>Watch video</span>
                            </button>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-3 gap-6 pt-8 ">
                            <div>
                                <p className="text-2xl font-bold text-white">6.77"</p>
                                <p className="text-sm text-gray-500">AMOLED Display</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">50MP</p>
                                <p className="text-sm text-gray-500">Triple Camera</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">5000</p>
                                <p className="text-sm text-gray-500">mAh Battery</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Image with Glyph Effect */}
                    <div className="relative">
                        <div className="relative">


                            {/* Phone Image */}
                            <div className="relative z-10">
                                <img
                                    src={phone3a}
                                    alt="Nothing Phone (3a)"
                                    className="w-full h-auto drop-shadow-2xl"
                                />

                                {/* Glowing effect */}
                                <div className="absolute inset-0 bg-linear-to-t from-white/10 to-transparent blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
