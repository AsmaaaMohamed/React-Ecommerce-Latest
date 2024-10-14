import { useAppSelector } from "@/store/hooks";
import { useGetWishlistQuery } from "@/store/wishlist/api/wishlistApiSlice";

const useWishlist = () => {
  const {data:wishlistItemsInfo, error} = useGetWishlistQuery("itemsInfo");
   const cartItems = useAppSelector((state) => state.cart.items);
    const wishlistItemsWithQuantityAndLiked = wishlistItemsInfo?.map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: true,
    })) ?? [];

    return {error , wishlistItemsWithQuantityAndLiked };
}
export default useWishlist;