import { TProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export type TOrder = {
    id: number;
    orderDate:string;
    items:{
      items:TProduct[];
      setOrderDetails:(order:TProduct[])=>void;
      modalHandler:()=>void;
    };
    subtotal:number,
}

export const ordersColumns: ColumnDef<TOrder>[] = [
    {
      accessorKey: "id",
      header: () => (
        <div className="text-left text-base text-secondary font-medium uppercase">
          Order
        </div>
      ),
      cell: ({ row }) => {
        const orderId = row.getValue("id") as number;
        return (
            <div className="price">
            <p className="text-secondary font-normal text-[15px]">
              #{orderId}
            </p>
          </div>
        );
      },
    },
    {
        accessorKey: "orderDate",
        header: () => (
          <div className="text-left text-base text-secondary font-medium uppercase">
            Date
          </div>
        ),
        cell: ({ row }) => {
          const date = new Date(row.getValue("orderDate"));
          const formattedData = date.toDateString();
          return (
              <div className="date">
              <p className="text-secondary font-normal text-[15px]">
                {formattedData}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "items",
        header: () => (
          <div className="text-left text-base text-secondary font-medium uppercase">
            Items
          </div>
        ),
        cell: ({ row }) => {
          const order_items:{items:TProduct[],setOrderDetails:(order:TProduct[])=>void, modalHandler:()=>void} = row.getValue("items");
          const detailsClickHandler = ()=>{
            order_items.modalHandler();
            order_items.setOrderDetails(order_items.items)
          }
          const numOfItems = order_items?.items.reduce((acc,item)=>acc + (item.quantity ?? 0),0);
          return (
              <div className="items">
              <p className="text-secondary font-normal text-[15px]">
                {numOfItems} item(s)
                {" / "}
                <span
                    onClick={detailsClickHandler}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Details
                  </span>
              </p>
            </div>
          );
        },
      },
]