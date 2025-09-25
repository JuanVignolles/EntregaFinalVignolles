import { products } from "../data/products";

export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export async function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      product ? resolve(product) : reject(new Error("Producto no encontrado"));
    }, 500);
  });
}
