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
  return <></>
//   return <Container>
//     <div className="flex flex-col justify-around mx-auto p-2  w-full sm:w-72">
// <div className="">
//  <Form state={{ label: "Forgot Password", fields: forgot_form_schema }} validationSchema={forgot_yup_validation} setParent={setState} action_type="Send Link"/>
//     <div className="rounded-lg p-2 bg-white mt-4 shadow-lg">
//       <MixLink messages={["Already registered...","Login here!!"]} link="/auth/login"/>
//       <MixLink messages={["New User...","Register here!!"]} link="/auth/register"/>
//       {/* <MixLink messages={["Forgot Password...","Click here!!"]} link="/auth/forgot"/> */}

//     </div>
// </div>
//     </div>
//   </Container>
}



export default ForgotPassword