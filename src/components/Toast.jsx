import { useCart } from "../context/CartContext.js";
import "./Toast.scss";

export default function Toast() {
  const { showToast } = useCart();

  return (
    <div className={`toast ${showToast ? "show" : ""}`}>
      🛒 Producto agregado al carrito
    </div>
  );
}