// src/components/CartDrawer.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
    const { cart, isCartOpen, closeCart, removeFromCart, updateQty, totalPrice, clearCart } = useCart();

    const imgUrl = (filename) => new URL(`../assets/${filename}`, import.meta.url).href;

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* overlay */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                    />

                    {/* drawer */}
                    <motion.div
                        className="fixed left-1/2 top-20 z-50 -translate-x-1/2 w-[55%] max-w-3xl bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 160, damping: 22 }}
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h3 className="text-white text-lg font-semibold">Your Cart</h3>
                            <div className="flex items-center gap-3">
                                <button onClick={clearCart} className="text-sm text-gray-300 hover:text-white">Clear</button>
                                <button onClick={closeCart} className="text-gray-400 hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto divide-y divide-white/6">
                            {cart.length === 0 ? (
                                <div className="p-8 text-center text-gray-400">Your cart is empty.</div>
                            ) : (
                                cart.map((it, idx) => (
                                    <div key={`${it.id}-${idx}`} className="flex items-center gap-4 p-4">
                                        <img src={imgUrl(it.image)} alt={it.name} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between">
                                                <h4 className="text-white font-medium">{it.name}</h4>
                                                <div className="text-gray-300">{it.price}</div>
                                            </div>
                                            <div className="text-sm text-gray-400">{it.variant?.storage ?? it.variant?.edition ?? ""} • {it.color?.name ?? ""}</div>

                                            <div className="mt-3 flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQty(idx, it.qty - 1)}
                                                    className="px-2 py-1 rounded-full border border-white/6 text-gray-300"
                                                >
                                                    -
                                                </button>
                                                <div className="px-3 py-1 rounded-md bg-white/5 text-white">{it.qty}</div>
                                                <button
                                                    onClick={() => updateQty(idx, it.qty + 1)}
                                                    className="px-2 py-1 rounded-full border border-white/6 text-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-2">
                                            <div className="text-sm text-gray-300">${(it.price * it.qty).toFixed(2)}</div>
                                            <button onClick={() => removeFromCart(it.id)} className="text-red-400 hover:text-red-300">
                                                <Trash className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 border-t border-white/10 flex items-center justify-between">
                                <div className="text-white font-semibold">Total: ${totalPrice.toFixed(2)}</div>
                                <div className="flex gap-3">
                                    <button onClick={clearCart} className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/5">Clear</button>
                                    <button onClick={() => alert("Proceed to checkout")} className="px-4 py-2 bg-white text-black rounded-full font-semibold">Checkout</button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
