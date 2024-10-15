import supabase from "@/services/supabase";
import { storeApiSlice } from "../../storeApiSlice";

export const productsApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
    }),
  }),
});
export const { useGetProductsQuery } = productsApiSlice;
