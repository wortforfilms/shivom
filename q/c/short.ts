import { supabase } from "@/lib/Store";
import { create_sochen } from "./sochen";


export const create_sales_short=async(data:any,userId:string,type:string)=>{
  const { data: item, error } = await supabase.from("shorts").insert([
    {
      author_id:userId,
      data:data,
      type:type,
      status:"draft"

    },
  ]);
  create_sochen({ data: item }, "sales draft created");


  return {item, error}
}


export const create_troubleshoot_short=async(data:any,userId:string,type:string)=>{
  const { data: item, error } = await supabase.from("shorts").insert([
    {
      author_id:userId,
      data:data,
      type:type

    },
  ]);
  create_sochen({ data: item }, "item draft started by vender");


  return {item, error}
}