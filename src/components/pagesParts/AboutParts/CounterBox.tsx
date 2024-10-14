import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
const CounterBox = ({target,desc}:{target:number, desc:string}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const renderedDesc = desc.split(" ");
  return (
    <div className="single-counter-area flex items-center gap-[13px] relative" ref={ref}>
      <h2 className="title text-[48px] mb-0 font-bold">
        <CountUp start={0} end={inView ? target : 0} duration={2}>
          {({ countUpRef }) => (
            <span className="counter animate-fadeInDownBig" ref={countUpRef} />
          )}
        </CountUp>
        M+
      </h2>
      <p className="mb-0 font-medium text-secondary">
        {renderedDesc[0]} <br />
        {renderedDesc[1]}
      </p>
    </div>
  );
};

export default CounterBox;
