import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay,Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

type TDynamicSlider = {
  slides: JSX.Element[];
  slidesPerView: number;
  spaceBetween: string;
  className?: string;
  prevBtnClass?: string;
  nextBtnClass?: string;
  navigation?: boolean;
  loop?: boolean;
  autoplay?:{
    delay:number;
    disableOnInteraction:boolean
  } | boolean
};
const DynamicSlider = ({
  slides,
  slidesPerView,
  spaceBetween,
  className,
  prevBtnClass,
  nextBtnClass,
  loop=false,
  navigation = false,
  autoplay=false
}: TDynamicSlider) => {
  const responsiveBreapoints: { [width: number]: SwiperOptions } =
    slidesPerView > 6
      ? {
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1140: {
            slidesPerView: 7,
          },
          1840: {
            slidesPerView: 10,
          },
        }
      :  slidesPerView > 1 ?{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1140: {
            slidesPerView: 5,
          },
          1840: {
            slidesPerView: 6,
          },
        }
        : {};
  const responsiveSlidesperview = slidesPerView > 6 ? 2 : 1;
  const renderedSlides = slides.map((slide,index) => {
    return <SwiperSlide key={index}>{slide}</SwiperSlide>;
  });
  const navigationAttr = navigation
    ? { prevEl: prevBtnClass, nextEl: nextBtnClass }
    : false;
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={responsiveSlidesperview}
      loop={loop}
      spaceBetween={spaceBetween}
      className={className}
      navigation={navigationAttr}
      modules={[Navigation, Autoplay]}
      breakpoints={responsiveBreapoints}
      autoplay={autoplay}
    >
      {renderedSlides}
    </Swiper>
  );
};

export default DynamicSlider;
