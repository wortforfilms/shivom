import { supabase } from "@/lib/Store"

export const get_dev_task_timelines=async(data:any)=>{



//type:"task timeline"
//author
//contributors
//updated_at
//data:[{route:"",size:"",task:"",
//todo:[{td:"",status:"",tag:"",commit:"",time_stamp:"",changes:""}]
//status:"",commit:"",time_stamp:"",changes:"", tag:""}]
//category: "dev notes"
//sub_category: [""]
//tags:[""] 

    const{data:tasks,error}=await supabase.from('timeline').select('*').eq('type',"task timeline")
    return {tasks,error}
}