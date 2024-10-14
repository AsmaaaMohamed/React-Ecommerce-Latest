import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "@/services/supabase";

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue} = thunkAPI;
    try {
      const { data, error } = await supabase.from('orders').select(`
        id, 
        subtotal, 
        order_date,
        order_items(  quantity, products(id, name , price , discount ,img ) ) 
      `);
      if (error) throw error;
      return data;
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actGetOrders;
