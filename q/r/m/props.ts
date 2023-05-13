import { supabase } from "@/lib/Store";

export const get_props=async()=>{
  const { data: props, error, count } = await supabase.from("props").select("*").order("created_at",{ ascending: false });
  return {props, error, count}
}