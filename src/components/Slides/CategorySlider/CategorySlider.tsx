import DynamicSlider from "../DynamicSlider";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "@/store/categories/api/categoriesApiSlice";

const CategorySlider = () => {
  const{data:categories} = useGetCategoriesQuery(undefined);
  // console.log(categories)
  const renderedCategories =  categories?.map((category)=>{
    return (
      <Link
        key={category.id}
        to='/'
        className="single-category-one py-[25px] px-[20px] rounded-[6px] border border-solid border-[#E2E2E2] h-[161px] flex items-center flex-col justify-center bg-white cursor-pointer transition duration-0.3 hover:border-primary"
      >
        <img
          src={category.img}
          alt="category"
          className="max-w-[70px] max-[94px] m-auto mb-[18px] min-h-[60px] text-center flex"
        />
        <p className="font-bold text-secondary text-[14px] mb-[8px] text-center">
          {category.name}
        </p>
      </Link>
    );
  }) ?? [];
  return (categories && categories?.length > 0) ? (
    <DynamicSlider
      slides={renderedCategories}
      slidesPerView={10}
      spaceBetween="12px"
    />
  ) : (
    <div className="flex justify-center text-[24px] text-secondary font-bold items-center">
      There is no categories
    </div>
  );
};
export default CategorySlider;
