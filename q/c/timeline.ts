import { supabase } from "@/lib/Store"

export const create_dev_task_timeline=async(data:any,earth:any)=>{



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

    const{data:task,error}=await supabase.from('timeline').insert([{
        data:[{data}],
        author:earth?.auth?.user?.id,
        type:"user_draft"
    }])
    return {task,error}
}