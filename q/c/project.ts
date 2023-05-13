import { supabase } from "@/lib/Store";
import { create_sochen } from "./sochen";


export const create_project=async(data:any,userId:string)=>{
  const { data: project, error } = await supabase.from("project").insert([
    {
      author_id:userId,
      project_title:data.project_title,
      project_type:data.project_type,
      project_plot: data.project_plot,
      project_synopsys: data.project_synopsys,
      project_requirments:data.project_requirments,
      imdb:data.imdb,
      duration:data.project_duration,
      // language:data.language,
      project_location:data.project_location,

      language:data.project_languages,
      story:data.story,
      twitter:data.twitter,
      instagram:data.instagram,
      linkedin:data.linkedin,
      facebook:data.facebook
    },
  ]);
  create_sochen({ data: project }, "project created");


  return {project, error}
}


