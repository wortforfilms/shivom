import { supabase } from "@/lib/Store";
import { onlyUnique } from "@/util/unique";




export const add_user_to_device = async (earth: any, userId: any) => {
  const { data, error } = await supabase.from('device').update([{
    users: (u: any) => u ? [...u, userId].filter(onlyUnique) : [userId]
  }]);
  return { data, error };

};
