import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api.js";
import ItemList from "../components/ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams(); // para filtrar por categoría
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts().then((allProducts) => {
      if (categoryId) {
        const normalizedCategory = categoryId.toLowerCase();
        setProducts(
          allProducts.filter(
            (p) => p.category.toLowerCase() === normalizedCategory
          )
        );
      } else {
        setProducts(allProducts);
      }
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      <h2>
        {categoryId ? `Categoría: ${categoryId}` : "Productos destacados"}
      </h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

