import { supabase } from "@/lib/Store";

export const get_room=async(room_name:string)=>{
  const { data: profile, error } = await supabase.from("room").select("*").eq("room_name",room_name);
  return {profile, error}
}