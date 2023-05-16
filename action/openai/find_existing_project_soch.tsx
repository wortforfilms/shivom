import { supabase } from "@/lib/Store"


export const find_existing_project_soch = async (project_create: any) => {
  const { data: project, error } = await supabase.from('sochen').select('*').eq('searchQuery', project_create);
  return { project, error };
};
