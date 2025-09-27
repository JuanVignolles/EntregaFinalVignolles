import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} className="item-image" />
      <h3>{product.title}</h3>
      <p className="item-description">
        {product.description.slice(0, 60)}...
      </p>
      <p className="item-price">${product.price}</p>
      <Link to={`/item/${product.id}`} className="item-button">
        Ver detalle
      </Link>
    </div>
  );
}
