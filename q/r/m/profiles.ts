import { equal } from "assert";
import { supabase } from "@/lib/Store";

export const get_user_profile=async()=>{
  // console.log("get user profile", userId)

  const { data: profiles, error } = await supabase.from("profile").select("*");

  return {profiles, error}
}