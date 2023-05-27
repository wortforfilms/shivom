

import { useState } from "react";

import { BiHide, BiShow } from "react-icons/bi";



export const TextInput=(props:any)=>{
  const {register,fl}=props
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <input {...register(fl?.name?fl.name:"email")} className='bg-gray-300 p-2 w-full'  type="text" />
</div>
}

export const RadioInput=(props:any)=>{
  const {register,fl}=props
  const [val,setVal]=useState<any>(null)
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <select {...register(fl?.name?fl.name:"email")} defaultValue={val} className='bg-gray-300 p-2 w-full'  
  onChange={(e:any)=>{
    setVal(e.target.value)
  }}
  >
    {
      fl?.options.map((opt:any,index:number)=>{
        return <option key={index}
        value={opt}
        >{opt}</option>
      })
    }
    </select>
</div>
}

export const TextAreaInput=(props:any)=>{
  const {register,fl}=props
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <textarea {...register(fl?.name?fl.name:"email")} className='bg-gray-300 p-2 w-full' rows={3} type="text" />
</div>
}


export const EmailInput=(props:any)=>{
  const {register,fl}=props
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <input {...register(fl?.name?fl.name:"email")} className='bg-gray-300 p-2 w-full'  type="email" />
</div>
}

export const PhoneInput=(props:any)=>{
  const {register,fl}=props
  return    <div className='p-2 bg-white w-full'>
    <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"phone")} 
  autoComplete="phone"
  className='bg-gray-300 p-2 w-full'  type="tel" />
</div>
}

export const PasswordInput=(props:any)=>{
  const {register,fl}=props
  const [show,setShow]=useState(false)
  return <div className='p-2 bg-white w-full'>
    <label>{fl?.label}</label><br />
    <div className="flex flex-row">

  <input {...register(fl?.name?fl.name:"password")} autoComplete="current-password" className='bg-gray-300 p-2 w-full'  type={show?"text":"password"} />
<div 
  className="text-3xl m-auto bg-gray-300 p-2"
 >
  {show?<BiHide
  onClick={()=>{
    setShow
    (!show)
  }}
  />:<BiShow
  onClick={()=>{
    setShow
    (!show)
  }}
  />}
    </div>

  </div> 

</div>
}

export const DateInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
    <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"dob")} className='bg-gray-300 p-2'  type="date" />
</div>
}

export const TimeInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="time" />
</div>
}

export const SelectInput=(props:any)=>{
  const {register,fl}=props
  const [val,setVal]=useState<any>(null)
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <select {...register(fl?.name?fl.name:"email")} defaultValue={val} className='bg-gray-300 p-2 w-full'  
  onChange={(e:any)=>{
    setVal(e.target.value)
  }}
  >
    {
      fl?.options.map((opt:any,index:number)=>{
        return <option key={index}
        value={opt}
        >{opt}</option>
      })
    }
    </select>
</div>
}

export const MultiSelectInput=(props:any)=>{
  const {register,fl}=props
  const [val,setVal]=useState<any>(null)
  return    <div className='p-2 bg-white w-full'>
  <label>{fl?.label}</label><br />
  
  <select multiple {...register(fl?.name?fl.name:"email")} defaultValue={val} className='bg-gray-300 p-2 w-full'  
  onChange={(e:any)=>{
    setVal(e.target.value)
  }}
  >
    {
      fl?.options.map((opt:any,index:number)=>{
        return <option key={index}
        value={opt}
        >{opt}</option>
      })
    }
    </select>
</div>
}

export const PinInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="text" />
</div>
}


export const TwoPinInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="text" />
</div>
}

export const  ImageInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="text" />
</div>
}

export const  VideoInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="video" />
</div>
}

export const  AudioInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="audio" />
</div>
}

export const  FileInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="file" />
</div>
}

export const RangeInput=(props:any)=>{
  const {register,fl}=props
  
  return <div className='p-2 bg-white  w-full'>
  <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"tob")} className='bg-gray-300 p-2'  type="range" />
</div>
}

// design field
const field={
  type:"",
  name:"",
  label:"",
  message:"",
  options:[""],
  value:"",
  required:false,
  e_message:""
}
