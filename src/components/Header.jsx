// src/components/Header.jsx  (replace existing file)
import React, { useState, useEffect } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // remove local isCartOpen
    const { openCart, totalItems } = useCart();
    const location = useLocation();

    // same scroll / mouse logic as before
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setShowHeader(currentY < lastScrollY || currentY < 50);
            setLastScrollY(currentY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientY < 60) setShowHeader(true);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (isMenuOpen) { } // keep previous behavior (menu/cart mutual close maybe handled here)
    }, [isMenuOpen]);

    return (
        <div className="relative">
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
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-white/10 transition">
                    <Menu className="w-5 h-5 text-white" />
                </button>

                <Link to="/" className="text-xl font-bold text-white tracking-widest select-none" style={{ fontFamily: "NDOT" }}>
                    Nothing (R)
                </Link>

                <button onClick={() => openCart()} className="p-2 rounded-full hover:bg-white/10 transition relative">
                    <ShoppingCart className="w-5 h-5 text-white" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-2 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </button>
            </motion.header>

            {/* Drawers below header (menu) stays same as your implementation */}
            <AnimatePresence>
                {(isMenuOpen) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        className="fixed left-1/2 top-20 transform -translate-x-1/2 
              w-[55%] max-w-5xl bg-black/80 backdrop-blur-lg border border-white/10 
              rounded-2xl z-40 overflow-hidden shadow-2xl"
                    >
                        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="p-6 space-y-3 text-gray-300">
                            <li><Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "NDOT" }}>Home</Link></li>
                            <li><Link to="/products" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "NDOT" }}>Products</Link></li>
                            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "NDOT" }}>About</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "NDOT" }}>Contact</Link></li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
