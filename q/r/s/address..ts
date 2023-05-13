import { supabase } from "@/lib/Store";

export const get_addresses_by_user=async(userId:string)=>{
  console.log("getting addresses",userId)
  if(userId){

  const { data: addresses, error } = await supabase.from("address").select("*").eq("owner_id",userId).order('created_at',{ ascending: false });
  return {addresses, error}
  }
}