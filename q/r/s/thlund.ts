import { equal } from "assert";
import { supabase } from "@/lib/Store";

export const get_thlund_profile=async(userId:string)=>{
  const { data: thlund, error } = await supabase.from("thlund").select("*").eq("customer",userId);

  create_farm_input_fields:""
  return {thlund, error}
}