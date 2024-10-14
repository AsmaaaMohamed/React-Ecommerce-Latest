import { Bookmark, Eye, Heart, ShoppingCart } from "lucide-react";
import styles from "./styles.module.css";
import { TProduct } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { Link } from "react-router-dom";
import  { memo, useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import ProductView from "../ProductView/ProductView";
import { toast } from "@/hooks/use-toast";
import { addToCart } from "@/store/cart/cartSlice";
import EditProductQuantity from "../EditProductQuantity/EditProductQuantity";
import { useLikeToggleMutation } from "@/store/wishlist/api/wishlistApiSlice";

type TProductCard = TProduct & {
  cardBg: string;
  cols: number;
  cartActions?: boolean;
  componentName?:string;
};
const ProductCard = memo(
  ({
    cardBg,
    cols,
    cartActions = true,
    id,
    name,
    weight,
    inStock = 5,
    quantity,
    price,
    discount = 0,
    img,
    isLiked = false,
    isAuthenticated = false,
    componentName=''
  }: TProductCard) => {
    const dispatch = useAppDispatch();
    const[isOpen , setIsOpen] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const[likeToggle,{isLoading}]=useLikeToggleMutation();
    const remainingQuantityInStock = inStock - (quantity ?? 0);
    const reachingToMaxQuantity = remainingQuantityInStock <= 0 ? true : false;
    const addToCartLinkClass =
      isBtnDisabled || reachingToMaxQuantity ? "pointer-events-none" : "";
    const bgClass = cardBg == "dark" ? "bg-[#F5F6F7]" : "bg-white";
    const imageBorder =
      cardBg == "dark" ? "" : "border border-solid border-[#EAEAEA]";
    const priceAfterDiscount = price - (price * discount) / 100;
    const cardClass =
      cols === 2
        ? "flex items-center flex-col md:flex-row gap-[15px] bg-white mb-[15px] last:mb-0"
        : "";
    const imgClass =
      cols === 1
        ? ""
        : cartActions
        ? "md:h-[186px] h-auto object-cover"
        : "md:h-[130px] h-auto w-[130px] max-w-none object-contain";

    const badgeClass = cartActions ? "left-[30px]" : "left-[5px]";
    useEffect(() => {
      if (!isBtnDisabled) return;
      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);
      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);
    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };
    const likeToggleHandler = () => {
      if(!isAuthenticated){
        toast({
          variant:"destructive",
        description: "You need to login first to add items to the wishlist",
      });
      return;
      }
      likeToggle(id);

    };
    const viewProductHandler = ()=>{
      setIsOpen(true);
    }
    const closeViewProductHandler = ()=>{
      setIsOpen(false);
    }
    return (
      <div
        className={`${styles.singleShoppingCardOne} ${bgClass} ${cardClass} p-[15px] rounded-[6px]`}
      >
        {/* <!-- iamge and sction area start --> */}
        <div className="image-and-action-area-wrapper relative">
          <Link
            to="#!"
            className={`thumbnail-preview rounded-[6px] overflow-hidden block relative ${imageBorder}`}
            onClick={(e)=>e.preventDefault()}
          >
            <div
              className={`badge absolute ${badgeClass} top-[-12px] z-[5] inline-block py-[0.35em] px-[0.65em] text-[0.75em] font-bold text-center rounded-[0.25em] whitespace-nowrap align-baseline`}
            >
              <span className="absolute top-[17px] left-[23px] text-[11px] leading-[1.1] text-secondary text-left font-bold">
                {discount}% <br />
                Off
              </span>
              <Bookmark width="50" height="50" color="#EABC5E" fill="#EABC5E" />
            </div>
            <img
              src={img}
              alt="grocery"
              className={`w-full transition duration-0.3 scale-[1.01] ${imgClass}`}
            />
          </Link>
          {cols === 1 && (
            <>
              <div className="action-share-option absolute bottom-0 left-1/2 flex items-center gap-[8px] h-0 rounded-t-[10px] bg-primary py-0 px-[29px]">
                <div
                  className="single-action openuptip message-show-action h-[28px] w-[28px] flex items-center justify-center border-[1.2px] border-dashed border-[rgba(255,255,255,0.42)] rounded-full transition-none duration-0.3 hover:bg-white cursor-pointer relative"
                  data-flow="up"
                  title={`${
                    isLiked ? "Remove from wishlist" : "Add To Wishlist"
                  }`}
                  onClick={likeToggleHandler}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size={20} color="#fff" />
                    </>
                  ) : (
                    <Heart
                      color={"#fff"}
                      fill={`${isLiked ? "#fff" : "none"}`}
                      size="20"
                      strokeWidth="2.5"
                    />
                  )}
                </div>
                <div
                  className="single-action openuptip cta-quickview product-details-popup-btn h-[28px] w-[28px] lg:flex items-center justify-center border-[1.2px] border-dashed border-[rgba(255,255,255,0.42)] rounded-full transition-none duration-0.3 hover:bg-white cursor-pointer relative hidden"
                  data-flow="up"
                  title="View"
                  onClick={viewProductHandler}
                >
                  <Eye color="#fff" size="20" strokeWidth="2.5" />
                </div>
              </div>
              <ProductView img={img} isAuthenticated={isAuthenticated} isLiked={isLiked} name={name} price={price} id={id} quantity={quantity} onClose={closeViewProductHandler} isOpen={isOpen} />
            </>
          )}
        </div>
        {/* <!-- iamge and sction area start --> */}
        <div className="body-content pt-[15px]">
          <Link to="#" onClick={(e)=>e.preventDefault()}>
            <h4 className="title mb-[5px] text-base transition duration-0.3 font-bold hover:text-primary">
              {name}
            </h4>
          </Link>
          <span className="availability text-[14px] font-normal text-muted">
            {weight}
          </span>
          <div className="price-area flex items-center gap-[8px] mt-[8px]">
            <span className="current font-bold text-[20px] mb-0 text-red-600">
              ${priceAfterDiscount.toFixed(2)}
            </span>
            <div className="previous mb-0 text-[14px] font-medium text-destructive relative after:absolute after:overflow-auto after:left-[-5%] after:top-1/2 after:content-[''] after:h-px after:w-[110%] after:bg-destructive">
              ${price.toFixed(2)}
            </div>
          </div>
          {cartActions &&
            (reachingToMaxQuantity ? (
              <p className="text-red-600 text-[12px] m-0">Reach to the limit</p>
            ) : (
              <p className="text-muted text-[12px] m-0">
                you can add {remainingQuantityInStock} items
              </p>
            ))}
          {cartActions && (
            <div
              className={`cart-counter-action flex items-center justify-between gap-[7px] mt-[10px]`}
            >
              <EditProductQuantity id={id} quantity={quantity} componentName={componentName}/>
              <Link
                to="#"
                className={`${addToCartLinkClass} rts-btn btn-primary radious-sm with-icon text-[14px] py-[7px] px-[14px] bg-transparent text-primary border border-solid border-primary flex items-center gap-[10px] transition duration-0.3 rounded-[6px] max-w-max font-bold hover:bg-primary hover:text-white`}
                onClick={addToCartHandler}
              >
                <div className="btn-text min-w-[25px]">
                  {isBtnDisabled ? (
                    <>
                      <LoadingSpinner size={20} />
                    </>
                  ) : (
                    "Add"
                  )}
                </div>
                <div className="arrow-icon">
                  <ShoppingCart size="20px" />
                </div>
                <div className="arrow-icon hidden">
                  <i className="fa-regular fa-cart-shopping"></i>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default ProductCard;
