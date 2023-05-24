import CubeApp from "@/canvas/cube"
import { LoginForm } from "@/components/form/forms/auth/Loginx"
import { Gameplay } from "@/components/games/Gameplay"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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

// hast in A pur
// in dra pas th
// treat muhAsA
// detect mumbAsA

// telecast ::: distribute 
// :: teslA test t->lA
// -> assure safety 
// ->< :: 
// prakrut ::
// bhram i->hi
// 

export function useUserMedia(requestedMedia:any) {
  const [mediaStream, setMediaStream] = useState<any>(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch(err) {
        // Removed for brevity
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track:any) => {
          track.stop();
        });
      }
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}

import React, { useRef } from 'react';
import { useSelector } from "react-redux"


const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};


