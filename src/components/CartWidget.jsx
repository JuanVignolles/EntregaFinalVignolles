import { useCart } from "../context/CartContext.js";
import { Link } from "react-router-dom";
import './CartWidget.css';

export default function CartWidget() {
  const { totalUnits } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {totalUnits > 0 ? totalUnits : ""}
    </Link>
  );
}
