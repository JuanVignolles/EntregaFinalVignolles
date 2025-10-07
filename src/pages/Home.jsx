import "./Home.css";
import Carousel from "../components/Carousel.jsx";
import Offers from "../components/Offers";

export default function Home() {
  return (
    <div className="home">
      {/* Carrusel de info */}
      <Carousel />

      {/* Promociones / Ofertas */}
      <Offers />

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
    </div>
  );
}
