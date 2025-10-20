import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// Obtener todos los productos
export async function getProducts() {
  try {
    const productsCol = collection(db, "products");
    const snapshot = await getDocs(productsCol);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
}

// Obtener producto por ID
export async function getProductById(id) {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    if (!productSnap.exists()) throw new Error("Producto no encontrado");
    return { id: productSnap.id, ...productSnap.data() };
  } catch (error) {
    console.error(`Error al obtener producto con id ${id}:`, error);
    throw error;
  }
}

// Obtener ofertas (si usás la colección "offers")
export async function getOffers() {
  try {
    const offersCol = collection(db, "offers");
    const snapshot = await getDocs(offersCol);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener ofertas:", error);
    throw error;
  }
}

//  Crear una orden (checkout)
export async function createOrder(orderData) {
  try {
    const ordersCol = collection(db, "orders");
    const docRef = await addDoc(ordersCol, orderData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
  }
}

