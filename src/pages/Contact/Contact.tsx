import ContactForm from "@/components/forms/ContactForm";
import MapSection from "@/components/pagesParts/ContactParts/MapSection";
import formImg from "@/assets/images/contact/02.jpg"

const Contact = () => {
  return (
    <>
      <div className="about-banner-area-bg rts-section-gap bg-aboutSection flex items-center bg-no-repeat bg-cover">
        <div className="container">
          <div className="flex">
            <div className="lg:w-full w-full">
              <div className="inner-content-about-area md-992:max-w-[40%] sm:max-w-[70%] max-w-full text-center m-auto py-[140px]">
                <h1 className="title text-white text-[36px] md:text-[60px] leading-[1.1] font-bold">
                  Ask Us Question
                </h1>
                <p className="disc text-base text-white m-auto leading-[28px] md:leading-[1.3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque pretium mollis ex, vel interdum augue faucibus sit
                  amet. Proin tempor purus ac suscipit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapSection />
      <div className="rts-contact-form-area rts-section-gapBottom pb-[60px]">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="md-992:w-full w-full">
                    <div className="bg_light-1 contact-form-wrapper-bg md:p-[80px] p-[20px] bg-[#F3F4F6]">
                        <div className="flex flex-wrap">
                            <div className=" md-992:w-7/12 w-full md:pr-[30px] sm:pr-[10px] pr-[5px]">
                                <div className="contact-form-wrapper-1">
                                    <h3 className="title mb--50 animate-in fade-in-0 md:leading-[20px] leading-[35px] mb-[50px] font-bold text-[26px] text-secondary">Fill Up The Form If You Have Any Question</h3>
                                    <ContactForm/>
                                </div>
                            </div>
                            <div className="md-992:w-5/12 w-full md:mt-[30px] mt-[30px]">
                                <div className="thumbnail-area">
                                    <img src={formImg} alt="contact_form"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
