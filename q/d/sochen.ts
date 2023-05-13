import { supabase } from "@/lib/Store";

export const delete_sochen_by_id=async(id:string,user_id:string )=>{
  console.log("removing soch",id, user_id)
  const { data: sochen, error } = await supabase.from("sochen").delete().eq("id",id)
  return {sochen, error}
}