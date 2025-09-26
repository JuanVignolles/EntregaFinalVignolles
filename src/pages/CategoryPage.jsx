import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Tu carrito está vacío. No puedes finalizar la compra.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    alert(
      `✅ Compra confirmada!\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nDirección: ${formData.address}\n\nTotal: $${total}`
    );

    clearCart();
    setFormData({ name: "", email: "", address: "" });
  };

  if (cart.length === 0)
    return <p>Tu carrito está vacío. Agrega productos antes de continuar.</p>;

  return (
    <div>
      <h2>Finalizar Compra</h2>

      {/* Resumen del carrito */}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} x ${item.price} = $
            {item.price * item.quantity}
          </li>
        ))}
      </ul>

      <h3>
        Total: $
        {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </h3>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          gap: "10px",
        }}
      >
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dirección:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
}
