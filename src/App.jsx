import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import NotFound from "./pages/NotFound.jsx";
import ItemListContainer from "./pages/ItemListContainer.jsx";
import ItemDetailContainer from "./pages/ItemDetailContainer.jsx";
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      
      {/* main-content incluye título + rutas */}
      <div className="main-content">
        <h1>Tienda de Velas Aromáticas 🕯️</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

