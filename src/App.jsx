import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/Checkout.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <h1>Tienda de Velas Aromáticas 🕯️</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
