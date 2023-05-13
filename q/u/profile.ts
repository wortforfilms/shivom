// import { onlyUnique } from "../../middleware/withAuth";
// import { onlyUnique } from "@/utils/filter";
import { supabase } from "@/lib/Store";
import { onlyUnique } from "@/util/unique";

export const update_profile_pic = async (data: any, id: string) => {
  const { data: profile, error } = await supabase
    .from("profile")
    .update([
      {
        profile_image: data,
      },
    ])
    .eq("id", id);

  return { profile, error };
};

export const update_user_role = async (data: any, id: string) => {
  const { data: pro, error: err } = await supabase
    .from("profile")
    .select("roles,id")
    .eq("su_net_id", id)
    .order("created_at", { ascending: false });

  if (err) {
    console.log(err, "--=>err updating user profile");
  }
  if (pro && pro[0].id > 0) {
    console.log(pro, "---pro");
    const { data: profile, error } = await supabase
      .from("profile")
      .update([
        {
          roles: [...pro[0].roles, data].filter(onlyUnique
          ),
        },
      ])
      .eq("id", pro[0].id);

    return { profile, error };
  } else {
    console.log("reached")
    const { data: profile, error } = await supabase
      .from("profile")
      .update([
        {
          roles: [data],
        },
      ])
      .eq("su_net_id", id);

     if(error){
      console.log(
        error
      )
     }
    return { profile, error };

  }
};


export const remove_user_role=async(role:string, id:number)=>{
  const { data: profile, error } = await supabase
  .from("profile")
  .select('*')
  .eq("id", id);



  const {data:updated,error:err} = await supabase
  .from("profile")
  .update([{"roles": profile && profile[0].roles.filter((i:any)=>i!==role)}])
  .eq("id", id);
  
  return { updated, error };

}