import ProductCard from "@/components/ecommerce/product/ProductCard/ProductCard";
import DynamicSlider from "@/components/Slides/DynamicSlider";
import { TProduct } from "@/types";

const FeaturedGrocery = ({products}:{products:TProduct[]}) => {
   const renderedProducts = products.map((product)=>{
    
    return (<ProductCard key={product.id} cardBg="dark" cols={1} {...product} componentName="Featured Grocery" />)}
);
  return (
    <>
        <DynamicSlider  slides={renderedProducts} navigation={true} slidesPerView={6} spaceBetween="16px" prevBtnClass=".swipe-prev" nextBtnClass=".swipe-next"/>
    </>
  );
};

export default FeaturedGrocery;