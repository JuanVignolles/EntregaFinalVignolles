import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

export default function Carousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const slidesRef = collection(db, "slide");
        const snapshot = await getDocs(slidesRef);
        const slidesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSlides(slidesData);
      } catch (error) {
        console.error("Error cargando slides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  if (loading) return <p>Cargando carrusel...</p>;

  return (
    <div className="carousel-container">
      {slides.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.img}
          alt={slide.title || `Slide ${i + 1}`}
          className={`carousel-image ${i === index ? "active" : "hidden"}`}
        />
      ))}

      {/* Flechas */}
      <button className="carousel-btn prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Puntitos */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
