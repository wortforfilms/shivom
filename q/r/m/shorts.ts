import { supabase } from "@/lib/Store";

export const get_items_for_sales=async()=>{
  const { data: items, error } = await supabase.from("shorts").select("*").eq("type","salesshort").order("created_at",{ascending
  :false});
  return {items, error}
}



export const get_filterd_items_for_sales=async(category:string, key:string)=>{
  const { data: items, error } = await supabase.from("shorts").select("*").eq("type","salesshort").textSearch("data", category && key ).order("created_at",{ascending
  :false});
  return {items, error}
}

export const get_latest_shorts=async(count:number)=>{
  const { data: items, error } = await supabase.from("shorts").select("*").eq("type","salesshort").order("created_at",{ascending
  :false}).limit(count);
  return {items, error}
}


export const get_user_shorts=async(count:number, user_id:any)=>{
  const { data: items, error } = await supabase.from("shorts").select("*").eq("author_id",user_id).order("created_at",{ascending
  :false}).limit(count);
  return {items, error}
}