import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Admin=(props:any)=>{
  const [matter,setMatter]=useState<any>([
    {
      device:"id",
      users:['1','2'],
      posts:[{}],
      comments:[],
      current_status:"online",
      current_route:'/blog/{}',
      history:[{time:"",route:""}]
    }
  ])

  const {initialReduxState}=props
const earth:typeof  initialReduxState=useSelector(state=>state)
const  router=useRouter()
useEffect(() => {
  let mount=true
  if(earth.auth.authenticated && mount){
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
<div className="flex flex-row w-full gap-2">

  {
    matter.map((ut:any,index:number)=>{
      return <div key={index}>
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