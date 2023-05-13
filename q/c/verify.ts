import { supabase } from "@/lib/Store";

export const create_verification_token=async(data:any)=>{
  const { data: verify, error } = await supabase.from("verify").insert([
    {
   
      data: data

    },
  ]);

  return {verify, error}
}