import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();

  if (!cart || cart.length === 0) return <p>El carrito está vacío.</p>;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
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
    </div>
  );
}
