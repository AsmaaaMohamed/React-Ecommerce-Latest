import React from "react";

type TDynamicSection = {
  className?: string;
  children: React.ReactNode;
  sectionHeading?: JSX.Element;
  isMainSection?: boolean;
};
const DynamicSection = ({className, children,sectionHeading , isMainSection=false}:TDynamicSection) => {
  return (
    <div className={className}>
      <div className="container">{sectionHeading}</div>
      <div className="container">
        <div className="flex">
          <div className="lg:w-full w-full">
            {isMainSection ? (
              <div className="category-area-main-wrapper-one">{children}</div>
            ) : (
              <div className="cover-card-main-over p-[30px] rounded-[6px] bg-[#F5F6F7]">
                <div className="row flex flex-wrap -mt-[15px] -mx-[7.5px]">
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSection;