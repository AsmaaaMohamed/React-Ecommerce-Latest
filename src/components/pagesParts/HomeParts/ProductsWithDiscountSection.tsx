import CountDown from "@/components/common/Header/HeaderParts/CountDown";
import ProductCard from "@/components/ecommerce/product/ProductCard/ProductCard";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";

interface ChildComponentProps {
  headingText: string;
  children: React.ReactNode;
}
type TProductsWithDiscountSection = {
  products: TProduct[];
  ThisSectionHeading: React.FC<ChildComponentProps>;
};
const ProductsWithDiscountSection = ({products , ThisSectionHeading}:TProductsWithDiscountSection) => {
  return (
    <div className="rts-grocery-feature-area rts-section-gapBottom pb-[60px]">
      <div className="container">
        <ThisSectionHeading headingText="Products With Discounts">
          <div className="countdown">
            <CountDown targetDate="2025-2-31" bg="dark" />
          </div>
        </ThisSectionHeading>
        <div className="flex flex-wrap bg-[rgba(229,62,62,0.05)] p-[30px] border border-solid border-[#E53E3E] rounded-[6px]">
          <div className="w-full">
            <div className="product-with-discount">
              <div className="flex flex-wrap g-5 -mt-[30px] -mx-[15px]">
                <div className="w-full lg:w-full lg-1200:w-1/3 px-[15px] mt-[30px]">
                  <Link
                    to="shop-details.html"
                    className="single-discount-with-bg bg-[url(/src/assets/images/discount/01.jpg)] sm:py-[41px] sm:px-[50px] p-[20px] w-full block bg-no-repeat bg-cover rounded-[6px] mb-[15px]"
                  >
                    <div className="inner-content">
                      <h4 className="title font-bold text-white text-[24px] leading-[1.25]">
                        Alpro Organic Flavored <br />
                        Fresh Juice
                      </h4>
                      <div className="price-area">
                        <span className="text-[14px] font-semibold text-white">
                          Only
                        </span>
                        <h4 className="title font-extrabold mb-0 text-[30px] text-white">
                          $15.00
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="shop-details.html"
                    className="single-discount-with-bg bg-2 bg-[url(/src/assets/images/discount/02.jpg)] sm:py-[41px] sm:px-[50px] p-[20px] w-full block bg-no-repeat bg-cover rounded-[6px] mb-0"
                  >
                    <div className="inner-content">
                      <h4 className="title font-bold text-white text-[24px]">
                        Alpro Organic Flavored <br />
                        Fresh Juice
                      </h4>
                      <div className="price-area">
                        <span className="text-[14px] font-semibold text-white">
                          Only
                        </span>
                        <h4 className="title font-extrabold mb-0 text-[30px] text-white">
                          $15.00
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="lg-1200:w-2/3 lg:w-full px-[15px] mt-[30px]">
                  <div className="row flex flex-wrap -mx-[7.5px]">
                    {products.length > 0 && (
                      <>
                        <div className="mb-[15px] lg:mb-0 lg:w-1/2 w-full px-[7.5px]">
                          <ProductCard
                            cardBg="light"
                            cols={2}
                            {...products[0]}
                            componentName="Products with discount"
                          />
                            
                          <ProductCard
                            cardBg="light"
                            cols={2}
                            {...products[1]}
                            componentName="Products with discount"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 px-[7.5px]">
                          <ProductCard
                            cardBg="light"
                            cols={2}
                            {...products[2]}
                            componentName="Products with discount"
                          />
                          <ProductCard
                            cardBg="light"
                            cols={2}
                            {...products[3]}
                            componentName="Products with discount"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsWithDiscountSection;