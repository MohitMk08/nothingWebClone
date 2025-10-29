import React from 'react';
import { products } from '../data/mock';

const CMFSection = () => {
    return (
        <section className="relative py-16 bg-black overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-950/20 via-transparent to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block px-6 py-2 bg-linear-to-r from-orange-500 to-yellow-500 text-black rounded-full text-sm font-bold mb-6 tracking-wider">
                        CMF BY NOTHING
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: "NDOT, sans-serif" }}>
                        Design for all
                    </h2>
                    <p className="text-xl text-gray-500">Essential tech, bold expression</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {products.cmf.map((product) => (
                        <div
                            key={product.id}
                            className="group relative overflow-hidden bg-zinc-950 border border-orange-900/30 hover:border-orange-500/50 transition-all duration-500"
                        >
                            {/* Product Image */}
                            <div className="aspect-square overflow-hidden relative bg-linear-to-br from-orange-950/20 to-black">
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
                                    <h3 className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg text-orange-500/80 italic">
                                        {product.tagline}
                                    </p>
                                </div>

                                <p className="text-base text-gray-400">
                                    {product.description}
                                </p>

                                <div className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                            <p className="text-sm text-gray-500">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                    <span className="text-3xl font-bold text-white">
                                        {product.price}
                                    </span>
                                    <button className="px-6 py-3 bg-linear-to-r from-orange-500 to-yellow-500 text-black rounded-full hover:from-orange-400 hover:to-yellow-400 font-medium transition-all duration-300">
                                        Shop now
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

export default CMFSection;
