import { Inter } from 'next/font/google'
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
import { HeaderButtons } from '../components/layout/HeaderButtons'
import { Team } from '../components/list/Team'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['cyrillic'] })


// "cyrillic" | "cyrillic-ext" | "greek" | "greek-ext" | "latin" | "latin-ext" | "vietnamese"

// 

// universal language system :: devnaagari 
// 


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
      className={` flex min-h-screen  flex-col p-2 
w-full
      `}
    >
      <motion.div 
      whileHover={{scale:.95}}
      onClick={()=>{
        router.push('/supportus')
      }}
      drag className='absolute bottom-16 text-3xl -mb-12 right-2 -ml-12 ring-2 ring-pink-800 shadow-lg bg-white rounded-full p-2'>💝 Support Us</motion.div>
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
{section==="kosha" && <Kosh/>}
{ section==="services" && <div className='text-xl font-bold uppercase mt-12'>
  
  education<br/>
  advance sciences<br/>
  artificial intelligence<br/>
  yantra tanra mantra<br/>
  fincare<br/>
  healthcare<br/>
  eldercare<br/>
  consultations<br/>
  research<br/>

  </div>}
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


// accident of groom new bride fathers-in-law 
// {}-{}-{}
// {}-{}-{}
// 

// {}-{}-{}
// {}-{}-{}

// {}-{}-{}
// _[]-{}-()-90
// _906_
// _60()9_
// __689__
// ()
// {-({[.|.|.]})-}
// -{|.|}-
// _|_
// ++/|++
// 

// {}-{}-{}
// {}-{}-{}
// {}-{}-{}

// {}-{}-{}
// {}-{}-{}

// {}-{}-{}

