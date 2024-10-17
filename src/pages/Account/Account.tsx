import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { LogOut, ShoppingBag, WalletMinimal } from 'lucide-react';
import { ordersColumns } from "./ordersColumn";
import { DataTable } from "../Cart/data-table";
import { useState } from "react";
import { DialogDescription, DialogHeader,Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import CartItemInMenu from "@/components/ecommerce/cart/CartItemInMenu/CartItemInMenu";
import { TProduct } from "@/types";
import { useGetOrdersQuery } from "@/store/orders/api/ordersApiSlice";
import { useAuthLogoutMutation} from "@/store/auth/api/authApiSlice";
import { setUser } from "@/store/auth/authSlice";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAppSelector((state)=>state.auth);
  const{data:orderList}= useGetOrdersQuery(undefined);
  const[authLogout,{error} ] = useAuthLogoutMutation();
  const[orderDetails , setOrderDetails] = useState<TProduct[]>([]);
  const modalHandler = ()=>{
    setIsOpen(!isOpen);
  }
  const logoutHandler = ()=>{
      authLogout(undefined)
        .unwrap()
        .then(() => {
          dispatch(setUser({ user: null, accessToken: null }));
        })
        .catch((error) => {
          // console.log('eroooooooooor' , error);
          toast({
            variant: "destructive",
            description: error?.message,
          });
        });
  };
  const orderListWithSetter = orderList?.map((item)=>{
    return {
      id:item.id,
      items:{
        items:item.items,
        setOrderDetails,
        modalHandler
      },
      orderDate:item.orderDate,
      subtotal:item.subtotal,      
    }
  }) ?? [];
  const renderedOrderItems = orderDetails?.map((item, index) => {
    return <CartItemInMenu key={`${item.id}-${index}`} {...item} forOrderDetails={true} />;
  });
  return (
    <div className="account-tab-area-start rts-section-gap py-[60px]">
      <div className="container !max-w-[1350px]">
        <Tabs defaultValue="dashboard" className="w-full flex flex-wrap">
          <TabsList className="grid w-full grid-cols-1 md-992:w-1/4 bg-transparent h-auto max-h-[200px]">
            <TabsTrigger value="dashboard" className="data-[state=active]:!bg-primary data-[state=active]:!text-white text-secondary flex justify-normal py-[14px] px-[25px] mb-[10px] border border-solid border-[#E2E2E2] text-base items-center gap-[15px] "><WalletMinimal size="20"/> Dashboard</TabsTrigger>
             <TabsTrigger value="order" className="data-[state=active]:!bg-primary data-[state=active]:!text-white text-secondary flex justify-normal py-[14px] px-[25px] mb-[10px] border border-solid border-[#E2E2E2] text-base items-center gap-[15px]"><ShoppingBag size="20" />Order</TabsTrigger>
            <TabsTrigger value="logout" className="data-[state=active]:!bg-primary data-[state=active]:!text-white flex text-secondary justify-normal py-[14px] px-[25px] mb-[10px] border border-solid border-[#E2E2E2] text-base items-center gap-[15px]" onClick={logoutHandler}><LogOut size="20"/>Logout</TabsTrigger>
          </TabsList>
          <div className="md-992:w-3/4 md-992:pl-[50px] sm:pl-[10px] pl-[10px] md:pt-0 pt-[30px]">
            <TabsContent value="dashboard" className="m-0">
              <Card className="border-none shadow-none">
                <CardHeader className="p-0">
                  <CardTitle>Hello {user?.username}! </CardTitle>
                  <CardDescription>
                    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
             <TabsContent value="order" className="m-0">
              <Card className="border-none shadow-none">
                <CardHeader className="p-0">
                  <CardTitle>Your Orders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-0">
                  <div className="space-y-1">
                    <DataTable columns={ordersColumns} data={orderListWithSetter} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <Dialog open={isOpen} onOpenChange={modalHandler} >
              <DialogContent className=" p-[30px] gap-0">
                <DialogHeader>
                  <DialogTitle className="mb-0 text-[28px]">Order Details</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                    {renderedOrderItems}
              </DialogContent>
            </Dialog>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
