import CubeApp from "@/canvas/cube"
import { LoginForm } from "@/form/forms/auth/LoginForm"
import { Gameplay } from "@/components/games/Gameplay"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { heading } from "@/sty"

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
<MixLinks/>
    </div>

}

export default Login

const link=`text-xl font-bold p-2 text-center underline text-sky-700 hover:text-green-700`

export const  MixLinks=()=>{
  const  router=useRouter()

  return <div className="bg-white p-2 w-64 h-56 m-auto rounded-lg shadow-lg">
    <div className={link}
    onClick={()=>{
      router.push('/auth/forgot_password')
    }}
    >Forgot Password</div>
    <div className={link}
      onClick={()=>{
        router.push('/auth/register')
      }}
    >Register New</div>
  </div>
}