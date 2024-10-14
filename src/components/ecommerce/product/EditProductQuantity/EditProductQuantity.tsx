import useCart from "@/hooks/useCart";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { memo, useEffect, useState } from "react";

const EditProductQuantity = memo(({
  quantity=0,
  id,
  forProductView = false,
  componentName
}: {
  quantity?: number;
  id: number;
  forProductView?: boolean;
  componentName:string;
}) => {
  const [quantityState , setQuantityState] = useState(quantity as number );
  const {items, changeQuantityHandler } = useCart();
  const handleDecrementClick = () => {
    if(quantityState >= 1)
      setQuantityState((prev) => prev - 1);
  };
  const handleIncrementClick = () => {
    setQuantityState((prev) => prev + 1);
  };
  useEffect(() => {
    changeQuantityHandler(id, quantityState);
  }, [ quantityState, changeQuantityHandler]);
  return forProductView ? (
    <>
      <div className="quantity-edit action-item w-[123px] h-[49px] flex items-center justify-center border border-solid border-[#e2e2e2] rounded-[4px] px-[10px] py-[3px] bg-white ">
        <button
          className="button text-muted"
          onClick={() => handleDecrementClick()}
        >
          <Minus color="#d3d3d3" size="20px" />
        </button>
        <input
          type="text"
          className="input max-w-[55px] font-bold text-black px-[15px] leading-[28px] text-center"
          value={items[id] ?? 0}
          onChange={(e) => setQuantityState(+e.target.value)}
        />
        <button
          className="button plus text-muted"
          onClick={() => handleIncrementClick()}
        >
          <Plus color="#d3d3d3" size="20px" />
        </button>
      </div>
    </>
  ) : (
    <div className="quantity-edit w-[92px] flex items-center justify-between border border-solid border-[#2b42261f] rounded-[4px] px-[10px] py-[3px] bg-white shadow-[0px_4px_17px_rgba(0,0,0,0.04)]">
      <input
        type="text"
        className="input p-0 max-w-[10px] font-semibold text-base text-muted"
        value={items[id] ?? 0}
        onChange={(e) => setQuantityState(+e.target.value)}
      />
      <div className="button-wrapper-action border border-solid border-[rgba(43,66,38,0.12)] rounded-[2px] bg-white flex max-w-max p-0 text-[0]">
        <button
          className="button px-[2px] py-px border-r border-solid border-[rgba(43,66,38,0.12)] hover:bg-primary hover:text-white"
          onClick={() => handleDecrementClick()}
        >
          <ChevronDown size="16" strokeWidth="1" className="" />
        </button>
        <button
          className="button plus px-[2px] py-px border-r border-solid border-[rgba(43,66,38,0.12)] hover:bg-primary hover:text-white"
          onClick={() => handleIncrementClick()}
        >
          <ChevronUp size="16" strokeWidth="1" />
        </button>
      </div>
    </div>
  );
});

export default EditProductQuantity;
