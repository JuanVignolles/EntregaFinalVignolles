import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ product, onAdd, added }) {
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      {!added && <ItemCount stock={product.stock} onAdd={onAdd} />}
      {added && <p>Producto agregado al carrito ✅</p>}
    </div>
  );
}
