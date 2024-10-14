import CategoryHoverHeader from "./CategoryHoverHeader";
import styles from "../styles.module.css";
import { Button } from "@/components/ui/button";
import { Heart, Search, User } from "lucide-react";
import { searchFormSchema, searchType } from "@/validations/searchSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {SingleInputForm} from "@/components/common";
import CartHoverCard from "./CartHoverCard";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/svg/logo-01.svg";
import { useGetWishlistQuery } from "@/store/wishlist/api/wishlistApiSlice";

const SearchHeader = () => {
    const {data:userWishlist} = useGetWishlistQuery("itemsIds");
    const searchForm = useForm<searchType>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
          keyword: "",
        },
      });
      const onSubmit: SubmitHandler<searchType> = (data) => {
        // console.log(data);
      };
  return (
    <div
      className={`hidden md-992:block py-[31px] border-t border-solid border-[#E2E2E2]`}
    >
      <div className="container">
        <div className="flex">
          <div className="lg:w-full w-full">
            <div
              className={`flex justify-between items-center gap-[35px] lg-1200:gap-[10px] ${styles.logoSearchCategoryWrapper}`}
            >
              <Link to="/" className="logo-area">
                <img src={logoSvg} title="logo-main" className="logo" />
              </Link>
              <div
                className={`flex items-center gap-[10px] ${styles.categorySearchWrapper}`}
              >
                {/* startttttttttttttt */}
                <CategoryHoverHeader />
                {/* enddddddddd */}

                <SingleInputForm
                  formMethods={searchForm}
                  onSubmit={onSubmit}
                  placeholder="Search for products, categories or brands"
                  name="keyword"
                  icon={<Search color="#fff" size="20px" />}
                  buttonText="Search"
                  formClassName={`space-y-8 relative basis-[70%] ${styles.searchHeader}`}
                />
              </div>
              <div className={`flex items-center gap-[10px]`}>
                <Button asChild variant="outline">
                  <Link
                    to="/account"
                    className={`flex items-center justify-center hover:text-white btnBorderOnly`}
                  >
                    <User size="20px" strokeWidth="1.5" />
                    <span className="hidden lg-1200:inline"> Account</span>
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    to="/wishlist"
                    className={`flex items-center justify-center hover:text-white btnBorderOnly`}
                  >
                    <div className={`relative`}>
                      <Heart size="18px" strokeWidth="1.5" />
                      <span className="absolute right-[-8px] top-[-10px] h-4 w-4 rounded-full text-[10px] bg-primary flex items-center justify-center text-white">
                        {userWishlist?.length ?? 0}
                      </span>
                    </div>
                    <span className="hidden lg-1200:inline">Wishlist</span>
                  </Link>
                </Button>
                <div
                  className={`flex items-center justify-center relative ${styles.cartHoverHeader}`}
                >
                  <CartHoverCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;