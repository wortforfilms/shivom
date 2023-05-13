import { supabase } from "@/lib/Store";

export const update_camera_pics = async (data: any, id: string) => {

  const {data: c,error:e}=await supabase
  .from("camera").select
  ('images').eq("id", id);

  if(c){
console.log("images",c)
    const imgs= c[0].images
    const { data: camera, error } = await supabase
    .from("camera")
    .update([
      {
        images: imgs?[...imgs,data]:[data],
      },
    ])
    .eq("id", id);
    
    return { camera, error };
  }
};
