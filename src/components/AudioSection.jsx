import React from 'react';
import { products } from '../data/mock';

const AudioSection = () => {
    return (
        <section className="relative py-16 bg-zinc-950 overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "NDOT, sans-serif" }}>
                        Audio
                    </h2>
                    <p className="text-xl text-gray-500">Sound in its purest form</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {products.audio.map((product) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-500"
                        >
                            {/* Product Image */}
                            <div className="aspect-square overflow-hidden relative bg-linear-to-br from-zinc-900 to-black">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>

                            {/* Product Info */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg text-gray-500 italic">
                                        {product.tagline}
                                    </p>
                                </div>

                                <p className="text-base text-gray-400">
                                    {product.description}
                                </p>

                                <div className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <p className="text-sm text-gray-500">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                    <span className="text-3xl font-bold text-white">
                                        {product.price}
                                    </span>
                                    <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 font-medium transition-all duration-300">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudioSection;
