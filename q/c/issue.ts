import { supabase } from "@/lib/Store";

export const create_issue_handler=async(data:any,userId:string)=>{
  const { data: issue_handler, error } = await supabase.from("profile").insert([
    {
      su_net_id:userId,
    
    },
  ]);

  return {issue_handler, error}
}