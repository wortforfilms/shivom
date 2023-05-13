import { supabase } from "@/lib/Store";

export const create_fc=async(token:any, id:any, message:string)=>{
  const { data: tok, error } = await supabase.from("not_if_ic_at_ions").insert([
    {
      fc_token:token,
      topics:["New device registered"],
      collections:["User collection"],
      profile_id:id,
      messages:[message]

    },
  ]);

  return {tok, error}
}

export const create_location_fc=async(token:any, id:any, message:string)=>{
  const { data: tok, error } = await supabase.from("not_if_ic_at_ions").insert([
    {
      fc_token:token,
      topics:["New device registered location"],
      collections:["User collection for travel"],
      profile_id:id,
      messages:[message]

    },
  ]);

  return {tok, error}
}
