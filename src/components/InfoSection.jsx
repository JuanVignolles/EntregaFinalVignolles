import { useState } from "react";
import "./InfoSection.css";

export default function InfoSection() {
  const items = [
    {
      title: "Ecológicas",
      text: "Nuestras velas están hechas con cera vegetal y materiales biodegradables, cuidando el medio ambiente.",
    },
    {
      title: "Hechas a Mano",
      text: "Cada vela es creada artesanalmente, asegurando un acabado único y lleno de dedicación.",
    },
    {
      title: "Sustentables",
      text: "Promovemos el consumo responsable, utilizando envases reciclables y procesos sustentables.",
    },
    {
      title: "Aromaterapia",
      text: "Fragancias naturales con propiedades relajantes, energizantes o equilibrantes, según cada esencia.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="info-section">
      <h2>Más sobre nuestras velas</h2>
      <div className="info-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className={`info-card ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            <h3>{item.title}</h3>
            <div className={`arrow ${openIndex === index ? "up" : "down"}`}>
              ▼
            </div>
            <div className="info-content">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

