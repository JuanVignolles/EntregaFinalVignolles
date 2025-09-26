import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// Obtener todos los productos
export async function getProducts() {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Obtener producto por id
export async function getProductById(id) {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
}
