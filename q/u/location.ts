import { supabase } from "@/lib/Store";

export const update_location_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("location").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: location, error } = await supabase
    .from("location")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { location, error };
  }
};
