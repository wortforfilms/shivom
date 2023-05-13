import { supabase } from "@/lib/Store";

export const create_rooms=async(data:any,userId:string)=>{
  const { data: issue_handler, error } = await supabase.from("rooms").insert([
    {
      authorId:userId,

    },
  ]);

  return {issue_handler, error}
}