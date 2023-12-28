/***
 * Create slice that hold the data of different things.
 */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // Name of the  slice
  name: "cart",
  //   State of the card
  initialState: {
    items: [],
  },

  //   reducers object that have action and reducer function
  reducers: {
    // addItem is action that happen and fucction that define is reducer function.
    addItem: (state, action) => {
      // updating the state here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // Inisial state me items me objects ke form me item(menu) hai.
      state.items = state.items.filter(
        (item) => item.card.info.id != action.payload
      );
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

/***
 * From slice we export two thinngs one is Actionn and second is reducer
 *
 * Eternnaly slice store action and reducer in the form of object likebelow
 * cartSlice= {
 * actions :{
 * addItem:
 * }
 * reducer:{
 * }
 * };
 *
 *export const { addItem, removeItem, clearCart } = cartSlice.actions; we are exporting like this bcz enternaliy
 *
 */
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
