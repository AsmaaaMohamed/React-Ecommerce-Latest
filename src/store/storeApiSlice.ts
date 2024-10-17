// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const storeApiSlice = createApi({
  reducerPath: "StoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Wishlist", "CartItemsInfo", "Orders", "User"],
  endpoints: () => ({}),
});
