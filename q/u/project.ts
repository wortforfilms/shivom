
import { supabase } from "@/lib/Store";

export const update_project_data = async (data: any, id: number) => {


    const { data: project, error } = await supabase
    .from("project")
    .update([
      {
        data: data,
        synopsis:data.synopsis
      },
    ])
    .eq("id", id);
    
    return { project, error };
  
};