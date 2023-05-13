import { supabase } from "@/lib/Store";

export const get_vehicles=async()=>{
  const { data: vehicles, error, count } = await supabase.from("vehicle").select("*").order("created_at",{ ascending: false });
  return {vehicles, error, count}
}