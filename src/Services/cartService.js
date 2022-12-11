import { API, JAVA_SVC } from "../config";

export async function getAllCategories() {
  const response = await fetch(`${API}/carts`);
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

export async function addCart(cartData) {
  //const URL = "http://localhost:8080/api/users";
  //const URL = `${JAVA_SVC}/users`
  const URL = `${JAVA_SVC}/carts`;
  //console.log(URL);
  //console.log(userData);

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(cartData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;

  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

export async function addOrder(orderData) {
  //const URL = "http://localhost:8080/api/users";
  //const URL = `${JAVA_SVC}/users`
  const URL = `${JAVA_SVC}/carts`;
  //console.log(URL);
  //console.log(userData);

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(orderData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;

  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

export async function deleteCartItems(cartId) {
  const response = await fetch(
    `http://localhost:9090/api/cartdetails/${cartId}`,
    {
      method: "DELETE",
      body: cartId,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete cartItem.");
  }

  return data;
}
