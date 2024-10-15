import supabase from "@/services/supabase";
import { storeApiSlice } from "../../storeApiSlice";

type TDataType = "itemsInfo" | "itemsIds";
export const wishlistApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      queryFn: async (dataType: TDataType) => {
        const { data, error } = await supabase
          .from("wishlist")
          .select("productId");
        // console.log(data)
        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }
        if (!data?.length) {
          return { data: [] };
        }
        const concatenatedItemsId = data?.map((el) => el.productId);
        // console.log(concatenatedItemsId)
        if (dataType === "itemsIds") {
          return { data: concatenatedItemsId };
        } else {
          // console.log('ssssssssssssssssssssssss')
          const { data, error } = await supabase
            .from("products")
            .select("*")
            .in("id", concatenatedItemsId);
          if (error) throw error;
          return { data };
        }
      },
      providesTags: ["Wishlist"],
    }),
    likeToggle: builder.mutation({
      queryFn: async (id: number) => {
        const { data: isRecordExist, error } = await supabase
          .from("wishlist")
          .select("*")
          .eq("productId", id);
        if (error) throw error;
        if (isRecordExist?.length) {
          const { error } = await supabase
            .from("wishlist")
            .delete()
            .eq("productId", id);
          if (error) return { error };
          return { data: { type: "remove", id } };
        } else {
          const { data } = await supabase.auth.getUser();
          const { error } = await supabase
            .from("wishlist")
            .insert([{ user_id: data?.user?.id, productId: id }])
            .select();
          if (error) throw error;
          return { data: { type: "add", id } };
        }
      },
      invalidatesTags: ["Wishlist"],
    }),
  }),
});
export const { useGetWishlistQuery, useLikeToggleMutation } = wishlistApiSlice;
