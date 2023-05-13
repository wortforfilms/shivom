import { supabase } from "@/lib/Store";

export const get_sochen_for_count=async()=>{
  const { data: sochens, error, count } = await supabase.from("sochen").select("*").order("created_at",{ ascending: false }).limit(20);
  return {sochens, error, count}
}


export const get_sochen_for_query=async(searchQuery:string)=>{
  const { data: sochens, error, count } = await supabase.from("sochen").select("*").eq('searchQuery',searchQuery).order("created_at",{ ascending: true });
  return {sochens, error, count}
}


export const get_sochen_for_any=async(searchQuery:string)=>{
  const { data: sochens, error, count } = await supabase.from("sochen").select("*").contains('searchQuery',searchQuery).order("created_at",{ ascending: false });
  return {sochens, error, count}
}

// create command


// login via mobile

// scan to verify
// device_id function auth action scan login verify


// input to command
// fab


// create switch 

// choose emoji
// choose mood
// ['','',]
// variable -> like

// share ->. platform post interaction 

// load_balancer: 
// test_containers:


// docker : 


// set :

// com.github.mobile

// inverse play 
// iphone android 

// play :

// web :

// mob :


// q->ant-> u->cookie
// 