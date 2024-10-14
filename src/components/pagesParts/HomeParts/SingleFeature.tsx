

type TSingleFeature={
  inFooter?: boolean;
  name:string;
  desc:string;
  Svg:JSX.Element
}
const SingleFeature = ({inFooter=false,name,desc,Svg}:TSingleFeature) => {
  const featureClass = !inFooter? "border border-solid border-[#E2E2E2] shadow-[0px_14px_21px_rgba(0,0,0,0.03)]" : "";
  const titleClass = !inFooter? "" : "text-white";
  const descClass = !inFooter? "" : "text-white";
  return (
    
      <div className={`${featureClass} single-feature-area flex items-center  rounded-[6px] p-[30px] gap-[20px] h-full `}>
        <div className="icon">
          {Svg}
        </div>
        <div className="content">
          <h4 className={`${titleClass} title font-bold mb-[5px] text-[20px]`}>{name}</h4>
          <span className={`${descClass} text-muted text-[14px]`}>{desc}</span>
        </div>
      </div>
    
  );
};

export default SingleFeature;
