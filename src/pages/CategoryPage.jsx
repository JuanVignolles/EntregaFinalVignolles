import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/Api.js"; 
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { categoryId } = useParams(); // toma la categoría de la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos por categoría
    getProducts().then((allProducts) => {
      const filtered = allProducts.filter(p => p.category === categoryId);
      setProducts(filtered);
    });
  }, [categoryId]);

  return (
    <div>
      <h2>Productos: {categoryId}</h2>
      {products.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ul>
          {products.map(p => (
            <li key={p.id}>
              {p.title} - ${p.price}{" "}
              <Link to={`/item/${p.id}`}>Ver detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
