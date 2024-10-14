import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import supabase from "@/services/supabase";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState;
    try {
      const insertOrder = await supabase
        .from("orders")
        .insert([{ user_id: auth.user?.id, subtotal: subtotal }])
        .select();
      if (insertOrder.error) throw insertOrder.error;
      
      const orderItemsRows = cart.cartItemsInfo.map((el) => ({
        product_id: el.id,
        quantity: cart.items[el.id],
        order_id: insertOrder.data[0].id,
      }));
      const insertOrderItems = await supabase
        .from("order_items")
        .insert(orderItemsRows)
        .select();
      if (insertOrderItems.error) throw insertOrderItems.error;
      return { id: insertOrder.data[0].id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actPlaceOrder;
