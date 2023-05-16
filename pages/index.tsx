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

import MApp from '@/canvas/model'

import { Game } from '../components/games/Game'
import { GameBanner } from '@/components/games/GameBanner'

import { Brahmi } from '@/components/classes/brahmi'

import { HeaderButtons } from '../components/layout/HeaderButtons'
import { Team } from '../components/list/Team'

import { useSelector } from 'react-redux'

import Image from 'next/image'


export default function Home(props:any) {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)



  const [section,setSection]=useState(null)


  return (
    <main className={`flex min-h-screen  flex-col justify-around p-2 w-full`}
    >

      <div className='h-12'></div>

      <HeaderButtons setSection={setSection} section={section}/>
      <div className='flex flex-col sm:flex-row gap-2 jistify-around'>

{!section && <div className='flex flex-col sm:flex-row gap-4'>
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



