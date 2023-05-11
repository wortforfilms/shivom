// import { Container } from "@/display/element/Container"
// import { Form } from "@/display/forms"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as yup from 'yup'
// import { MixLink } from "../../display/element/MixLink";
const register_form_schema=[

  {
    type:"password",
    name:"new_password",
    label:"New Password",
    message:"Enter new password",
    options:[],
    value:[]
  },
  {
    type:"password",
    name:"confirm_new_password",
    label:"Confirm New Password",
    message:"Confirm new password",
    options:[],
    value:[]
  }
]



const register_yup_validation = yup.object().shape({
  new_password: yup.string().min(8).max(250).required("password is required"),
  confirm_new_password: yup.string().min(8).max(250).required("password is required"),
});

const ResetPassword=()=>{
  const [state,setState]=useState<any>()
  const router=useRouter()
  const {token}=router.query
  useEffect(()=>{
console.log("first",state, token)
// if valid for device show form

  },[state,token])

  return <>Log out</>
//   return <Container>
//     <div className="flex flex-col justify-around mx-auto p-2 bg-white w-full sm:w-72">
//     <div className="">

//     <Form state={{ label: "Register", fields: register_form_schema }} validationSchema={register_yup_validation} setParent={setState} action_type="Reset Password"/>

//     <div className="rounded-lg p-2 shadow-lg">
//       <MixLink messages={["Already registered...","Login here!!"]} link="/auth/login"/>
//       <MixLink messages={["New User...","Register here!!"]} link="/auth/register"/>
//       {/* <MixLink messages={["Forgot Password...","Click here!!"]} link="/auth/forgot_password"/> */}

//     </div>
// </div>
//     </div>
//   </Container>
}


export default ResetPassword