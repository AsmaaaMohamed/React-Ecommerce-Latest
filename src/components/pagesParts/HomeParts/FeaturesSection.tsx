import features from "@/components/common/Footer/FooterFeature/featureData";
import SingleFeature from "@/components/pagesParts/HomeParts/SingleFeature";


const renderedFeatures = features.map((feature,idx) => (
  <div key={idx} className="w-full sm:w-1/2 md:w-1/2 md-992:1/2 lg-1200:w-1/5 mt-4 px-2">
    <SingleFeature name={feature.name} desc={feature.desc1} Svg={feature.svg1} />
  </div>
));
const FeaturesSection = () => {
  return (
    <div className="rts-feature-area py-[60px]">
      <div className="container">
        <div className="flex flex-wrap -mt-4 -mx-2">{renderedFeatures}</div>
      </div>
    </div>
  );
};

export default FeaturesSection;
