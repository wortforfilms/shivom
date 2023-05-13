import { supabase } from "@/lib/Store";
import { delete_openings_by_project_id } from "./opening";

export const delete_project_by_id=async(id:string, userId:number)=>{
  console.log("removing project",id)

  if(id){

    const { data: project, error:err } = await supabase.from("project").select('author_id').eq("id",id);
var removeopening=false
if(project && project[0].author_id===userId){
    await delete_openings_by_project_id(id).then(res=>{
        if(res?.opn){
            removeopening=true
        }
    })

    if(removeopening){

        const { data: prj, error } = await supabase.from("project").delete().eq("id",id);
        return {prj, error}
    }
}
  }
}