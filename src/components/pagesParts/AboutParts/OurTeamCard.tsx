import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

type TOurTeamCard = {
    name: string,
    img: string,
    jobTitle: string,
    tel: string
}
const OurTeamCard = ({name , img , jobTitle , tel}:TOurTeamCard) => {
  const imgUrl = new URL(`../../../assets/images/about/${img}`, import.meta.url).href;
  return (
    <div className="single-team-style-one group">
      <Link to="#" className="thumbnail block overflow-hidden rounded-[6px]">
        <img src={imgUrl} alt="team_single" className="group-hover:scale-[1.2] transition duration-0.3 w-full" />
      </Link>
      <div className="bottom-content-area text-center mt-[6px]">
        <div className="top mb-[20px] pb-[20px] border-b border-solid border-[#E2E2E2]">
          <h3 className="title animate-in fade-in-0 transition duration-0.3 ease-in mb-[4px] leading-[36px] mt-[15px] font-bold text-secondary text-[26px]">
            {name}
          </h3>
          <span className="designation font-[14px] text-muted">
            {jobTitle}
          </span>
        </div>
        <div className="bottom text-center">
          <Link
            to="#"
            className="number flex items-center text-center justify-center gap-[10px] text-[18px] font-semibold text-primary"
          >
            <PhoneCall size="20px" color="#629D23" fill="#629D23" />
            {tel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
