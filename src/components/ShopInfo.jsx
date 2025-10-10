import "./ShopInfo.css";

export default function ShopInfo() {
  return (
    <section className="shop-info">
      <div className="shop-card">
        <span className="shop-icon">💳</span>
        <h3>Pagos Seguros</h3>
        <p>Podés abonar con tarjetas, MercadoPago o transferencia bancaria.</p>
      </div>

      <div className="shop-card">
        <span className="shop-icon">🚚</span>
        <h3>Envíos a Todo el País</h3>
        <p>Entregas rápidas y seguras a cualquier provincia de Argentina.</p>
      </div>

      <div className="shop-card">
        <span className="shop-icon">🔄</span>
        <h3>Cambios Fáciles</h3>
        <p>Si no estás conforme, podés realizar el cambio sin complicaciones.</p>
      </div>

      <div className="shop-card">
        <span className="shop-icon">💬</span>
        <h3>Atención Personalizada</h3>
        <p>Respondemos tus dudas por WhatsApp, Instagram o email.</p>
      </div>
    </section>
  );
}