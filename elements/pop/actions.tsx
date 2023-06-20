import { supabase } from "@/lib/Store"
import { onlyUnique } from "@/util/unique"

// @ check post stats
const check_exists=async(doc:any,post_id:any)=>{
  const{data,error}=await supabase.from('post_related').select('*').eq('post_id',post_id).eq('doc_id',doc)
  return {data,error}
}


// @ create post stats
const create_post_stats=async(doc:any,post_id:any,deviceId:any,userId?:any)=>{
  const{data,error}=await supabase.from('post_related').insert([{
      post_id:post_id,
      doc_id:doc,
      total_views:(s:any)=>s?s+1:1,
      viewed_by:[`${deviceId}-${userId}`]
  }]).select('*')
  return {data,error}
}


// @ get post stats
export const posts_stat=(doc:any,post_id:any,userId:any, deviceId:any, setStat:any)=>{
  check_exists(doc,post_id).then(res=>{

      if(res && res.data && res.data.length>0){   
        const views=res.data[0].total_views+1
        // console.log("views-=-=-=>",views)
        const filtered=[`${deviceId}-${userId}`,...res.data[0].viewed_by].filter(onlyUnique)
        // var viewed = filtered.filter((elem,index)=>filtered.findIndex(obj=>obj.value===elem.value)===index)
        // console.log(viewed,'--=set==>',filtered)
        add_view_to_post_stats(views,filtered,post_id).then(data=>{
          if(data && data.data){
            setStat(data.data[0])
          }
        })         
      } else {
          create_post_stats(doc,post_id,deviceId,userId).then(res=>{
              if(res && res.data && res.data.length>0){
                  setStat(res.data[0])
              }
          }).catch(error=>console.log(error))
      }
  }).catch(error=>console.log(error))
}


// @ add view to post 
const add_view_to_post_stats=async(views:any,filtered:any,post_id:any)=>{
  const {data,error}=await supabase.from('post_related').update([{
      total_views:views,
      viewed_by:filtered
  }]).select('*').eq('post_id',post_id)
  return {data,error}
}

// @ add like to post
export const add_like_to_post_stats=async(likes:any,liked:any,post_id:any)=>{
  const {data,error}=await supabase.from('post_related').update([{
      total_likes:likes,
      liked_by:liked
  }]).select('*').eq('post_id',post_id)
  return {data,error}
}

// @ add comments 
// export const add_comments_to_post=async(userId:any,comment:any,stat_id:any,doc:any)=>{
//   const {data,error}=await supabase.from('post_related').insert([{
//       comments:[{
//         comment:comment,
//         author_id:userId,
//         parent_id:parent_id

//       }],
//   }]).select('*').eq('id',stat_id)
//   return {data,error}
// }
// comments:{created_at:"",author_id:"",comment:"",parent:"",doc:""}


// join : roles :{} ui :{} 
// create crew cast talent producer writer investor 