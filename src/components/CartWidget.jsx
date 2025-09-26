import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalUnits } = useCart();

  return (
    <Link to="/cart" style={{ marginLeft: "1rem", textDecoration: "none" }}>
      🛒 {totalUnits > 0 ? totalUnits : ""}
    </Link>
  );
}
