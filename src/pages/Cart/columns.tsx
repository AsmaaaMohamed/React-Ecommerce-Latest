import EditProductQuantity from "@/components/ecommerce/product/EditProductQuantity/EditProductQuantity";
import { ColumnDef } from "@tanstack/react-table";
import { X } from "lucide-react";

export type TCart = {
  product: {
    id: number;
    removeItem: () => void;
    name: string;
    thumbnail?: string;
  };
  price: number;
  quantity?: number;
};
export const columns: ColumnDef<TCart>[] = [
  {
    accessorKey: "product",
    header: () => (
      <div className="text-center text-base text-secondary font-semibold">
        Product
      </div>
    ),
    cell: ({ row }) => {
      const product: {id:number;removeItem:()=> void; name: string; thumbnail?: string } =
        row.getValue("product");
      return (
        <div className="product-main-cart flex basis-[64%] gap-[16px] items-center relative">
          <div className="close section-activation max-w-max bg-red-500 p-1 rounded-full cursor-pointer" onClick={product.removeItem}>
            <X color="white" size="20" />
          </div>
          <div className="thumbnail max-w-[65px]">
            <img src={product.thumbnail} className="md:max-w-full max-w-[65px] "/>
          </div>
          <div className="information min-w-[100px]">
            <h6 className="title m-b[7px] text-secondary font-bold text-[15px]">
              {product.name}
            </h6>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => (
      <div className="text-left text-base text-secondary font-semibold">
        Price
      </div>
    ),
    cell: ({ row }) => {
      const price = row.getValue("price") as number;
      return (
        <div className="price">
          <p className="text-secondary font-bold text-[15px]">
            ${price?.toFixed(2)}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div className="text-left text-base text-secondary font-semibold">
        Quantity
      </div>
    ),
    cell: ({ row }) => {
      const quantity: number = row.getValue("quantity");
      const product: {
        id: number;
        removeItem: () => void;
        name: string;
        thumbnail?: string;
      } = row.getValue("product");
      return (
        <EditProductQuantity key={product.id} quantity={quantity} id={product.id} componentName=""/>
      );
    },
  },
  {
    accessorKey: "subTotal",
    header: () => (
      <div className="text-left text-base text-secondary font-semibold">
        SubTotal
      </div>
    ),
    cell: ({ row }) => {
      const quantity = row.getValue("quantity") as number;
      const price = row.getValue("price") as number;
      return (
        <div className="price">
          <p className="text-secondary font-bold text-[15px]">
            ${(quantity * price)?.toFixed(2)}
          </p>
        </div>
      );
    },
  },
];
