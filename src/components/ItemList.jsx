import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  if (!products || products.length === 0) return <p>No hay productos.</p>;

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.title} - ${p.price}{" "}
          <Link to={`/item/${p.id}`}>Ver detalle</Link>
        </li>
      ))}
    </ul>
  );
}
