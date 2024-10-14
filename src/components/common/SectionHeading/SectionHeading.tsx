import React from "react";

type TSectionHeading = {
  headingText: string;
  children?: React.ReactNode;
};
const SectionHeading = ({ headingText, children }: TSectionHeading) => {
  return (
    
      <div className="flex">
        <div className="w-full">
          <div className="title-area-between flex flex-col items-start md:flex-row md:items-center justify-between mb-[35px] relative">
            <h2 className="title-left font-bold text-secondary leading-[1.23] text-[30px]">
              {headingText}
            </h2>
            {children}
          </div>
        </div>
      
    </div>
  );
};

export default SectionHeading;
