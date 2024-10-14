import supabase from "@/services/supabase";
import {createApi, fakeBaseQuery, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ['CartItemsInfo'],
  endpoints: (builder) => ({
    getCartItemsInfo: builder.query({
      queryFn: async (itemsIds:string[] ) => {
        const { data, error } = await supabase
        .from('products')
        .select('*')
        .in('id', itemsIds);
        if (error) {
          return { error }; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
      providesTags: ['CartItemsInfo'],
    }),
    
  }),
});
export const {useGetCartItemsInfoQuery} = cartApiSlice;