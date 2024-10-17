import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Heart, Menu, User } from "lucide-react";
import CartHoverCard from "./CartHoverCard";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { Link } from "react-router-dom";
import MobileMenuPopup from "../../MobileMenuPopup/MobileMenuPopup";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import logoSvg from "@/assets/svg/logo-01.svg"
import {  useAuthLogoutMutation } from "@/store/auth/api/authApiSlice";
import { toast } from "@/hooks/use-toast";
import { setUser } from "@/store/auth/authSlice";

const MainMenu = () => {
  const { accessToken} = useAppSelector((state)=>state.auth);
  const[authLogout,{error} ] = useAuthLogoutMutation();
  const dispatch = useAppDispatch();
  const{onToggle} = useToggleMenu();

  const logoutHandler = async()=>{
      authLogout(undefined)
        .unwrap()
        .then(() => {
          dispatch(setUser({ user: null, accessToken: null }));
        })
        .catch((error) => {
          console.log("eroooooooooor", error);
          toast({
            variant: "destructive",
            description: error?.message,
          });
        });
  
  }
  
  return (
    <div
      className={`sticky block top-0 w-full m-0 left-0 transition-none bg-white border-b border-solid border-[#E2E2E2] shadow-none z-[8] rounded-none md-992:bg-[#F3F4F6]`}
    >
      <div className="container">
        <div className="flex">
          <div className="lg:w-full w-full">
            <div className={`hidden justify-between items-center md-992:flex`}>
              <div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem className="!ml-0">
                      <NavigationMenuLink
                        className="py-[22px] pr-[20px] pl-0 block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                        asChild
                      >
                        <Link to="/">Home</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0">
                      <NavigationMenuLink
                        className="py-[22px] px-[20px] block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                        asChild
                      >
                        <Link to="/about">About</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="relative !ml-0">
                      <NavigationMenuTrigger className="h-auto py-[22px] px-[20px] font-semibold text-secondary transition duration-0.3 bg-transparent hover:!text-primary">
                        Shop
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul
                          className={`grid gap-3 md:w-[400px] lg:w-[230px] lg:grid-cols-1 py-[10px]`}
                        >
                          <li className="px-[15px]">
                            <NavigationMenuLink
                              className="py-[5px] block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                              asChild
                            >
                              <Link to="/cart">Cart</Link>
                            </NavigationMenuLink>
                          </li>
                          <li className="px-[15px]">
                            <NavigationMenuLink
                              className="py-[5px] block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                              asChild
                            >
                              <Link to="/">Track Order</Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0">
                      <NavigationMenuLink
                        className="py-[22px] px-[20px] block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                        asChild
                      >
                        <Link to="/contact">Contact</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0">
                      <NavigationMenuLink
                        className="py-[22px] px-[20px] block font-semibold text-secondary transition duration-0.3 hover:!text-primary"
                        asChild
                      >
                        {accessToken ? (
                          <Link
                          to="/"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                        ) : (
                          <Link
                          to="/login"
                        >
                          Login
                        </Link>
                        )}
                        
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              {/* <!-- button-area --> */}
              <div
                className={`flex items-center justify-between overflow-hidden gap-[2px] lg-1200:gap-[50px]`}
              >
                <Button asChild variant="secondary" type="button">
                  <Link
                    to="/"
                    className={`block font-semibold h-auto !p-0 !text-secondary bg-transparent !text-base hover:!text-primary`}
                  >
                    Trending Products
                  </Link>
                </Button>

                <Button
                  className={`discount block relative text-white h-auto rtsBtn btnPrimary !py-[23px] !px-[28px] !rounded-none after:absolute after:left-[-27px] after:top-[-7px] after:border-l-[21px] after:border-solid after:border-primary after:border-t-0 after:rotate-[90deg] after:border-b-[34px] after:border-b-[transparent] hover:!text-white hover:!bg-primary lg-1200:after:content-['']`}
                  variant="ghost"
                >
                  Get 30% Discount Now
                  <span className="py-[2px] px-[10px] bg-white text-primary rounded-[33px] ml-[7px] mt-[-7px]">
                    Sale
                  </span>
                </Button>
              </div>
              {/* <!-- button-area end --> */}
            </div>
            <div className="lg:w-full w-full">
              <div className="logo-search-category-wrapper after-md-device-header flex md-992:hidden bg-white py-[12px] gap-[20px] items-center justify-between">
                <Link to="/" className="logo-area">
                  <img src={logoSvg} title="logo-main" className="logo" />
                </Link>
                <div className="main-wrapper-action-2 flex gap-[10px]">
                  <div className="accont-wishlist-cart-area-header flex items-center gap-[10px]">
                    <Button asChild variant="outline">
                      <Link
                        to="/account"
                        className={`items-center justify-center hover:text-white btnBorderOnly hidden md:flex`}
                      >
                        <User size="20px" strokeWidth="1.5" />
                        <span className=""> Account</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link
                        to="/"
                        className={`items-center justify-center hover:text-white btnBorderOnly hidden md:flex`}
                      >
                        <div className={`relative`}>
                          <Heart size="18px" strokeWidth="1.5" />
                          <span className="absolute right-[-8px] top-[-10px] h-4 w-4 rounded-full text-[10px] bg-primary flex items-center justify-center text-white">
                            2
                          </span>
                        </div>
                        <span className="">Wishlist</span>
                      </Link>
                    </Button>
                    <div
                      className={`flex items-center justify-center relative `}
                    >
                      <CartHoverCard />
                    </div>
                  </div>
                  <MobileMenuPopup />
                  <div
                    className="menu-btn flex items-center justify-center"
                    onClick={() => onToggle()}
                  >
                    <Menu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
