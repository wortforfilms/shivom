import { supabase } from "@/lib/Store";

export const get_user_profile=async(userId:string)=>{
  // console.log("get user profile", userId)
  if(userId){


    const { data: profile, error } = await supabase.from("profile").select("*").eq("su_net_id",userId).order('created_at',{ ascending: true });
    return {profile, error}
  }
}



export const get_user_roles=async(userId:string)=>{

  // console.log("get user roles", userId)

  if(userId){

    
    const { data: roles, error } = await supabase.from("profile").select("*").eq("su_net_id",userId).order('created_at',{ ascending: true });
    return {roles, error}
  }
}