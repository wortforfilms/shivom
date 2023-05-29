import { AudioInput, DateInput, EmailInput, FileInput, ImageInput, MultiSelectInput, PasswordInput, PhoneInput, PinInput, RadioInput, SelectInput, TimeInput, VideoInput } from '../InputFormFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { motion } from 'framer-motion';
import { check_if_user_exists, create_product, create_service, create_vender, login_user, register_user } from './actions';
import { errorT, notify } from '@/components/toast';

import { form_button, form_container } from '@/sty'
import { collect_data } from '@/lib/auth/act/collect_data';
import { useDispatch, useSelector } from 'react-redux';


export const FormDesign = (props: any) => {
  const { form, validation, action_type, setFormState, setLoading, initialReduxState } = props;

  const earth:typeof initialReduxState=useSelector(state=>state)
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
    {
      mode: "onChange",
      resolver: yupResolver(validation)
    }
  );

  const dispatch=useDispatch()

  const submit = (data: any) => {

    switch (action_type) {
      case "Register":
        check_if_user_exists(data.username, data.phone_number).then(res=>{
          if(res.uexist && res.uexist.length>0){
            // console.log("username already in use")
            errorT("Email already in use try login")

          }
          if( res.pexist && res.pexist.length>0){
            errorT("phone number already in use")
            // notify
          } 
          if( res.uexist.length===0 && res.uexist.length===0){
            notify('-->start registering')
            register_user(data).then(res=>{
              if(res.data){
                setFormState(res.data)
              } 
            })
          }
        })
        break;
        case "Login":
          // login_user(data)
          collect_data(data,setLoading,dispatch,earth)
          break;
          
          case "Pay":
              console.log("first update if live")
          break;

          case "Play":
            console.log('The  player ro sync')
            break;
          
          case "register vender":
            create_vender()
            break;
            case "register  product":
              create_product()
              break;
              case "register service":
                create_service()
                break;
    

      default:
        setFormState(data)
        break;
    }

  };

  return <form className={form_container} onSubmit={handleSubmit(submit)}>

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
      className={form_button}
    >{action_type}</motion.button>
  </form>;
};


