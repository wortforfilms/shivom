import { Inter } from 'next/font/google'
import Image from 'next/image'
import { SocialBar } from '../components/layout/SocialBar'

import { Doshas } from '@/components/landing/Doshas'
import { Nakshatras } from '@/components/landing/Nakshatras'
import { Planets } from '@/components/landing/Planets'
import { Process } from '@/components/landing/Process'
import { Technology } from '@/components/landing/Technology'
import { AboutUs } from '../components/landing/AboutUs'
// import FancyCarousel from 'react-fancy-circular-carousel'
// import 'react-fancy-circular-carousel/FancyCarousel.css';
import { ProductForm } from '@/components/form/forms/product/ProductForm'
import { Questions } from '@/components/landing/Questions'
import { Testemonials } from '@/components/landing/Testemonial'
import { Zodiacs } from '@/components/landing/Zodiacs'
import { useState } from 'react'
import { Kosh } from '../components/Kosh'
import { ProductList } from '../components/catalogue/ProductList'
import { Communication } from '../components/communication/Communication'
import { Symbols } from '../components/landing/Symbols'

import CubeApp from '@/canvas/cube'
import MApp from '@/canvas/model'

import { Game } from '../components/games/Game'
import { useRouter } from 'next/router'
import { BirthForm } from '../components/form/forms/auth/BirthForm'
import { Brahmi } from '@/components/classes/brahmi'
import { LoginForm } from '@/components/form/forms/auth/Loginx'


const inter = Inter({ subsets: ['latin'] })



// link #
// 
export default function Home() {

  const [classes,setClasses]=useState([
    {tod:"Vedic Higgs Boson",product:[
      {books:[]}
    ]},
    {

    }
  ])

const router=useRouter()
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className='h-12'></div>
      <div className='flex flex-row sm:flex-row gap-4 flex-wrap'>

      {
        [
          {emoji:"🚀🔭",label:"Astronomy",icon:"",image:"",link:"/#astronomy"},
          {emoji:"🪐💫",label:"Astrology",icon:"",image:"",link:"/#astrology"},
          {emoji:"💫🛍️",label:"Ecommerce",icon:"",image:"",link:"/#ecommerce"},
          {emoji:"🛠️🔔",label:"Services",icon:"",image:"",link:""},
          {emoji:"🎮🎲",label:"Games",icon:"",image:"",link:"/#games"},
          // {emoji:"🔱🪔⚜☥⚜️☪𓁭",label:"Vedic Classes",icon:"",image:"",link:""},
          {emoji:"🔱☪𓁭",label:"Vedic Classes",icon:"",image:"",link:"/#vedic_classes"},
          {emoji:"🧿𓁭📿",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
          // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
          // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
          
        ].map((section,index)=>{
          return <div key={index} 
          onClick={()=>{
            router.push(section.link)
          }}
          className='text-xl cursor-pointer hover:bg-yellow-300 font-bold bg-white shadow-lg rounded-lg w-100 h-24 m-auto p-4'>
            <div className='text-3xl m-auto text-center'>{section.emoji}</div>
            <div  className='font-thin'>{section.label}</div>
            </div>
        })
      }
      </div>
      <div className='flex flex-col sm:flex-row gap-2 jistify-around'>
<div className='flex flex-col gap-2'>
<BirthForm/>
<LoginForm/></div>
<div className='' id="games">

<Game/>
</div>
<ProductForm/>
      </div>
<div className='' id="ecommerce">

<ProductList/>
</div>

{/* {jyotirling:panchjanya:devi} */}
{/* test  account */}
{/* ÷¿A */}
{/* <Placeholder/> */}
<CubeApp/>
<MApp/>
<Kosh/>

{/* <Game0/> */}
{/* <MessageHome/> */}
<div id="astrology"></div>
<Communication/>
<Symbols/>
    <div id="astronomy" className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<Zodiacs/>
<Brahmi/>
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


// register

// watch
// play

// audience
// TOD:""
// how when who what 
// 


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

  // saptrishi
  // houses
  // brahman
  // vaishya
  // baniyA
  // shUdra
// kshatrya
// thakur ::: {":::"}
// tracing ::: indian vidyA
//  

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

// successfull_invite :100
// unlock : 100bronze
// NFT:""
// app:"token"
// balancesheet: "expense"
// 1trillion:::{}
// race
// games_list
// choose from country list
// call local native
// 

const LocalWorker=()=>{

  // work :: complete :: dictionary :: sphere :: plane 
  // 56 / 2 
  // 28 / 7*4
  // {"every bet gain"}
  // {""}
  const get_sanskrit=async()=>{
    book:""


  }
}


