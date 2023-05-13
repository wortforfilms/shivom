import { supabase } from "@/lib/Store";

export const create_location=async(data:any,userId:string,pin:any)=>{
  const { data: location, error } = await supabase.from("location").insert([
    {
      author_id:userId,
      pin:[],
      data:data

    
    },
  ]);

  return {location, error}
}

