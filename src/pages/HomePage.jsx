import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>Bienvenido a la Tienda de Velas Aromáticas 🕯️</h2>
      <p>
        Descubre nuestras velas hechas a mano con esencias naturales.
        Explora por categoría y encuentra tu fragancia ideal.
      </p>

      <h3>Categorías principales</h3>
      <ul>
        <li><Link to="/category/florales">🌸 Florales</Link></li>
        <li><Link to="/category/citricas">🍋 Cítricas</Link></li>
        <li><Link to="/category/dulces">🍯 Dulces</Link></li>
        <li><Link to="/category/amaderadas">🌲 Amaderadas</Link></li>
      </ul>
    </div>
  );
}