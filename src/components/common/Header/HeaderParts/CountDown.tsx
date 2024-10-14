import { useState, useEffect } from "react";

type TCountDown = {
  targetDate: string;
  bg: string;
};
type TLeftTime={
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?:number;
}
const CountDown = ({ targetDate,bg }: TCountDown) => {
  const containerClass = bg === "dark" ? "bg-primary" : "";
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
      };
    }
    return timeLeft;
  };
  const [timeLeft , setTimeLeft] = useState<TLeftTime>(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className={`flex items-center text-white gap-[15px]`}>
      <div
        className={`${containerClass} container relative !py-[3px] !pr-[43px] after:content-['Days'] after:text-[#ffffffe5] after:absolute after:right-[5px] after:top-[-1px] after:bottom-0 after:flex  after:items-center after:justify-center !pl-[7px]`}
      >
        <div className={`font-medium`}>
          <div>{timeLeft.days}</div>
        </div>
      </div>
      <div
        className={`${containerClass} container relative !py-[3px] !pr-[43px] after:content-['Hour'] after:text-[#ffffffe5] after:absolute after:right-[5px] after:top-[-1px] after:bottom-0 after:flex  after:items-center after:justify-center !pl-[7px]`}
      >
        <div className={`font-medium`}>
          <div>{timeLeft.hours}</div>
        </div>
      </div>
      <div
        className={`${containerClass} container relative !py-[3px] !pr-[43px] after:content-['Min'] after:text-[#ffffffe5] after:absolute after:right-[5px] after:top-[-1px] after:bottom-0 after:flex  after:items-center after:justify-center !pl-[7px]`}
      >
        <div className={`font-medium`}>
          <div>{timeLeft.minutes}</div>
        </div>
      </div>
      <div
        className={`${containerClass} container relative !py-[3px] !pr-[43px] after:content-['Sec'] after:text-[#ffffffe5] after:absolute after:right-[5px] after:top-[-1px] after:bottom-0 after:flex  after:items-center after:justify-center !pl-[7px]`}
      >
        <div className={`font-medium text-white`}>
          <div>{timeLeft.seconds}</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
