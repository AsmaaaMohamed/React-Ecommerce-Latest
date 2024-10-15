import { cartApiSlice, useGetCartItemsInfoQuery } from "@/store/cart/api/cartApiSlice";
import { cartClearAll, cartItemChangeQuantity, cartItemRemove } from "@/store/cart/cartSlice";
import { getCartTotalQuantitySelector } from "@/store/cart/selectors/getCartTotalQuantitySelector";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useCallback } from "react";

const useCart = () =>{
    const dispatch = useAppDispatch();
    const {items  } = useAppSelector((state)=>state.cart);
    const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
    // const [{isLoading}] = usePlaceOrderMutation();
    const itemsIds = Object.keys(items);
    const {data:cartItemsInfo} = useGetCartItemsInfoQuery(itemsIds);
    const removeItemHandler = useCallback(
      (id: number) => {
        dispatch(cartItemRemove(id));
      },
      [dispatch]
    );
    const changeQuantityHandler = useCallback(
      (id: number, quantity: number) => {
        dispatch(cartItemChangeQuantity({ id:id, quantity:quantity }));
      },
      [dispatch]
    );
    const cartClearAllHandler = useCallback(
      () => {
        dispatch(cartApiSlice.util.invalidateTags(["CartItemsInfo"]));
        dispatch(cartClearAll());
      },
      [dispatch]
    );
    return { items ,  removeItemHandler , cartClearAllHandler , changeQuantityHandler , cartTotalQuantity, cartItemsInfo};
};
export default useCart;