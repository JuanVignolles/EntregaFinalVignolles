import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api.js";
import ItemCount from "../components/ItemCount.jsx"; // <-- importamos ItemCount

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false); // controla si ya agregamos al carrito

  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades al carrito`);
    setAdded(true);
    // Aquí luego se podría actualizar el Context del carrito
  };

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      {!added && <ItemCount stock={product.stock} onAdd={handleAddToCart} />}
      {added && <p>Producto agregado al carrito ✅</p>}
    </div>
  );
}
