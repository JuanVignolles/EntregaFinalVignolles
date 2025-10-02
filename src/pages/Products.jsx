import { Link } from "react-router-dom";
import "./Products.css";

export default function Productos() {
  const categorias = [
    { id: "florales", nombre: "Florales", img: "/img/florales.jpg" },
    { id: "citricas", nombre: "Cítricas", img: "/img/citricas.jpg" },
    { id: "amaderadas", nombre: "Amaderadas", img: "/img/amaderadas.jpg" },
    { id: "frutales", nombre: "Frutales", img: "/img/frutales.jpg" },
  ];

  return (
    <div className="productos">
      <h2>Nuestras Categorías</h2>
      <div className="categorias-grid">
        {categorias.map((cat) => (
          <Link key={cat.id} to={`/categoria/${cat.id}`} className="card">
            <img src={cat.img} alt={cat.nombre} />
            <h3>{cat.nombre}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
