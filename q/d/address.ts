import { supabase } from "@/lib/Store";

export const delete_address_by_user=async(id:string)=>{
  console.log("removing address",id)
  const { data: addresses, error } = await supabase.from("address").delete().eq("id",id).order('created_at',{ ascending: false });
  return {addresses, error}
}