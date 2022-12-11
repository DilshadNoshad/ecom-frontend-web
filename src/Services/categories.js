import { API } from "../config";

export async function getAllCategories() {
  const response = await fetch(`${API}/products/categories`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch categories.");
  }

  return data;
}

export async function getCategoryProducts(categoryName) {
  const response = await fetch(`${API}/products/category/${categoryName}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data.products;
}
