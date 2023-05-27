import { UPIApp } from "@/components/Kosh/ShiftShaper"
import { useRouter } from "next/router"
import { useState } from "react"

const Booking=()=>{
  const router=useRouter()
  const {id,q}=router.query

  const [bt,setBT]=useState<any>()
  const [qe,setQE]=useState<any>(q)


  return <div className="h-full p-4">
  <div className="h-12"></div>
  <div className="flex flex-col sm:flex-row gap-2 ">
  <div className="p-4 flex flex-col gap-4 m-auto w-80 bg-white mt-8 rounded-lg shadow-lg mb-8">

    <h1>
      Booking for {id}
      </h1>

    <div className="thin-head">Choose Date</div>
    <input type="datetime-local" />
    {/* <input type="time"/> */}
    {/* INR. {q && (parseInt(qe)*bt)} */}
    <label>Required Time {bt} mins.</label>
    <input type="range" min={5} max={240} onChange={(e:any)=>[
      setBT(e.target.value)
    ]} />

<div className="w-32 m-auto bg-blue-500 hover:bg-sky-500 text-white text-center cursor-pointer p-2 rounded-lg shadow-lg">Book Session</div>
  </div>
    {bt  && <div className="w-80 bg-white m-auto p-2 "> <UPIApp amount={parseInt(qe)*bt}/></div>}
  </div>
  </div>
}

export default Booking