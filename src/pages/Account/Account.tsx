import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { actAuthLogout } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { LogOut, ShoppingBag, WalletMinimal } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ordersColumns } from "./ordersColumn";
import { DataTable } from "../Cart/data-table";
import { useEffect, useState } from "react";
import { actGetOrders, resetOrderStatus } from "@/store/orders/ordersSlice";
import { DialogDescription, DialogHeader,Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import CartItemInMenu from "@/components/ecommerce/cart/CartItemInMenu/CartItemInMenu";
import { TProduct } from "@/types";

const Account = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAppSelector((state)=>state.auth);
  const {orderList} =useAppSelector((state)=>state.orders);
  const[orderDetails , setOrderDetails] = useState<TProduct[]>([]);
  const navigate = useNavigate();
  const modalHandler = ()=>{
    setIsOpen(!isOpen);
  }
  const logoutHandler = ()=>{
    dispatch(actAuthLogout());
    navigate('/');
  }
  useEffect(()=>{
   const promise = dispatch(actGetOrders());

   return () => {
     promise.abort();
     dispatch(resetOrderStatus());
   };
  },[dispatch]);
  const orderListWithSetter = orderList.map((item)=>{
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
  })
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
            {/*<TabsTrigger value="address" className="data-[state=active]:!bg-primary data-[state=active]:!text-white text-secondary flex justify-normal py-[14px] px-[25px] mb-[10px] border border-solid border-[#E2E2E2] text-base items-center gap-[15px]"><MapPin size="20"/>My Address</TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:!bg-primary data-[state=active]:!text-white flex text-secondary justify-normal py-[14px] px-[25px] mb-[10px] border border-solid border-[#E2E2E2] text-base items-center gap-[15px]"><User size="20"/> Account Details</TabsTrigger> */}
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
           {/* <TabsContent value="address">
              <Card className="border-none shadow-none">
                <CardHeader className="py-0">
                  <CardTitle>Address</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="details">
              <Card className="border-none shadow-none">
                <CardHeader className="py-0">
                  <CardTitle>Acount Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <AccountDetailsForm/>
                </CardContent>
              </Card>
            </TabsContent> */}
            {/* <TabsContent value="logout">
              <Card className="border-none shadow-none">
                <CardHeader>
                  <CardTitle>Logout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button>Logout</Button>
                </CardContent>
              </Card>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
