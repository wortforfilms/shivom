import { supabase } from "@/lib/Store";

export const get_user_by_id=async(userId:string)=>{
  console.log("getting avtar",userId)
  const { data: user, error } = await supabase.from("profile").select("id,profile_image, first_name").eq("su_net_id",userId).order('created_at',{ ascending: true });
  return {user, error}
}