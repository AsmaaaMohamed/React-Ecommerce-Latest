
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import useCurrencies from "@/hooks/useCurrencies";
import useLanguages from "@/hooks/useLanguages";
import PopoverBtn from "../../PopoverBtn/PopoverBtn";
import { Link } from "react-router-dom";

const MidHeader = () => {
    const{languages , langOpen , setLangOpen ,langValue , setLangValue} = useLanguages();
    const{currencies , currencyOpen , setCurrencyOpen , currencyValue ,setCurrencyValue} = useCurrencies();
  return (
    <div className={`hidden md-992:block`}>
      <div className="container">
        <div className="flex">
          <div className="lg:w-full w-full">
            <div className={`flex items-center justify-between`}>
              <div className={`flex items-center gap-[40px]`}>
                <NavigationMenu>
                  <NavigationMenuList
                    className={`gap-[15px] after:content-[''] after:absolute after:h-full after:w-px after:bg-[#E2E2E2] after:top-0 after:right-[-20px]`}
                  >
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/"
                        className="block font-medium text-sm py-[15px] text-destructive"
                        asChild
                      >
                        <Link to="/">About Us</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="block font-medium text-sm py-[15px] text-destructive"
                        asChild
                      >
                        <Link to="/account">My Account</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="block font-medium text-sm py-[15px] text-destructive"
                        asChild
                      >
                        <Link to="/wishlist">Wishlist</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <p className="para mb-0">
                  We deliver to your everyday from 7:00 to 22:00
                </p>
              </div>
              <div className={`flex gap-[40px]`}>
                <ul
                  className={`relative p-0 m-0 flex items-center list-none gap-[15px] text-secondary`}
                >
                  <li className="">
                    <PopoverBtn
                      value={langValue}
                      setValue={setLangValue}
                      open={langOpen}
                      setOpen={setLangOpen}
                      arrayOfData={languages}
                    />
                  </li>
                  <li className="">
                    <PopoverBtn
                      value={currencyValue}
                      setValue={setCurrencyValue}
                      open={currencyOpen}
                      setOpen={setCurrencyOpen}
                      arrayOfData={currencies}
                    />
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-medium py-[15px] text-destructive"
                    >
                      Track Order
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidHeader