import supabase from "@/services/supabase";
import { storeApiSlice } from "../../storeApiSlice";

export const cartApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartItemsInfo: builder.query({
      queryFn: async (itemsIds: string[]) => {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .in("id", itemsIds);
        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
      providesTags: ["CartItemsInfo"],
    }),
  }),
});
export const { useGetCartItemsInfoQuery } = cartApiSlice;
