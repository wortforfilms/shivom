import { supabase } from "@/lib/Store";

export const create_camera=async(data:any,userId:string,pin:any)=>{
  const { data: camera, error } = await supabase.from("camera").insert([
    {
      owner_id:userId,
      pin:pin,
      data:data
      
    
    },
  ]);

  return {camera, error}
}