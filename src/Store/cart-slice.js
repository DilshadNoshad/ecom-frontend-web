import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalAmount =
        state.totalAmount +
        newItem.productFinalPriceWithTax * newItem.productQty;
      const existingItem = state.items.find(
        (item) => item.cartDetailId === newItem.cartDetailId
      );

      if (!existingItem) {
        // newItem.totalPrice = newItem.quantity * newItem.price;
        state.items.push(newItem);
      } else {
        existingItem.totalPrice =
          existingItem.totalPrice +
          newItem.productFinalPriceWithTax * newItem.productQty;
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
    },
    addSingleItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.cartDetailId === newItem.cartDetailId
      );
      if (existingItem) {
        state.totalAmount = state.totalAmount + newItem.price;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.productQty = existingItem.productQty + 1;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.cartDetailId === id);

      state.totalAmount = state.totalAmount - existingItem.price;

      if (existingItem.productQty === 1) {
        state.items = state.items.filter((item) => item.cartDetailId !== id);
      } else {
        existingItem.productQty = existingItem.productQty - 1;
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.productFinalPriceWithTax;
      }
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.cartDetailId === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.cartDetailId !== id);
        state.totalAmount =
          state.totalAmount -
          existingItem.productFinalPriceWithTax * existingItem.productQty;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      // state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
