import { supabase } from "@/lib/Store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const  get_devices=async()=>{
  const {data,error}=await supabase.from('युक्ति').select('*')
  return {data,error}
}

const  update_device=async(updated:any)=>{
  const {data,error}=await supabase.from('युक्ति').select('*').update([{
    ice_status:updated.status,
    ice_eci:[{current_location:updated.current_location}]
  }])
  return {data,error}
}


const Admin=(props:any)=>{
  const [matter,setMatter]=useState<any>([
    {
      device_id:1,
      device_type:"",
      screen_size:"",
      users:['1','2'],
      // initiated_location:"",
      path:[{time:"",location:""}],
      // posts:[{}],
      // comments:[],
      current_location:{},
      current_status:"online",
      current_user:"",
      current_route:'/blog/{}',
      history:[{time:"",route:""}],
      notify:()=>{},
      block:()=>{},

    }
  ])

  const {initialReduxState}=props
const earth:typeof  initialReduxState=useSelector(state=>state)
const  router=useRouter()
useEffect(() => {
  let mount=true
  if(earth.auth.authenticated && mount){
    get_devices()
return
  } else {
    router.push('/auth/login')
  }

  return () => {
    mount=false
  }
}, [earth.auth])




  return <div className="bg-white p-2 h-full min-h-[90vh]">
    <div className="h-12"></div>
<div className="">

  {
    matter.map((ut:any,index:number)=>{
      return <div key={index} className="flex flex-row justify-around w-full gap-2">
        {
          Object.keys(ut).map((he,ader)=>{
            return <div key={ader} className="text-[8px] sm:text-xs uppercase p-1">{he}</div>
          })
        }
      </div>
    })
  }
  </div>
  </div>
  
}

export default Admin