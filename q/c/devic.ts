import { supabase } from "@/lib/Store"

export const create_device = async (device:any,browser: any, location: any, token: any,ip:any) => {
    const { data: new_device, error } = await supabase.from('device').insert([{
        pin:[device],
        browser: browser,
        location: location,
        token: token,
        status:"first init",
        created_at: new Date(),
        ip:ip
    }]
    ).select('*')
    return { new_device, error }
}