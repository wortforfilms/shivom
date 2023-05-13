import crypto from "crypto";
// import { supabase } from "@/lib/Store";
import { sendVerificationRequest } from "../../mailer/registerVerification";
import { supabase } from "@/lib/Store";
import { baseURL } from "@/constants/containers";
// import { baseURL } from "@/constant/containers";




export async function createUser(username: any, phone: any, password: any) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 7860, 64, "sha512")
    .toString("hex");

  const { data: user, error } = await supabase
    .from("su_net")
    .insert([
      {
        username: username,
        phone: phone,
        password: hash,
        salt: salt,
      },
    ])
    .select("username,id").single();

  console.log(user, "---=>new registered user");

  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user)
  // send verification link
  // 
  const url = `${baseURL}/auth/verification?token=${salt}`;
  const identifier = `tlp-${username}`;
  const email = username;
  const token = salt;



  await sendVerificationRequest(
    email,
    url,
    token,
    baseURL,
    identifier
  );

  if (error) {
    console.log("---=> user signup error", error);
    return error;
  }
  return { user, createdAt: Date.now() };
}
