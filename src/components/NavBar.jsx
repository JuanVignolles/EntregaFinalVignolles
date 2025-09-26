import { NavLink } from "react-router-dom";
import './NavBar.css';
import CartWidget from "./CartWidget.jsx";

//  categorías que quiero mostrar
const categories = [
  { id: "florales", name: "Florales" },
  { id: "citricas", name: "Cítricas" },
  { id: "dulces", name: "Dulces" },
  { id: "amaderadas", name: "Amaderadas" },
];

export default function NavBar() {
  // Función para agregar clase 'active' al link actual
  const activeClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="navbar">
      <div className="brand">Aromática</div>
      <nav className="menu">
        <NavLink to="/" className={activeClass}>Inicio</NavLink>
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/category/${cat.id}`}
            className={activeClass}
          >
            {cat.name}
          </NavLink>
        ))}
      </nav>
      <CartWidget />
    </header>
  );
}
