// import { supabase } from "@/lib/Store";
import { supabase } from "@/lib/Store";

// Here you should lookup for the user in your DB

export async function findUserExistance(username: any, phone:any) {
  const { data: user, error } = await supabase
    .from("su_net")
    .select("username, salt")
    .or(`phone.eq.${phone},username.eq.${username}`)
  if (error) {
    return error;
  }
  if (user && user[0]?.username) {
    return { message: "username not avialable", user };
  } else {
    return { message: "username avialable", user: null };
  }
}

export async function findUser(username: any) {
  const { data: user, error } = await supabase
    .from("su_net")
    .select("username, salt")
    .eq('username',username)
  if (error) {
    return error;
  }
  if (user && user[0]?.username) {
    return { message: "username not avialable", user };
  } else {
    return { message: "username avialable", user: null };
  }
}
