import { supabase } from "@/lib/Store";


export  const initialize_user_subscription=async(userId:any)=>{
  if(userId){

    const { data, error } = await supabase.from("subscription").insert([{
      crewbox: {
        active:false,
        active_till:"",
        label:"Crew Box",
        payment_id:"",
        step:"await init",
        subscription_type:"",
        renumrations:[],
        roles:[]
      },
      castbox: {
        active:false,
        active_till:"",
        label:"Cast Box",
        payment_id:"",
        step:"await init",
        subscription_type:""
      },
      hodbox: {
        active:false,
        active_till:"",
        label:"Hod Box",
        payment_id:"",
        step:"await init",
        subscription_type:"",
        renumrations:[],
        roles:[]
      },
      filmbox: {
        active:false,
        active_till:"",
        label:"Film Box",
        payment_id:"",
        step:"await init",
        subscription_type:""
      },
      lpbox: {
        active:false,
        active_till:"",
        label:"Lp Box",
        payment_id:"",
        step:"await init",
        subscription_type:""
      },
      coinbox: {
        active:false,
        active_till:"",
        label:"Coin Box",
        payment_id:"",
        step:"await init",
        subscription_type:""
      },
      customer:userId
      
    }]).select('*')
    return {data,error}
  }
  }