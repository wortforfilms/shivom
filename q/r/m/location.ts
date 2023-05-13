import { supabase } from "@/lib/Store";

export const get_locations=async()=>{
  const { data: locations, error, count } = await supabase.from("location").select("*").order("created_at",{ ascending: false });
  return {locations, error, count}
}