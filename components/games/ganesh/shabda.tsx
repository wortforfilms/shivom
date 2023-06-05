import { useState, useEffect } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { faker } from "@faker-js/faker"
import { brahmi } from "@/components/classes/brahmi"
import Confetti from "react-confetti"
import{motion} from 'framer-motion'
import { Timer } from "../Timer"
import { LetterPad, WordPad } from "./LetterPad"


// fetch word with length limit
// dic
// languages
// letter->{sound}->{shape}->{region}

// word->{sound:""}->{length:""}->{meaning:[{intent:"",meaning:""}]}->{translation:[]}

export const Shabda=()=>{
  const [word,setWord]=useState<any>(faker.helpers.arrayElements(brahmi().filter(i=>i[2]!=='fi'||null),4))


  const [set,setSet]=useState<any>(faker.helpers.arrayElements(brahmi().filter(i=>i[2]!=='fi'||null),4))

  const [a,setA]=useState<any>(set[0])
  const [b,setB]=useState<any>(set[1])
  const [success,setSuccess]=useState<any>(null)
  const [wrong,setWrong]=useState<any>(null)
  const [score,setScore]=useState<any>(0)
  const { width, height } = useWindowSize()

  

  useEffect(() => {
    let mount=true
    if(mount){
      setA(faker.helpers.arrayElement(set))
      setB(faker.helpers.arrayElement(set))
    }
    return () => {
      mount=false
    }
  }, [set])
  
const [level, setLevel]=useState<any>('Easy')


  return <div className=" w-[100vw]  h-[90vh]">
      <div className="text-sm p-2 mb-6">
    Select the hindi word for brahmi<br/>
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
<div className="flex flex-row justify-between p-4">

    <div className="flex flex-row justify-start gap-4 mb-12 ">
      {['Easy','Pro','Expert'].map((lev,index)=>{
        return <div key={index} className={`text-xs bg-white ${lev===level && "bg-yellow-300"} p-1 rounded-lg hover:bg-sky-500 cursor-pointer`}
        onClick={()=>{
          setLevel(lev)
        }}
        >{lev}</div>
      })}
    </div>
<>
Hint
</>
</div>

    {/* <LetterPad a={a}/> */}
    <WordPad a={a} b={b}  />


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

        setSet(faker.helpers.arrayElements(brahmi().filter(i=>i[2]!=='fi'||''),4))
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


// mera apnA mere logon kA
// string in
// 