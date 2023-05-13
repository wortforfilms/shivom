import { supabase } from "@/lib/Store";

export const get_cameras=async()=>{
  const { data: cameras, error, count } = await supabase.from("camera").select("*").order("created_at",{ ascending: false });
  return {cameras, error, count}
}