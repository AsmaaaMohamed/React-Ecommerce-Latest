import { TProduct } from "./product.type";

export type TOrderItem = {
  id: number;
  items: TProduct[];
  subtotal: number;
  orderDate:string;
};
