import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api.js";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.filter((p) => p.category === categoryId));
    });
  }, [categoryId]);

  if (!products.length) {
    return <p>No hay productos en la categoría "{categoryId}".</p>;
  }

  return (
    <div>
      <h2>Categoría: {categoryId}</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}{" "}
            <Link to={`/item/${p.id}`}>Ver detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
