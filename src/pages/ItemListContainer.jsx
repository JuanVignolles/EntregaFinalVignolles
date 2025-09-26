import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api.js";
import ItemList from "../components/ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams(); // para filtrar por categoría
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((allProducts) => {
      if (categoryId) {
        setProducts(allProducts.filter(p => p.category === categoryId));
      } else {
        setProducts(allProducts);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Productos destacados"}</h2>
      <ItemList products={products} />
    </div>
  );
}
