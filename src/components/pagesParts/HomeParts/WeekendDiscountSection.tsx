import WeekendDiscountCard from "@/components/common/WeekendDiscountCard/WeekendDiscountCard";

const weekendDiscountCardsContent = [
  {
    btnText: "Weekend Discount",
    heading: {
      firstPart: "Drink Fresh Corn Juice",
      secondPart: "Good Taste",
    },
    actionText: "Shop Now",
    img: "01.jpg",
    url: "#",
  },
  {
    btnText: "Weekend Discount",
    heading: {
      firstPart: "Drink Fresh Corn Juice",
      secondPart: "Good Taste",
    },
    actionText: "Shop Now",
    img: "02.jpg",
    url: "#",
  },
  {
    btnText: "Weekend Discount",
    heading: {
      firstPart: "Drink Fresh Corn Juice",
      secondPart: "Good Taste",
    },
    actionText: "Shop Now",
    img: "03.jpg",
    url: "#",
  },
  {
    btnText: "Weekend Discount",
    heading: {
      firstPart: "Drink Fresh Corn Juice",
      secondPart: "Good Taste",
    },
    actionText: "Shop Now",
    img: "04.jpg",
    url: "#",
  },
];
const renderedWeekendDiscountCards = weekendDiscountCardsContent.map(
  (content,idx) => {
    return (
      <div key={idx} className="md-992:w-1/4 md:w-1/2 sm:w-full w-full mt-[15px] px-[7.5px]">
        <WeekendDiscountCard {...content} />
      </div>
    );
  }
);
const WeekendDiscountSection = () => {
  return (
            <>
                {renderedWeekendDiscountCards}
            </>
        );
};

export default WeekendDiscountSection;
