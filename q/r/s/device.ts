import { supabase } from "@/lib/Store"

export const find_device_by_token = async (token: any) => {
    const { data: device, error } = await supabase.from("device").select('*').eq("token", token)
    return { device, error }
  }


export const find_device_by_id = async (id: any) => {
    const { data: device, error } = await supabase.from("device").select('*').eq("id", id)
    return { device, error }
  }

export const find_user_devices=async(userId:any)=>{
  const {data,error}=await supabase.from("device").select('*').eq('users',userId)
  return {data,error}
}