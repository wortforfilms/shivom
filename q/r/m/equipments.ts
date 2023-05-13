import { supabase } from "@/lib/Store";

export const get_equipments=async()=>{
  const { data: equipments, error, count } = await supabase.from("equipment").select("*").order("created_at",{ ascending: false });
  return {equipments, error, count}
}