import { range } from "@/util/createRange";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTime } from "./slice";

export const Day = (props: any) => {
  const { initialReduxState } = props;
  const earth:typeof initialReduxState=useSelector(state=>state)
  const [cursor,setCursor]=useState<any>(0)

  const hourRef=useRef<any>(null)
  const [current,setCurrent]=useState<any>(null)
  
  const dispatch=useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setCurrentTime())
      setCurrent(earth?.calender?.current_time)
    }, 1000);
}, [dispatch, earth?.calender])


  useEffect(() => {
    let mount=true
  
    if(mount){
      // console.log(Math.round(hourRef?.current?.offsetWidth/60),'---=>')
      setCursor(Math.round(hourRef?.current?.offsetWidth/60)*earth?.calender?.current_time?.minute-4)
    }
    return () => {
      mount=false
    }
  }, [hourRef?.current?.offsetWidth, earth?.calender?.current_time?.minute])
  
  useEffect(() => {
    let mount=true
    if(mount && earth?.calender?.current_time?.year===earth?.calender?.in_view?.year_in_view && earth?.calender?.current_time?.month===earth?.calender?.in_view?.month_in_view && earth?.calender?.current_time?.date===earth?.calender?.in_view?.date_in_view ){

      const element = document.getElementById(earth?.calender?.current_time?.hour);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    return () => {
      mount=false
    }
  }, [earth?.calender])

  return <div className="p-2 sm:p-4 flex flex-col h-[80vh] overflow-auto gap-4">
      <div className="text-[8px] my-auto font-bold">
      {earth?.calender?.current_time?.hour}:
      {current?.minute<10 && 0}{current?.minute}:
      {current?.second<10 && 0}{current?.second}
      </div>
    {range(0, 23).map((str) => {
      return <div key={str} 
      id={`${str}`}
      className={`w-full ${earth?.calender?.current_time?.year===earth?.calender?.in_view?.year_in_view && earth?.calender?.current_time?.month===earth?.calender?.in_view?.month_in_view && earth?.calender?.current_time?.date===earth?.calender?.in_view?.date_in_view && earth?.calender?.current_time?.hour===str?"bg-blue-100":"bg-white"} rounded-lg flex flex-col sm:flex-row gap-2 shadow-lg h-auto`}>
        <div className="flex flex-row gap-2 text-xs sm:text-xl  font-bold p-1 sm:mt-2">
          <div>{str < 10 && '0'}{str}</div>
          <div className="text-xs font-normal">{str > 11 ? 'pm' : 'am'}</div>
        </div>
        <div ref={hourRef} className="flex flex-row flex-wrap  justify-start scale-90 w-full ">
          <motion.div animate={{x:cursor}} 
          className={`${earth?.calender?.current_time?.year===earth?.calender?.in_view?.year_in_view && earth?.calender?.current_time?.month===earth?.calender?.in_view?.month_in_view && earth?.calender?.current_time?.date===earth?.calender?.in_view?.date_in_view && earth?.calender?.current_time?.hour===str?"block":"hidden"} text-5xl font-thin absolute position-x-4`} 
          >|</motion.div>
          {range(0, 59).map((hr) => {
            return <div key={hr} className={`${hr % 5 ? "text-green-500" : "text-red-500"} flex flex-col m-auto ${hr % 5 ?"text-[8px]":"text-xl"} w-[1%] sm:w-[1%]`}>
              <div className="text-center">{'|'}</div>
              <div className={`${hr % 5 ? "hidden" : "block"} text-xs text-center`}>{hr < 10 && '0'}{hr}</div>
            </div>
          })}
        </div>
       
      </div>;
    })}
  </div>;

};

