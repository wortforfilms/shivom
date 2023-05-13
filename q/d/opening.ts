import { supabase } from "@/lib/Store";

export const delete_openings_by_project_id=async(id:string)=>{
  console.log("removing opening for project",id)

  if(id){
    const { data: opn, error } = await supabase.from("opening").delete().eq("project_id",id);
    return {opn, error}

  }
}