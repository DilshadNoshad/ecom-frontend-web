import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9090/api/carts/4");
      if (!response.ok) {
        throw new Error("fetching cart data failed!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(
        cartAction.replaceCart({
          items: cartData.cartDetails || [],
          // totalAmount: ,
        })
      );
    } catch (error) {
      console.log("error");
    }
  };
};
// action creators outside the component
export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    console.log("pending");
    const sendRequest = async () => {
      const response = await fetch("http://localhost:9090/api/cartdetails", {
        method: "POST",
        body: JSON.stringify(cartItems),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      console.log("sent cart data successfully!");
    } catch (error) {
      console.log("error");
    }
  };
};
