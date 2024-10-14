import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import supabase from "@/services/supabase";

type TDataType = "itemsInfo" | "itemsIds";
const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue , getState } = thunkAPI;
    const {auth} = getState() as RootState;
    try {
      const { data,error } = await supabase.from('wishlist').select('productId').eq('user_id', auth.user?.id);
      const userWishlist = data;
      if(error)
        throw error
      if (!userWishlist?.length) {
        return { data: [], dataType: "empty" };
      }
      const concatenatedItemsId = userWishlist.map((el) => el.productId);
      if (dataType === "itemsIds") {
        return { data: concatenatedItemsId, dataType: "itemsIds" };
      } else {
        const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('id', concatenatedItemsId);
        if(error)
          throw error;
        return { data, dataType: "itemsInfo" };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetWishlist;
