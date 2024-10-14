import { useAppDispatch, useAppSelector } from "@/store/hooks";
import actGetWishlist from "@/store/wishlist/act/actGetWishlist";
import { cleanWishlistItemsInfo } from "@/store/wishlist/wishlistSlice";
import {  useEffect } from "react";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { error , wishlistItemsInfo} = useAppSelector(
    (state) => state.wishlist
  );
   const cartItems = useAppSelector((state) => state.cart.items);
   useEffect(() => {
     dispatch(actGetWishlist("itemsInfo"));
     return()=> {
      dispatch(cleanWishlistItemsInfo());
     }
    }
    ,[dispatch]);
    const wishlistItemsWithQuantityAndLiked = wishlistItemsInfo.map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: true,
    }));

    return {error , wishlistItemsWithQuantityAndLiked };
}
export default useWishlist;