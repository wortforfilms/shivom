// import { Container } from "@/display/element/Container"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { MessageActionCard } from "../../../display/card/MessageActionCard";





const VerifyEmail=()=>{
  const [state,setState]=useState<any>('Verified')
  const router=useRouter()
  const {token}=router.query
  useEffect(()=>{
console.log("first",state, token)
// if valid for device show form

  },[state,token])

  const resend_link=()=>{
    console.log(" send action --->")
  }
  const goto_profile=()=>{
    router.push('/auth/login')
    // console.log(" send to profile action --->")
  }
  return <>
    <div className="flex flex-col justify-around mx-auto p-2 bg-white w-full sm:w-72">
    <div className="">

  {/* {state==='Expiered' && <MessageActionCard messages={["Token Expired..","Token seems to have expired.. Use link within 10 mins.. You can resend link by clicking button below."]} action_text="Resend Verification Link" action={resend_link}/>}
  {state==='Verified' && <MessageActionCard messages={["Successfully Verfied..","You have successfully verified your email. You can login now to start using your TLP account. You need to fill your profile information to get maximum out of TLP."]} action_text="Continue with profile!!!" action={goto_profile}/>} */}

    <div className="rounded-lg p-2 shadow-lg">

    </div>
</div>
    </div>
  </>
}


export default VerifyEmail