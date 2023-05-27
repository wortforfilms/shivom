

import { supabase } from "@/lib/Store";


export async function findUserForAuth(username: any) {
  const { data: user, error } = await supabase
    .from("भोक्तृ")
    .select("username, spua, password")
    .eq("username", username);
  if (error) {
    return error;
  }
  if (user && user[0]?.username) {
    return { user };
  } else {
    return { message: "username avialable", user: null };
  }
}
