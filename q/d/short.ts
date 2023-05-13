import { supabase } from "@/lib/Store";

export const delete_short_by_id=async(id:string)=>{
  console.log("removing short",id)
  if(id){

    const { data: cshort, error:err } = await supabase.from("shorts").select('*').eq("id",id);

    console.log(
      '-----> for clearing  s3',cshort, 
    )

    const { data: short, error } = await supabase.from("shorts").delete().eq("id",id);
    return {short, error}
  }
}