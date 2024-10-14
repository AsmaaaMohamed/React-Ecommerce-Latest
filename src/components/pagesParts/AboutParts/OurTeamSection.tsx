import OurTeamCard from "./OurTeamCard";

const teamInfo = [
  {
    name: "Samuel Alexander",
    img: "team1.jpg",
    jobTitle: "Design Director",
    tel: "+25896 3158 3228",
  },
  {
    name: "Isabella Charlotte",
    img: "team2.jpg",
    jobTitle: "Design Director",
    tel: "+25896 3158 3228",
  },
  {
    name: "William Ethan",
    img: "team3.jpg",
    jobTitle: "Design Director",
    tel: "+25896 3158 3228",
  },
  {
    name: "Sophia Amelia",
    img: "team4.jpg",
    jobTitle: "Design Director",
    tel: "+25896 3158 3228",
  },
];
const OurTeamSection = () => {
    const renderedCards = teamInfo.map((el, idx) => (
      <div key={idx} className="md-992:w-1/4 md:w-1/2 sm:w-full w-full px-4 mt-9">
        <OurTeamCard {...el}/>
      </div>
    ));
  return (
    <div className="meet-our-expart-team rts-section-gap2 py-[100px]">
      <div className="container !max-w-[1320px]">
        <div className="flex flex-wrap">
          <div className="md-992:w-full w-full">
            <div className="title-center-area-main text-center md:max-w-[50%] max-w-full m-auto">
              <h2 className="title font-bold text-[40px] text-secondary">Meet Our Expert Team</h2>
              <p className="disc mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                pretium mollis ex, vel interdum augue faucibus sit amet. Proin
                tempor purus ac suscipit...
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[40px] -mx-4 ">
            {renderedCards}
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
