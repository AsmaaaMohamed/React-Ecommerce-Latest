import { cartClearAll, cartItemChangeQuantity, cartItemRemove } from "@/store/cart/cartSlice";
import { getCartTotalQuantitySelector } from "@/store/cart/selectors/getCartTotalQuantitySelector";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { useCallback } from "react";

const useCart = () =>{
    const dispatch = useAppDispatch();
    const {items  } = useAppSelector((state)=>state.cart);
    const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
    const placeOrderStatus = useAppSelector((state) => state.orders.loading);
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
        dispatch(cartClearAll());
      },
      [dispatch]
    );
    return { items ,  removeItemHandler , cartClearAllHandler , changeQuantityHandler , cartTotalQuantity, placeOrderStatus};
};
export default useCart;