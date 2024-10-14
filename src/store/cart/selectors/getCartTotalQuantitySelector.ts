import { RootState } from "@/store";
import { createSelector} from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    return Object.values(items).reduce((acc, el) => el + acc, 0);
  }
);
export { getCartTotalQuantitySelector };
