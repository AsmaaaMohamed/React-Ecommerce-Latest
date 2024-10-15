import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ShoppingCart } from "lucide-react";
import CartItemInMenu from "@/components/ecommerce/cart/CartItemInMenu/CartItemInMenu";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import useCart from "@/hooks/useCart";

const CartHoverCard = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const pumpCartQuantityClass = isAnimate ? "pumpCartQuantity" : "";
  const {cartTotalQuantity, cartItemsInfo, items} = useCart();
   const cartItemsInfoWithQuantity = useMemo(()=>cartItemsInfo?.map((el)=>({...el, quantity:items[el.id]})),[items, cartItemsInfo]);
  const renderedCartItems = cartItemsInfoWithQuantity?.map((item, index) => {
    return <CartItemInMenu key={`${item.id}-${index}`} {...item} />;
  });
  const cartSubTotal = cartItemsInfoWithQuantity?.reduce(
    (acc, el) => acc + (el.quantity ?? 0) * el.price,
    0
  );
  useEffect(() => {
    if (!cartTotalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [cartTotalQuantity]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link to="/cart">
          <Button asChild variant="outline">
            <span
              className={`flex items-center justify-center hover:text-white btnBorderOnly`}
            >
              <div className={`relative`}>
                <ShoppingCart size="20px" strokeWidth="1.5" />
                <span
                  className={`${pumpCartQuantityClass} absolute right-[-8px] top-[-10px] h-4 w-4 rounded-full text-[10px] bg-primary flex items-center justify-center text-white`}
                >
                  {cartTotalQuantity}
                </span>
              </div>
              <span className="hidden lg-1200:inline">My Cart</span>
            </span>
          </Button>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className={`min-w-[522px]`}>
        <div className={`p-[40px]`}>
          <h5 className={`font-bold`}>
            Shopping Cart ({cartTotalQuantity.toString().padStart(2, "0")})
          </h5>
          {renderedCartItems}
          <div className="">
            <div className={`mt-10`}>
              <div
                className={`flex items-center justify-between mt-[15px] mb-[10px]`}
              >
                <span className="font-semibold text-base text-[#141414]">
                  Sub Total:
                </span>
                <span className={`font-semibold text-base text-[#141414]`}>
                  ${cartSubTotal?.toFixed()}
                </span>
              </div>
            </div>
            <div
              className={`flex items-center justify-center mt-[30px] gap-[24px]`}
            >
              <Link
                to="/cart"
                className={`block w-full text-center btnPrimary bg-primary text-white font-bold transition duration-0.3 !max-w-none  !py-[14px] !px-[25px]`}
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CartHoverCard;
