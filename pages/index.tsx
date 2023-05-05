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
import { Symbols } from '../components/landing/Symbols'
import { Zodiacs, zods } from '@/components/landing/Zodiacs'
import { ProductForm } from '@/components/form/ProductForm'
import { Questions } from '@/components/landing/Questions'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main
      className={`flex min-h-screen  flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <div className='h-12'></div>
{/* <BirthForm/> */}
<ProductForm/>
      <div className='w-full bg-white p-2 flex flex-row overflow-auto'>

<Image 
src="/img/tshirt/13.png"
alt="tshirt"
width={100}
height={100}
className='w-96'
/>
<Image 
src="/img/gems/37.jpeg"
alt="tshirt"
width={100}
height={100}
className='w-96'
/>
<Image 
src="/img/gems/38.jpeg"
alt="tshirt"
width={100}
height={100}
className='w-96'
/>
</div>
{/* <MessageHome/> */}
<Symbols/>
    <div className='text-xl flex flex-row flex-wrap text-center justify-between overflow-hidden p-2'>
    ⋆｡°✩⋆｡°✩🌏⋆｡°✩💫⋆｡°✩⋆｡°✩⋆｡°✩☄️⋆｡°✩⋆｡°✩⋆｡°✩🌟⋆｡°✩⋆｡°✩🌏⋆｡°✩⋆｡°✩🪐⋆｡°✩⋆｡°✩⋆｡°✩🚀⋆｡°✩⋆｡°✩⋆｡°✩
      </div>
<Zodiacs/>
<Questions/>
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


// const Rounded=()=>{
//   return <div className='p-8 mt-24'>

//   <FancyCarousel 
//         images={zods.map(i=>i.sign)} 
//         carouselRadius={300}
//         peripheralImageRadius={50}
//         centralImageRadius={100}
//         focusElementStyling={{border: '2px solid #ba4949'}}
//         autoRotateTime={3}
//         borderWidth={4}
//         borderHexColor={'1c364f'}
//         />
//         </div>
// }

