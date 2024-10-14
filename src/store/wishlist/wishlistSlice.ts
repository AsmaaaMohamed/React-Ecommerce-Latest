import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import { TProduct } from "@/types";
import actGetWishlist from "./act/actGetWishlist";
import TLoading from "@/types/loading.type";
import { actAuthLogout } from "../auth/authSlice";

export interface IWishlistState {
  itemsIds: number[];
  wishlistItemsInfo:TProduct[];
  error: null | string;
  loading:TLoading
}
const initialState: IWishlistState = {
  itemsIds: [],
  wishlistItemsInfo:[],
  error: null,
  loading:"idle"
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlistItemsInfo:(state)=>{
      state.wishlistItemsInfo = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(actLikeToggle.pending, (state) => {
        state.error = null;
      })
      .addCase(actLikeToggle.fulfilled, (state, action) => {
        if (action.payload.type === "add") {
          state.itemsIds.push(action.payload.id);
        } else {
          state.itemsIds = state.itemsIds.filter(
            (el) => el !== action.payload.id
          );
          state.wishlistItemsInfo = state.wishlistItemsInfo.filter((el)=> el.id !== action.payload.id)
        }
      })
      .addCase(actLikeToggle.rejected, (state, action) => {
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      })
      // actgetwishlist
      .addCase(actGetWishlist.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(actGetWishlist.fulfilled, (state, action) => {
        state.loading = "succeed";
        if (action.payload.dataType === "itemsInfo") {
          state.wishlistItemsInfo = action.payload.data ;
        } else if (action.payload.dataType === "itemsIds") {
          state.itemsIds = action.payload.data as number[];
        }
        
      })
      .addCase(actGetWishlist.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string")
          state.error = action.payload;
      });
      // when logout reset wishlist
      builder.addCase(actAuthLogout.fulfilled, (state)=>{
        state.itemsIds = [];
        state.wishlistItemsInfo = [];
      });
  },
});

export const {cleanWishlistItemsInfo} = wishlistSlice.actions;
export{actLikeToggle};
export default wishlistSlice.reducer;
