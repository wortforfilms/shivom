
import { supabase } from "@/lib/Store";

export const update_props_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("props").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: props, error } = await supabase
    .from("props")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { props, error };
  }
};
