import { supabase } from "@/lib/Store"

export  const apply_on_opening=async(opening_id:any, applicant_id:any)=>{

  const {data:ap,error:err}=await supabase.from('application').select('applicants').eq('opening_id',opening_id)

  if(ap){
    const{data:openings,error, count}=await supabase.from('application').update([{
      applicant:[...ap,[applicant_id]]
    }]).select('*').eq("opening_id",opening_id).order("created_at",{ascending:false})
    return {openings,error,count}
  } else {
    const{data:openings,error, count}=await supabase.from('application').insert([{
      applicant:[applicant_id],
      
      opening_id: opening_id
    }]).select('*').order("created_at",{ascending:false})
    return {openings,error,count}
  }
}

export  const ignore_opening=async(opening_id:any, applicant_id:any)=>{

  const {data:ap,error:err}=await supabase.from('application').select('applicants').eq('opening_id',opening_id)

  if(ap){
    const{data:openings,error, count}=await supabase.from('application').update([{
      applicant:[...ap,[applicant_id]]
    }]).select('*').eq("opening_id",opening_id).order("created_at",{ascending:false})
    return {openings,error,count}
  } else {
    const{data:openings,error, count}=await supabase.from('application').insert([{
      applicant:[applicant_id],

      opening_id: opening_id
    }]).select('*').order("created_at",{ascending:false})
    return {openings,error,count}
  }
}
