import { supabase } from "@/lib/Store";

export const create_props=async(data:any,userId:string,pin:any)=>{
  const { data: prop, error } = await supabase.from("props").insert([
    {
      author_id:userId,
      pin:pin,
      data: data

    },
  ]);

  return {prop, error}
}
