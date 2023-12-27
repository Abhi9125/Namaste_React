/***Creating the app store
 * By redux
 */
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";

const appStore = configureStore({
  // This redure is a big store that hold small the slice reducers
  reducer: {
    card: cardReducer,
  },
});

export default appStore;
