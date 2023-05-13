import { supabase } from "@/lib/Store";

export const update_light_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("light").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: light, error } = await supabase
    .from("light")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { light, error };
  }
};
