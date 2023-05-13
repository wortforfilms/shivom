import { supabase } from "@/lib/Store";

export const get_project_info=async(projectId:any)=>{
  const { data: project, error } = await supabase.from("project").select("*").eq("id",projectId);
  return {project, error}
}