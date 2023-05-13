import { supabase } from "@/lib/Store";

export const create_action_vehicle=async(data:any,userId:string,pin:any)=>{
  const { data: vehicle, error } = await supabase.from("vehicle").insert([
    {
      owner_id:userId,

      pin:pin,
      data: data

    },
  ]);

  return {vehicle, error}
}

