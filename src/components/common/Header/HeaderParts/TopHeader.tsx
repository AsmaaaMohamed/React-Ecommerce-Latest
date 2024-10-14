import { Link } from "react-router-dom";
import CountDown from "./CountDown";

const TopHeader = () => {
  return (
    <div className={`hidden md-992:block bg-[var(--color-primary)] py-[10px]`}>
        <div className="container">
          <div className="flex ">
            <div className="lg:w-full w-full">
              <div
                className={`flex items-center justify-between`}
              >
                <div className={`flex items-center gap-[15px]`}>
                  <p className={`mb-0 font-normal text-white text-sm lg-1100:text-base`}>
                    FREE delivery &amp; 40% Discount&nbsp;for next 3 orders!
                    Place your 1st order in.
                  </p>
                  <div className="">
                    <CountDown targetDate="2025-2-31" bg="none"/>
                  </div>
                </div>
                <div className="contact-number-area">
                  <p className="mb-0 font-normal text-white text-sm lg-1100:text-base">
                    Need help? Call Us:
                    <Link to="tel:+4733378901">+258 3268 21485</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopHeader;