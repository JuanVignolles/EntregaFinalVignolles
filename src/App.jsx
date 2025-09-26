import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import NotFound from "./pages/NotFound.jsx";
import ItemListContainer from "./pages/ItemListContainer.jsx";
import ItemDetailContainer from "./pages/ItemDetailContainer.jsx";
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/Checkout.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <h1>Tienda de Velas Aromáticas 🕯️</h1>

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}
