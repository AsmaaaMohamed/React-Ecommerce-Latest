import qualityDist from "@/assets/images/about/02.jpg";

const checkData = [
  "Elementum sociis rhoncus aptent auctor urna justo ",
  "Habitasse venenatis gravida nisl, sollicitudin posuere",
  "Uisque cum convallis nostra in sapien nascetur, netus",
  "Class nunc aliquet nulla dis senectus lputate porta",
  "Aenean gravida a est ante nisl nostra dui hendrerit",
  "Bibendum venenatis dignissim non himenaeos eget",
];
const DestinationQualitySection = () => {
    const renderedCheckList = checkData.map((el , idx) => (
      <div key={idx} className="single-check-area py-[7px] pl-[25px] relative text-muted after:absolute after:content-[''] after:left-0 after:h-[4px] after:w-[4px] after:bg-secondary after:top-1/2 after:-translate-y-1/2 after:rounded-full">
        {el}
      </div>
    ));
  return (
    <div className="rts-about-area rts-section-gap2 py-[100px]">
      <div className="container !max-w-[1320px]">
        <div className="flex flex-wrap items-center ">
          <div className="md-992:w-1/3 md-992:flex-grow-0 md-992:flex-shrink-0 basis-auto px-3">
            <div className="thumbnail-left">
              <img src={qualityDist} alt="" />
            </div>
          </div>
          <div className=" md-992:w-2/3 max-w-full flex-grow-0 flex-shrink-0 basis-auto md:pl-[60px] sm:pl-[10px] sm:pt-[30px] pl-[10px] pt-[30px]">
            <div className="about-content-area-1">
              <h2 className="title text-[22px] leading-[36px] lg-1200:text-[40px] lg-1200:leading-[36px] mb-[40px] font-bold">
                Your Destination for Quality Produce <br /> and Pantry
                Essentials
              </h2>
              <p className="disc text-base mb-[30px] break-words ">
                Venenatis augue consequat class magnis sed purus, euismod ligula
                nibh congue quis vestibulum nostra, cubilia varius velit vitae
                rhoncus. Turpis malesuada fringilla urna dui est torquent
                aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis
                nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat
                semper quam litora aenean eros conubia molestie erat, et cursus
                integer rutrum sollicitudin auctor curae inceptos senectus
                sagittis est,
              </p>
              <div className="check-main-wrapper">{renderedCheckList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationQualitySection