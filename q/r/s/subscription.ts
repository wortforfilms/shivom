
import { supabase } from "@/lib/Store";

export const get_user_subscription=async(userId:string)=>{
  const { data: subscription, error } = await supabase.from("subscription").select("*").eq("customer",userId);

  return {subscription, error}
}

export const check_if_user_subscription_exist=async(userId:any)=>{
  const { data, error } = await supabase.from("subscription").select('*').eq('customer',userId)
  return { data, error }
}