import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import {
  Apple,
  BriefcaseMedical,
  ChevronRight,
  Croissant,
  Ham,
  Popcorn,
} from "lucide-react";
import { Link } from "react-router-dom";

const AccordionCategoryMenu = () => {
  const { isOpen, onToggle } = useToggleMenu();
  return (
    <Accordion type="single" collapsible className={`py-[10px] accordion`}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={`justify-start font-semibold gap-[10px] hover:no-underline py-[12px] px-[20px] hover:bg-primary hover:text-white`}
        >
          <Apple strokeWidth="1" size="16px" />
          Breakfast & Diary
        </AccordionTrigger>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Breakfast</span>
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Dinner</span>
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="">
        <Link
          to="/"
          className={`flex items-center font-semibold transition duration-0.3 gap-[10px] text-secondary py-[12px] px-[20px] hover:bg-primary hover:text-white`}
          onClick={() => isOpen && onToggle()}
        >
          <Croissant strokeWidth="1" size="16px" />
          <span>Breads &amp; Bakery</span>
        </Link>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={`justify-start font-semibold gap-[10px] hover:no-underline py-[12px] px-[20px] hover:bg-primary hover:text-white`}
        >
          <Ham strokeWidth="1" size="16px" />
          Meats & Seafood
        </AccordionTrigger>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Breakfast</span>
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Dinner</span>
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={`justify-start font-semibold gap-[10px] hover:no-underline py-[12px] px-[20px] hover:bg-primary hover:text-white`}
        >
          <Popcorn strokeWidth="1" size="16px" />
          Chips & Snacks
        </AccordionTrigger>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Breakfast</span>
          </Link>
        </AccordionContent>
        <AccordionContent>
          <Link
            to="/"
            className={`flex items-center font-medium text-secondary py-[7px] pr-[10px] pl-[45px] text-base hover:bg-primary hover:text-white`}
            onClick={() => isOpen && onToggle()}
          >
            <ChevronRight />
            <span>Dinner</span>
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="">
        <Link
          to="/"
          className={`flex items-center font-semibold transition duration-0.3 gap-[10px] text-secondary py-[12px] px-[20px] hover:bg-primary hover:text-white`}
          onClick={() => isOpen && onToggle()}
        >
          <BriefcaseMedical strokeWidth="1" size="16px" />
          <span>Medical Healthcare</span>
        </Link>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCategoryMenu;
