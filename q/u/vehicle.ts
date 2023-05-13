
import { supabase } from "@/lib/Store";

export const update_vehicle_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("vehicle").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: vehicle, error } = await supabase
    .from("vehicle")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { vehicle, error };
  }
};
