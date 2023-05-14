import { ShiftShaper } from "@/components/Kosh/ShiftShaper"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaResearchgate } from "react-icons/fa"
import { ReadableStream } from "stream/web"


const Vrat=()=>{
  // दीक्षितव्रत
  // indirAåA/*  */avrat
  // rajiv rahul kul ek 
  // rAjIva gAndhI 
  // rjvagndh
  // rajya pAritoSh pAritosikA
  // pole north ::: {}-{}
  // 
  // {}-{}-{}
  return <div>
    Trillion Laxmi YantrA 
    Trillion HanumAn Mantra 
    Trillion Devi Tantra
    Trillion kAlakalA : Tantra
<div>10 Trillion Dollar Indian Company</div>
shivom
allbvegan
brAnd
TLP
work:RashtraCharitra

  </div> 
}
const Support=()=>{

  const [donations, setDnations] = useState<any>([
    { count: 1, amount: 1, discount: 5 },
    { count: 10, amount: 10, discount: 5 },
    { count: 50, amount: 50, },
    { count: 100, amount: 100 }
  ])

  const [amount,setAmount]=useState(0)
  const [step,setStep]=useState<string>('')

  // ReadableStream
  // stream:web
  // node:stream:web

  return <div className="text-center mb-24">
    {/* <div className="h-24 "></div> */}
    Support Us
<div className="text-xl p-4 mt-4 font-extrabold m-auto text-center">Buy me murugan kAjal</div>
{/* <div>Buy us co</div> */}
<div className="flex flex-row gap-4 p-4">

<div className="w-[90%]  p-4 mt-8 mb-8 bg-blue-500 shadow-lg m-auto rounded-lg"> 
<input type="range" 
onChange={(e:any)=>{
setAmount(e.target.value)
}}
className="w-full accent-pink-500 rounded-full" min={1} max={99999} />
</div>

<div className="text-3xl sm:text-7xl m-auto font-extrabold p-2 text-blue-700">
{amount}

</div>
</div>


{amount===0 && <div className='flex flex-row flex-wrap justify-around gap-4 m-auto'>

{donations.map((sr: any, index: number) => {
  return <motion.div key={index} 
  // animate={{}}
  whileHover={{scale:.95}}
  className='bg-gray-300 ring-2 ring-white shadow-lg cursor-pointer rounded-lg p-2   '
  onClick={()=>{
    setStep('shift')
    setAmount(sr.amount)
  }}
  >
    <div className='text-sm font-bold p-2 text-center'>Donate {sr.count}</div>

    {/* <div className='text-xs '>Pay {"INR"} {sr.amount}</div> */}
  </motion.div>;
})}
</div>}
{ amount>0 && <div className="text-3xl p-2"
onClick={()=>{
  setAmount(0)
}}
>
{/* <FaResearchgate/> */}
🔙</div>}
{
  amount>0 && <ShiftShaper amount={amount} setStep={setStep}/>
}
<div className="p-4">

<h1>Welcome to the donation page for Shivom, an advanced science initiative aimed at promoting scientific research and innovation.</h1>

<h5>
  We believe that scientific breakthroughs can change the world and improve lives, but they require significant resources to achieve. Your donation can help us continue our work towards developing new technologies and products that have the potential to make a positive impact on society.
  </h5>

<h3>
  By donating to Shivom, you will be contributing to our efforts to:
  </h3>

<h4 className="bg-white shadow p-4">
<li>
Develop cutting-edge technologies in the fields of biotechnology, genetics, and advanced materials
  </li>
<li>
Conduct groundbreaking research that can lead to new treatments and cures for diseases
  </li>
<li>
Promote VEDIC in STEM education and inspire the next generation of scientists and innovators
  </li>
<li>
Support underprivileged communities by providing access to innovative technologies and educational resources
  </li>
  </h4>

<h3>
  Your donation, no matter how small, can make a difference. It can help us purchase equipment, fund research projects, and support the development of educational programs.
  </h3>
<h5>

To make a donation, simply click on the "Donate" button below and select the amount you wish to give. Your donation will be processed securely through our payment gateway.
</h5>
<h1>

Thank you for your generosity and for supporting our mission to advance science and promote innovation for the betterment of society.
</h1>
</div>

  </div>
}

export default Support