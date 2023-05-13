import { supabase } from "@/lib/Store"

export  const rate_post=async( post_type:any,post_id:any,user_id:any)=>{

  const {data:ap,error:err}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id)





  return {ap,err}
}

export  const update_like_for_post=async( post_id:any,user_id:any)=>{
  const {data: posts, error}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id)

  if(posts)
{

  const {data:ap,error:err}=await supabase.from('post_related').update([{
    'liked_by':posts[0].liked_by && posts[0].liked_by.includes(user_id)?[...posts[0].liked_by, user_id]:[user_id],
    'total_likes': posts[0].total_likes+1,
  }]).eq('pr_post_id',post_id)
  
  
  
  
  
  return {ap,err}
} 
}




export  const update_user_rating_for_post=async( post_type:any,post_id:any,user_id:any,score:number)=>{

  const {data: posts, error}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id).eq('pr_post_type',post_type)
  
  if(posts){
    console.log(posts)
    
    const {data:ap,error:err}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id)
    
    return {ap,err}
  }
}
