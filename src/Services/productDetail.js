import { API } from "../config";

export async function getProductDetail(productId) {
  const response = await fetch(`http://localhost:9090/api/products/${productId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product detail.");
  }

  return data;
}
