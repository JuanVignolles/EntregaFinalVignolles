import { Link, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  const location = useLocation();
  const { name, orderId } = location.state || {};

  return (
    <div className="order-success">
      <div className="order-card">
        <h2>✅ ¡Compra confirmada!</h2>
        <p>Gracias, <strong>{name}</strong> 🎉</p>
        <p>Tu número de orden es:</p>
        <h3 className="order-id">{orderId}</h3>
        <p>En breve recibirás un correo con los detalles de tu compra.</p>

        <div className="order-buttons">
          <Link to="/" className="btn">Volver al inicio</Link>
          <Link to="/productos" className="btn secondary">Ver más productos</Link>
        </div>
      </div>
    </div>
  );
}
