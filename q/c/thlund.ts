import { supabase } from "@/lib/Store";

export const create_subscription_handler_thlund=async(data:any,userId:string,deviceId:string)=>{
  const { data: thlund, error } = await supabase.from("thlund").insert([
    {
      customer:userId,
      subscription_type: data.subscription_type,
      distribution_bag: data.distribution_bag,
      roles: data.role,
      threads: data.threads,
      payment: data.payment,
      lamps:data.lamps,
      weather:data.weather,
      runtime: data.runtime

    },
  ]);

  return {thlund, error}
}