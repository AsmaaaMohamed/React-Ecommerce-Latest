import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TProduct } from "@/types";
import ProductViewSwiper from "./ProductViewSwiper";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import EditProductQuantity from "../EditProductQuantity/EditProductQuantity";
import { Link } from "react-router-dom";
import { Facebook, Heart, Instagram, ShoppingCart, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";
import { toast } from "@/hooks/use-toast";
import { useLikeToggleMutation } from "@/store/wishlist/api/wishlistApiSlice";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

type TProductView = TProduct & {
  isOpen:boolean;
  onClose:()=> void
}
const ProductView = ({id, name , price , img , isLiked , quantity , isAuthenticated,isOpen , onClose}:TProductView) => {
  const dispatch = useAppDispatch();
  const[likeToggle,{isLoading}]=useLikeToggleMutation();
  const addToCartHandler = (id:number) => {
    dispatch(addToCart(id));
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:max-w-[1064px] sm:max-w-[425px] h-[520px] p-[30px]">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
          <div className="product-details-popup">
            <div className="details-product-area flex justify-center lg:flex-nowrap flex-wrap">
              <div className="product-thumb-area md-992:mr-[40px] md-992::mb-0 mb-[40px]">
                <ProductViewSwiper mainImg={img as string}/>
              </div>
              <div className="content">
                <div className="product-status flex items-center mb-[15px]">
                  <span className="product-catagory bg-primary px-[10px] rounded-[4px] text-[14px] text-white mr-[20px]">Dress</span>
                  <div className="rating-stars-group flex items-center gap-[10px]">
                    <Rater
                      total={3}
                      interactive={false}
                      rating={2.5}
                    />
                    <span className="text-[14px] text-[#61b163]">10 Reviews</span>
                  </div>
                </div>
                <h2 className="product-title text-[26px] mb-[10px] font-bold text-secondary">
                  {name}{" "}
                  <span className="stock text-[12px] font-semibold text-[#98bd25] py-[2px] px-[7px] border border-solid border-[#ededed] rounded-[4px] ml-[5px] translate-y-[-3px]">In Stock</span>
                </h2>
                <span className="product-price text-[36px] text-primary">
                  <span className="old-price text-[20px] font-semibold text-[#cfcfcf] line-through">$9.35</span> ${price}
                </span>
                <p className="text-muted max-w-[540px]">
                  Priyoshop has brought to you the Hijab 3 Pieces Combo Pack
                  PS23. It is a completely modern design and you feel
                  comfortable to put on this hijab. Buy it at the best price.
                </p>
                <div className="product-bottom-action flex items-center mb-[30px] flex-wrap">
                  <div className="cart-edit mr-[20px] flex items-center">
                    <EditProductQuantity forProductView={true} id={id} quantity={quantity} componentName=""/>
                  </div>
                  <Button
                    className={`rts-btn btn-primary radious-sm with-icon text-[14px] py-[14px] px-[25px] h-auto bg-primary text-white border border-solid border-primary flex items-center gap-[10px] transition duration-0.3 rounded-[6px] max-w-max font-bold hover:bg-secondary `}
                    onClick={() => addToCartHandler(id)}
                  >
                    <div className="btn-text min-w-[25px]">Add To Cart</div>
                    <div className="arrow-icon">
                      <ShoppingCart size="20px" />
                    </div>
                    <div className="arrow-icon hidden">
                      <i className="fa-regular fa-cart-shopping"></i>
                    </div>
                  </Button>
                  <Button
                    className="rts-btn btn-primary ml-[20px] bg-primary px-[25px] py-[14px] rounded-[6px] h-full"
                    onClick={(e)=> {e.preventDefault();likeToggleHandler()}}
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
                    />)}
                  </Button>
                </div>
                <div className="product-uniques mb-[20px]">
                  <span className="sku product-unipue block text-muted mb-[5px]">
                    <span className="inline-block font-bold">SKU: </span> BO1D0MX8SJ
                  </span>
                  <span className="catagorys product-unipue block text-muted mb-[5px]">
                    <span className="inline-block font-bold">Categories: </span> T-Shirts, Tops, Mens
                  </span>
                  <span className="tags product-unipue block text-muted mb-[5px]">
                    <span className="inline-block font-bold">Tags: </span> fashion, t-shirts, Men
                  </span>
                </div>
                <div className="share-social">
                  <span>Share:</span>
                      <Link
                        to="#"
                        className="inline-block mr-[10px]"
                      >
                        <Facebook
                          color="#2C3C28"
                          fill="#2C3C28"
                          strokeWidth="0.1"
                          size="18px"
                          className="hover:fill-primary hover:stroke-primary"
                        />
                      </Link>
                      <Link
                        to="#"
                        className="inline-block mr-[10px]"
                      >
                        <Twitter
                          color="#2C3C28"
                          fill="#2C3C28"
                          size="18px"
                          className="hover:fill-primary hover:stroke-primary"
                        />
                      </Link>
                      <Link
                        to="#"
                        className="inline-block mr-[10px]"
                      >
                        <Youtube color="#2C3C28" size="18px" className="hover:stroke-primary"/>
                      </Link>
                      <Link
                        to="#"
                        className="inline-block mr-[10px]"
                      >
                        <Instagram color="#2C3C28" size="18px" className="hover:stroke-primary"/>
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
