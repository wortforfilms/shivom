import { supabase } from "@/lib/Store"



export const update_project_synopsis = async (synopsis: any, id: any) => {
  const { data, error } = await supabase.from('project').update([{
    project_synopsis: synopsis
  }]).eq('id', id);
  return { data, error };
};
