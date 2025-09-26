import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api.js";
import { useCart } from "../context/CartContext";
import ItemDetail from "../components/ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res))
      .catch(() => setProduct(null));
  }, [id]);

  return <ItemDetail product={product} onAdd={handleAddToCart} added={added} />;
}
