import { MapPin } from "lucide-react";

const SingleLocationCard = () => {
  return (
    <div className="location-single-card bg-[#F3F4F6] rounded-[6px] flex gap-[30px] items-start p-[40px] mb-[15px]">
      <div className="icon relative z-[1]">
        <div className="bg-[#F3F4F6] h-[60px] w-[60px] rounded-full flex items-center justify-center after:absolute after:content-[''] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-[80px] after:w-[80px] after:bg-white after:rounded-full after:-z-[1]">
          <MapPin
            strokeWidth={1.5}
            color="#629D23"
            size="30"
          />
        </div>
      </div>
      <div className="information">
        <h3 className="title animate-in fade-in-0 text-[20px] mb-[10px] leading-[20px] text-secondary font-bold">Berlin Germany Store</h3>
        <p className="text-muted">259 Daniel Road, FKT 2589 Berlin, Germany.</p>
        <a href="#" className="number text-secondary font-bold mb-[6px] block">
          +856 (76) 259 6328
        </a>
        <a href="#" className="email text-primary underline block">
          info@example.com
        </a>
      </div>
    </div>
  );
};

export default SingleLocationCard;
