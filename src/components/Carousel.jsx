import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import './Carousel.css';

export default function Carousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const slidesRef = collection(db, "slide"); // colección en Firestore
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

  // auto-play cada 3s
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [slides]);

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
    </div>
  );
}