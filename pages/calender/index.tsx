// import Calender from "@/factory/events/calender"


import Calender from "@/lib/calender"
import { useSelector } from "react-redux"
import Gyroscope from '@/components/tool/gyroscrope'
import GyroHome from "@/components/tool"

const CalenderView=(props:any)=>{
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  return <div>
    <div className="h-24"></div>
    <Gyroscope onUpdate={(up:any)=>{
      console.log("first",up)
    }}/>
    <GyroHome/>
    <Calender earth={earth}/>
  </div>
}

export default CalenderView