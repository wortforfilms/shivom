import { supabase } from "@/lib/Store"



export const get_user_tlp_coins=async(userId:any)=>{
    const{data:tlp_coins,error}=await supabase.from('tlp_coin').select('*').eq('owned_by',userId)
  return {tlp_coins,error}
  }
  
  export const get_user_cast_openings=async(roles:any)=>{
    const{data:cast_openings,error}=await supabase.from('openings').select('*').eq('roles',roles).eq('type','cast')
  return {cast_openings,error}
  }
  
  export const get_user_crew_openings=async(roles:any)=>{
    const{data:crew_openings,error}=await supabase.from('openings').select('*').eq('roles',roles).eq('type','crew')
  return {crew_openings,error}
  }
  
  export const get_user_hod_openings=async(roles:any)=>{
    const{data:hod_openings,error}=await supabase.from('openings').select('*').eq('roles',roles).eq('type','hod')
  return {hod_openings,error}
  }
  
  export const get_user_applications=async(userId:any)=>{
    const{data:user_applications,error}=await supabase.from('application').select('*').eq('applicant_id',userId)
  return {user_applications,error}
  }
  
  export const get_user_projects=async(userId:any)=>{
    const{data:user_projects,error}=await supabase.from('project').select('*').eq('author_id',userId)
  return {user_projects,error}
  }
  
  export const get_user_hirings=async(userId:any)=>{
    const{data:user_hirings,error}=await supabase.from('hirings').select('*').eq('employer',userId)
  return {user_hirings,error}
  }
  
  export const get_user_purchases=async(userId:any)=>{
    const{data:user_purchases,error}=await supabase.from('purchases').select('*').eq('buyer',userId)
  return {user_purchases,error}
  }
  
  export const get_user_rentals=async(userId:any)=>{
    const{data:user_rentals,error}=await supabase.from('rentals').select('*').eq('client',userId)
  return {user_rentals,error}
  }
  
  export const get_user_item_sales=async(userId:any)=>{
    const{data:item_sales,error}=await supabase.from('sales').select('*').eq('seller',userId)
  return {item_sales,error}
  }
  
  export const get_user_service_bookings=async(userId:any)=>{
    const{data:service_bookings,error}=await supabase.from('service_bookings').select('*').eq('service_provider',userId)
  return {service_bookings,error}
  }
  
  export const get_user_rental_bookings=async(userId:any)=>{
    const{data:rental_bookings,error}=await supabase.from('rental_bookings').select('*').eq('provider',userId)
  return {rental_bookings,error}
  }