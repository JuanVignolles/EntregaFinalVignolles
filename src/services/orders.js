import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export async function createOrder(orderData) {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      createdAt: serverTimestamp(), // Marca de tiempo automática
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creando la orden:", error);
    throw error;
  }
}