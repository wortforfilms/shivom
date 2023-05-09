import { Inter } from 'next/font/google'
import Image from 'next/image'
import { InputForm } from '../components/form/InputForm'
import { SocialBar } from '../components/layout/SocialBar'

import { Doshas } from '@/components/landing/Doshas'
import { Nakshatras } from '@/components/landing/Nakshatras'
import { Planets } from '@/components/landing/Planets'
import { Process } from '@/components/landing/Process'
import { Technology } from '@/components/landing/Technology'
import { AboutUs } from '../components/landing/AboutUs'
// import FancyCarousel from 'react-fancy-circular-carousel'
// import 'react-fancy-circular-carousel/FancyCarousel.css';
import { ProductForm } from '@/components/form/ProductForm'
import { Questions } from '@/components/landing/Questions'
import { Testemonials } from '@/components/landing/Testemonial'
import { Zodiacs } from '@/components/landing/Zodiacs'
import { useState } from 'react'
import { Kosh } from '../components/Kosh'
import { ProductList } from '../components/catalogue/ProductList'
import { Communication } from '../components/communication/Communication'
import { Symbols } from '../components/landing/Symbols'
import { Placeholder } from '@/canvas'
import CubeApp from '@/canvas/cube'
import MApp from '@/canvas/model'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
import { Game0 } from '../components/games/Game0'
import { Game } from '../components/games/Game'

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
{/* <Placeholder/> */}
<CubeApp/>
<MApp/>
<Kosh/>
<Game/>
<Game0/>
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
      <Team/>
    </main>
  )
}

const Team=()=>{
  
  const [admins,setAdmins]=useState<any>([
    {
      name:"Hemant Kumar Dixit",
      type:"super",
      designation:"CEO,CTO,CCO",
      equity:"",
      image:""
    }
  ])
  const [directors,setDirectors]=useState<any>([
    {
      name:"",
      type:"",
      designation:"",
      equity:"",
      image:"",
      authorized_by:[""]
    },
    {
      name:"",
      type:"",
      designation:"",
      equity:"",
      image:"",
      authorized_by:[""]
    },
    {
      name:"",
      type:"",
      designation:"",
      equity:"",
      image:"",
      authorized_by:[""]
    }
  ])
  const [team,setTeam]=useState<any>([


  ])
  const [contributers,setContributers]=useState<any>([])

  return <div>
    <div>Admins</div>
    <div>{
      admins.map((adm:any,index:number)=>{
        return <div key={index}>{adm.name}</div>
      })
      }</div>
He She They<br/>
We Us I
You üU¨ÆÚ
::: 1818 1839 1947 
//\\ 2014 2023 2076
:::: 
{/* // transaction {creative} */}
  </div>
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



