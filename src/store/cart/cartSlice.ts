import { TProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetCartItemsInfo from "./act/actGetCartItemsInfo";
import TLoading from "@/types/loading.type";

export interface ICartState {
  items: { [key: string]: number };
  cartItemsInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}
const initialState: ICartState = {
  items: {},
  cartItemsInfo: [],
  loading: "idle",
  error: null,
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
        state.cartItemsInfo = state.cartItemsInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.cartItemsInfo = state.cartItemsInfo.filter(
        (el) => el.id !== action.payload
      );
    },
    cartClearAll: (state) => {
      state.items = {};
      state.cartItemsInfo = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(actGetCartItemsInfo.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetCartItemsInfo.fulfilled, (state, action) => {
        state.loading = "succeed";
        state.cartItemsInfo = action.payload;
      })
      .addCase(actGetCartItemsInfo.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      });
  },
});

export const { addToCart, cartItemRemove,cartItemChangeQuantity , cartClearAll } = cartSlice.actions;
export default cartSlice.reducer;
