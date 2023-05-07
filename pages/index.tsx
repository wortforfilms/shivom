import Image from 'next/image'
import { Inter } from 'next/font/google'
import { InputForm } from '../components/form/InputForm'
import { SocialBar } from '../components/layout/SocialBar'

import { AboutUs } from '../components/landing/AboutUs'
import { Technology } from '@/components/landing/Technology'
import { Planets } from '@/components/landing/Planets'
import { Nakshatras } from '@/components/landing/Nakshatras'
import { Doshas } from '@/components/landing/Doshas'
import { Process } from '@/components/landing/Process'
// import FancyCarousel from 'react-fancy-circular-carousel'
// import 'react-fancy-circular-carousel/FancyCarousel.css';
import { Symbols } from '../components/landing/Symbols'
import { Zodiacs, zods } from '@/components/landing/Zodiacs'
import { ProductForm } from '@/components/form/ProductForm'
import { Questions } from '@/components/landing/Questions'
import { Testemonials } from '@/components/landing/Testemonial'
import { FaChartArea, FaFileAudio, FaMicrophoneSlash } from 'react-icons/fa'
import { Communication } from '../components/communication/Communication'
import { ProductList } from '../components/catalogue/ProductList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className='h-12'></div>
{/* <BirthForm/> */}
<ProductForm/>
<ProductList/>
<Kosh/>
{/* <MessageHome/> */}
<Communication/>
<Symbols/>
    <div className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<Zodiacs/>
<Questions/>
<Testemonials/>
     <AboutUs/>
    <Technology/>
   <Planets/>
<Nakshatras/>
<Doshas/>
<Process/>
      <SocialBar/>
    </main>
  )
}



const BirthForm=()=>{
  return       <div className='w-full flex flex-col sm:flex-row gap-2 bg-white p-2 justify-around'>

  <Image
    src="/gg.png"
    alt="GG race Logo"
    className="dark:invert w-full rotate-90 sm:w-80 max-w-3xl h-100  bg-white  rounded-lg"
    width={100}
    height={100}
    priority

  />
  {/* <div className='w-48 h-48 bg-yellow-300 rounded-lg shadow-lg'>

  </div> */}
<InputForm/>
</div>
}



const Kosh=()=>{
  return <div className='p-2 bg-white shadow-lg'>
  <h1 className='text-3xl p-2 font-extrabold'>
    Refill your {"OMBox"}
    </h1>
    <div className='flex flex-row gap-4'>

    {
      [
        {count:10,amount:200, discount:5},
        {count:50,amount:1000,},
        {count:100,amount:2000}       
      ].map((sr,index)=>{
        return <div key={index} className='bg-gray-300 rounded-t-lg p-2 shadow-lg  '>
          <div className='text-xl font-bold p-2'>Add {sr.count}</div>
          
          <div>Pay {"INR"} {sr.amount}</div>
          </div>
      })
    }
    </div>
    <div>
      {[{total:"499",last_use:"9",last_deposite:"20"}].map((det,index)=>{
        return <div key={index} className='p-4 bg-pink-500 text-white '>
          <div>TOTAL: {det.total}</div>
          <div>LAST USED: {det.last_use}</div>
          <div>LAST REFIL: {det.last_deposite}</div>        
          </div>
      })}
    </div>
    <div className='p-2 font-bold mt-4'>Orders:</div>
    <div className='p-1 flex flex-col gap-2'>
      {
        [
          {amount:"5",paid_to:"palmistry",use:"session"},
          {amount:"50",paid_to:"Tshirt",use:"purchase"}
        
        ].map((his,index)=>{
          return <div key={index} className='bg-gray-100 p-2 text-xs'>{index+1}. {his.amount} lakshmi user for {his.use} of {his.paid_to}</div>
        })
      }
    </div>
</div>
}