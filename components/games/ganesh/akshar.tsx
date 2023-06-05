import { useState, useEffect } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { faker } from "@faker-js/faker"
import { brahmi } from "@/components/classes/brahmi"
import Confetti from "react-confetti"
import{AnimatePresence, motion} from 'framer-motion'
import { Timer } from "../Timer"
import { LetterPad } from "./LetterPad"
import { supabase } from "@/lib/Store"
import { context } from "react-three-fiber"


const create_game=async()=>{
  const {data,error}=await supabase.from('kreedA').select('*')
  return {data,error}
}

const add_mantra=async(userId:any,numb:number)=>{
  const {data,error}=await supabase.from('kreedA').select('*').update([{
    mantra:(s:any)=>s+numb
  }]).eq('owner',userId)
  return {data,error}
}

const reduce_mantra=async(userId:any,numb:number)=>{
  const {data,error}=await supabase.from('kreedA').select('*').update([{
    mantra:(s:any)=>s+numb
  }]).eq('owner',userId)
  return {data,error}
}


export const Akshar=()=>{


  const [set,setSet]=useState<any>(faker.helpers.arrayElements(brahmi().filter(i=>i[2]!=='fi'||null),4))
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
      },4000)
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
      <div className="text-sm p-2 mb-6">
    Select the hindi letter for brahmi<br/>
  score:{score}<hr/>
    </div>
     {success && <Confetti
      //  drawShape={ctx => {
      //   ctx.beginPath()
      //   for(let i = 0; i < 20; i++) {
      //     const angle = 0.35 * i
      //     const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      //     const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      //     const z = (0.2 + (1.5 * angle)) * Math.tan(angle)
      //     ctx.lineTo(x,y)
      //   }
      //   ctx.stroke()
      //   ctx.closePath()
      // }}


      // drawShape={context=>{
      //         // Set the drawing properties
      // context.lineWidth = 2;
      // context.strokeStyle = "black";
      // context.fillStyle = "black";
      // context.font = "40px Arial";

      // // Draw the Om symbol
      // context.beginPath();
      // context.arc(100, 100, 80, 0, 2 * Math.PI); // Outer circle
      // context.moveTo(55, 115);
      // context.lineTo(145, 115); // Horizontal line
      // context.moveTo(55, 165);
      // context.lineTo(145, 165); // Lower horizontal line
      // context.stroke();

      // context.fillText("ॐ", 75, 155); // Om symbol text

      // context.closePath();
      // }}
      width={width}
      height={height}
      numberOfPieces={score*5}
      tweenDuration={9000}
      initialVelocityY={120}
      className="absolute w-full h-full"
      recycle={false}
      
    />}
     <AnimatePresence initial={false} 
    //  custom={direction}
     >

<Comp_t a={a}
success={success}  set={set}  setSuccess={setSuccess} setWrong={setWrong} setSet={setSet} setScore={setScore}
/>

  </AnimatePresence>

  <motion.div className="text-7xl cursor-pointer hover:bg-gray-300 rounnded-full  absolute bottom-2 left-2 p-4"
  onClick={()=>{
    toggle(!mute)
  }}
  >{mute?'🔊':'🔇'}</motion.div>

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

const Comp_t=(props:any)=>{
  const {a, success, list, set, item, setSuccess, setWrong, setSet, setScore}=props
  return <div>
     <LetterPad a={a} success={success}/>

<div className="h-12 ">

<Timer/>

</div>

<motion.div variants={list} className="flex flex-row gap-4">
{
set.map((al:any,index:number)=>{
  
  return <motion.div 
  variants={item}
  whileHover={{scale:.95}}
  whileTap={{scale:1.1}}
  
  key={index} className={`w-32 h-32 m-auto ${success && al[2]!==a[2] && 'hidden' } text-center text-7xl p-2 cursor-pointer hover:bg-yellow-300 bg-white shadow-lg`}
  onClick={()=>{

    if(al[2]===a[2]){

      setSuccess(true)

      setTimeout(()=>{

        setWrong(false)

        setSet(faker.helpers.arrayElements(brahmi().filter(i=>i[2]!=='fi'||''),4))
        setScore((s:any)=>s+5)
      },5000)
    } else {
      setWrong(true)
      setSuccess(false)
      setScore((s:any)=>s-2)
      setTimeout(()=>{

        setWrong(false)
      },2000)


    }
    
  }}
  >
    {al[0]}
    
    </motion.div>
})
}
</motion.div>
  </div>
}