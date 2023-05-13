import { supabase } from "@/lib/Store";

export const delete_film_by_id=async(id:string)=>{
  console.log("removing film",id)
  const { data: film, error } = await supabase.from("film").delete().eq("id",id).order('created_at',{ ascending: false });
  return {film, error}
}