import { supabase } from "@/lib/Store";

export const create_opening=async(data:any,userId:string,pin:any)=>{
  const { data: opening, error } = await supabase.from("opening").insert([
    {
      author_id:userId,
      pin:[],
      data:data,
      project_id: data.project_id,
      amount: data.amount,
      dates: data.dates,
      opening_type: data.opening_type,
      role: data.role,
      designation: data.designation,
      department: data.designation,
      payment_type: data.payment_type

    },
  ]);

  return {opening, error}
}
