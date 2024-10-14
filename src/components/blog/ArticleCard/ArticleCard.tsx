import { Clock, Folder, Plus } from "lucide-react";
import { Link } from "react-router-dom";

type TArticleCard={
  title:string,
  publish_date:string,
  url:string,
  img:string
}
const ArticleCard = ({title , publish_date , url , img}:TArticleCard) => {
   const imgUrl = new URL(`../../../assets/images/blog/${img}`, import.meta.url).href;
  return (
    <div className="single-blog-area-start group/blog">
      <Link
        to={url}
        className="thumbnail block overflow-hidden w-full rounded-t-[8px]"
      >
        <img
          src={imgUrl}
          alt="blog-area"
          className="w-full transition duration-0.3 rounded-t-[8px] scale-[1.01] group-hover/blog:scale-[1.1]"
        />
      </Link>
      <div className="blog-body bg-white border border-t-0 border-solid border-[#E2E2E2] rounded-b-[6px] py-[30px] px-[10px]">
        <div className="top-area flex items-center gap-[30px] mb-[12px]">
          <div className="single-meta flex items-center gap-[5px]">
            <Clock size="20px" color="#6E777D" strokeWidth="1.5" />
            <span className="text-[14px] text-[#6E777D]">{publish_date}</span>
          </div>
          <div className="single-meta flex items-center gap-[5px]">
            <Folder size="20px" color="#6E777D" strokeWidth="1.5" />
            <span className="text-[14px] text-[#6E777D]">Modern Fashion</span>
          </div>
        </div>
        <Link to={url} className="group/blogLink">
          <h4 className="title font-bold text-[18px] leading-[26px] transition duration-0.3 text-secondary group-hover/blogLink:text-primary">
            {title}
          </h4>
        </Link>
        <Link
          to={url}
          className="shop-now-goshop-btn font-semibold max-w-max transition duration-0.3 flex items-center gap-[10px] text-secondary"
        >
          <span className="text font-semibold flex -ms-px transition duration-0.3 text-[#232722]">
            Read Details
          </span>
          <div className="plus-icon bg-[rgba(98,157,35,0.15)] flex ms-0 me-0 opacity-100 -order-2 transition duration-0.3 h-[30px] w-[30px] rounded-full items-center justify-center">
            <Plus color="#629D23" size="20px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
