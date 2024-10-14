import SingleServiceCard from "./SingleServiceCard";

const servicesData = [
  {
    id:"01",
    title: "Organic Food Services",
    img: "01.svg",
    desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.",
  },
  {
    id:"02",
    title: "Organic Food Services",
    img: "02.svg",
    desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.",
  },
  {
    id:"03",
    title: "Organic Food Services",
    img: "03.svg",
    desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.",
  },
];
const WhyChooseSection = () => {
    const renderedServices = servicesData.map((el, idx) => (
      <div key={idx} className="md-992:w-1/3 md:1/2 sm:w-full w-full px-4 mt-9">
        <SingleServiceCard {...el} />
      </div>
    ));
  return (
    <div className="meet-our-expart-team rts-section-gap2 py-[100px] bg-[#F3F4F6]">
      <div className="container !max-w-[1320px]">
        <div className="flex">
          <div className="md-992:w-full w-full">
            <div className="title-center-area-main text-center md:max-w-[50%] max-w-full m-auto">
              <h2 className="title font-bold text-[40px] text-secondary">
                Why You Choose Us?
              </h2>
              <p className="disc text-base leading-[28px] md:leading-[1.3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pretium mollis ex, vel interdum augue faucibus sit amet. Proin
                tempor purus ac suscipit...
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[30px] -mx-4">
          {renderedServices}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection