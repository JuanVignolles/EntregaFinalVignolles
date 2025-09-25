import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api.js";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res)).catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}