import { LottieHandler } from "@/components/feedback";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div
        className="flex flex-col items-center justify-center h-svh"
        
      >
        <LottieHandler type="notFound" />
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </div>
  );
};

export default Error;
