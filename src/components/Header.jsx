import React, { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Hide header on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setShowHeader(currentY < lastScrollY || currentY < 50);
            setLastScrollY(currentY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Show header when mouse moves to top
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientY < 60) setShowHeader(true);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Close one drawer when the other opens
    useEffect(() => {
        if (isMenuOpen) setIsCartOpen(false);
        if (isCartOpen) setIsMenuOpen(false);
    }, [isMenuOpen, isCartOpen]);

    return (
        <div className="relative">
            {/* Floating Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: showHeader ? 0 : -100,
                    opacity: showHeader ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          bg-black/60 backdrop-blur-md border border-white/10 
          rounded-2xl px-3 py-2 w-[55%] max-w-5xl 
          flex items-center justify-between shadow-lg"
            >
                {/* Left - Menu */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full hover:bg-white/10 transition"
                >
                    <Menu className="w-5 h-5 text-white" />
                </button>

                {/* Center - Logo */}
                <h1
                    className="text-xl font-bold text-white tracking-widest select-none"
                    style={{ fontFamily: "NDOT" }}
                >
                    Nothing (R)
                </h1>

                {/* Right - Cart */}
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="p-2 rounded-full hover:bg-white/10 transition"
                >
                    <ShoppingCart className="w-5 h-5 text-white" />
                </button>
            </motion.header>

            {/* Drawers Below Header */}
            <AnimatePresence>
                {(isMenuOpen || isCartOpen) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className="fixed left-1/2 top-20 transform -translate-x-1/2 
              w-[55%] max-w-5xl bg-black/80 backdrop-blur-lg border border-white/10 
              rounded-2xl z-40 overflow-hidden shadow-2xl"
                    >
                        {/* Menu Content */}
                        {isMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="p-6 space-y-3 text-gray-300"
                            >
                                <li className="hover:text-white cursor-pointer" style={{ fontFamily: "NDOT" }}>Home</li>
                                <li className="hover:text-white cursor-pointer" style={{ fontFamily: "NDOT" }}>Products</li>
                                <li className="hover:text-white cursor-pointer" style={{ fontFamily: "NDOT" }}>About</li>
                                <li className="hover:text-white cursor-pointer" style={{ fontFamily: "NDOT" }}>Contact</li>
                            </motion.ul>
                        )}

                        {/* Cart Content */}
                        {isCartOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="p-6 text-gray-300"
                            >
                                <h2 className="text-lg text-white mb-2 font-semibold">Your Cart</h2>
                                <p className="text-sm text-gray-400">No items in your cart yet.</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
