import { NavLink } from "react-router-dom";
import './NavBar.css';
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  const activeClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="brand">Aromática Fragancias</div>
        <nav className="menu">
          <NavLink to="/" className={activeClass}>Inicio</NavLink>
          <NavLink to="/productos" className={activeClass}>Productos</NavLink>
          <NavLink to="/contacto" className={activeClass}>Contacto</NavLink>
        </nav>
      <CartWidget />
      </div>
    </header>
  );
}

