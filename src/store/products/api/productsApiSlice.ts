import supabase from "@/services/supabase";
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          return { error }; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
    }),
  }),
});
export const {useGetProductsQuery} = productsApiSlice;