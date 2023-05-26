
import { registration_form, registration_schema } from '../../schema/user/registration';
import { FormDesign } from '../FormDesign';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'





export const UserRegistrationForm = () => {

  const [form_state, setFormState]=useState<any>(null)
  const [submitted,setSubmitted]=useState<boolean>(false)

  useEffect(()=>{
    let mount=true
    if(mount){
      if(form_state){
        setSubmitted(true)
        

      }
    }
    return ()=>{
      mount=false
    }
  },[form_state])


const router=useRouter()
  return <div className='w-full mt-2 flex flex-col sm:flex-row flex-wrap gap-2 h-100 mb-24 justify-around'>
  { submitted?<div className=' m-auto h-[90vh]'>
    <SuccessCard 
    message={"You are successfuly registered."} 
    required_message={"Waiting for Email verification"}
    primary_action={
      {message:"Goto Login.",action:()=>router.push('/auth/login')}}
    action_message={"Didn't recieved email. Resend verification link."}
    /></div>: <FormDesign form={registration_form} validation={registration_schema} label="" setFormState={setFormState} action_type="Register"/>}
  </div>;
};

import Confetti from 'react-confetti'
import { useRouter } from 'next/router';
import { user_registration } from '@/q/c/auth';
import { supabase } from '@/lib/Store';

const SuccessCard=(props:any)=>{
  const {message, required_message, action_message, primary_action}=props
  const { width, height } = useWindowSize()
  return <div className='w-100 h-100 mt-12 bg-white p-4 shadow-lg'>
       <Confetti
      width={width}
      height={height}
      numberOfPieces={3000}
      tweenDuration={5000}
      // initialVelocityY={70}
      recycle={false}
      
    />
    <div className='thin-subhead sm:thin-head'>
      Congratulations!!!{message}
      </div>

    <div className='thin-subhead py-12'>{required_message}</div>
    <div className='form-button'
    onClick={()=>{
      primary_action.action()
    }}
    >{primary_action.message}</div>
    <a className='hover:text-green-500 cursor-pointer py-8'>{action_message}</a>
  </div>
}
