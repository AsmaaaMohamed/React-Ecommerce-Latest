import { createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  items: { [key: string]: number };
}
const initialState: ICartState = {
  items: {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      if (state.items[productId]) {
        state.items[productId] += 1;
      } else {
        state.items[productId] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
      if(action.payload.quantity === 0){
        delete state.items[action.payload.id];
        // state.cartItemsInfo = state.cartItemsInfo.filter(
        //   (el) => el.id !== action.payload.id
        // );
      }
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      // state.cartItemsInfo = state.cartItemsInfo.filter(
      //   (el) => el.id !== action.payload
      // );
    },
    cartClearAll: (state) => {
      state.items = {};
      // state.cartItemsInfo = [];
    }
  },

});

export const { addToCart, cartItemRemove,cartItemChangeQuantity , cartClearAll } = cartSlice.actions;
export default cartSlice.reducer;
