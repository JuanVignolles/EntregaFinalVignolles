import { useState } from "react";
import "./Contact.scss";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [successMsg, setSuccessMsg] = useState(""); // 👈 mensaje de éxito

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría la lógica real de envío (email API, backend, etc.)
    console.log("Mensaje enviado:", formData);

    // Mostrar mensaje de confirmación
    setSuccessMsg("✅ ¡Tu mensaje fue enviado con éxito!");

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });

    // Ocultar mensaje luego de unos segundos
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p className="intro">
        En <strong>Aromática Fragancias</strong> creemos en la armonía entre el aroma y la emoción.
        Cada vela que elaboramos está pensada para transmitir bienestar, calidez y un toque de magia.
        Si querés saber más sobre nuestros productos o realizar un pedido personalizado, ¡escribinos!
      </p>

      <div className="social-section">
        <h3>Redes y contacto</h3>
        <ul>
          <li>
            <FaWhatsapp className="icon" /> +54 9 11 2345-6789
          </li>
          <li>
            <FaInstagram className="icon" /> @aromaticafragancias
          </li>
          <li>
            <FaFacebook className="icon" /> Aromática Fragancias
          </li>
          <li>
            <FaEnvelope className="icon" /> contacto@aromaticafragancias.com
          </li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Envíanos tu mensaje</h3>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="tuemail@ejemplo.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            placeholder="+54 9 ..."
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje..."
            required
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Enviar mensaje
        </button>

        {/* Mensaje de confirmación */}
        {successMsg && <p className="success-message">{successMsg}</p>}
      </form>
    </div>
  );
}

