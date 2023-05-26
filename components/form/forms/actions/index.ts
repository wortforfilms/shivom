import { supabase } from "@/lib/Store"
import crypto from 'crypto'

export const check_if_user_exists=async(username:any,phone:any)=>{
  const {data:uexist,error}=await supabase.from('भोक्तृ').select('id').eq('username',username)
  const {data:pexist,perror}=await supabase.from('भोक्तृ').select('id').eq('phone',phone)
  return {uexist, pexist, error, perror}
}



export const register_user=async(fdata:any)=>{

  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(fdata.password, salt, 7860, 64, "sha512")
    .toString("hex");

  const {data,error}=await supabase.from('भोक्तृ').select('id, username').insert([{
    username:fdata.username,
    phone:fdata.phone_number,
    gender:fdata.gender,
    password:hash,
    spua:{salt:salt},
    dob:fdata.dob,
    tob:fdata.tob,
    pob:fdata.pob
  }])
  return {data,error}
}

export const login_user=async(fdata:any)=>{
  const {data,error}=await supabase.from('').select('id,username,password,spua').eq('username',fdata.username)

  // const verify_password=verify(fdata.password)
  return {data,error}
}


export const create_vender=()=>{
  return "vender"
}

export const create_product=()=>{
  return "product"
}

export const create_service=()=>{
  return "service"
}