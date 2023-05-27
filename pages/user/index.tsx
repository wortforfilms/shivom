import MessageHome from "@/components/communication/messaging"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Image from 'next/image'
const User=(props:any)=>{
  // meghdoot
  // shakuntlA bharat bhArat 
  // clock on every 
  // run _ cl;;ock 
  // second->acca
  // 
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
const [users,setUsers]=useState()
const [games,setGames]=useState()
const [kosh,setKosk]=useState()
const [deposite,setDeposite]=useState()
const router=useRouter()

useEffect(()=>{
let mount=true
if(mount){
if(earth?.auth?.authenticated){
  return
} else {
  router.push('/auth/login')
}
}
return ()=>{mount=false}
},[])

  return <div className="p-4">
    <div className="h-12"></div>
    <div   className="w-full p-2">

   {
     JSON.stringify(earth?.auth?.user)
    }
    </div>


{[{first_name:"hkd"},{middle_name:""},{last_name:""}].map((f,index)=>{
return  <div key={index}>{f.first_name}</div>
})}

<Image
    // src="/img/astrology-circle-orance-dots.png"
    src="/img/astrological_chart.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-1/2  rounded-full  justify-start opacity-50 m-auto"
    />
<div className="h-80 w-80 m-auto bg-green-500 p-2 ">

</div>

  </div>
}

export default User