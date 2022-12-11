import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import checkoutSlice from "./checkout-slice";
import uiSlice from "./ui-slice";
// import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    // auth: authSlice.reducer,
  },
});

export default store;
