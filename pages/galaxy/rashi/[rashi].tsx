import { useRouter } from "next/router"
import NakApp from "."
import { useEffect, useState } from "react"
import { create_sochen } from "@/q/c/sochen"


const Constalation=()=>{
  const router=useRouter()
  const {rashi}=router.query

  // detail
  // changes
  // mytyhology connects of various calenders
  // location
  // position
  // related character
  // 
  const [details,setDetails]=useState([])


  useEffect(() => {
    let mount=true
    if(mount){

      const pmt=`Describe ${rashi} in detail with history, metions and location details.`

      // create_sochen(data,search)

    }
  
    return () => {
      mount=false
    }
  }, [])
  

  return <div className="p-4">
    <div className="h-24"></div>
<h1>
  {rashi}
  </h1>
<div className="flex flex-row gap-4 m-auto">

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="white" stroke="black" />
  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="black" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="120" cy="200" r="2" fill="white" />
  <circle cx="280" cy="200" r="2" fill="white" />
  <circle cx="160" cy="160" r="2" fill="white" />
  <circle cx="240" cy="160" r="2" fill="white" />
  <circle cx="160" cy="240" r="2" fill="white" />
  <circle cx="240" cy="240" r="2" fill="white" />
  <path d="M200 200 L190 260 L240 240 L290 260 L280 200 L290 140 L240 160 L190 140 Z" fill="none" stroke="white" stroke-width="1" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="150" cy="160" r="2" fill="white" />
  <circle cx="250" cy="160" r="2" fill="white" />
  <circle cx="150" cy="240" r="2" fill="white" />
  <circle cx="250" cy="240" r="2" fill="white" />
  <circle cx="200" cy="280" r="2" fill="white" />
  <path d="M200 100 L150 160 L200 120 L250 160 L200 100 L200 280 L150 240 L200 280 L250 240 Z" fill="none" stroke="white" stroke-width="1" />
</svg>

</div>
<NakApp/>

  </div>
}


// temprature moisture sound
// x=temp{sound}{mo is t ur e}
// user=e
// user=dob pob tob
// dob={"SunSign"}
// tob={"MoonSign"}
// pob={"Celestial House"}
// stripes=>[{}]
// activities=[]
// skill={}
// interests=[]
// suggested_posts=[]
// 
export default Constalation