import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { checkoutItems: [], checkoutTotalAmount: 0 },
  reducers: {
    addCartItemsToCheckout(state, action) {
      const cartItems = action.payload;
      // replace array with a new array
      state.checkoutItems.splice(0, state.checkoutItems.length, ...cartItems);

      // state.checkoutTotalAmount = state.checkoutItems.reduce(
      //   (curValue, nextValue) => {
      //     return curValue + nextValue.productQty * nextValue.productCost;
      //   },
      //   0
      // );
      state.checkoutTotalAmount = state.checkoutItems.reduce(
        (curValue, nextValue) => {
          return curValue + nextValue.productCost;
        },
        0
      );
    },
    addItemToCheckout(state, action) {
      const newItem = action.payload;

      state.checkoutTotalAmount = newItem.productCost * newItem.productQty;

      // const existingItem = state.checkoutItems.find(
      //   (item) => item.id === newItem.id
      // );

      // if (!existingItem) {
      state.checkoutItems.splice(0, state.checkoutItems.length, newItem);
      // } else {
      //   existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      //   existingItem.quantity = existingItem.quantity + newItem.quantity;
      // }
    },
  },
});

export const checkoutAction = checkoutSlice.actions;

export default checkoutSlice;
