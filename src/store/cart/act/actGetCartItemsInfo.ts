import supabase from "@/services/supabase";
import { RootState } from "@/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const actGetCartItemsInfo = createAsyncThunk(
  "cart/actGetCartItemsInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsIds = Object.keys(cart.items);
    if (!itemsIds.length) return fulfillWithValue([]);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('id', itemsIds);
        if(error)
          throw error
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default actGetCartItemsInfo;


