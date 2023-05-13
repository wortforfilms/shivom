// import { HeaderCard } from "@/display/card/HeaderCard"
// import { Day } from "@/factory/events/calender/Day"
// import { Month, MonthViewPost } from "@/factory/events/calender/Month"
import { supabase } from "@/lib/Store"
// import { supabase } from "@/lib/Store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const get_post_by_id=async(id:any)=>{
  const {data,error}=await supabase.from('post').select('*').eq('id',id).single()
  return {data,error}
}

const ViewOnCalender=()=>{

  const router=useRouter()
  const {type,id}=router.query
  const [post,setPost]=useState<any>(null) 
  useEffect(() => {
    let mount=true
    if(mount){
      // console.log(type,id,'---=>')
  get_post_by_id(id).then(res=>{
    setPost(res.data)
  }).catch(error=>console.log(error))
    }
  
    return () => {
      mount=false
    }
  }, [id])
  
  return <div className="p-2">
    {/* <HeaderCard heading={`${type} break ${id}`}/> */}
    {/* <Day/> */}
  {/* {post &&  <MonthViewPost post={post}/>} */}
  {post?.content && <div dangerouslySetInnerHTML={{__html:post?.content}}/>}
  </div>
}

export default ViewOnCalender

// registration script
// 7 steps
// $ear =>ch
// create
// pay for views $99.00 budget reports
// pay for view $49.00 screenplay_outline for one
//  reigster title 
// download assets
// try one for free
// free ipr is secured by platform
// nirdharit karain निर्धारित करें 
// धरती : पुर्ज़ा पूजा 
// मेरा तेरा सबका 
// सब तेरा तेरा 
// एक दतनश दत्तनश बनाएँ 
// कि जैन जब 
// एक कम्पोनेंट जिसकी उप्लब्धी भाषा है 