import { equal } from "assert";
import { supabase } from "@/lib/Store";

export const get_user_profile=async(formId:string, userId:string)=>{
  const { data: profile, error } = await supabase.from("form").select("*").eq("form_id",formId).eq("user_id",userId);

  create_farm_input_fields:""
  return {profile, error}
}