import { useRouter } from "next/router"
import { useState } from "react"
import { GrSolaris } from "react-icons/gr"
import { MdStarBorderPurple500 } from "react-icons/md"

const Planet=()=>{

  const router=useRouter()
  const {planet}=router.query

  // q : how when positional data travel data speed surrounding
  // essay: {}
  // gravity temprature light
  // ancient ["Indian","Mayan","Egyptian","Calender"] science  

  const [system,setSystem]=useState([
    <GrSolaris/>
  ])
  // const [green sunnn]

  // 
  // <MdStarBorderPurple500/>
  

  // const _view=glitch//so many life innn here

  // for hire culture
  // best friend 
 
  // 
  return <div>
    <div  className="h-12"></div>
  {planet}
  </div>

} 

export default Planet

// x ->  rishi?rushi
// observance crylic
//  
// 