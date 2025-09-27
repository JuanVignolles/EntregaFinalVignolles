import ItemCount from "./ItemCount.jsx";
import './ItemDetail.css';

export default function ItemDetail({ product, onAdd, added }) {
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title}/>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      {!added && <ItemCount stock={product.stock} onAdd={onAdd} />}
      {added && <p>Producto agregado al carrito ✅</p>}
    </div>
  );
}
