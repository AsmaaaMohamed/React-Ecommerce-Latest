import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { Link } from "react-router-dom";

const AccordionMobileMenu = () => {
  const { isOpen, onToggle } = useToggleMenu();
  return (
    <Accordion type="single" collapsible className={`py-[10px] accordion`}>
      <AccordionItem value="item-1" className="">
        <Link
          to="/"
          className={`flex items-center font-normal transition duration-0.3 gap-[10px] py-[12px] px-[20px] text-muted`}
          onClick={() => isOpen && onToggle()}
        >
          <span>Home</span>
        </Link>
      </AccordionItem>
      <AccordionItem value="item-2" className="">
        <Link
          to="/about"
          className={`flex items-center font-normal text-muted transition duration-0.3 gap-[10px] py-[12px] px-[20px]`}
          onClick={() => isOpen && onToggle()}
        >
          <span>About</span>
        </Link>
      </AccordionItem>
      <AccordionItem value="item-3" className="">
        <AccordionTrigger
          className={`justify-start font-normal text-muted gap-[10px] hover:no-underline py-[12px] px-[20px]`}
        >
          Shop
        </AccordionTrigger>
        <AccordionContent>
          <Link
            to="/cart"
            className={`flex items-center font-normal text-muted py-[7px] pr-[10px] pl-[45px] text-base`}
            onClick={() => isOpen && onToggle()}
          >
            <span>Cart</span>
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-normal text-muted py-[7px] pr-[10px] pl-[45px] text-base`}
            onClick={() => isOpen && onToggle()}
          >
            <span>Track Order</span>
          </Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="">
        <Link
          to="/contact"
          className={`flex items-center font-normal text-muted transition duration-0.3 gap-[10px] py-[12px] px-[20px]`}
          onClick={() => isOpen && onToggle()}
        >
          <span>Contact</span>
        </Link>
      </AccordionItem>
      <AccordionItem value="item-4" className="">
        <Link
          to="/login"
          className={`flex items-center font-normal text-muted transition duration-0.3 gap-[10px] py-[12px] px-[20px]`}
          onClick={() => isOpen && onToggle()}
        >
          <span>Login</span>
        </Link>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMobileMenu;
