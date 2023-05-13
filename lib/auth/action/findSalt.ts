// import { supabase } from "@/lib/Store";

import { supabase } from "@/lib/Store";




export async function findSalt(username: any) {
  const { data: user, error } = await supabase
    .from("su_net")
    .select("salt")
    .eq("username", username);
  if (error) {
    return error;
  }

  if (user && user[0]?.username) {
    return { message: "username not avialable", user };
  } else {
    return { message: "username avialable", user: null };
  }
}
