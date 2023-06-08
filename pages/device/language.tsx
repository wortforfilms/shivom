
import { ContinentSelector } from "@/constants/earth/continent"
import { useEffect, useState } from "react"

import { Aaj, Janm, Utsav } from "../user"
import { dispatch } from "d3"

import { getLocationOrigin } from "next/dist/shared/lib/utils"



const DeviceLanguage=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()
var nala=null
const [device,setDevice]=useState<any>(nala)
// const []
const [deviceId, setDeviceId]=useState<any>(null)
const [alert,setAlert]=useState<any>(()=>{
  []
})

// chakra_::
// element plates
// floting plates
// static plates

useEffect(() => {
  let mount=true
  if(mount){

    const device=navigator
    setDevice(device)
    console.log(device.mediaDevices)
    console.log(device.geolocation.getCurrentPosition(()=>{
      // getMoonSign(new Date())
      getLocationOrigin()
    }))
    // dispatch(update_device_visit(device))
    // Devops
    //
    dispatch()
  }


  return () => {
    mount=false
  }
}, [])

// caste schedule
// {}-{}-{}
// tribe schedule
// native schedule
// give take
// rent {} {}
// scheduler
// 

  return <div className="min-h-[90vh] w-full h-full">
    <div className="h-12"></div>
    {
      JSON.stringify(!!device && device)
    }
    {JSON.stringify(device)}
    {/* <Vartmaan/> */}
    {/* VratmAna */}
    {/* VrutamAa */}
    <div className="flex flex-row">

    <Aaj/>
    {earth?.auth?.authenticated ? <Janm/>:<div>Enter Device Birth Date</div>}
    </div>
    <Utsav/>
    Nav i gat or

{'ଓ'.charCodeAt(0)}
  <ContinentSelector/>
  <hr/>


  </div>
}

export default DeviceLanguage

export const view_chakra=(props:any)=>{
  const {doc,str}=props
  return <div className={`flex flex-col sm:flex-row `}>
{str.split('').map((i:any,j:number)=>{
  return <div key={j}{...i}></div>
})}
  </div> 

}