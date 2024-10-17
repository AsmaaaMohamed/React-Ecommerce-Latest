import supabase from "@/services/supabase";
import { storeApiSlice } from "../../storeApiSlice";

type TFormData = {
  email: string;
  password: string;
};
export const authApiSlice = storeApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      queryFn: async (formData: TFormData) => {
        const { data, error } = await supabase.auth.signInWithPassword(
          formData
        );
        // console.log(data);
        if (error) {
          throw error; // RTK Query expects errors to be returned, not thrown
        }

        return { data };
      },
      invalidatesTags: ["Wishlist","Orders"],
    }),
    getUser: builder.query({
      queryFn: async () => {
        const { data } = await supabase.auth.getUser();
        // console.log(data);
        return { data };
      }, // This should return the currently logged-in user
    }),
    authLogout: builder.mutation({
      queryFn: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          throw error;
        }
        return { data: null };
      },
      invalidatesTags: ["Wishlist"],
    }),
  }),
});
export const { useAuthLoginMutation, useGetUserQuery, useAuthLogoutMutation } =  authApiSlice;
