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

import { Game, GameBanner } from '../components/games/Game'
import { useRouter } from 'next/router'
import { BirthForm } from '../components/form/forms/auth/BirthForm'
import { Brahmi } from '@/components/classes/brahmi'
import { LoginForm } from '@/components/form/forms/auth/Loginx'
import { faker } from '@faker-js/faker'


const inter = Inter({ subsets: ['latin'] })




// CD C|D Ç ∂
// codewhisper 
// listen to whisper
// 
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

  const [section,setSection]=useState(null)

const router=useRouter()
  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className='h-12'></div>
      {/* {section} */}
      <HeaderButtons setSection={setSection} section={section}/>
      <div className='flex flex-col sm:flex-row gap-2 jistify-around'>
{/* <div className='flex flex-col gap-2'>
<BirthForm/>
<LoginForm/></div> */}
{/* <div className='' id="games">

<Game/>
</div> */}
{!section && <ProductForm/>}
      </div>
{section==="ecommerce" && <div className='mt-12' id="ecommerce">

<ProductList/>
</div>}

{/* {jyotirling:panchjanya:devi} */}
{/* test  account */}
{/* ÷¿A */}
{/* <Placeholder/> */}
{/* <CubeApp/> */}
{/* <Kosh/> */}
{section==="games" && <GameBanner/>}
{/* <Game0/> */}
{/* <MessageHome/> */}
{/* <div id="astrology"></div> */}
{section==="astrology" && <Communication/>}
{section==="astronomy" && <>
<Symbols/>
    <div id="astronomy" className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<Zodiacs/>
</>
}

{section==="vedic_classes" && <>
<MApp/>
<Brahmi/>
</>}

{section==="boards" && <Team/>}

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


// register

// watch
// play

// audience
// TOD:""
// how when who what 
// 

export const HeaderButtons=(props:any)=>{
  const {setSection, section:sec}=props

  const router=useRouter()
  return <div className='flex flex-row flex-wrap gap-2'>

  {
    [
      {emoji:"🚀🔭",label:"Astronomy",icon:"",image:"",link:"/#astronomy",tag:"astronomy"},
      {emoji:"🪐💫",label:"Astrology",icon:"",image:"",link:"/#astrology",tag:"astrology"},
      {emoji:"💫🛍️",label:"Ecommerce",icon:"",image:"",link:"/#ecommerce",tag:"ecommerce"},
      {emoji:"🛠️🔔",label:"Services",icon:"",image:"",link:"",tag:"services"},
      {emoji:"🎮🎲",label:"Games",icon:"",image:"",link:"/#games",tag:"games"},
      // {emoji:"🔱🪔⚜☥⚜️☪𓁭",label:"Vedic Classes",icon:"",image:"",link:"",tag:""},
      {emoji:"🔱☪𓁭",label:"Vedic Classes",icon:"",image:"",link:"/#vedic_classes",tag:"vedic_classes"},
      {emoji:"🧿𓁭📿",label:"Boards",icon:"",image:"",link:"",seat_conditions:"",tag:"boards"},
      // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
      // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
      
    ].map((section,index)=>{
      return <div key={index} 
      onClick={()=>{
        // router.push(section.link)
        setSection(section.tag)
      }}
      className={`text-xl cursor-pointer ${sec===section.tag?"bg-yellow-300 ring-2 ring-white":"bg-white"} hover:bg-gray-300 hover:text-white font-bold  shadow-lg rounded-lg w-100 h-24 m-auto p-4`}>
        <div className='text-3xl m-auto text-center'>{section.emoji}</div>
        <div  className='font-thin'>{section.label}</div>
        </div>
    })
  }
  </div>
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

  // saptrishi
  // houses
  // brahman
  // vaishya
  // baniyA
  // shUdra
// kshatrya
// thakur ::: {":::"}
// tracing ::: indian vidyA


const designation=[

  {"Chief Executive Officer (CEO)": "The CEO is responsible for the overall strategic direction of the company and oversees all aspects of its operation."},
  {"Chief Operating Officer (COO)": "The COO is responsible for managing the day-to-day operations of the company and ensuring that it runs efficiently."},
  {"Chief Financial Officer (CFO)": "The CFO is responsible for managing the financial resources of the company, including accounting, financial planning, and budgeting."},
  {"Chief Technology Officer (CTO)": "The CTO is responsible for leading the company's technological innovation and ensuring that it remains at the forefront of its industry."},
  {"Chief Science Officer (CSO)": "The CSO is responsible for overseeing the company's research and development efforts and ensuring that it continues to develop new and innovative products."},
  {"Director of Human Resources (HR)": "The HR Director is responsible for managing the company's human resources department and ensuring that the organization attracts, develops, and retains top talent."},
  {"Director of Marketing": "The Director of Marketing is responsible for developing and executing marketing strategies to promote the company's products and services."},
  {"Director of Sales": "The Director of Sales is responsible for developing and executing sales strategies to increase revenue and expand the company's customer base."},
  {"Research Scientists": "Research Scientists are responsible for conducting research and development activities to create new products and improve existing ones."},
  {"Engineers": "Engineers are responsible for designing, testing, and developing products and ensuring that they meet quality standards."},
  {"Technicians": "Technicians are responsible for supporting the research and development process by conducting experiments and collecting data."},
  {"Administrative Staff": "Administrative Staff members provide support to the organization by handling administrative tasks, such as scheduling meetings, managing files, and answering phones."},
  {"On-ground Team": "The On-ground Team includes individuals who work directly with customers or clients, such as sales representatives, customer service representatives, and field technicians."},
  {"Student Interns": "Student Interns are individuals who are currently enrolled in school and are completing an internship with the company. They may work in a variety of roles, such as research assistants, engineering interns, or administrative support. The company may offer internships to provide students with hands-on experience and to identify potential future employees."},
]

//  

  return <div>
    {/* <div>Admins</div> */}
    <div className='flex flex-row flex-wrap gap-4 mt-8 justify-around'>{
      designation.map((adm:any,index:number)=>{
        return <div key={index} className='w-56 h-full bg-white shadow-lg p-2'>
          <div>{Object.keys(adm)[0]}</div>
          <Image
          src={faker.image.avatar()}
          alt="des"
          width={100}
          height={100}
          className='w-24 h-24 rounded-full m-auto'
          />
          <div className='w-full  text-center p-2 font-bold'>{faker.name.fullName()}</div>
          <div className='text-xs'>{Object.values(adm)}</div>

          </div>
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


