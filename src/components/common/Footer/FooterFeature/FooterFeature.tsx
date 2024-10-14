import SingleFeature from "@/components/pagesParts/HomeParts/SingleFeature";
import features from "./featureData"

const renderedFeatures = features.slice(0,4).map((feature,idx) => (
    <div key={idx} className="md-992:w-1/4 md:w-1/2 sm:w-full w-full">
        <SingleFeature name={feature.name} inFooter={true} desc={feature.desc2} Svg={feature.svg2} />
    </div>
  ));
const FooterFeature = () => {
  return (
    <div className="rts-shorts-service-area rts-section-gap bg_primary bg-primary py-[60px]">
        <div className="container">
            <div className="flex flex-wrap -mt-4 -mx-2">{renderedFeatures}</div>
      </div>
    </div>
  )
}

export default FooterFeature