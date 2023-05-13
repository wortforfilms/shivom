import { supabase } from "@/lib/Store"

export const check_film_exist=async(id:any)=>{
    const {data,error}=await supabase.from('film').select('*').eq('imdb_id',id)
  return {data,error}
  }
  
  
  export const create_film_feed=async(id:any,data:any)=>{
    const {data:film,error}=await supabase.from('film').insert([{
      imdb_id:id,
      images:[data.image],
      title:data.title,
      plot:data.plot,
      synopsis:data.synopsis,
      release_year:data.release_year
    }])
  return {film,error}
  }
  
  export const update_film_feed=async(id:any,data:any)=>{
    const {data:film,error}=await supabase.from('film').update([{
      images:[data.image],
      title:data.title,
      plot:data.plot,
      synopsis:data.synopsis,
      // cast:[
      //   ...data.cast
      // ],
      // crew:[...data.crew]
    }]).eq('imdb_id',id)
  return {film,error}
  }