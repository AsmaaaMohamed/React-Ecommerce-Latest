import { SubmitHandler, useForm } from "react-hook-form";
import SingleInputForm from "../SingleInputForm/SingleInputForm";
import { searchFormSchema, searchType } from "@/validations/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Headset, Mail, Search } from "lucide-react";
import { useState } from "react";
import AccordionCategoryMenu from "../AccordionCategoryMenu/AccordionCategoryMenu";
import AccordionMobileMenu from "../AccordionMobileMenu/AccordionMobileMenu";
import DynamicTabsContent from "../DynamicTabsContent/DynamicTabsContent";
import TabsButtons from "../TabsButtons/TabsButtons";
import { Link } from "react-router-dom";
import { useToggleMenu } from "@/hooks/useToggleMenu";


const MobileSideMenu = () => {
  const [tab, setTab] = useState("menu");
  const { isOpen, onToggle } = useToggleMenu();
  const searchForm = useForm<searchType>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      keyword: "",
    },
  });
  const onSubmit: SubmitHandler<searchType> = (data) => {
    // console.log(data);
  };
  const tabs = [
    {
      value: "menu",
      text: "Menu",
      content: <AccordionMobileMenu />,
    },
    {
      value: "category",
      text: "Category",
      content: <AccordionCategoryMenu />,
    },
  ];
  return (
    <div id="side-bar" className="side-bar header-two show">
      <SingleInputForm
        formMethods={searchForm}
        onSubmit={onSubmit}
        placeholder="Search..."
        name="keyword"
        icon={<Search color="#fff" size="20px" />}
        buttonText=""
        formClassName={`space-y-8 relative mt-[30px]`}
      />
      <div className="mobile-menu-nav-area tab-nav-btn mt-[20px]">
        <nav>
          <div
            className="nav nav-tabs flex items-center gap-[10px]"
            id="nav-tab"
            role="tablist"
          >
            <TabsButtons
              tabs={tabs}
              setTab={setTab}
              currentTab={tab}
              className="nav-link h-[45px] border border-solid border-[#E2E2E2] rounded-[3px] font-semibold py-2 px-4 block w-full bg-transparent text-secondary"
            />
          </div>
        </nav>
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
        <div className="button-area-main-wrapper-menuy-sidebar mt-[50px] border border-solid border-[#E2E2E2] flex items-start gap-[10px] p-[20px] rounded-[6px] flex-col">
          <div className="contact-area">
            <div className="phone flex gap-[10px] items-center mb-[15px]">
              <Headset className="text-primary" />
              <Link to="#" className="text-[22px] text-secondary">
                02345697871
              </Link>
            </div>
            <div className="phone flex gap-[10px] items-center mb-[15px]">
              <Mail className="text-primary" />
              <Link to="#" className="text-[22px] text-secondary">
                02345697871
              </Link>
            </div>
          </div>
          <div className="buton-area-bottom flex items-center gap-[10px]">
            <Link
              to="/login"
              className="rtsBtn btnPrimary !rounded-[4px] block py-[14px] px-[24px]"
              onClick={() => isOpen && onToggle()}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="rtsBtn btnPrimary !rounded-[4px] block py-[14px] px-[24px]"
              onClick={() => isOpen && onToggle()}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideMenu;
