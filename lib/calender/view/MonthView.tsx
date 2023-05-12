import { range } from "@/util/createRange";
import { DayName } from "./DayName";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setView } from "../slice";



export const MonthView = (props: any) => {
  const { initialReduxState, month } = props;
  const earth:typeof initialReduxState=useSelector(state=>state)

const dispatch=useDispatch()
const _day_count=earth?.calender?.in_view?.year_in_view%4?earth?.calender?.day_count[month]:earth?.calender?.day_count0[month]
const start_day=new Date(`${month+1}/01/${earth?.calender?.in_view?.year_in_view}`).getUTCDay()

  return <div className="flex flex-col">
    <DayName i={start_day} />
    <div className="w-full max-w-2xl h-full flex flex-row flex-wrap   rounded-lg justify-start gap-1 p-2">

      {range(0, _day_count - 1).map(str => {
        return <div key={str}
          onClick={() => {
            dispatch(setView('day'))
            dispatch(setDate(str+1))
          }}
          className={`w-[12%] ${
            earth?.calender?.current_time.year === earth?.calender?.in_view?.year_in_view &&
            earth?.calender?.current_time.month === month 
          && str+1 === earth?.calender?.current_time?.date ? "bg-green-500 text-white" : "bg-white"} hover:bg-yellow-300 cursor-pointer  text-center  rounded-lg shadow-xl p-1 h-8`}>{str + 1}
        </div>;
      })}
    </div>
  </div>;
};
