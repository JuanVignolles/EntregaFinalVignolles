import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import './Checkout.css';
import { createOrder } from "../services/orders";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("El carrito está vacío ❌");
    return;
  }

  const order = {
    buyer: formData,
    items: cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };

  try {
    const orderId = await createOrder(order);
    alert(
      `Compra confirmada ✅\n\nGracias ${formData.name}!\nTu número de orden es: ${orderId}`
    );
    clearCart();
    navigate("/");
  } catch (error) {
  console.log("Error en createOrder:", error);
  throw error; 
}
};
  return (
    <div className="checkout">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}


