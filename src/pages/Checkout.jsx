import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import './Checkout.css';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("El carrito está vacío ❌");
      return;
    }

    alert(
      `Compra confirmada ✅\n\nGracias ${formData.name}, te enviaremos un email a ${formData.email}`
    );

    clearCart();
    navigate("/"); // redirige al inicio
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


