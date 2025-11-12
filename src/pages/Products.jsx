// src/pages/Products.jsx
import React from "react";
import { products } from "../data/mock";
import { Link } from "react-router-dom";

const Products = () => {
    // flatten any category-based object (phones, audio, cmf, etc.)
    const allProducts = Object.values(products).flat();

    return (
        <section className="relative py-20 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2
                    className="text-5xl md:text-6xl font-bold text-white mb-10"
                    style={{ fontFamily: "NDOT, sans-serif" }}
                >
                    All Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.slug}`}
                            className="group bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={new URL(`../assets/${product.mainImage}`, import.meta.url).href}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-2xl text-white font-semibold mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    {product.shortDescription}
                                </p>
                                <div className="text-lg text-white font-bold">
                                    {product.currency}
                                    {product.price}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
