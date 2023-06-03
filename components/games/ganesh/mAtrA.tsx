import { useState, useEffect } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { faker } from "@faker-js/faker"
import { brahmiMAtrA } from "@/components/classes/brahmi"
import Confetti from "react-confetti"
import{motion} from 'framer-motion'
import { Timer } from "../Timer"

export const MAtrA=()=>{


  const [set,setSet]=useState<any>(faker.helpers.arrayElements(brahmiMAtrA().filter(i=>i[2]!=='fi'||null),4))
  const [a,setA]=useState<any>(faker.helpers.arrayElement(set))
  const [success,setSuccess]=useState<any>(null)
  const [wrong,setWrong]=useState<any>(null)
  const [score,setScore]=useState<any>(0)
  const { width, height } = useWindowSize()

  useEffect(() => {
    let mount=true
    if(mount){
      setA(faker.helpers.arrayElement(set))
    }
    return () => {
      mount=false
    }
  }, [set])
  



  return <div className=" w-[100vw]  h-[90vh]">
      <div className="text-sm p-2 mb-6">
    Select the hindi letter for brahmi<br/>
  score:{score}<hr/>
    </div>
     {success && <Confetti
      width={width}
      height={height}
      numberOfPieces={3000}
      tweenDuration={5000}
      // initialVelocityY={70}
      className=" w-full h-full"
      recycle={false}
      
    />}

  <div className="w-[80%] h-auto text-9xl scale-125 p-6 m-auto text-center bg-white shadow-lg">
{a[2]}
  </div>
  <div>


  <Timer/>

  </div>
  <div className="flex flex-row gap-4">

{
  set.map((al:any,index:number)=>{
    
    return <motion.div 
    whileHover={{scale:.95}}
    whileTap={{scale:1.1}}
    key={index} className="w-32 h-32 m-auto text-center text-7xl p-2 cursor-pointer hover:bg-yellow-300 bg-white shadow-lg"
    onClick={()=>{
      if(al[2]===a[2]){

        setSuccess(true)
        setWrong(false)

        setSet(faker.helpers.arrayElements(brahmiMAtrA().filter(i=>i[2]!=='fi'||''),4))
        setScore((s:any)=>s+5)
      } else {
        setWrong(true)
        setSuccess(false)
        setScore((s:any)=>s-2)

      }
      
    }}
    >{al[0]}</motion.div>
  })
}
  </div>
 {success && <div className=" text-center mt-12 text-7xl animate-wiggle text-green-500 p-2">
  Correct!!
 </div>
  }
  {wrong && <div className=" text-red-500 text-center p-2 animate-wiggle text-5xl">
  Wrong 
 </div>
  }

  </div>
}