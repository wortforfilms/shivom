
import { range } from "@/util/createRange";
import { Eves } from "./Eves";
import { useState } from "react";
import { MonthView } from "./view/MonthView";
import { useDispatch, useSelector } from "react-redux";
import { setMonth, setView } from "./slice";
import { paraFirst } from "@/util/hkc";
// ||

export const Year = (props: any) => {
  const { initialReduxState } = props;
const earth:typeof initialReduxState=useSelector(state=>state)
  const dispatch=useDispatch()
// year 
// month_days
// 
  const [i,setI]=useState(0)
  return <div className="flex flex-row flex-wrap gap-2 justify-around mt-4">

    {range(0, 11).map(str => {

      return <div key={str} className="bg-white shadow scale-100 
      hover:bg-yellow-300
      w-full sm:w-56 rounded-t-xl h-full mb-2 "
      onClick={()=>{
        dispatch(setMonth(str))
        dispatch(setView('month'))
      }}
      >
        <div className=" font-normal bg-gray-600 text-white text-xs rounded-t-xl h-8 text-center m-auto">
          <div className="font-bold p-2">{paraFirst(earth?.calender?.months[str])}</div>
        </div>
        <MonthView month={str}/>
      </div>
    })}

  </div>;
};


