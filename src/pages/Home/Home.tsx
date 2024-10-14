import { HomePopup } from "@/components/common/HomePopup/HomePopup";
import styles from "./styles.module.css";
import { HomeMainSlider } from "@/components/Slides";
import CategorySlider from "@/components/Slides/CategorySlider/CategorySlider";
import FeaturedGrocery from "@/components/pagesParts/HomeParts/FeaturedGrocery";
import ProductCard from "@/components/ecommerce/product/ProductCard/ProductCard";
import ArticleCard from "@/components/blog/ArticleCard/ArticleCard";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import data from "@/localData.json";
import FeaturesSection from "@/components/pagesParts/HomeParts/FeaturesSection";
import WeekendDiscountSection from "@/components/pagesParts/HomeParts/WeekendDiscountSection";
import WeekelyBestSection from "@/components/pagesParts/HomeParts/WeekelyBestSection";
import DynamicSection from "@/components/common/DynamicSection/DynamicSection";
import ProductsWithDiscountSection from "@/components/pagesParts/HomeParts/ProductsWithDiscountSection";
import useProducts from "@/hooks/useProducts";
import { useMemo } from "react";

const articles = data.posts;
const Home = () => {
  const { products, productsWithQuantityAndLiked } = useProducts();
  const trendingProducts =  useMemo(()=>products?.slice(0, 8).map((product) => {
    return (
      <div
        key={product.id}
        className="xl:w-1/4 md:w-1/2 sm:w-full w-full mt-[15px] px-[7.5px]"
      >
        <ProductCard cardBg="light" cols={2} cartActions={false} {...product} />
      </div>
    );
  }),[products]);
// console.log("productswithquantity" , productsWithQuantityAndLiked)
  const renderedArticlesCards = useMemo(()=>articles.slice(0, 4).map((el) => (
    <div
      key={el.id}
      className="xl:w-1/4 md:w-1/2 sm:w-full w-full mt-[15px] px-[7.5px]"
    >
      <ArticleCard {...el} />
    </div>
  )),[articles]);

  return (
    <>
      <HomePopup />
      <div
        className={`background-light-gray-color py-[60px] bg-[#F3F4F6] ${styles.btn}`}
      >
        <DynamicSection className="mb-[30px]" isMainSection={true}>
          <HomeMainSlider />
        </DynamicSection>
        <DynamicSection isMainSection={true}>
          <CategorySlider />
        </DynamicSection>
      </div>
      <FeaturesSection />
      <div className="rts-grocery-feature-area rts-section-gapBottom pb-[60px]">
        <div className="container">
          <SectionHeading headingText="Featured Grocery">
            <div className="">
              <div className="swiper-button-prev swipe-prev !z-[7] !right-[50px] !left-auto !h-[33px] !w-[33px] rounded-[6px] border border-solid border-primary bg-none flex items-center transition duration-0.3 after:!text-base after:text-[#2C3C28] hover:bg-primary hover:after:text-white after:content-['prev']"></div>
              <div className="swiper-button-next swipe-next !z-[7] !right-[10px] !left-auto !h-[33px] !w-[33px] rounded-[6px] border border-solid border-primary bg-none flex items-center transition duration-0.3 after:!text-base after:text-[#2C3C28] hover:bg-primary hover:after:text-white after:!content-['next']"></div>
            </div>
          </SectionHeading>
        </div>
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <div className="category-area-main-wrapper-one flex">
                <FeaturedGrocery products={productsWithQuantityAndLiked}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsWithDiscountSection
        ThisSectionHeading={SectionHeading}
        products={productsWithQuantityAndLiked}
      />
      <WeekelyBestSection
        ThisSectionHeading={SectionHeading}
        products={productsWithQuantityAndLiked}
      />
      <div className="category-feature-area rts-section-gapTop pt-[60px]">
        <div className="container">
          <div className="row g-4 flex flex-wrap -mt-[15px] -mx-[7.5px]">
            <WeekendDiscountSection />
          </div>
        </div>
      </div>
      <DynamicSection
        className="py-[60px]"
        sectionHeading={<SectionHeading headingText="Top Trending Products" />}
      >
        {trendingProducts}
      </DynamicSection>
      <DynamicSection
        className="mb-[60px]"
        sectionHeading={
          <SectionHeading headingText="Latest Blog Post Insights" />
        }
      >
        {renderedArticlesCards}
      </DynamicSection>
    </>
  );
};

export default Home;
