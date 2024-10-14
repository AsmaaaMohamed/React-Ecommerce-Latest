import DynamicTabsContent from "@/components/common/DynamicTabsContent/DynamicTabsContent";
import TabsButtons from "@/components/common/TabsButtons/TabsButtons";
import ProductCard from "@/components/ecommerce/product/ProductCard/ProductCard";
import { TProduct } from "@/types";
import React, { memo, useCallback, useEffect, useState } from "react";

interface ChildComponentProps {
  headingText: string;
  children:React.ReactNode;
}
type TWeekelyBestSection = {
  products: TProduct[];
  ThisSectionHeading: React.FC<ChildComponentProps>;
};
const WeekelyBestSection = memo(({products , ThisSectionHeading }:TWeekelyBestSection) => {
  
    const [tab, setTab] = useState("frozen");
    const [shuffledProducts, setShuffledProducts] = useState<TProduct[]>([]);
    const shuffleProducts = (productsToShuffle: TProduct[]) => {
      const shuffled = [...productsToShuffle];
      for (let i = shuffled?.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
      }
      return shuffled;
    };
    // const shuffledPro = shuffleProducts();
    let tabsProducts: JSX.Element[] = [];
    if (shuffledProducts.length) {
      tabsProducts = shuffledProducts?.slice(0, 12).map((product) => {
        return (
          <div
            key={product.id}
            className="2xl:w-1/6 xl:w-1/4 md-992:w-1/3 md:w-1/3 sm:w-1/2 w-full px-[7.5px] mt-[15px]"
          >
            <ProductCard
              cardBg="light"
              cols={1}
              {...product}
              componentName="weekely best"
            />
          </div>
        );
      });
    } else if (products && products.length) {
      tabsProducts = products?.slice(0, 12).map((product) => {
        return (
          <div
            key={product.id}
            className="2xl:w-1/6 xl:w-1/4 md-992:w-1/3 md:w-1/3 sm:w-1/2 w-full px-[7.5px] mt-[15px]"
          >
            <ProductCard
              cardBg="light"
              cols={1}
              {...product}
              componentName="weekely best"
            />
          </div>
        );
      });
    }
    useEffect(() => {
      if (products && products.length > 0) {
        const shuffledPro = shuffleProducts(products); // Shuffle only when `tab` changes
        setShuffledProducts(shuffledPro); // Store shuffled products
      }
      // Only re-run when tab changes, not when products change
    }, [tab]); 
    const tabs = [
      {
        value: "frozen",
        text: "Frozen Foods",
        content: (
          <div className="row flex flex-wrap -mt-[15px] -mx-[7.5px] g-4">
            {tabsProducts}
          </div>
        ),
      },
      {
        value: "diet",
        text: "Diet Foods",
        content: (
          <div className="row flex flex-wrap -mt-[15px] -mx-[7.5px] g-4">
            {tabsProducts}
          </div>
        ),
      },
      {
        value: "healthy",
        text: "Healthy Foods",
        content: (
          <div className="row flex flex-wrap -mt-[15px] -mx-[7.5px] g-4">
            {tabsProducts}
          </div>
        ),
      },
      {
        value: "vitamin",
        text: "Vitamin Items",
        content: (
          <div className="row flex flex-wrap -mt-[15px] -mx-[7.5px] g-4">
            {tabsProducts}
          </div>
        ),
      },
    ];
  return (
    <div className="weekly-best-selling-area rts-section-gap bg_light-1 py-[60px] bg-[#F3F4F6] mb-[60px] flex flex-wrap items-center gap-[10px] justify-end">
      <div className="container">
        <ThisSectionHeading headingText="Weekly Best Selling Groceries">
          <div
            className="nav nav-tabs flex flex-wrap items-center gap-[10px]"
            id="nav-tab"
            role="tablist"
          >
            <TabsButtons
              tabs={tabs}
              setTab={setTab}
              currentTab={tab}
              className="nav-link bg-white text-secondary rounded-[100px] py-[8px] px-[27px] font-semibold border-none hover:bg-primary hover:text-white"
            />
          </div>
        </ThisSectionHeading>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="myTabContent">
              {/* <!-- first tabs area start--> */}
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <DynamicTabsContent tabs={tabs} currentTabValue={tab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WeekelyBestSection;