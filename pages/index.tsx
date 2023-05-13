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

import { Game } from '../components/games/Game'
import { GameBanner } from '@/components/games/GameBanner'
import { useRouter } from 'next/router'
import { BirthForm } from '../components/form/forms/auth/BirthForm'
import { Brahmi } from '@/components/classes/brahmi'
import { LoginForm } from '@/components/form/forms/auth/Loginx'
import { HeaderButtons } from '../components/layout/HeaderButtons'
import { Team } from '../components/list/Team'
import { motion } from 'framer-motion'
import { InitializeResult } from '@supabase/supabase-js'
import { useSelector } from 'react-redux'
import { Start } from '@/components/games/Start'
import Image from 'next/image'


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
export default function Home(props:any) {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)

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
      className={` flex min-h-screen  flex-col justify-around p-2 
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

      <HeaderButtons setSection={setSection} section={section}/>
      <div className='flex flex-col sm:flex-row gap-2 jistify-around'>

{!section && <div className='flex flex-row gap-4'>
  <ProductForm/>
  <GameBanner/>

</div>}
      </div>
{section==="ecommerce" && <div className='mt-12' id="ecommerce">

<ProductList/>
</div>}


{section==="games" && <>
{!earth.auth.authenticated ?<GameBanner/>:<Game/>}
</>}

{section==="astrology" && <Communication/>}

{section==="astronomy" && <>


      <div className='mt-8'>
<Zodiacs/>
<Image 
src="/book/cover1.jpg" alt="" width={100} height={100}
className='relative w-full'
/>
<Symbols/>
    <div id="astronomy" className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<div className='text-xl sm:text-7xl -bottom-24 m-auto absolute font-extrabold p-4 text-white'>QUESTION OF INDIA TO INDIAN</div>
</div>
</>
}

{section==="vedic_classes" && <>
<MApp/>
<Brahmi/>
</>}

{section==="boards" && <Team/>}
{section==="kosha" && <Kosh/>}
{ section==="services" && <Services/>}
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



const Services=()=>{
  return <div className='text-xl font-bold uppercase mt-12'>
  
  education<br/>
  advance sciences<br/>
  artificial intelligence<br/>
  yantra tanra mantra<br/>
  fincare<br/>
  healthcare<br/>
  eldercare<br/>
  consultations<br/>
  research<br/>

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


// प्रसृति,सृ.	f.	prasRti,sR.	gillgi.gl.[liquid measure]	
// शायिका	f.	zAyikA	berth[Rly.]	
// अधिकारत्यागंकरोति{कृ}	verb 8	adhikAratyAgaMkaroti[kR]	stepdownfromauthority,giveuprights[pol.]	
// निक्षेप-लेखा	f.	nikSepa-lekhA	depositaccount[Com.]	
// वाहक-प्रतिभूति	f.	vAhaka-pratibhUti	bearersecurity[Com.]	


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

