import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const categories = [
    {
      id: "aromaticas",
      title: "Velas Aromáticas",
      description:
        "Perfuma tus espacios con fragancias envolventes. Ideales para crear ambientes cálidos, relajantes o energizantes según tu estado de ánimo.",
    },
    {
      id: "decorativas",
      title: "Velas Decorativas",
      description:
        "Diseños únicos que embellecen tu hogar. No solo iluminan, también se convierten en piezas de arte que destacan en cualquier rincón.",
    },
    {
      id: "naturales",
      title: "Velas Naturales",
      description:
        "Elaboradas con cera de soja y aceites esenciales, libres de químicos. Una opción ecológica y consciente para tus rituales y relax.",
    },
    {
      id: "regalo",
      title: "Velas para Regalo",
      description:
        "El obsequio perfecto para cualquier ocasión. Presentaciones elegantes y listas para sorprender a esa persona especial.",
    },
  ];

  return (
    <div className="home">
      <section className="intro">
        <p>
          Descubre nuestra colección de velas hechas con amor, pensadas para
          transformar tu espacio en un refugio de calma, estilo y bienestar.
        </p>
      </section>

      <section className="categories">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            <Link to={`/category/${cat.id}`} className="btn">
              Ver {cat.title}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
