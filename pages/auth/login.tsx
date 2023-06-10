import CubeApp from "@/canvas/cube"
import { LoginForm } from "@/form/forms/auth/LoginForm"

import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { heading,  link } from "@/sty"
import Image from "next/image"

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
<Image
src="/img/om-71gQJPwz8gL._UL1500_2000x.png"
alt="logo"
width={100}
height={100}
className="w-48 p-2 m-auto mt-12 -mb-24"
    />
    </div>

}

export default Login


export const  MixLinks=()=>{
  const  router=useRouter()

  return <div className="bg-white p-2 w-100  h-auto text-center m-auto rounded-lg shadow-lg">
    
   {router.asPath!=="/auth/login" && <div>

    Existing user click below to login. 
    <div className={link}
      onClick={()=>{
        router.push('/auth/login')
      }}
      >Login</div>
  </div>}

   { router.asPath!=="/auth/forgot_password" &&  <div>

Click below to recover your password.
    <div className={link}
    onClick={()=>{
      router.push('/auth/forgot_password')
    }}
    >Forgot Password</div>
    </div>}
{ router.asPath!=="/auth/register" &&  <div>

    New user click below to register. 
    <div className={link}
      onClick={()=>{
        router.push('/auth/register')
      }}
      >Register New</div>
  </div>}
      </div>
}