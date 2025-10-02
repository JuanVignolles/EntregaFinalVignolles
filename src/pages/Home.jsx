import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Sección: ¿Quiénes somos? */}
      <section className="about">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos Aromática Fragancias, especialistas en velas artesanales
          creadas con amor para transformar tus espacios en rincones únicos.
          Buscamos brindar calidez, estilo y bienestar en cada una de nuestras
          piezas.
        </p>
      </section>

      {/* Carrusel de info */}
      <section className="carousel">
        <h3>Conócenos mejor</h3>
        <div className="carousel-placeholder">
          {/* Aquí luego implementamos el carrusel */}
          <p>[ Carrusel con logo, tipos de velas, métodos de pago y envíos ]</p>
        </div>
      </section>

      {/* Promociones / Ofertas */}
      <section className="promotions">
        <h3>Promociones y Ofertas</h3>
        <div className="promotions-grid">
          {/* Placeholder de productos destacados */}
          <div className="promo-card">
            <img src="/img/vela1.jpg" alt="Vela Promo 1" />
            <p>Vela Floral - $1200</p>
          </div>
          <div className="promo-card">
            <img src="/img/vela2.jpg" alt="Vela Promo 2" />
            <p>Vela Cítrica - $1500</p>
          </div>
          <div className="promo-card">
            <img src="/img/vela3.jpg" alt="Vela Promo 3" />
            <p>Pack 2x1 - $2000</p>
          </div>
        </div>
      </section>
    </div>
  );
}
