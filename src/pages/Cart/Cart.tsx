import { columns } from "./columns";
import { DataTable } from "./data-table";
import useCart from "@/hooks/useCart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LottieHandler } from "@/components/feedback";
import { toast } from "@/hooks/use-toast";
import { usePlaceOrderMutation } from "@/store/orders/api/ordersApiSlice";

const Cart = () => {
  const {  removeItemHandler, cartClearAllHandler, cartItemsInfo , items } = useCart();
  const {accessToken} = useAppSelector((state)=>state.auth);
  const [placeOrder , {isLoading, isSuccess}] = usePlaceOrderMutation();
  const cartItemsInfoWithQuantity = useMemo(()=>cartItemsInfo?.map((el)=>({...el, quantity:items[el.id]})),[items, cartItemsInfo]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const data = cartItemsInfoWithQuantity?.map((item) => {
    return {
      product: {
        id: item.id,
        removeItem: () => removeItemHandler(item.id),
        thumbnail: item.img,
        name: item.name,
      },
      price: item.price,
      quantity: item.quantity,
    };
  }) ?? [];
  const cartSubTotal = cartItemsInfoWithQuantity?.reduce(
    (acc, el) => acc + (el.quantity ?? 0) * el.price,
    0
  );
  const [checkedValue, setCheckedValue] = useState<string | null>(null);
  const handleCheckboxChange = (value: string) => {
    if (checkedValue === value) {
      setCheckedValue(null); // Uncheck if the same checkbox is clicked
    } else {
      setCheckedValue(value);
    }
  };
  const modalHandler = () => {
    if(accessToken){
      setIsOpen(!isOpen);
      setError(null);
    }
    else {
      toast({
        variant: "destructive",
        description: "You need to login first to add items to place order",
      });
    }
  };
  const placeOrderHandler = () => {
      placeOrder({cartItemsInfo, cartSubTotal, items}).unwrap().then(()=>{
        setIsOpen(false);
        cartClearAllHandler();
      });
    }

  return (
    <div className="rts-cart-area rts-section-gap bg-[#F3F4F6] py-[60px]">
      <div className="container">
        <div className="flex lg-1200:flex-row flex-col -mt-12 -mx-3">
          <div className="xl:w-3/4 md-992:w-full md:w-full w-full order-2 xl:order-1 md-992:order-2 md:order-2 sm:order-2 px-3 mt-12">
            <div className="rts-cart-list-area bg-white rounded-[6px]">
              <DataTable columns={columns} data={data} />
              {isSuccess && (
                <LottieHandler
                  message="Your order has been placed successfully"
                  type="success"
                  className=" flex flex-col items-center"
                />
              )}
              <div className="bottom-cupon-code-cart-area gap-[20px] flex md:flex-row flex-col md:items-center justify-between md:p-[40px] p-[15px]">
                <form
                  action="#"
                  className="flex flex-wrap items-center gap-[15px]"
                >
                  <input
                    type="text"
                    placeholder="Cupon Code"
                    className="h-[50px] rounded-[6px] bg-[#F3F4F6] w-[296px] flex items-center p-[15px] text-base outline-none"
                  />
                  <button className="rts-btn btn-primary bg-primary rounded-[6px] block max-w-max py-[14px] px-[25px] text-base font-bold text-white">
                    Apply Coupon
                  </button>
                </form>

                <a
                  href="#"
                  className="rts-btn btn-primary bg-primary rounded-[6px] block max-w-max py-[14px] px-[25px] text-base font-bold text-white min-w-[110px]"
                  onClick={() => cartClearAllHandler()}
                >
                  Clear All
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md-992:w-full md:w-full w-full order-1 xl:order-2 md-992:order-1 md:order-1 sm:order-1 px-3 mt-12">
            <Card className="bg-transparent border-[2px] border-solid border-primary">
              <CardHeader className="p-0">
                <CardTitle className="py-[21px] px-[28px] border-b border-solid border-[#E2E2E2] mb-0 text-base text-secondary">
                  Cart Total
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="subtotal flex items-center gap-[94px] py-[26px] px-[28px] border-b border-solid border=[#E2E2E2]">
                  <span className="font-medium text-[14px] text-muted">
                    Subtotal
                  </span>
                  <h6 className="price mb-0 text-[14px] font-bold text-secondary">
                    ${cartSubTotal?.toFixed(2)}
                  </h6>
                </div>
                <div className="shipping flex items-start gap-[94px] py-[26px] px-[28px] border-b border-solid border-[#E2E2E2]">
                  <span className="font-medium text-[14px] text-muted">
                    Shipping
                  </span>
                  <ul>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="f-option"
                        name="selector"
                        checked={checkedValue === "f-option"}
                        onCheckedChange={() => handleCheckboxChange("f-option")}
                      />
                      <label
                        htmlFor="f-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Free Shipping
                      </label>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="s-option"
                        name="selector"
                        checked={checkedValue === "s-option"}
                        onCheckedChange={() => handleCheckboxChange("s-option")}
                      />
                      <label
                        htmlFor="s-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Flat Rate
                      </label>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="t-option"
                        name="selector"
                        checked={checkedValue === "t-option"}
                        onCheckedChange={() => handleCheckboxChange("t-option")}
                      />
                      <label
                        htmlFor="t-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Local Pickup
                      </label>
                    </li>
                    <li className="mb-[10px] flex ite">
                      <p className="mt-[15px] mb-[20px] text-muted text-[14px]">
                        Shipping options will be updated during checkout
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-0 flex-col items-start">
                <div className="wrapper flex items-start gap-[96px] pt-[26px] pb-[15px] px-[28px]">
                  <span className="text-muted">Subtotal</span>
                  <h6 className="price text-[15px] text-secondary font-bold">
                    ${cartSubTotal?.toFixed(2)}
                  </h6>
                </div>
                <div className="button-area pt-0 pb-[20px] px-[20px] w-full">
                  
                  <Button
                    className="rts-btn btn-primary h-auto w-full max-w-full block bg-primary rounded-[6px] text-white py-[14px] px-[25px] text-base font-bold"
                    onClick={modalHandler}
                  >
                    Place Order
                  </Button>
                  <Dialog open={isOpen} onOpenChange={modalHandler}>
                    <DialogContent className=" p-[30px]">
                      <DialogHeader>
                        <DialogTitle className="mb-0">
                          Placing Order
                        </DialogTitle>
                        <DialogDescription></DialogDescription>
                      </DialogHeader>
                      Are you sure you want to place order with Subtotal:{" "}
                      {cartSubTotal?.toFixed(2)} $
                      {!isLoading && error && (
                        <p style={{ color: "#DC3545", marginTop: "10px" }}>
                          {error}
                        </p>
                      )}
                      <DialogFooter>
                        <Button
                          variant="secondary"
                          className="text-white"
                          onClick={modalHandler}
                        >
                          Close
                        </Button>
                        <Button onClick={placeOrderHandler}>Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
