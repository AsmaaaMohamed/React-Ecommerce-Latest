import useWishlist from "@/hooks/useWishlist";
import { columns } from "../Cart/columns";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";
import { ShoppingCart } from "lucide-react";
import { DataTable } from "../Cart/data-table";
import { useCallback} from "react";
import { useLikeToggleMutation } from "@/store/wishlist/api/wishlistApiSlice";

const Wishlist = () => {
  const { wishlistItemsWithQuantityAndLiked } = useWishlist();
  const dispatch = useAppDispatch();
  const[likeToggle]=useLikeToggleMutation();
  const removeItemFromWishlist = useCallback((id:number)=>{
    likeToggle(id);
  },[])
  const addToCartHandler = (id:number) => {
    dispatch(addToCart(id));
  };
  const wishlistColumns = 
      [...columns ,{
        id: "addToCart",
        cell: ({ row }:{row:any}) => {
          const product: {
            id: number;
            removeItem: () => void;
            name: string;
            thumbnail?: string;
          } = row.getValue("product");
          return (
            <Link
              to="#"
              className={`rts-btn btn-primary radious-sm with-icon text-[14px] py-[14px] px-[25px] bg-primary text-white border border-solid border-primary flex items-center gap-[10px] transition duration-0.3 rounded-[6px] min-w-[155px] max-w-max font-bold hover:bg-secondary `}
              onClick={() => addToCartHandler(product.id)}
            >
              <div className="btn-text min-w-[25px]">Add To Cart</div>
              <div className="arrow-icon">
                <ShoppingCart size="20px" />
              </div>
              <div className="arrow-icon hidden">
                <i className="fa-regular fa-cart-shopping"></i>
              </div>
            </Link>
          );
        },
      }];
  
  
  const data = wishlistItemsWithQuantityAndLiked?.map((item) => {
    return {
      product: {
        id: item.id,
        removeItem: () => removeItemFromWishlist(item.id),
        thumbnail: item.img,
        name: item.name,
      },
      price: item.price,
      quantity: item.quantity,
    };
  })  ?? [];
  return (
    <div className="rts-cart-area rts-section-gap bg-[#F3F4F6] py-[60px]">
      <div className="container">
        <div className="flex lg-1200:flex-row flex-col -mt-12 -mx-3">
          <div className="lg:w-full w-full  px-3 mt-12">
            <div className="rts-cart-list-area bg-white rounded-[6px]">
              <DataTable
                columns={wishlistColumns}
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
