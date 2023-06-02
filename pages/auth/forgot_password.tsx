// import { Container } from "@/display/element/Container"
// import { Form } from "@/display/forms"
import { useEffect, useState } from "react";
import * as yup from 'yup'
// import { MixLink } from "../../display/element/MixLink";
const forgot_form_schema=[
  {
    type:"email",
    name:"username",
    label:"Username",
    message:"",
    options:[],
    values:[]
  }
]



const forgot_yup_validation = yup.object().shape({
  username: yup.string().min(8).max(250).required("Email is required"),
});

const ForgotPassword=()=>{
  const [state,setState]=useState<any>()
  useEffect(()=>{
console.log("first",state)
  },[state])
  return  <div className="flex flex-col justify-around mx-auto p-2  w-full h-[90vh] sm:w-72">
{/* <InputDeviceInfo/> */}
    </div>

}



export default ForgotPassword