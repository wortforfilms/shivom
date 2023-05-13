import { supabase } from "@/lib/Store"
import { find_device_by_token } from "../r/s/device"

export const update_device_visit = async (device:any,devi:any) => {
    const {data,error}=await supabase.from('device').update([{
      visits: (visit:any)=>visit+1,
      ...devi,
      pin:[devi.pin],
      updated_at:new Date(),
      status:"visiting back"
    }]).eq('id',device.id).select('*')

    return {data,error}
  }

  export const update_device_location = async (device:any, pin:any) => {

    const {data:exist,error} = await supabase.from('device').select('*').eq('id',device.id)

    if(error){
      console.log(error,'error getting device')
    }
    if(exist && exist[0].location[0]===pin){
      console.log('no change in movement', exist[0])
    } else {
      const _pin=[{pin,update:new Date()}]
      await supabase.from('device').update([{
        location: _pin,
        status:"updating motion",
        update_at: new Date()
      }]).eq('id',device.id)
    }
  }


  export const add_visit = async (device_id: any) => {
    find_device_by_token(device_id).then(
      res=>console.log(res.device)
    ).catch(error=>{
      console.log(error)
    })
    }