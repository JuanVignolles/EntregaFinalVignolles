import { Link } from "react-router-dom";
import { getProducts } from "../services/api.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
            {" "}
            <Link to={`/item/${p.id}`}>Ver detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}