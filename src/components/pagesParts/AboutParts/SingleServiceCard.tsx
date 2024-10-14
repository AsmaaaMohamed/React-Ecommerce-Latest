
type TSingleServiceCard ={
    id:string;
    title:string;
    img:string;
    desc:string;
}
const SingleServiceCard = ({id , title , img , desc }:TSingleServiceCard) => {
  const imgUrl = new URL(`../../../assets/images/about/${img}`, import.meta.url).href;
  return (
    <div className="single-service-area-style-one text-center bg-white border border-solid border-[#E2E2E2] rounded-[6px] p-[50px] pt-[90px]">
      <div className="icon-area pb-[30px] border-b border-solid border-[#E2E2E2] relative z-[1] m-auto after:absolute after:content-[''] after:-left-[29px] after:bg-[linear-gradient(180deg,#ffffff0d_0%,#FFFFFF_100%)] after:w-full after:h-[101px] after:-z-[1] after:-top-[29px]">
        <span className="bg-text absolute text-[#EBEDF1] text-[120px] font-bold left-1/2 -translate-x-1/2 -top-[70px] -z-[1]">
          {id}
        </span>
        <img src={imgUrl} alt="service"  className="inline-block"/>
      </div>
      <div className="bottom-content mt-[20px]">
        <h3 className="title animate-in fade-in-0 mb-[8px] font-bold leading-[54px] text-[26px] text-secondary">{title}</h3>
        <p className="disc mb-0 text-muted text-base">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default SingleServiceCard