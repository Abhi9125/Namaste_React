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
    // addItem is action that happen
    addItem: (state, action) => {
      // updating the state here
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCard: (state, action) => {
      state.items.length = 0;
    },
  },
});

/***
 *export const { addItem, removeItem, clearCard } = cartSlice.actions; we are exporting like this bcz enternaliy
 *
 */
export const { addItem, removeItem, clearCard } = cartSlice.actions;
export default cartSlice.reducer;
