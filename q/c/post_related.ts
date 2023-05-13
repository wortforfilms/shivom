import { supabase } from "@/lib/Store"

export  const update_user_rating_for_post=async( post_type:any,post_id:any,user_id:any,score:number)=>{

  const {data: posts, error}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id).eq('pr_post_type',post_type)
  
  if(posts){
    console.log(posts)
  }

  const {data:ap,error:err}=await supabase.from('post_related').select('*').eq('pr_post_id',post_id)


  return {ap,err}
}

export const initiate_short_related_stats = async (post_id: any, userId: number) => {
  const { data, error } = await supabase.from("post_related").insert([
    {
      pr_post_id: post_id,
      pr_post_type: "shorts",
      total_views:1,
      viewed_by: [userId],
    },
  ]);

  return {data,error}
  // post_
};

export const add_like=async(post:any,userId:number)=>{
  const {data:prs,error:err}=await supabase.from("post_related").select('*').eq('pr_post_id',post.id).eq('pr_post_type',post.type)
  
  if(prs){

    const { data: prs_n, error } = await supabase.from("post_related").update([
      {         
        likes: prs[0].liked +1,
        liked_by: [...prs[0].liked_by,userId],
      },
    ]).eq('pr_post_id',post.id).eq('pr_post_type',post.type)
    
    return {prs_n,error}
  }
}

export const add_comment=async(post:any,userId:number)=>{
  const {data:prs,error:err}=await supabase.from("post_related").select('*').eq('pr_post_id',post.id).eq('pr_post_type',post.type)
  
  if(prs){

    const { data: prs_n, error } = await supabase.from("post_related").update([
      {         
        likes: prs[0].liked +1,
        liked_by: [...prs[0].liked_by,userId],
      },
    ]).eq('pr_post_id',post.id).eq('pr_post_type',post.type)
    
    return {prs_n,error}
  }
}