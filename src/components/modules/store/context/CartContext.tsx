"use client";
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: "merch" | "digital" | "bundle";
  size?: string;
  variant?: string;
};

interface CartContextType {
  cart: CartItem[];
  isLoaded: boolean;
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  updateQuantity: (cartKey: string, qty: number) => void;
  removeFromCart: (cartKey: string) => void;
  clearCart: () => void;
}

/**
 * Unique key for a cart item.
 * Items with same id but different size are separate entries.
 */
export const getCartKey = (item: { id: number; size?: string }): string =>
  item.size ? `${item.id}-${item.size}` : `${item.id}`;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("180dc_store_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart data", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever cart changes, AFTER initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("180dc_store_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">, qty: number = 1) => {
    setCart((prev) => {
      const key = getCartKey(item);
      const existing = prev.find((p) => getCartKey(p) === key);
      if (existing) {
        return prev.map((p) => (getCartKey(p) === key ? { ...p, quantity: p.quantity + qty } : p));
      }
      return [...prev, { ...item, quantity: qty }];
    });
  }, []);

  const updateQuantity = useCallback((cartKey: string, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) {
        return prev.filter((p) => getCartKey(p) !== cartKey);
      }
      return prev.map((p) => (getCartKey(p) === cartKey ? { ...p, quantity: qty } : p));
    });
  }, []);

  const removeFromCart = useCallback((cartKey: string) => {
    setCart((prev) => prev.filter((p) => getCartKey(p) !== cartKey));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoaded,
        totalItems,
        totalPrice,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
