// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DynamicSlider from '../DynamicSlider';
import { Link } from 'react-router-dom';

const slidesData=[{
        img:"08.png",
        desc:"Get up to 30% off on your first $150 purchase"
    },
    {
        img:"01.jpg",
        desc:"Get up to 30% off on your first $150 purchase"
    }
];
const HomeMainSlider = () => {
    const renderedSlides = slidesData.map((slide,idx)=>{
       const imgUrl = new URL(`../../../assets/images/homeslider/${slide.img}`, import.meta.url).href;
        return (
          <div
            key={idx}
            className={`rounded-[6px] bg-no-repeat bg-cover bg-center py-[60px] md:py-[80px] lg-1200:py-[120px]`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <div className="banner-one-inner-content text-center">
              <span className="text-[#FFE884] text-base pre">{slide.desc}</span>
              <h1 className="title font-semibold mb-[42px] mt-[12px] text-white text-[28px] leading-[36px] sm:text-[30px] sm:leading-[1.3] md:text-[40px] md:leading-[56px] md-992:text-[54px] lg-1200:text-[60px] lg-1200:leading-[1.1]">
                Do not miss our amazing <br />
                grocery deals
              </h1>
              <Button asChild variant="ghost">
                <Link
                  to="/login"
                  className={`flex items-center justify-center rtsBtn btnPrimary hover:!bg-secondary !py-[14px] !px-[25px] gap-[10px] h-auto`}
                >
                  Shop Now <ArrowRight size="20px" />
                </Link>
              </Button>
            </div>
          </div>
        );
    });
  return (
    <>
        <DynamicSlider slides={renderedSlides} loop={true} slidesPerView={1} spaceBetween="0" navigation={true} autoplay={{delay:2500,disableOnInteraction:false}}/>
    </>
  );
};

export default HomeMainSlider;