
import { motion } from "framer-motion";

import { FormDesign } from "../FormDesign";
import { login_form, login_schema } from "../../schema/user/login";

import { useEffect, useState } from "react";


export const LoginForm = () => {
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

  return <motion.div  drag className='w-full mt-12 flex flex-col sm:flex-row gap-2 p-2 justify-around'>

   <FormDesign form={login_form} validation={login_schema} label="" setFormState={setFormState} setLoading={setSubmitted} action_type="Login"/>

  </motion.div>;
};


