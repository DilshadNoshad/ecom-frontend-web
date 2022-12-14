import { API } from "../config";

export async function getAllProducts() {
  const response = await fetch(`${API}/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data.products;
}
export async function getAllFlashProducts() {
  const response = await fetch(`http://localhost:9090/api/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}
export async function getAllMostPopularProducts() {
  const response = await fetch(`${API}/products?limit=9&skip=9`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data.products;
}
