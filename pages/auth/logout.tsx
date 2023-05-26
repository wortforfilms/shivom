// import { TitleCard } from '@/display/card/TitleCard'
import { signout } from '@/store/auth/action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { LinkButton } from '../advertise'
import { reset_profile } from '@/store/profile/action'
import { reset_subscription } from '@/store/subscription/action'
import { reset_projects } from '@/store/project/action'
import { reset_wallet } from '@/store/wallet/action'
import { useRouter } from 'next/router'

const LogOut = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
const dispatch=useDispatch()
  useEffect(() => {
    let mount=true
  if(mount){
    fetch('/api/auth/logout',{method:"POST"})
    dispatch(signout({}))
    dispatch(reset_profile())
    dispatch(reset_subscription())
    dispatch(reset_projects())
    dispatch(reset_wallet())
  }
    return () => {
      mount=false
    }
  }, [])
  
  return (
    <div className='m-auto w-full p-4'>    
    <div className='h-12'></div> 
      <TitleCard
      heading="Successfully logged out!!!"
      description="Thankyou for using The Line Producer.. Keep creating.."
      />
      <LinkButton text="Goto Home" link="/"/>
      </div>
  )
}

export default LogOut

export const LinkButton=(props:any)=>{
  const {text,link}=props
  const router=useRouter()
  return <div 
  className='m-auto hover:bg-slate-600 hover:ring-white hover:ring-2 cursor-pointer p-4 w-72 shadow-lg text-center font-bold text-xl rounded-lg bg-pink-500 text-white mt-4'
  onClick={()=>{
    router.push(link)
  }}>
    {/* <GrNew/>
    <MdOpenInNew/> */}
    {text}</div>
}


export const TitleCard = (props: any) => {
  const { heading, description,link, link_text } = props;
  const router=useRouter()
  return <div className="text-left bg-white p-2 rounded-lg">

    <SubHeading text={heading} />
    <Description>
      {description}
    </Description>
    {
      link && link_text && <div className="w-48 m-auto hover:bg-blue-500 cursor-pointer hover:shadow-xl text-bold bg-pink-500 text-white p-2 rounded-lg text-center"
      onClick={()=>{
        router.push('/join')
      }}
      >{link_text}</div>
    }
  </div>;
};



export const Description = (props: any) => {
  const { children, className, size, color } = props;
  return <div className={`text-xs sm:text-${size?size:"sm"} text-${color?color:"gray-700"} font-mono p-1 sm:p-2 ${className}`}>

    {children}

  </div>;
};

export const SubHeading=(props:any)=>{
  const {text, color, size}=props
  return <div className={`text-sm sm:text-${size?size:"sm"} sm:mt-2 sm:mb-2 text-${color?color:"gray-600"} font-extrabold`}>
    {text}
  </div>
}