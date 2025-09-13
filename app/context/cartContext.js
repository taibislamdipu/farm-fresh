"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { data: session } = useSession();
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(null); // include payment info
  const [mounted, setMounted] = useState(false);

  const userKey = session?.user?.email;

  // Load user-specific data
  useEffect(() => {
    if (!userKey) {
      setCart([]);
      setFavorites([]);
      setPaymentInfo(null); // reset on logout
      setMounted(true);
      return;
    }

    const storedCart = localStorage.getItem(`cart_${userKey}`);
    const storedFavorites = localStorage.getItem(`favorites_${userKey}`);
    const storedPayment = localStorage.getItem(`payment_${userKey}`);

    setCart(storedCart ? JSON.parse(storedCart) : []);
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    setPaymentInfo(storedPayment ? JSON.parse(storedPayment) : null);

    setMounted(true);
  }, [userKey]);

  // Save user-specific data
  useEffect(() => {
    if (mounted && userKey)
      localStorage.setItem(`cart_${userKey}`, JSON.stringify(cart));
  }, [cart, mounted, userKey]);

  useEffect(() => {
    if (mounted && userKey)
      localStorage.setItem(`favorites_${userKey}`, JSON.stringify(favorites));
  }, [favorites, mounted, userKey]);

  useEffect(() => {
    if (mounted && userKey)
      localStorage.setItem(`payment_${userKey}`, JSON.stringify(paymentInfo));
  }, [paymentInfo, mounted, userKey]);

  const toggleCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

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

  const totalItems = cart?.reduce((acc, item) => acc + item.quantity, 0);

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
        paymentInfo,
        setPaymentInfo,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
