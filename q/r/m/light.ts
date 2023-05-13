import { supabase } from "@/lib/Store";

export const get_lights=async()=>{
  const { data: lights, error, count } = await supabase.from("light").select("*").order("created_at",{ ascending: false });
  return {lights, error, count}
}