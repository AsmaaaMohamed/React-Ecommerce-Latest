import { RootState } from "@/store";
import { TProduct } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];
const actGetCartItemsInfo = createAsyncThunk(
  "cart/actGetCartItemsInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsIds = Object.keys(cart.items);
    if (!itemsIds.length) return fulfillWithValue([]);
    try {
      const concatenatedItemsIds = itemsIds.map((el) => `id=${el}`).join("&");
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsIds}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default actGetCartItemsInfo;