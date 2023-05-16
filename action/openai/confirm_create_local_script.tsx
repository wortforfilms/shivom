import { supabase } from "@/lib/Store"


export const confirm_create_local_script = async (project_create: any, data: any) => {
  const { data: project, error } = await supabase.from('sochen').insert([{
    searchQuery: project_create,
    data: data
  }]);
  return { project, error };
};
