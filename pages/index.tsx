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
import { useState } from 'react'
import { Testemonials } from '@/components/landing/Testemonial'


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
{/* <MessageHome/> */}
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

const ProductList=()=>{

  const [product_list,setPL]=useState<any>([
    {
      product_type:"t-shirt",
      product_title:"Cosmic T-shirts",
      product_description:"T-shirt for empovering your cosmos with mystical enrgies.",
      product_specification:"Dosh nivaran tshirts",
      product_price:"599.99",
      cureency:"INR",
      product_rating:"4.5",
      product_images:["/img/tshirt/13.png"]
    },
    {
      product_type:"gems",
      product_title:"Navgrah Ear Rings",
      product_description:"Jewells for empovering your cosmos with mystical enrgies.",
      product_specification:"Dosh nivaran gems",
      product_price:"25500.00",
      cureency:"INR",
      product_rating:"4.5",
      product_images:["/img/gems/37.jpeg"]
    },
    {
      product_type:"gems",
      product_title:"Graha Rings",
      product_description:"Rings with mystical energies.",
      product_specification:"Dosh nivaran gems",
      product_price:"5500.00",
      cureency:"INR",
      product_rating:"4.5",
      product_images:["/img/gems/38.jpeg"]
    }
  ])

  return <div>
          <div className='w-full  p-2 flex flex-row gap-2 overflow-auto'>

{
  product_list.map((product:any,index:number)=>{
    return <div key={index} className='bg-white p-4 flex flex-col justify-between'>
      <div>Rating: {product.product_rating}</div>
<Image 
src={product.product_images[0]}
alt="tshirt"
width={100}
height={100}
className='w-96'
/>
<div className='text-md font-bold py-4'>{product.product_title}</div>
<div className='text-md font-thin py-4'>{product.product_description}</div>
<div className='flex flex-row justify-between'>
<div className='text-md font-bold py-4'>INR. {product.product_price}</div>
<div className='bg-blue-500 text-white m-auto font-bold p-4 rounded-lg shadow-lg hover:bg-pink-500 cursor-pointer '>Add to Cart</div>
</div>
    </div>
  })
}

</div>
  </div>
}