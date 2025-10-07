import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext.js";
import Loader from "../components/Loader";
import "./Products.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Productos cargados:", data);
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  // 🔥 categorías 
  const categorias = ["florales", "dulces", "amaderadas", "citricas"];

  if (loading) return <Loader />;

  return (
    <div className="productos">
      <h2>Nuestras Categorías</h2>

      {categorias.map((cat) => (
        <div key={cat} className="seccion">
          <h3 className="titulo-categoria">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h3>

          <div className="productos-grid"> 
            {productos
              .filter((p) => p.category === cat)
              .map((p) => (
                <div key={p.id} className="producto-card">
                  <img src={p.img} alt={p.title} />
                  <h3>{p.title}</h3>
                  <div className="producto-detalle">
                    <p>{p.description}</p>
                    <p className="precio">{p.price} ARS</p>
                    <button onClick={() => addToCart(p, 1)}>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
