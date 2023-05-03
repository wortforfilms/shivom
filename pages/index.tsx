import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { InputForm } from '../components/form/InputForm'
import {
  FacebookShareCount
} from 'next-share'

import { SocialBar } from '../components/layout/SocialBar'
import MessageHome from '@/components/messaging'

import { AboutUs } from '../components/landing/AboutUs'
import { Technology } from '@/components/landing/Technology'
import { Planets } from '@/components/landing/Planets'
import { Nakshatras } from '@/components/landing/Nakshatras'
import { Doshas } from '@/components/landing/Doshas'
import { Process } from '@/components/landing/Process'
// import FancyCarousel from 'react-fancy-circular-carousel'
// import 'react-fancy-circular-carousel/FancyCarousel.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className='h-12'></div>

<MessageHome/>
<BirthForm/>
<Symbols/>
    <div className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<Zodiacs/>
{/* <div className='p-8 mt-24'>

<FancyCarousel 
      images={zods.map(i=>i.sign)} 
      carouselRadius={300}
      peripheralImageRadius={50}
      centralImageRadius={100}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={3}
      borderWidth={4}
      borderHexColor={'1c364f'}
      />
      </div> */}
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


const ggstr = ``
const zods= [ 
  { sign:"♈",
   label:"Aries"},
   {sign:"♉",
   label:"Taurus"},
   {sign:"♊",
   label:"Gemini"},
   {sign:"♋",
   label:"Cancer"},
   {sign:"♌",
label:   "Leo"},
   {sign:"♍",
  label: "Virgo"},
   {sign:"♎",
  label: "Libra"},
   {sign:"♏",
   label:"Scorpio"},
   {sign:"♐",
   label:"Sagittarius"},
   {sign:"♑",
   label:"Capricorn"},
   {sign:"♒",
   label:"Aquarius"},
   {sign:"♓",
   label:"Pisces"},
   {sign:"⛎",
   label:"Ophiuchus"}]
const Zodiacs=()=>{
  return <div className='flex flex-row gap-4 flex-wrap justify-around'>

  {
 zods.map((ss,index)=>{
       return <div key={index}  className='flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg'>
         <div className='text-5xl p-2'>
          {ss.sign}
          </div>
         <div className='m-auto text-xs'>
          {ss.label}
          </div>
       </div>
     })
  }
  </div>

}

const Symbols=()=>{
  return <div className='flex flex-row gap-4 p-4 flex-wrap'>

  {
  [ 
    { sign:"✝️",
     label:"isAi"},
     {sign:"☮️",
     label:"bauddh"},
     {sign:"🕉️",
     label:"hindu"},
     {sign:"✡️",
     label:"jew"},
     ].map((ss,index)=>{
       return <div key={index}  className='flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg'>
         <div className='text-5xl p-2'>
          {ss.sign}
          </div>
         <div className='m-auto text-xs'>
          {ss.label}
          </div>
       </div>
     })
  }
  </div>

}


const BirthForm=()=>{
  return       <div className='w-full flex flex-col sm:flex-row gap-2 bg-white p-2 justify-around'>

  <Image
    src="/gg.png"
    alt="GG race Logo"
    className="dark:invert w-full sm:w-1/2 max-w-3xl h-100  bg-white  rounded-lg"
    width={100}
    height={100}
    priority

  />
<InputForm/>
</div>
}


