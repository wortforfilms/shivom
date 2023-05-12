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

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
        // var playPromise = video.play();
 
        // if (playPromise !== undefined) {
        //   playPromise.then((_:any) => {
        //     // Automatic playback started!
        //     // Show playing UI.
        //     // We can now safely pause video...
        //     video.pause();
        //   })
        //   .catch((error:any) => {
        //     // Auto-play was prevented
        //     // Show paused UI.
        //     console.log("error playing",error)
        //   });
        // }
      })
      .catch(err => {
        console.error("error:", err);
      });
  };



  useEffect(() => {
    // first
    // dtu utd
    // combited combined
    //  white owl 
    // conditionning ¿? ... login {add upi} 
    // open camerA serching billaniors
    // list create local per hour 
    // function {}-> content tube own 
    // skill oc -> talent -> multi_:: language 
    // devenAgry  : eng nAga  dosh devenagary dev...lazy_suspense
    // 
    // navigator.mediaDevices.getUserMedia()
    // magic usermedia 
    // macro
    // ic raw a
    // kaf vatta pitta
    // 
    // calendriya 
    // 
// चलेन्द्रिय	adj.	calendriya	havingunsteadyorgans	
// Found 19 e_ntries count 
// nt
// Your results for calendar:
// दिनदर्शिका	f.	dinadarzikA	calendar[solar (Gregorian) calendar]	
// दिनदर्शिका	f.	dinadarzikA	calendar[solar (Gregorian) calendar]	
// पञ्चाङ्ग	n.	paJcAGga	calendaroralmanac[Indian lunar calendar]	
// पञ्चाङ्ग	n.	paJcAGga	calendaroralmanac[Indian lunar calendar]	
// अग्रिमवर्षस्यदिनदर्शिकाअस्तिवा?	sent.	agrimavarSasyadinadarzikAastivA?	Doyouhaveacalendarforthenextyear?	
// शनिवासरेममजन्मदिनम्इतिचिन्तयामि|अहंदिनदर्षिकांपरिशीलयिष्यामि|	sent.	zanivAsaremamajanmadinamiticintayAmi|ahaMdinadarSikAMparizIlayiSyAmi|	IthinkmybirthdayisonaSaturday-I'llcheckthecalendar.	
// पदभञ्जिका	f.	padabhaJjikA	calendar
//     calendar
// calendars
// calendulacea
// kAl vidyA kalA
// record mil µ Â 
// list live function 
// supabase
// 
    if(typeof window!==undefined){

      getVideo()
    }
  
    return () => {
      // second
      // version 0.0
      // prakrut 0
      // brAhmi 0
      // ltr
      // rtl
      // new vedic coarse
      // ::: {}-{}
      // ::: {t}oBOMBai
      // {::}-{::}
      // >><,what he listening nno one is listening
      // BhaaArat AbhiyAna
      // ea ´¬˚
      // ay ऐ smartness of  
      // navigator.userAgent()
      // navigator banAyain
      // desh apne navigatore main lakmi dosh door kare
      // padma_bhushaNa
      // lotus flower : brahmi traces prakrut found 
      // found nature out log :: earth 
      // friend groot :: chars on earth 
      // environmentalists
      //  ::: {}-{}-{}
      // ::: (scouts)-{migration}
      // ::: burner ::: play ground 
      // 
      // open.camera()
      //\\ :: dependency :: 
      // :::: winter gone
      // ::: -. > 10000:gems: :: billion each :: 1Trillion Coin : 100Trillion
      // EcoNomy
      // EN
      // ET
      // message beacon :: {}

    }
  }, [
    // third
  ])

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
  return <div className="p-4">
    <LoginForm/>


    <motion.div drag className="rounded-full  overflow-hidden ">

    <video  
    ref={videoRef}
    autoPlay
    className="w-32 h-auto bg-blue-700 rounnded-full p-2 ring-2 ring-yellow-500">
  <source src={uc} />

</video>
</motion.div>

{/* <CubeApp/> */}

<motion.div drag className="fixed text-7xl rounded-full ring-4 ring-gray-300 shadow-xl shadow-pink-500 p-4  top-12 bg-white">
💝
</motion.div>
 
      <Gameplay/>
  
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

function Camera() {
  const videoRef = useRef<any>();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
  );
}