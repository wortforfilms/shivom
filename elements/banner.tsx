import { heading, information, silver } from '@/sty';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'
import { motion } from 'framer-motion';

const  aibannner={
  title:"Let SH{4}om A.I. Discover Your Unique Planet Energies",
  info:"Unlock the secrets of your destiny with our personalized A.I. enabled planet chart and Yantra service.",
  bg_image:"/img/astrological_chart.png",
  unauth_action:{
    label:'Get Started',
    action:()=>{}
  },
  auth_action:{
    label:'Goto Dashboard',
    action:()=>{}
  }
}
const Banner: React.FC = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)


  const router=useRouter()
  return (
    <div className="banner flex flex-row bg-gray-200 h-full sm:h-full mt-8 md:h-96 flex justify-center items-center">
      
          <Image
    // src="/img/astrology-circle-orance-dots.png"
    src={aibannner.bg_image} 
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-full  rounded-full opacity-25 justify-start   "
    />

<Image
    // src="/img/astrology-circle-orance-dots.png"
    src={'/cc/raashi_dail.png'} 
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="absolute m-auto w-full  rounded-full border-4 border-gray-300  justify-start animate-spin-slow  "
    />


     {earth?.auth?.authenticated ? <div className="content bg-white shadow-lg bg-opacity-[98%] p-6 text-center">
        <div className={heading}>{aibannner.title}</div>
        <p className={information}>{aibannner.info}</p>
        {earth?.auth?.authenticated?<div className="cta-button cursor-pointer bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 rounded-full transition-colors duration-300" 
        onClick={()=>{
          router.push('/user')
        }}
        >
          {aibannner.auth_action.label}
        </div>:<a className="cta-button bg-red-500 cursor-pointer hover:bg-red-600 text-white text-lg px-8 py-4 rounded-full transition-colors duration-300"
          onClick={()=>{
            router.push('/auth/register')
          }}
        
      >
         {aibannner.unauth_action.label}
        </a>}
      </div>:<div className='absolute text-xl sm:text-7xl text-center font-extrabold'>𑀰{"४"}ॐ
      <div 
      className={`${silver} p-2`}
      onClick={()=>{
        router.push('/user')
      }}
      >{aibannner.unauth_action.label}</div>
      </div>}
    </div>
  );
};

export default Banner;



const Lense=()=>{
  return  <motion.div drag 
  whileHover={{scale:.85}}
  whileTap={{scale:1}}
  
  className=' p-2 rounded-full z-50  w-100 h-100 bg-pink-200/50 ring-4 ring-pink-200 border-2 border-pink-300 '>
    
  <Image
  src={"/ium/omium.png"}
  alt="omium"
  width={100}
  height={100}
  className='w-32 sm:w-32 opacity-50 ml-12 animate-wiggle rounded-full mb-8 shadow-lg  '
  />
  
  
  </motion.div>
}
// cavas font

// html css js ts
//  data meta  u i game {}
// houses of planets
// {}-{}-{}-{}-{}