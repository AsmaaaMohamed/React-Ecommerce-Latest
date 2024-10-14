import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

const SingleFooterNav = () => {
  return (
    <div className={`singleFooterWized`}>
        <h3 className={`animated fadeIn footerTitle text-[20px] font-bold`}>Our Stores</h3>
        <div className={`footerNav`}>
            <NavigationMenu>
                <NavigationMenuList className="block m-0">
                    <NavigationMenuItem className="!ml-0 !my-[10px] first:!mt-0">
                        <NavigationMenuLink href="/" className="text-base text-[#74787C] transition duration-0.3 hover:text-primary">Delivery Information</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0 !my-[10px]">
                        <NavigationMenuLink href="/" className="text-base text-[#74787C] transition duration-0.3 hover:text-primary">Privacy Policy</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0 !my-[10px]">
                        <NavigationMenuLink href="/" className="text-base text-[#74787C] transition duration-0.3 hover:text-primary">Terms &amp; Conditions</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0 !my-[10px]">
                        <NavigationMenuLink href="/" className="text-base text-[#74787C] transition duration-0.3 hover:text-primary">Support Center</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="!ml-0 !my-[10px]">
                        <NavigationMenuLink href="/" className="text-base text-[#74787C] transition duration-0.3 hover:text-primary">Careers</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
  );
};

export default SingleFooterNav;