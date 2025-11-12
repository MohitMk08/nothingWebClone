// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>

        {/* CartDrawer is mounted once at app root and shows when context.isCartOpen is true */}
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}
