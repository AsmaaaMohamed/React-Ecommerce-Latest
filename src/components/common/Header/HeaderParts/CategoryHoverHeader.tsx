import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import BarIcon from "@/assets/svg/bar-1.svg?react";
import styles from "../styles.module.css";
import AccordionCategoryMenu from "../../AccordionCategoryMenu/AccordionCategoryMenu";

const CategoryHoverHeader = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center font-semibold p-0 cursor-pointer relative h-[50px] rounded-[5px] bg-[#F3F4F6] py-[15px] px-[16px] text-secondary gap-[10px] hover:!text-white hover:!bg-primary ${styles.categoryHoverHeader}`}
        >
          <BarIcon title="icons" className="parent" />
          Categories
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="lg:w-[250px] p-0">
        <AccordionCategoryMenu />
      </HoverCardContent>
    </HoverCard>
  );
};

export default CategoryHoverHeader;
