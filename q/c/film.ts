import { supabase } from "@/lib/Store"

export const update_film_data=async(id:any,data:any,exist:any)=>{
    const{data:filmData,error}=await supabase.from('film').update([{
        title:data.title,
        genre:[...data.genre.split(',')],
        release_year:data.release_year,
        plot:data.plot,
        certificate:data.certificate,
        runtime:data.runtime,
        imdb_rating:data.rating,
        images:exist.data[0].images?[data.src,data.llim, ...exist.data[0].images]:[data.src,data.llim],
        crew_box:exist.data[0].crew?[ data.crew_l[0],...exist.data[0].crew]:[data.crew_l[0]],
        cast_box:exist.data[0].cast?[ ...data.crew_l.splice(1,3),...exist.data[0].cast]:[...data.crew_l.splice(1,3)]
    }]).eq('imdb_id',id)

    return{filmData,error}

}

export const create_film_data=async(data:any)=>{
    console.log('creation data',data)
    const{data:filmData,error}=await supabase.from('film').insert([{
        title:data.title,
        imdb_id:data.id,
        genre:[...data.genre.split(',')],
        release_year:data.release_year,
        plot:data.plot,
        certificate:data.certificate,
        runtime:data.runtime,
        imdb_rating:data.rating,
        images:[data.llim,data.src],
        crew_box:[data.crew_l[0]],
        cast_box:[...data.crew_l.splice(1,3)]
    }]).select('*')
    if(error){
        console.log(error)
    }
    console.log('data after creation',filmData)
    return{filmData,error}
}