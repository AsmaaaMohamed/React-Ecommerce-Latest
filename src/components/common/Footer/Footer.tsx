import { Facebook, Instagram, PhoneCall, Twitter, Youtube } from "lucide-react";
import SingleFooterNav from "./SingleFooterNav/SingleFooterNav";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SingleInputForm from "../SingleInputForm/SingleInputForm";
import { subscribeFormSchema, subscribeType } from "@/validations/subscribeSchema";
import { Link } from "react-router-dom";
import appleStore from '@/assets/images/applestore.png';
import googlePlay from "@/assets/images/googleplay.png";
import payment from "@/assets/images/payment.png";

const Footer = () => {
    const subscribeForm = useForm<subscribeType>({
        resolver: zodResolver(subscribeFormSchema),
        defaultValues: {
          email: "",
        },
      });
      const onSubmit: SubmitHandler<subscribeType> = (data) => {
        // console.log(data);
      };
  return (
    <>
      <div className={`pt-[80px] bg-[#F3F4F6]`}>
        <div className="container">
          <div className="flex">
            <div className="lg:w-full w-full">
              <div
                className={`flex items-start justify-between gap-[30px] flex-wrap xl-1600:gap-[110px] lg-1200:gap-[40px] pb-[70px]`}
              >
                {/* <!-- single footer area wrapper --> */}
                <div className={`singleFooterWized`}>
                  <h3
                    className={`animated fadeIn footerTitle text-[20px] font-bold`}
                  >
                    About Company
                  </h3>
                  <div className={`flex items-center gap-[15px] mb-[25px]`}>
                    <div className="icon items-center justify-center flex h-[50px] w-[50px] rounded-full border border-solid border-[#E2E2E2]">
                      <PhoneCall size="22px" color="#629D23" fill="#629D23" />
                    </div>
                    <div>
                      <span className="block text-[#74787C]">
                        Have Question? Call Us 24/7
                      </span>
                      <Link
                        to="#"
                        className={`text-[#629D23] text-[24px] font-semibold`}
                      >
                        +258 3692 2569
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className={`flex items-center mb-[10px]`}>
                      <p className="m-0">
                        Monday - Friday:{" "}
                        <span className="text-secondary font-medium">
                          8:00am - 6:00pm
                        </span>
                      </p>
                    </div>
                    <div className={`flex items-center mb-[10px]`}>
                      <p className="m-0">
                        Saturday:{" "}
                        <span className="text-secondary font-medium">
                          8:00am - 6:00pm
                        </span>
                      </p>
                    </div>
                    <div className={`flex items-center mb-[10px]`}>
                      <p className="m-0">
                        Sunday:{" "}
                        <span className="text-secondary font-medium">
                          Service Close
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- single footer area wrapper -->
                            <!-- single footer area wrapper --> */}
                <SingleFooterNav />
                {/* <!-- single footer area wrapper -->
                            <!-- single footer area wrapper --> */}
                <SingleFooterNav />
                {/* <!-- single footer area wrapper -->
                            <!-- single footer area wrapper --> */}
                <SingleFooterNav />
                {/* <!-- single footer area wrapper -->
                            <!-- single footer area wrapper --> */}
                <div className="singleFooterWized">
                  <h3 className="footerTitle text-[20px] animated fadeIn font-bold">
                    Our Newsletter
                  </h3>
                  <p className="disc-news-letter">
                    Subscribe to the mailing list to receive updates one <br />{" "}
                    the new arrivals and other discounts
                  </p>
                  <SingleInputForm
                    formMethods={subscribeForm}
                    onSubmit={onSubmit}
                    inputType="email"
                    placeholder="Your email address"
                    name="email"
                    buttonText="Subscribe"
                    formClassName={` relative ${styles.footersubscribeForm}`}
                  />
                  <p className={`mt-[20px]`}>
                    I would like to receive news and special offer
                  </p>
                </div>
                {/* <!-- single footer area wrapper --> */}
              </div>
              <div
                className={`flex items-center justify-between py-[25px] border-t border-solid border-[#E2E2E2] flex-col gap-[10px] md-992:flex-row`}
              >
                <div
                  className={`flex items-center gap-[15px] ${styles.socialOneWrapper}`}
                >
                  <span>Follow Us:</span>
                  <ul className="flex items-center gap-[6px]">
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-center h-[36px] w-[36px] rounded-full transition duration-0.3 bg-[#E2E3E4] hover:bg-primary hover:translate-y-[-3px]"
                      >
                        <Facebook
                          color="#2C3C28"
                          fill="#2C3C28"
                          strokeWidth="0.1"
                          size="18px"
                          className={styles.hasFill}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-center h-[36px] w-[36px] rounded-full transition duration-0.3 bg-[#E2E3E4] hover:bg-primary hover:translate-y-[-3px]"
                      >
                        <Twitter
                          color="#2C3C28"
                          fill="#2C3C28"
                          size="18px"
                          className={styles.hasFill}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-center h-[36px] w-[36px] rounded-full transition duration-0.3 bg-[#E2E3E4] hover:bg-primary hover:translate-y-[-3px]"
                      >
                        <Youtube color="#2C3C28" size="18px" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="flex items-center justify-center h-[36px] w-[36px] rounded-full transition duration-0.3 bg-[#E2E3E4] hover:bg-primary hover:translate-y-[-3px]"
                      >
                        <Instagram color="#2C3C28" size="18px" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`flex flex-wrap flex-col sm:flex-row text-muted items-center gap-[20px] `}
                >
                  <span>Payment Accepts:</span>
                  <img src={payment} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- rts footer one area end -->
        // <!-- rts footer one area start --> */}
      <div className={`py-[22px]`}>
        <div className="container">
          <div className="flex">
            <div className="lg:w-full w-full">
              <div
                className={`flex items-center justify-between flex-col gap-[10px] md:flex-row`}
              >
                <p className="disc mb-0 leading-[28px]">
                  Copyright 2024{" "}
                  <Link
                    to="#"
                    className="transition duration-0.3 text-secondary font-semibold hover:text-primary"
                  >
                    ©Ekomart
                  </Link>
                  . All rights reserved.
                </p>
                <Link to="#" className={`flex items-center gap-[5px]`}>
                  <span className="text-secondary mr-[15px] sm:block hidden">
                    Download App
                  </span>
                  <img src={appleStore} alt="" />
                  <img src={googlePlay} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;