
import { supabase } from "@/lib/Store";

export const update_equipments_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("equipment").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: equipments, error } = await supabase
    .from("equipment")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { equipments, error };
  }
};
