import { AudioInput, DateInput, EmailInput, FileInput, ImageInput, MultiSelectInput, PasswordInput, PhoneInput, PinInput, RadioInput, SelectInput, TimeInput, VideoInput } from '../InputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { motion } from 'framer-motion';
import crypto from "crypto";
import { supabase } from '@/lib/Store';


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
  const {data,error}=await supabase.from('').select('id','username').eq('username',fdata.username)
  return {data,error}
}


export const FormDesign = (props: any) => {
  const { form, validation, action_type, setFormState } = props;

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
    {
      mode: "onChange",
      resolver: yupResolver(validation)
    }
  );

  const submit = (data: any) => {

    switch (action_type) {
      case "register user":
        check_if_user_exists(data.username, data.phone_number).then(res=>{
          if(res.uexist && res.uexist.length>0){
            console.log("username already in use")
          }
          if( res.pexist && res.pexist.length>0){
            console.log("phone number already in use")
          } 
          if( res.uexist.length===0 && res.uexist.length===0){
            console.log('start registering')
            register_user(data).then(res=>{

              if(res.data){
                setFormState(res.data)
              } 
            })
          }
        })
        break;
        case "login user":
          login_user(data)
          break;
    
      default:
        setFormState(data)
        break;
    }

  };

  return <form className={`form-container`} onSubmit={handleSubmit(submit)}>

    {form.map((fl: any, index: number) => {
      return <div key={index} className='w-full'>
        {fl.type === "email" && <EmailInput register={register} fl={fl} />}
        {fl.type === "phone" && <PhoneInput register={register} fl={fl} />}
        {fl.type === "password" && <PasswordInput register={register} fl={fl} />}
        {fl.type === "date" && <DateInput register={register} fl={fl} />}
        {fl.type === "time" && <TimeInput register={register} fl={fl} />}
        {fl.type === "select" && <SelectInput register={register} fl={fl} />}
        {fl.type === "radio" && <RadioInput register={register} fl={fl} />}
        {fl.type === "multiselect" && <MultiSelectInput register={register} fl={fl} />}
        {fl.type === "pin" && <PinInput register={register} fl={fl} />}
        {fl.type === "image" && <ImageInput register={register} fl={fl} />}
        {fl.type === "text" && <TextInput register={register} fl={fl} />}
        {fl.type === "audio" && <AudioInput register={register} fl={fl} />}
        {fl.type === "video" && <VideoInput register={register} fl={fl} />}
        {fl.type === "file" && <FileInput register={register} fl={fl} />}
        <ErrorMessage errors={errors} name={`${fl.name}`}
          render={({ message }) => <p className='text-xs text-red-500'>{message}</p>} />
      </div>;
    })}
    <motion.button
    whileHover={{scale:.95}}
    whileTap={{scale:1.1}}
      type="submit"
      className={'form-button'}
    >{action_type}</motion.button>
  </form>;
};
