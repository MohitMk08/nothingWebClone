// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../data/mock";
// import { ShoppingCart, CreditCard } from "lucide-react";
// import { useCart } from "../context/CartContext";

// export default function ProductDetail() {
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const { addToCart } = useCart();

//     // 🔹 Flatten all product categories into one array
//     const allProducts = Object.values(products).flat();
//     const product = allProducts.find((p) => p.slug === slug);

//     const [selectedImage, setSelectedImage] = useState(product?.mainImage || "");
//     const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.id || null);
//     const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);

//     if (!product) {
//         return (
//             <div className="pt-28">
//                 <div className="max-w-3xl mx-auto p-8 text-center">
//                     <h2 className="text-2xl font-semibold text-white">Product not found</h2>
//                     <button
//                         className="mt-4 px-4 py-2 bg-white text-black rounded"
//                         onClick={() => navigate("/products")}
//                     >
//                         Back to products
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     const mainImgUrl = (filename) =>
//         new URL(`../assets/${filename}`, import.meta.url).href;

//     return (
//         <div className="pt-28 pb-20 bg-black text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid md:grid-cols-2 gap-10 items-start">
//                     {/* Left: gallery */}
//                     <div className="space-y-6">
//                         <div className="bg-black/40 border border-white/6 rounded-2xl overflow-hidden">
//                             <img
//                                 src={mainImgUrl(selectedImage)}
//                                 alt={product.name}
//                                 className="w-full h-auto object-contain"
//                             />
//                         </div>

//                         {product.gallery?.length > 0 && (
//                             <div className="flex gap-3 flex-wrap">
//                                 {product.gallery.map((g) => (
//                                     <button
//                                         key={g}
//                                         onClick={() => setSelectedImage(g)}
//                                         className={`w-20 h-20 rounded-lg overflow-hidden border ${selectedImage === g
//                                             ? "ring-2 ring-white/60"
//                                             : "border-white/6"
//                                             }`}
//                                     >
//                                         <img
//                                             src={mainImgUrl(g)}
//                                             alt={g}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Right: details */}
//                     <div>
//                         <h1 className="text-4xl font-bold">{product.name}</h1>
//                         <p className="text-gray-400 mt-2">{product.shortDescription}</p>

//                         <div className="mt-6 flex items-baseline gap-4">
//                             <div className="text-3xl font-extrabold">
//                                 {product.currency}
//                                 {selectedVariant?.price ?? product.price}
//                             </div>
//                             <div className="text-sm text-gray-400">Inclusive taxes</div>
//                         </div>

//                         {/* Color options */}
//                         {product.colors?.length > 0 && (
//                             <div className="mt-6">
//                                 <h4 className="text-sm text-gray-400 uppercase mb-2">Color</h4>
//                                 <div className="flex items-center gap-3">
//                                     {product.colors.map((c) => (
//                                         <button
//                                             key={c.id}
//                                             onClick={() => setSelectedColor(c.id)}
//                                             className={`w-9 h-9 rounded-full border ${selectedColor === c.id
//                                                 ? "ring-2 ring-white/60"
//                                                 : "border-white/6"
//                                                 }`}
//                                             aria-label={c.name}
//                                             style={{ background: c.hex }}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Variant options (storage / edition) */}
//                         {product.variants?.length > 0 && (
//                             <div className="mt-6">
//                                 <h4 className="text-sm text-gray-400 uppercase mb-2">Options</h4>
//                                 <div className="flex gap-3 flex-wrap">
//                                     {product.variants.map((v, idx) => {
//                                         const label =
//                                             v.storage || v.edition || `Option ${idx + 1}`;
//                                         return (
//                                             <button
//                                                 key={label}
//                                                 onClick={() => setSelectedVariant(v)}
//                                                 className={`px-4 py-2 rounded-full border ${selectedVariant === v
//                                                     ? "bg-white text-black"
//                                                     : "text-white/90 border-white/6"
//                                                     }`}
//                                             >
//                                                 {label}
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Features */}
//                         {product.features?.length > 0 && (
//                             <div className="mt-6">
//                                 <h4 className="text-sm text-gray-400 uppercase mb-2">
//                                     Key features
//                                 </h4>
//                                 <ul className="list-disc ml-5 text-gray-300">
//                                     {product.features.map((f) => (
//                                         <li key={f} className="mb-1">
//                                             {f}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}

//                         {/* Actions */}
//                         <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                             <button
//                                 className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold shadow"
//                                 onClick={() => {
//                                     addToCart(
//                                         product,
//                                         selectedVariant,
//                                         product.colors?.find((c) => c.id === selectedColor)
//                                     );
//                                     navigate("/cart");
//                                 }}
//                             >
//                                 <CreditCard className="w-5 h-5" />
//                                 Buy Now
//                             </button>

//                             <button
//                                 className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-white"
//                                 onClick={() =>
//                                     addToCart(
//                                         product,
//                                         selectedVariant,
//                                         product.colors?.find((c) => c.id === selectedColor)
//                                     )
//                                 }
//                             >
//                                 <ShoppingCart className="w-5 h-5" />
//                                 Add to cart
//                             </button>
//                         </div>

//                         {/* Description */}
//                         {product.description && (
//                             <div className="mt-8 text-gray-300">
//                                 <h4 className="text-sm text-gray-400 uppercase mb-2">
//                                     About
//                                 </h4>
//                                 <p>{product.description}</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/mock";
import { ShoppingCart, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const cartIconRef = useRef(null); // for the flying animation
    const [isFlying, setIsFlying] = useState(false);

    // flatten all product categories into one array
    const allProducts = Object.values(products).flat();
    const product = allProducts.find((p) => p.slug === slug);

    const [selectedImage, setSelectedImage] = useState(product?.mainImage || "");
    const [selectedColor, setSelectedColor] = useState(
        product?.colors?.[0]?.id || null
    );
    const [selectedVariant, setSelectedVariant] = useState(
        product?.variants?.[0] || null
    );

    if (!product) {
        return (
            <div className="pt-28">
                <div className="max-w-3xl mx-auto p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white">
                        Product not found
                    </h2>
                    <button
                        className="mt-4 px-4 py-2 bg-white text-black rounded"
                        onClick={() => navigate("/products")}
                    >
                        Back to products
                    </button>
                </div>
            </div>
        );
    }

    const mainImgUrl = (filename) =>
        new URL(`../assets/${filename}`, import.meta.url).href;

    // 🪄 Flying animation function
    const triggerFlyAnimation = () => {
        if (isFlying) return;
        setIsFlying(true);
        setTimeout(() => setIsFlying(false), 1000);
    };

    return (
        <div className="pt-28 pb-20 bg-black text-white relative overflow-hidden">
            {/* 🛒 Floating cart icon target */}
            <div
                ref={cartIconRef}
                className="fixed top-6 right-8 z-50 text-white opacity-60"
            >
                <ShoppingCart className="w-8 h-8" />
            </div>

            {/* 🧞 Flying image effect */}
            <AnimatePresence>
                {isFlying && (
                    <motion.img
                        src={mainImgUrl(selectedImage)}
                        alt=""
                        className="fixed z-9999 w-28 h-28 object-contain rounded-xl pointer-events-none"
                        initial={{
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            opacity: 1,
                            scale: 1,
                        }}
                        animate={{
                            top: 60,
                            left: "calc(100% - 70px)",
                            opacity: 0,
                            scale: 0.2,
                            rotate: 360,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left: gallery */}
                    <div className="space-y-6">
                        <div className="bg-black/40 border border-white/6 rounded-2xl overflow-hidden">
                            <img
                                src={mainImgUrl(selectedImage)}
                                alt={product.name}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {product.gallery?.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                                {product.gallery.map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setSelectedImage(g)}
                                        className={`w-20 h-20 rounded-lg overflow-hidden border ${selectedImage === g
                                            ? "ring-2 ring-white/60"
                                            : "border-white/6"
                                            }`}
                                    >
                                        <img
                                            src={mainImgUrl(g)}
                                            alt={g}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: details */}
                    <div>
                        <h1 className="text-4xl font-bold">{product.name}</h1>
                        <p className="text-gray-400 mt-2">{product.shortDescription}</p>

                        <div className="mt-6 flex items-baseline gap-4">
                            <div className="text-3xl font-extrabold">
                                {product.currency}
                                {selectedVariant?.price ?? product.price}
                            </div>
                            <div className="text-sm text-gray-400">Inclusive taxes</div>
                        </div>

                        {/* Color options */}
                        {product.colors?.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm text-gray-400 uppercase mb-2">Color</h4>
                                <div className="flex items-center gap-3">
                                    {product.colors.map((c) => (
                                        <button
                                            key={c.id}
                                            onClick={() => setSelectedColor(c.id)}
                                            className={`w-9 h-9 rounded-full border ${selectedColor === c.id
                                                ? "ring-2 ring-white/60"
                                                : "border-white/6"
                                                }`}
                                            aria-label={c.name}
                                            style={{ background: c.hex }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Variant options */}
                        {product.variants?.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-sm text-gray-400 uppercase mb-2">
                                    Options
                                </h4>
                                <div className="flex gap-3 flex-wrap">
                                    {product.variants.map((v, idx) => {
                                        const label =
                                            v.storage || v.edition || `Option ${idx + 1}`;
                                        return (
                                            <button
                                                key={label}
                                                onClick={() => setSelectedVariant(v)}
                                                className={`px-4 py-2 rounded-full border ${selectedVariant === v
                                                    ? "bg-white text-black"
                                                    : "text-white/90 border-white/6"
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold shadow"
                                onClick={() => {
                                    addToCart(
                                        product,
                                        selectedVariant,
                                        product.colors?.find((c) => c.id === selectedColor)
                                    );
                                    navigate("/cart");
                                }}
                            >
                                <CreditCard className="w-5 h-5" />
                                Buy Now
                            </button>

                            {/* 🛒 Animated Add to Cart */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => {
                                    addToCart(
                                        product,
                                        selectedVariant,
                                        product.colors?.find((c) => c.id === selectedColor)
                                    );
                                    triggerFlyAnimation();
                                }}
                                className="relative flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-white overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-linear-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all"></span>
                                <ShoppingCart className="w-5 h-5 z-10" />
                                <span className="z-10 font-medium">Add to cart</span>
                            </motion.button>
                        </div>

                        {/* Description */}
                        {product.description && (
                            <div className="mt-8 text-gray-300">
                                <h4 className="text-sm text-gray-400 uppercase mb-2">About</h4>
                                <p>{product.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
