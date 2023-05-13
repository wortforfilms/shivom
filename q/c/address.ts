import { supabase } from "@/lib/Store";

export const create_address=async(data:any,userId:string,pin:any, type:string)=>{

  if(userId){

    const { data: address, error } = await supabase.from("address").insert([
      {
        owner_id:userId,
        pin:pin,
        data:data,
        street_address: data.street_address,
        house_address: data.house_address,
        city: data.city,
        state: data.state,
        country: data.country,
        type: type
      },
    ]);
    
    return {address, error}
  }

}