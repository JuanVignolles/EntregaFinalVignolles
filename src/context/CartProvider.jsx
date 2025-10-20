import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showToast, setShowToast] = useState(false);

  // Actualizar localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
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

  // Quitar una unidad o eliminar producto
  const removeFromCart = (productId) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (!existing) return prev;

      if (existing.quantity > 1) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter((item) => item.id !== productId);
      }
    });
  };

  // Vaciar carrito completo
  const clearCart = () => setCart([]);

  // Total de unidades (para ícono del carrito)
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Lo que se muestra al resto de la app
  const value = { 
    cart, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    totalUnits, 
    showToast 
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
