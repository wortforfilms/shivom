import { supabase } from "@/lib/Store";


export const create_sochen=async(data:any,searchQuery:string)=>{

  const {data: exists,error: er}=await supabase.from('sochen').select('*').eq("searchQuery",searchQuery)
  if(exists && exists?.length<2){
    const { data: sochen, error } = await supabase.from("sochen").insert([
      {
        searchQuery,
        data
      },
    ]);
    return {sochen, error}
  } else {
    const sochen =exists
    return {sochen,er}
  }
}
