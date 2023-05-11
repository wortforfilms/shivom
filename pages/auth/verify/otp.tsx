// import { Container } from "@/display/element/Container"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import { MessageActionCard } from "../../../display/card/MessageActionCard";
import { range } from "@/util/createRange";





const VerifyOTP=()=>{
  const [state,setState]=useState<any>('Verified')
  const router=useRouter()
  const {OTP}=router.query
  useEffect(()=>{
console.log("first",state, OTP)
// if valid for device show form

  },[state,OTP])

  useEffect(() => {
    let mount=true
    
  
    return () => {
      mount=false
    }
  }, [])
  

  // function OTPInput(event:any) {
  //   const inputs = document.querySelectorAll('#otp > *[id]');
  //   for (let i = 0; i < inputs.length; i++) 
  //   { inputs[i].addEventListener('keydown', function(event:any) { 
  //     if (event.key==="Backspace" ) { 
  //       inputs[i].value='' ; 
  //       if (i !==0) inputs[i - 1].focus(); 
  //     } else { 
  //       if (i===inputs.length - 1 && inputs[i].value !=='' ) { 
  //         return true; 
  //       } else if (event.keyCode> 47 && event.keyCode < 58) { 
  //         inputs[i].value=event.key; 
  //         if (i !==inputs.length - 1) inputs[i + 1].focus(); 
  //         event.preventDefault(); 
  //       } else if (event.keyCode> 64 && event.keyCode < 91) { 
  //         inputs[i].value=String.fromCharCode(event.keyCode); 
  //         if (i !==inputs.length - 1) inputs[i + 1].focus(); 
  //         event.preventDefault(); 
  //       } } }); } } })


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
      <div>
<div className="flex flex-row gap-1 mb-6">
{
  range(0,4).map((str)=>{
return <input type="number" key={str} id={`otp_${str}`} maxLength={1} className="w-12 h-12 p-2 rounded-lg m-auto border-2 border-gray-300 shadow-lg"
onChange={()=>{
  document.getElementById(`otp_${str+1}`)?.focus()
}}
/>

  })
}
{/* <input type="number" maxLength={1} className="w-12 h-12 p-2 rounded-lg m-auto border-2 border-gray-300 shadow-lg"/>
<input type="number" maxLength={1} className="w-12 h-12 p-2 rounded-lg m-auto border-2 border-gray-300 shadow-lg"/>
<input type="number" maxLength={1} className="w-12 h-12 p-2 rounded-lg m-auto border-2 border-gray-300 shadow-lg"/>
<input type="number" maxLength={1} className="w-12 h-12 p-2 rounded-lg m-auto border-2 border-gray-300 shadow-lg"/> */}
</div>
<div className="bg-pink-500 hover:bg-blue-500 mb-8 cursor-pointer hover:shadow-lg text-white p-2 rounded-lg text-center"
      onClick={() => {
        // action();
      }}
    >Verify OTP</div>
      </div>
  {/* {state==='Expiered' && <MessageActionCard messages={["OTP Expired..","OTP seems to have expired.. Use link within 10 mins.. You can resend link by clicking button below."]} action_text="Resend Verification Link" action={resend_link}/>}
  {state==='Verified' && <MessageActionCard messages={["OTP Successfully Verfied..","You have successfully verified OTP!!"]} action_text="Continue with profile!!!" action={goto_profile}/>} */}

    <div className="rounded-lg p-2 shadow-lg">

    </div>
</div>
    </div>
  </>
}


export default VerifyOTP