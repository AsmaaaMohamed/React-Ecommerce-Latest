import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

type TWeekendDiscountCard ={
    btnText:string;
    heading:{firstPart:string , secondPart:string};
    actionText:string;
    img:string;
    url:string;
}
const WeekendDiscountCard = ({btnText, heading, actionText, img ,url}:TWeekendDiscountCard) => {
  const imgUrl = new URL(`../../../assets/images/category/${img}`, import.meta.url).href;
  return (
    <div
      className="single-feature-card bg_image one rounded-[6px] bg-no-repeat bg-cover p-[20px] h-[300px] xl-1600::p-[40px] lg-1200:h-[400px] bg-center"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="content-area">
        <Link
          to={url}
          className="rts-btn btn-primary bg-primary rounded-[6px] block max-w-max mb-[15px] py-[7px] px-[26px] text-base font-bold text-white"
        >
          {btnText}
        </Link>
        <h3 className="title animated fadeIn leading-[1.2] text-[26px] font-bold">
          {heading.firstPart} <br />
          <span className="font-normal text-primary">{heading.secondPart}</span>
        </h3>
        <Link
          to={url}
          className="shop-now-goshop-btn max-w-max transition duration-0.3 flex items-center gap-[10px]"
        >
          <span className="text flex transition duration-0.3 -ms-px font-bold text-[#232722]">
            {actionText}
          </span>
          <div className="plus-icon flex items-center justify-center ms-0 me-0 opacity-100 translate-x-0 -order-2 transition duration-0.3 h-[30px] w-[30px] bg-primary rounded-full">
            <Plus color="#fff" size="20px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WeekendDiscountCard;