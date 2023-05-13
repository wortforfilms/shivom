import { supabase } from "@/lib/Store";

export const create_gst_db=async(item:any)=>{

  const { data: address, error } = await supabase.from("get-gst").insert([
    {
      "Schedules":item["Schedules"],
      "S. No.":item["S. No."],
      "Chapter / Heading /":item["Chapter / Heading /"],
      "Description of Goods":item["Description of Goods"],
      "CGST Rate (%)":item["CGST Rate (%)"],
      "SGST / UTGST Rate (%)":item["SGST / UTGST Rate (%)"],
      "IGST Rate (%)":item["IGST Rate (%)"],
      "Compensation Cess":item["Compensation Cess"]
    },
  ]);

  return {address, error}

}