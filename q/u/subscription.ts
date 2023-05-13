import { supabase } from "@/lib/Store"

export const activate_crew_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        crewbox: {
            active:true,
            active_till:"",
            label:"Crew Box",
            payment_id:"",
            step:"await init",
            subscription_type:"",
            renumrations:[],
            roles:[]
        }
    }]).select('crewbox').eq('customer',userId)
    return { data, error }

}

export const activate_cast_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        castbox: {
            active:true,
            active_till:"",
            label:"Cast Box",
            payment_id:"",
            step:"await init",
            subscription_type:""
        }
    }]).select('castbox').eq('customer',userId)
    return { data, error }
}

export const activate_film_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        filmbox: {
            active:true,
            active_till:"",
            label:"Film Box",
            payment_id:"",
            step:"await init",
            subscription_type:""
        }
    }]).select('filmbox').eq('customer',userId)
    return { data, error }
}

export const activate_hod_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        hodbox: {
            active:true,
            active_till:"",
            label:"HOD Box",
            payment_id:"",
            step:"await init",
            subscription_type:""
        }
    }]).select('hodbox').eq('customer',userId)
    return { data, error }
}

export const activate_lp_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        lpbox: {
            active:true,
            active_till:"",
            label:"Lp Box",
            payment_id:"",
            step:"await init",
            subscription_type:""
        }
    }]).select('lpbox').eq('customer',userId)
    return { data, error }
}

export const activate_coin_box = async (userId: any) => {
    const { data, error } = await supabase.from("subscription").update([{
        coinbox: {
            active:true,
            active_till:"",
            label:"Coin Box",
            payment_id:"",
            step:"await init",
            subscription_type:""
        }
    }]).select('coinbox').eq('customer',userId)
    return { data, error }
}

export const update_crew_renumrations=async(userId:any,renums:any)=>{
    const { data, error } = await supabase.from("subscription").update([{
        crewbox: {
            renums:renums
        }
    }]).select('crewbox').eq('customer',userId)
    return { data, error }

}

export const update_cast_renumrations=async(userId:any,renums:any)=>{
    const { data, error } = await supabase.from("subscription").update([{
        castbox: {
            renums:renums
        }
    }]).select('castbox').eq('customer',userId)
    return { data, error }
}

export const update_lp_renumrations=async(userId:any,renums:any)=>{
    const { data, error } = await supabase.from("subscription").update([{
        lpbox: {
            renums:renums
        }
    }]).select('lpbox').eq('customer',userId)
    return { data, error }
}

export const update_hod_renumrations=async(userId:any,renums:any)=>{
    const { data, error } = await supabase.from("subscription").update([{
        castbox: {
            renums:renums
        }
    }]).select('hodbox').eq('customer',userId)
    return { data, error }
}

