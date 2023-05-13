import { equal } from "assert";
// import { errorT } from "../../../components/forms/auth/Register";
import { supabase } from "@/lib/Store";
import { errorT } from "@/display/toast";

export const get_projects_by_user=async(id:string)=>{
  const { data: projects, error } = await supabase.from("project").select("*").eq("author_id",id);
  return {projects, error}
}

export const get_projects_for_user=async(filters:any)=>{
  const { data: projects, error } = await supabase.from("project").select("*").eq("role",filters.role);
  return {projects, error}
}


export const get_projects_for_count=async(userId:any)=>{
  try {
    
    const { data: projects, error } = await supabase.from("project").select("*").eq('author_id',userId);
    return {projects, error}
  } catch (error) {
    errorT(`${error}`)
  }
}


export const get_projects_for_transaction=()=>{

  
}