import { useAppSelector } from "@/store/hooks";
import { useGetProductsQuery } from "@/store/products/api/productsApiSlice";
import { useGetWishlistQuery } from "@/store/wishlist/api/wishlistApiSlice";
import {useMemo } from "react";

const useProducts=()=>{
    const{data:products ,isLoading, error } = useGetProductsQuery(undefined);
    const cartItems = useAppSelector((state) => state.cart.items);
    const {data:wishListItemsIds} = useGetWishlistQuery("itemsIds");
    const { accessToken: userAccessToken } = useAppSelector(
      (state) => state.auth
    );
    const productsWithQuantityAndLiked =  useMemo(()=>products?.map((el) => ({
      ...el,
      quantity: cartItems[el.id] ?? 0,
      isLiked: wishListItemsIds?.includes(el.id),
      isAuthenticated : userAccessToken ? true : false
    })) ?? [],[products,cartItems,wishListItemsIds]);
    return {isLoading , error , products , productsWithQuantityAndLiked};
};
export default useProducts;