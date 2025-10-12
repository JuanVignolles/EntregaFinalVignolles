import Carousel from "../components/Carousel.jsx";
import Offers from "../components/Offers";
import InfoSection from "../components/InfoSection.jsx";
import ShopInfo from "../components/ShopInfo.jsx";
import About from "../components/About.jsx";

export default function Home() {
  return (
    <div className="home">
      {/* Carrusel de info */}
      <Carousel />

      {/* Promociones / Ofertas */}
      <Offers />

      {/* Sección: ¿Quiénes somos? */}
      <About />

      {/* Sección de información de velas*/}
      <InfoSection />

      {/* Sección de información de envios y medios de pago*/}
      <ShopInfo />

    </div>
  );
}
