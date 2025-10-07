import "./Offers.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext.js";

export default function Offers() {
  const { addToCart } = useCart();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offersRef = collection(db, "offers"); // colección en Firestore
        const snapshot = await getDocs(offersRef);
        const offersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOffers(offersData);
      } catch (error) {
        console.error("Error cargando ofertas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <p>Cargando ofertas...</p>;

  return (
    <section className="offers">
      <h2>Ofertas y Promociones</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="price">
              <span className="old">${offer.price}</span>{" "}
              <span className="new">${offer.discountPrice}</span>
            </p>
            <button onClick={() => addToCart(offer)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}


