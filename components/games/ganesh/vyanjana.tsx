import { useState, useEffect } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { faker } from "@faker-js/faker"
import {  Brahmiplate, brahmiVyajana } from "@/components/classes/brahmi"
import Confetti from "react-confetti"
import{AnimatePresence, motion} from 'framer-motion'

import { alphabetData } from "@/lib/akshar/hindi"
import { Comp_t } from "./swar"



export const Vyanjana=()=>{


  const [set,setSet]=useState<any>(faker.helpers.arrayElements([...brahmiVyajana()].filter(i=>i[2]!=='fi'||null),4))
  const [a,setA]=useState<any>(faker.helpers.arrayElement(set))
  const [success,setSuccess]=useState<any>(null)
  const [wrong,setWrong]=useState<any>(null)
  const [score,setScore]=useState<any>(0)
  const { width, height } = useWindowSize()

  const word=[a,a]

  

  const [matrix,setMatrix]=useState([
    [],
    [],
    []
  ])

  useEffect(() => {
    let mount=true
    if(mount){
      setA(faker.helpers.arrayElement(set))
    }
    return () => {
      mount=false
    }
  }, [set])

const [mute,toggle]=useState(false)
  // vibrate
  useEffect(() => {
    let  mount=true
    if(mount && wrong){

      // enable vibration support
navigator.vibrate = navigator.vibrate;
console.log("first",navigator)

if (navigator.vibrate) {
	// vibration API supported
    navigator.vibrate(1000);
}
    }
  
    return () => {
      mount=false
    }
  }, [wrong])
  
    // animate
    useEffect(() => {
      let  mount=true
      if(mount && success){
  
        // enable vibration support
  navigator.vibrate = navigator.vibrate;
  console.log("first",navigator)
  
  if (navigator.vibrate) {
    // vibration API supported
      navigator.vibrate(1000);
      setTimeout(()=>{
        setSuccess(false)
      },5000)
  }
      }
    
      return () => {
        mount=false
      }
    }, [success])

    useEffect(() => {
      let mount=true
      if(mount && success){
        const success_sound=document.createElement("success_audio") as HTMLAudioElement
        success_sound.src='/sound/game/success_sound.mp4'
        success_sound.play
      }
    
      return () => {
        mount=false
      }
    }, [success])
    

    const list = {
      hidden: {
        opacity: 0,
        transition: { when: "afterChildren" }
      }
    }
    
    const item = {
      hidden: {
        opacity: 0,
        transition: { duration: 2 }
      }
    }



  return <div className=" w-[100vw]  h-[90vh] overflow-hidden">
      <div className="text-sm p-2 mb-6 flex flex-row justify-between">
        <div>

    Select the hindi letter for brahmi<br/>
  score:{score}<hr/>
        </div>
    <motion.div className="text-5xl cursor-pointer hover:bg-gray-300 rounnded-full   p-2"
  onClick={()=>{
    toggle(!mute)
  }}
  >{mute?'🔊':'🔇'}</motion.div>

<motion.div className="text-5xl invert cursor-pointer hover:bg-gray-300 rounnded-full   p-2"
  onClick={()=>{
    toggle(!mute)
  }}
  >{mute?'📳':'📳'}</motion.div>
    </div>

    


     {success && <Confetti

      width={width}
      height={height}
      numberOfPieces={score*5}
      tweenDuration={9000}
      initialVelocityY={120}
      className="absolute w-full h-full"
      recycle={false}
      
    />}
     <AnimatePresence initial={false} 
     >
{success && <div className="m-auto text-center">
<motion.div 
animate={{opacity:[0,1,0,1,0,1,0,1]}}

className="flex flex-col">
  <div className="flex flex-row justify-between gap-4 p-4">

                <div className="text-5xl font-thin">
                  {alphabetData && alphabetData.filter(i=>i.alphabet===a[1])[0]?.alphabet ? alphabetData.filter(i=>i.alphabet===a[1])[0].alphabet : "nf"}
                  </div>
                <motion.div 
                animate={{opacity:[0,1]}}
                // transition={{delay:1}}
                className="text-9xl scale-150 mt-12 p-2">{alphabetData && alphabetData.filter(i=>i.alphabet===a[1])[0]?.alphabet ? alphabetData.filter(i=>i.alphabet===a[1])[0].emoji : "nf"}</motion.div>
                <div className="text-3xl -ml-4 p-2">{alphabetData && alphabetData.filter(i=>i.alphabet===a[1])[0]?.alphabet ? alphabetData.filter(i=>i.alphabet===a[1])[0].word : "nf"}</div>
  </div>
                <motion.div 
                 animate={{opacity:[0,1]}}
                 transition={{delay:1}}
                className="text-7xl font-extrabold p-2 mt-4">{alphabetData && alphabetData.filter(i=>i.alphabet===a[1])[0]?.alphabet ? alphabetData.filter(i=>i.alphabet===a[1])[0].word.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-2309]!==undefined?Brahmiplate[i.charCodeAt(0)-2309]:i.charCodeAt(0)<2309?i:i.charCode(0)}`) : "nf"}</motion.div>

  </motion.div>
              </div>

  }
{!success && <Comp_t a={a}
success={success}  set={set}  setSuccess={setSuccess} setWrong={setWrong} setSet={setSet} setScore={setScore}
/>}

  </AnimatePresence>



 {success && <motion.div 
  animate={{opacity:[0,1,0,1,0,0,1,0,1,0],scale:[.95,1.5]}}
 
 className=" text-center mt-12 text-5xl sm:text-7xl fade-in-up text-green-500 p-2">
  Correct!!
 </motion.div>
  }

  {wrong && <motion.div 
  animate={{opacity:[0,1,0,1,0,0,1,0,1,0]}}
  // exit={{opacity:[0,1,0,1,0,0,1,0,1,0]}}
  className=" text-red-500 text-center p-2 mt-12 animate-wiggle text-5xl sm:text-9xl"
  >
  Wr🚫ng 
 </motion.div>
  }

  </div>
}