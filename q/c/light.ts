import { supabase } from "@/lib/Store";

export const create_lights=async(data:any,userId:string,pin:any)=>{
  const { data: light, error } = await supabase.from("light").insert([
    {
      author_id:userId,
      pin:pin,
      data:data
    },
  ]);

  return {light, error}
}