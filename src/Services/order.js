import { JAVA_SVC } from "../config";

export async function getUserOrderList(id) {
  const response = await fetch(`${JAVA_SVC}/orders/getuserorder/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}

export async function getUserOrderdetails(id) {
  const response = await fetch(`${JAVA_SVC}/orderdetails/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product detail.");
  }

  return data;
}
