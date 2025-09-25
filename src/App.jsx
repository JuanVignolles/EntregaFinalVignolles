import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div>
      <h1>Tienda de Velas Aromáticas 🕯️</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
