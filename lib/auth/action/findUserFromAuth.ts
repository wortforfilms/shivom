import { supabase } from "@/lib/Store";




export async function findUserFromAuth(username: any) {
  const { data: user, error } = await supabase
    .from("भोक्तृ")
    .select("id, username, email_verified, dob, tob,pob, biomed, profiled")
    .eq("username", username);
  if (error) {
    return error;
  }
  if (user && user[0]?.username) {
    return { user };
  } else {
    return { message: "username avialable", user: user };
  }
}
