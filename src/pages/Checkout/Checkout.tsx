import CheckoutForm from "@/components/forms/CheckoutForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Checkout = () => {
  const [checkedValue, setCheckedValue] = useState<string | null>(null);
  const handleCheckboxChange = (value: string) => {
    if (checkedValue === value) {
      setCheckedValue(null); // Uncheck if the same checkbox is clicked
    } else {
      setCheckedValue(value);
    }
  };
  return (
    <div className="rts-cart-area rts-section-gap py-[60px]">
      <div className="container">
        <div className="flex lg-1200:flex-row flex-col -mt-12 -mx-3">
          <div className="xl:w-2/3 md-992:w-full md:w-full w-full order-2 xl:order-1 md-992:order-2 md:order-2 sm:order-2 px-3 mt-12">
            <div className="rts-cart-list-area bg-white rounded-[6px]">
              <h3 className="title animate-in fade-in-0 font-bold text-secondary text-[30px]">
                Billing Details
              </h3>
              <CheckoutForm />
            </div>
          </div>
          <div className="xl:w-1/3 md-992:w-full md:w-full w-full order-1 xl:order-2 md-992:order-1 md:order-1 sm:order-1 px-3 mt-12">
            <h3 className="title animate-in fade-in-0 font-bold text-secondary text-[30px]">
              Your Order
            </h3>
            <Card className="bg-transparent border-[2px] border-solid border-primary">
              <CardHeader className="p-0">
                <CardTitle className="pt-[36px] pb-[26px] mx-[36px] border-b border-solid border-[#E2E2E2] mb-0 text-base">
                  <div className="top-wrappern flex justify-between text-muted font-normal">
                    <div className="product">Products</div>
                    <div className="price">Price</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="subtotal flex items-center justify-between py-[33px] mx-[36px] border-b border-solid border=[#E2E2E2]">
                  <span className="font-normal text-base text-muted">
                    Subtotal
                  </span>
                  <h6 className="price mb-0 text-base font-medium text-secondary">
                    $1100.00
                  </h6>
                </div>
                <div className="single-shop-list flex items-center justify-between py-[33px] mx-[36px] border-b border-solid border=[#E2E2E2] gap-[20px]">
                  <div className="left-area">
                    <span className="text-muted">Shipping</span>
                  </div>
                  <span className="price text-secondary font-medium">
                    Flat rate: $500.00
                  </span>
                </div>
                <div className="single-shop-list flex items-center justify-between py-[33px] mx-[36px] border-b border-solid border=[#E2E2E2] gap-[20px]">
                  <div className="left-area">
                    <span className="text-secondary font-semibold">
                      Total Price:
                    </span>
                  </div>
                  <span className="price text-primary font-medium">
                    $500.00
                  </span>
                </div>
                <div className="shipping flex items-start justify-between py-[33px] mx-[36px] border-b border-solid border-[#E2E2E2]">
                  <ul>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="f-option"
                        name="selector"
                        checked={checkedValue === "f-option"}
                        onCheckedChange={() => handleCheckboxChange("f-option")}
                      />
                      <label
                        htmlFor="f-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Direct Bank Transfer
                      </label>
                    </li>
                    <p className="disc mb--25">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="s-option"
                        name="selector"
                        checked={checkedValue === "s-option"}
                        onCheckedChange={() => handleCheckboxChange("s-option")}
                      />
                      <label
                        htmlFor="s-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Check Payments
                      </label>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="t-option"
                        name="selector"
                        checked={checkedValue === "t-option"}
                        onCheckedChange={() => handleCheckboxChange("t-option")}
                      />
                      <label
                        htmlFor="t-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Cash On Delivery
                      </label>
                    </li>
                    <li className="mb-[10px] flex items-center">
                      <Checkbox
                        id="w-option"
                        name="selector"
                        checked={checkedValue === "w-option"}
                        onCheckedChange={() => handleCheckboxChange("w-option")}
                      />
                      <label
                        htmlFor="w-option"
                        className="text-[14px] font-medium text-secondary relative pl-[15px] cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Paypal
                      </label>
                    </li>
                    <li className="mb-[10px] flex ite">
                      <p className="mt-[15px] mb-[20px] text-muted text-base">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-0 flex-col items-start">
                
                <div className="button-area pt-0 pb-[20px] px-[20px] w-full">
                  <button className="rts-btn btn-primary w-full max-w-full block bg-primary rounded-[6px] text-white py-[14px] px-[25px] text-base font-bold">
                    Place Order
                  </button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
