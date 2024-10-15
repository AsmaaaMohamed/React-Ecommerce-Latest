import supabase from "@/services/supabase";
import { storeApiSlice } from "../../storeApiSlice";

export const categoriesApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("categories").select("*");

        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
    }),
  }),
});
export const { useGetCategoriesQuery } = categoriesApiSlice;
