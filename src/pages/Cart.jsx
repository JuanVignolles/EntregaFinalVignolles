import { useCart } from "../context/CartContext.js";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, clearCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>¡Explora nuestros productos y encontrá tu fragancia ideal!</p>
        <Link to="/productos" className="back-btn">
          Ver productos
        </Link>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

