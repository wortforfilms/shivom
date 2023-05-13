import { supabase } from "@/lib/Store";

export const get_item_for_id=async(id:any)=>{
  const { data: item, error } = await supabase.from("shorts").select("*").eq("id",id);
  console.log(item,'-->')
  return {item, error}
}