import Item from "./Item";
import "./ItemList.scss";

export default function ItemList({ products }) {
  if (!products || products.length === 0) return <p>No hay productos.</p>;

  return (
    <div className="item-list">
      {products.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}


