import { supabase } from "@/lib/Store"

export  const update_user_rating_for_post=async( post_type:any,post_id:any,user_id:any,score:number)=>{

  const {data: posts, error}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id).eq('pr_post_type',post_type)
  
  if(posts){
    console.log(posts)
  }

  const {data:ap,error:err}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id)





  return {ap,err}
}