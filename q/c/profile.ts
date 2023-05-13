import { supabase } from "@/lib/Store";


export const create_profile=async(data:any,userId:string)=>{
  console.log("gettng first from ", userId)
  if(userId!==undefined){

    const { data: profile, error } = await supabase.from("profile").insert([
      {
        su_net_id:userId,
        first_name:data.first_name,
        middle_name:data.middle_name,
        last_name: data.last_name,
        phone: data.phone,
        gender: data.gender,
        date_of_birth:data.date_of_birth,
        profile_image:data.profile_image,
        facebook:data.facebook,
        twitter:data.twitter,
        instagram:data.instagram,
        linkedin:data.linkedin
      },
    ]);
    
    // const username=await supabase.
    
    const update_user=async()=>{
      const { data: user, error } = await supabase.from("su_net").update([
        {
          profiled: true
        },
      ]).select
      ('profiled').eq('id',userId);
      console.log(user,"updated-----> profile")
    }
    if(error){
      console.log(error,'error updating user')
    }
    
    if(profile){
      update_user()
    }
    
    return {profile, error}
  }
}



export const transaction=async(data:any,userId:any)=>{

  const {data: order, error}=await supabase.from("").insert([{
    author:userId,
    paid_by:data.paid_by,
    paid_to: data.paid_to,
    upi_by: data.paid_by,
    upi_to: data.upi_to,
    verify: data.verify,
    verifyO: data.verifyO

  }])


  return {order, error}
}


export const create_poll=async(data:any, userId:string)=>{
  const {data:poll,error}=await supabase.from("post").insert([{
    author: userId,
    type:"poll",
    question: data.q,
    answer: data.a
  }])
  return {poll,error}
}  


