import { JAVA_SVC } from "../config";

export async function getAddressList(id) {
  const response = await fetch(`${JAVA_SVC}/address/getAddressByUserId/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}
