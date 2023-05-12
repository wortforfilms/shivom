import { range } from "@/util/createRange";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


export const Seconds = (props: any) => {
  const { initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector(state => state);
  const [cursor, setCursor] = useState<any>(0);

  const secondRef = useRef<any>(null);


  useEffect(() => {
    let mount = true;

    if (mount) {
      setCursor(4 * earth?.calender?.current_time?.second);
    }
    return () => {
      mount = false;
    };
  }, [secondRef?.current?.offsetWidth, earth?.calender?.current_time]);


  


  return <div ref={secondRef} className="absolute bottom-2 left-2 scale-75 sm:scale-100 flex flex-row flex-wrap  bg-gray-500   overflow-hidden justify-start scale-100 w-[240px] p-1 rounded-lg">
    <motion.div animate={{ x: cursor && cursor }}
      className={` text-5xl text-white font-thin text-red-500  absolute -mt-2`}
    >|</motion.div>
    {range(0, 59).map((hr) => {
      return <div key={hr} className={`${hr % 5 ? "text-green-500" : "text-white"} flex flex-col m-auto ${hr % 5 ? "text-[8px]" : "text-xl"} w-[1%] sm:w-[1%]`}>
        <div className="text-center">{'|'}</div>
        <div className={`${hr % 5 ? "hidden" : "block"}  text-xs text-center`}>{hr < 10 && '0'}{hr}</div>
      </div>;
    })}
  </div>;
};
