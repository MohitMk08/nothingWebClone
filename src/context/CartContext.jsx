// src/context/CartContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Cart items persist to localStorage
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    // Drawer open state (UI)
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        // persist cart
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch { }
    }, [cart]);

    const addToCart = (product, variant = null, color = null) => {
        setCart((prev) => {
            // match by id + variant + color
            const matchIndex = prev.findIndex(
                (it) =>
                    it.id === product.id &&
                    JSON.stringify(it.variant) === JSON.stringify(variant) &&
                    JSON.stringify(it.color) === JSON.stringify(color)
            );

            if (matchIndex > -1) {
                const copy = [...prev];
                copy[matchIndex].qty += 1;
                return copy;
            }

            return [
                ...prev,
                {
                    id: product.id,
                    name: product.name,
                    price: variant?.price ?? product.price,
                    variant,
                    color,
                    qty: 1,
                    image: product.mainImage,
                },
            ];
        });
    };

    const removeFromCart = (indexOrId) => {
        // allow passing index or item id
        setCart((prev) =>
            typeof indexOrId === "number" ? prev.filter((_, i) => i !== indexOrId) : prev.filter((i) => i.id !== indexOrId)
        );
    };

    const updateQty = (index, qty) => {
        setCart((prev) => {
            const copy = [...prev];
            if (copy[index]) copy[index].qty = Math.max(1, qty);
            return copy;
        });
    };

    const clearCart = () => setCart([]);

    const totalItems = useMemo(() => cart.reduce((acc, it) => acc + it.qty, 0), [cart]);
    const totalPrice = useMemo(() => cart.reduce((acc, it) => acc + it.qty * it.price, 0), [cart]);

    // Drawer controls
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen((s) => !s);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
