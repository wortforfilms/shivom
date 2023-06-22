import { supabase } from "@/lib/Store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const get_collection=async(title:any)=>{
  const {data,error}=await supabase.from('collection').select('*').eq('title',title)
return {data,error}
}

const Collection=()=>{
  
  const router=useRouter()
  const {title}=router.query
  const [collection,setCollection]=useState<any>()

  useEffect(() => {
    let mount=true
    if(mount && title){
      get_collection(title).then(res=>{
        setCollection(res.data)
      }).catch(error=>console.log(error))
    }
  
    return () => {
      mount=false
    }
  }, [title])
  



  return <div>
{title}
<div>{JSON.stringify(collection)}</div>
  </div>
}

export default Collection