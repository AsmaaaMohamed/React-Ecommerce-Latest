import supabase from "@/services/supabase";
import { TProduct } from "@/types";
import { storeApiSlice } from "../../storeApiSlice";

export const ordersApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("orders").select(`
          id, 
          subtotal, 
          order_date,
          order_items(  quantity, products(id, name , price , discount ,img ) ) 
        `);
        // console.log(data);

        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }
        const items = data?.map((el) => {
          return {
            id: el.id,
            items: el.order_items.map(({ products, quantity }) => {
              return { ...products, quantity: quantity };
            }),
            subtotal: el.subtotal,
            orderDate: el.order_date,
          };
        });
        return { data: items };
      },
      providesTags: ["Orders"],
    }),
    placeOrder: builder.mutation({
      queryFn: async ({
        cartItemsInfo,
        cartSubTotal,
        items,
      }: {
        cartItemsInfo: TProduct[];
        cartSubTotal: number;
        items: { [key: string]: number };
      }) => {
        const { data } = await supabase.auth.getUser();
        const insertOrder = await supabase
          .from("orders")
          .insert([{ user_id: data?.user?.id, subtotal: cartSubTotal }])
          .select();
        if (insertOrder.error) return { error: insertOrder.error };
        const orderItemsRows = cartItemsInfo.map((el) => ({
          product_id: el.id,
          quantity: items[el.id],
          order_id: insertOrder.data[0].id,
        }));
        // console.log(orderItemsRows);
        const insertOrderItems = await supabase
          .from("order_items")
          .insert(orderItemsRows)
          .select();
        if (insertOrderItems.error) throw insertOrderItems.error;
        return { data: { id: insertOrder.data[0].id } };
      },
    }),
  }),
});
export const { useGetOrdersQuery, usePlaceOrderMutation } = ordersApiSlice;
