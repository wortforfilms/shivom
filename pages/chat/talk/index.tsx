import { IconLabel } from "@/lib/calender"
import { useState } from "react"
import { MdCall, MdCallEnd, MdCallMade, MdCallMerge, MdCallMissed, MdCallToAction } from "react-icons/md"

const Talk=()=>{
const [call_state, setCallState]=useState('')

  const call_actions=[
    {label:"call",icon:<MdCall className="text-blue-500  bg-white p-2 rounded-full h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
    {label:"end call",icon:<MdCallEnd   className="text-red-500 bg-white  p-2 rounded-full h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
    {label:"in call",icon:<MdCallMade className="text-green-500 bg-white p-2 rounded-full h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
    {label:"action",icon:<MdCallToAction className="text-sky-500 bg-white rounded-full  p-2 h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
    {label:"merge call",icon:<MdCallMerge  className="text-yellow-500 bg-white  p-2 rounded-full h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
    {label:"missed call",icon:<MdCallMissed  className="text-red-500 bg-white  p-2 rounded-full h-16 w-16 ring-2 ring-gray-400 shadow-lg"/>,action:()=>{console.log('action in')}},
  ]
  return <div>
    <div className="h-12"></div>
   <div className="thin-head p-4">
    {"voices in room"}
    </div> 
    <div className="flex flex-row flex-wrap justify-around gap-4 text-xl   mt-12 mb-12 m-auto">
      {
        call_actions.map((ca,index)=>{
          return <div key={index}><IconLabel si={ca} label={ca.label}/></div>
        })
      }
    </div>
    </div>
}


export default Talk