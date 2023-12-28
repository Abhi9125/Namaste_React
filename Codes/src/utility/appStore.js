/***Creating the app store
 * By redux
 */
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // This redure is a big store that hold small the slice reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
