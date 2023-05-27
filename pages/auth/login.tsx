import CubeApp from "@/canvas/cube"
import { LoginForm } from "@/form/forms/auth/LoginForm"
import { Gameplay } from "@/components/games/Gameplay"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const Login =(props:any)=>{

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)

  const [u,setU]=useState({})
  const [uc,setUc]=useState<any>({})


 
  const router=useRouter()
  useEffect(() => {
    let mount=true
    if(mount){
      if(!earth?.auth?.authenticated){
        return
      } else{
        router.back()
      }
    }
  
    return () => {
      mount=false
    }
  }, [earth?.auth])
  

  const videoRef = useRef<any>(null);
  // 
  return <div className="p-4 h-[100vh] w-full ">
    <LoginForm/>

    </div>

}

export default Login
