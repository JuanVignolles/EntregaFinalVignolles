import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const clearCart = () => setCart([]);
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = { cart, addToCart, clearCart, totalUnits, showToast };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
