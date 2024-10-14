import { EasyZoomOnMove } from "easy-magnify";
import { useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import filterImg1 from "@/assets/images/product/product-filt2.jpg"
import filterImg2 from "@/assets/images/product/product-filt3.jpg";

const ProductViewSwiper = ({mainImg}:{mainImg:string}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 w-[330px] border border-solid border-[#f1f1f1] mb-[30px] rounded-[6px] max-h-[287px]"
      >
        <SwiperSlide>
          <EasyZoomOnMove
            mainImage={{
              src: mainImg,
              alt: "sss",
            }}
            zoomImage={{
              src: mainImg,
              alt: "dd",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EasyZoomOnMove
            mainImage={{
              src: "https://nnfjqciskjoyldboicvx.supabase.co/storage/v1/object/sign/Ekomart/product/product-filt3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFa29tYXJ0L3Byb2R1Y3QvcHJvZHVjdC1maWx0My5qcGciLCJpYXQiOjE3MjgyOTMwNzIsImV4cCI6MjM1OTAxMzA3Mn0.RXHbOdRo-coCtDusW8RI1AKxA0_9Q8XacBoxXe6eI0Q&t=2024-10-07T09%3A24%3A36.544Z",
              alt: "sss",
            }}
            zoomImage={{
              src: "https://nnfjqciskjoyldboicvx.supabase.co/storage/v1/object/sign/Ekomart/product/product-filt3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFa29tYXJ0L3Byb2R1Y3QvcHJvZHVjdC1maWx0My5qcGciLCJpYXQiOjE3MjgyOTMwNzIsImV4cCI6MjM1OTAxMzA3Mn0.RXHbOdRo-coCtDusW8RI1AKxA0_9Q8XacBoxXe6eI0Q&t=2024-10-07T09%3A24%3A36.544Z",
              alt: "dd",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EasyZoomOnMove
            mainImage={{
              src: "https://nnfjqciskjoyldboicvx.supabase.co/storage/v1/object/sign/Ekomart/product/product-filt2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFa29tYXJ0L3Byb2R1Y3QvcHJvZHVjdC1maWx0Mi5qcGciLCJpYXQiOjE3MjgyOTMwMzMsImV4cCI6MjM1OTAxMzAzM30.wSQqDs59_Otk9ye_7yzN8TRzUo10keS5dGMRvwrTUoo&t=2024-10-07T09%3A23%3A57.879Z",
              alt: "sss",
            }}
            zoomImage={{
              src: "https://nnfjqciskjoyldboicvx.supabase.co/storage/v1/object/sign/Ekomart/product/product-filt2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFa29tYXJ0L3Byb2R1Y3QvcHJvZHVjdC1maWx0Mi5qcGciLCJpYXQiOjE3MjgyOTMwMzMsImV4cCI6MjM1OTAxMzAzM30.wSQqDs59_Otk9ye_7yzN8TRzUo10keS5dGMRvwrTUoo&t=2024-10-07T09%3A23%3A57.879Z",
              alt: "dd",
            }}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={3}
        modules={[Thumbs]}
        className={`productSwiper ${styles.der}`}
      >
        <SwiperSlide className="max-w-[85px] border border-solid border-[#f1f1f1] opacity-[40%] rounded-[6px] mr-[10px] cursor-pointer">
          <img src={mainImg} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[85px] border border-solid border-[#f1f1f1] opacity-[40%] rounded-[6px] mr-[10px] cursor-pointer">
          <img src={filterImg2} />
        </SwiperSlide>
        <SwiperSlide className="max-w-[85px] border border-solid border-[#f1f1f1] opacity-[40%] rounded-[6px] mr-[10px] cursor-pointer">
          <img src={filterImg1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductViewSwiper