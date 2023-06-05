import { Brahmi } from "@/components/classes/brahmi"
import { BrahmiSelector } from "@/components/classes/brahmi/BrahmiSelector"
import { ContinentSelector } from "@/constants/earth/continent"
import { useState } from "react"
import { FcNightLandscape } from "react-icons/fc"



const DeviceLanguage=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()
var nala=null
const [device,setDevice]=useState<any>(nala)


  return <div className="min-h-[90vh] h-full">
    <div className="h-12"></div>

  <ContinentSelector/>
  <hr/>
 
  {/* // extension
  //  
    <BrahmiSelector/> */}

  </div>
}

export default DeviceLanguage