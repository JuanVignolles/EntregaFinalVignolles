import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <h1>Tienda de Velas Aromáticas 🕯️</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
