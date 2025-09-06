"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Only run on client
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedFavorites = localStorage.getItem("favorites");

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));

    setMounted(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  // Add/remove product from cart
  const toggleCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // remove
        return prev.filter((item) => item.id !== product.id);
      } else {
        // add with default quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity for a cart item
  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);
  const isFavorite = (productId) => favorites.includes(productId);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        toggleCart,
        toggleFavorite,
        updateQuantity,
        isInCart,
        isFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
