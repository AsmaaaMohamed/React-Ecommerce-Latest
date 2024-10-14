import supabase from "@/services/supabase";
import {createApi, fakeBaseQuery, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const categoriesApiSlice = createApi({
  reducerPath: "categories",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("categories").select("*");

        if (error) {
          return { error }; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
    }),
  }),
});
export const {useGetCategoriesQuery} = categoriesApiSlice;