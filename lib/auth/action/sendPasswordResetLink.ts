import crypto from "crypto";
import { supabase } from "@/lib/Store";
import { sendPasswordResetRequest } from "../../mailer/forgot_reset";
import { baseURL } from "@/constants/containers";
// import { baseURL } from "@/constant/containers";




export async function sendPasswordResetLink(email: any) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(email, salt, 7860, 64, "sha512")
    .toString("hex");

  const { data: v_token, error } = await supabase
    .from("verify")
    .insert([
      {
        email: email,
        v_token: hash,
        device_id: salt,
      },
    ])
    .select("*");


  console.log('--->> to verify reset', v_token);
  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user)
  // send reset link
  // 
  const url = `${baseURL}/auth/reset?token=${hash}`;
  const identifier = `tlp-${email}`;
  // const email=username
  const token = hash;



  await sendPasswordResetRequest(
    email,
    url,
    token,
    baseURL,
    identifier
  ).then(res => {

    // console.log('----->success',res)
    return { v_token, createdAt: Date.now() };
  }).then(error => {
    console.log("---=> pasword reset mail sending error", error);

    return error;
  });

}
