import { supabase } from "@/lib/Store";

export const create_equipments=async(data:any,userId:string,pin:any)=>{
  const { data: equipment, error } = await supabase.from("equipment").insert([
    {
      author_id:userId,
      pin:pin,
      data:data
      
    
    },
  ]);

  return {equipment, error}
}