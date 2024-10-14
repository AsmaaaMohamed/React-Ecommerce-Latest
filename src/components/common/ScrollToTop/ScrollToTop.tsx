import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        window.scrollY > 100 ? setIsVisible(true) :  setIsVisible(false);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility);
    },[isVisible]);
    return isVisible &&(
        <div className="cursor-pointer fixed flex items-center justify-center"
            style={{bottom: "30px",right: "30px",zIndex: "10",width: "45px" ,height: "45px", borderRadius: "50%", background: "#fff", boxShadow: "#629d2310 0px 0px 6px 7px"}}
            onClick={scrollToTop}>
            <ChevronUp color="#629D23"/>
        </div>
    );
};

export default ScrollToTop;