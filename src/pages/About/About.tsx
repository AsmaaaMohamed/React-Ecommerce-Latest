import DestinationQualitySection from "@/components/pagesParts/AboutParts/DestinationQualitySection";
import HeroAbout from "@/components/pagesParts/AboutParts/HeroAbout";
import OurTeamSection from "@/components/pagesParts/AboutParts/OurTeamSection";
import WhyChooseSection from "@/components/pagesParts/AboutParts/WhyChooseSection";
import { Separator } from "@/components/ui/separator";

function About() {

  return (
    <>
      <HeroAbout />
      <DestinationQualitySection />
      <div className="container !max-w-[1320px]">
        <Separator />
      </div>
      <OurTeamSection />
      <WhyChooseSection/>
    </>
  );
}

export default About;
