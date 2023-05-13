import { supabase } from "@/lib/Store";




export const user_registration=async(password:any,userId:string, salt:string)=>{

  const { data: auth, error } = await supabase.from("su_net").insert([
    {
      username:userId,
      password: password,
      salt: salt
    
    },
  ]);

  return {auth, error}
}