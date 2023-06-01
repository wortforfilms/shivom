import { heading, information } from '@/sty';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image'

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
  useEffect(() => {
    const content = document.querySelector('.content') as HTMLElement;
    const ctaButton = document.querySelector('.cta-button') as HTMLElement;

    // Animation: Slide in from the top
    content.style.animation = 'slide-in 1s ease';

    // Animation: Pulse effect on CTA button
    setInterval(() => {
      ctaButton.style.animation = 'pulse 1s ease';
    }, 2000);
  }, []);

  const router=useRouter()
  return (
    <div className="banner flex flex-row bg-gray-200 h-full sm:h-64 mt-8 md:h-80 flex justify-center items-center">
      
          <Image
    // src="/img/astrology-circle-orance-dots.png"
    src={aibannner.bg_image}
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-full  rounded-full  justify-start   animate-spin-slow m-auto"
    />
      <div className="content bg-white shadow-lg bg-opacity-[98%] p-4 text-center">
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
      </div>
    </div>
  );
};

export default Banner;
