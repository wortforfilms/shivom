import { supabase } from "@/lib/Store";

export const get_post_rating=async(  post_id:string, userId:string)=>{

  // console.log("get user roles", userId)

  if(userId){
    const { data: rating, error } = await supabase.from("post_related").select("*").eq("pr_post_id",post_id).order('created_at',{ ascending: true });

    if(rating){
      console.log(rating,'---=>-----=')

      return {rating, error}
    }
  }
}


export const get_post_related_stats=async( post_type:string, post_id:string)=>{

  // console.log("get user roles", userId)


    const { data: stats, error } = await supabase.from("post_related").select("*").eq("pr_post_id",post_id).eq("pr_post_type",post_type).order('created_at',{ ascending: true });

    if(stats){
      console.log(stats,'---=>-----=')

      return {stats, error}
    }

}