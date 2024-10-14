import { useAppSelector } from "@/store/hooks";
import { useGetProductsQuery } from "@/store/products/api/productsApiSlice";
import {useMemo } from "react";

const useProducts=()=>{
  // const dispatch = useAppDispatch();
  //   const { loading, error, products } = useAppSelector((state) => state.products);
  const{data:products ,isLoading, error } = useGetProductsQuery(undefined);
    const cartItems = useAppSelector((state) => state.cart.items);
     const wishListItemsIds = useAppSelector((state) => state.wishlist.itemsIds);
     const userAccessToken = useAppSelector((state)=>state.auth.accessToken);
    //  console.log('useProducts' , cartItems)
    const productsWithQuantityAndLiked =  useMemo(()=>products?.map((el) => ({
      ...el,
      quantity: cartItems[el.id] ?? 0,
      isLiked: wishListItemsIds.includes(el.id),
      isAuthenticated : userAccessToken ? true : false
    })) ?? [],[products,cartItems,wishListItemsIds]);
    // useEffect(()=>{
    //   const promise = dispatch(actGetProducts());
    //   return () => {
    //     dispatch(productsCleanUp());
    //     promise.abort();
    //   };
    // },[dispatch]);
    return {isLoading , error , products , productsWithQuantityAndLiked};
};
export default useProducts;