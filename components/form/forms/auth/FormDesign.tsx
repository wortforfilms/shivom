import { AudioInput, DateInput, EmailInput, FileInput, ImageInput, MultiSelectInput, PasswordInput, PhoneInput, PinInput, RadioInput, SelectInput, TimeInput, VideoInput } from '../../InputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { motion } from 'framer-motion';

export const FormDesign = (props: any) => {
  const { form, validation, action_type, setFormState } = props;

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm(
    {
      mode: "onChange",
      resolver: yupResolver(validation)
    }
  );

  const submit = (data: any) => {
    setFormState(data)
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
