// import { userAgentFromString } from "next/server";

import { supabase } from "@/lib/Store";
import { user_registration } from "@/q/c/auth";
import { dispatch } from "d3";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


// form to create field 
// type 
// template
// 

import * as yup from "yup";
import { useState } from "react";

const user_schema_messages = [
  "Email is required",
  "Phone is required",
  "Password is required"
]

const user_schema = yup.object().shape({
  email: yup.string().min(7).max(150).required(user_schema_messages[0]),
  phone: yup.string().min(10).max(10).required(user_schema_messages[1]),
  password: yup.string().min(8).max(100).required(user_schema_messages[2]),
})

const user_form_messages = [
  [
    "Enter Email",
    "Enter email i.e. example@test.com"
  ],
  [
    "Enter Phone",
    "Enter phone i.e. 9811*****0"
  ],
  [
    "Enter Password",
    "Enter alphanumeric password minimum 6 characters"
  ]

]

const user_form = [
  {
    type: "email",
    name: "email",
    label: user_form_messages[0][0],
    value: "",
    options: [],
    message: user_form_messages[0][1]
  },
  {
    type: "tel",
    name: "phone",
    label: user_form_messages[1][0],
    value: "",
    options: [],
    message: user_form_messages[1][1]
  },
  {
    type: "password",
    name: "password",
    label: user_form_messages[2][0],
    value: "",
    options: [],
    message: user_form_messages[2][1]
  }
]

const hemant = (props: any) => {
  // rule he=>man=>t>create_b_playgound
  //  निश्चय प्राण प्रतिष्ठा नियम जैन जन अधिकार 
  // सेहत ?¿ माँ प्रथम ममत्व द्वितेय 
  // सवथ्य ¿? ÷?/ नन none ब्लैम blaim ब्लेम :: 
  // मधर मोठेर मोठेर हिंसा परम 
  // आँहिंसा 
  //  ahinsA अहिंसा 
  // {}-=> {A=>हिं =>the Eofhemant विंटर एंड्स here hair केश कंघा चोमब comb कॉम्प चम्पा }
  // आदमीं औरत बालक बालिका 
  // अधिकार स्किल कौशल 
  // ३: २: १; ०;:………Ú
  // ४५६७८९
  // `⁄€‹$ﬁﬂ‡°·‚
  // å©å®µå©å®
  // agarmagar 
  // अगर मगर 
  // राष्ट्र परम माता 
  // कस्टमर ग्रहाकुए 
  // ग्राहक 
  // :…:Ú प्रडूसर ००००ओ 
  // ¿? इंटेंट सोशल उपलिफ़्टमेंट 
  // वेंडर 
  // सर्विसेज़ 
  // समान 
  // 
}

import Image from  'next/image'
import { motion } from "framer-motion";



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
  return <div className='p-2 bg-white w-full'>
    <label>{fl?.label}</label><br />
  <input {...register(fl?.name?fl.name:"password")} autoComplete="current-password" className='bg-gray-300 p-2 w-full'  type="password" />
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

// single list

// {}[]()

//  

// ==> {}==> dixit ===> xx:xy
// d111t
// ∂¡¡¡†
// ˛ˇ ∂´´π 
// symbols in deep 

// INPUT

// detect nearby device 
// 
// text
// email
// password
// phone
// password
// number
// radio
// single_select
// multi_select
// toggle
// range
// date
// time
// image
// audio
// video 
// pin
// form_template

// DISPlAY
// header
// subheader
// footer
// panel
// body

// ITEMS
// label
// button
// list
// card
// filter

// TOOLS
// ecommerce
// tracker
// compass
// dosh-mukti-yantra


// save as
// tag fil_name format 

// Found 41 entries
// Your results for device:
// यन्त्र	n.	yantra	device	BV
// युक्ति	f.	yukti	device[artifice]	
// उपकरण	n.	upakaraNa	device	
// साधन	n.	sAdhana	device[computer]	
// निवेशनसाधन	n.	nivezanasAdhana	inputdevice[computer]	
// निवेशनोपकरण	n.	nivezanopakaraNa	inputdevice[computer]	
// उपकरणप्रयोजक	m.	upakaraNaprayojaka	devicedriver[computer]	
// सम्मितीयोपकरण	n.	sammitIyopakaraNa	analogdevice[computer]	
// निर्देशनसाधन	n.	nirdezanasAdhana	pointingdevice[computer]	
// उपकरणाधीन	adj.	upakaraNAdhIna	device-dependent[computer]	
// उपकरणनिघ्न	adj.	upakaraNanighna	device-dependent[computer]	
// उपकरणावलम्बिन्	adj.	upakaraNAvalambin	device-dependent[computer]	
// उपकरणाधीन	adj.	upakaraNAdhIna	device-dependent[computer]	
// उपकरणनिघ्न	adj.	upakaraNanighna	device-dependent[computer]	
// उपकरणाधीन	adj.	upakaraNAdhIna	device-dependent[computer]	
// उपकरणावलम्बिन्	adj.	upakaraNAvalambin	device-dependent[computer]	
// उपकरणनिघ्न	adj.	upakaraNanighna	device-dependent[computer]	
// उपकरणावलम्बिन्	adj.	upakaraNAvalambin	device-dependent[computer]	
// उपकरणनिरालम्बा	f.	upakaraNanirAlambA	deviceindependent[computer]	
// उपकरणनिरालम्बता	f.	upakaraNanirAlambatA	deviceindependence[computer]	
// साभिग्राह	n.	sAbhigrAha	directaccessstoragedevice(DASD)[computer]	
// साभिग्रहण	n.	sAbhigrahaNa	directaccessstoragedevice(DASD)[computer]	
// साभिसङ्ग्रह	n.	sAbhisaGgraha	directaccessstoragedevice(DASD)[computer]	
// साक्षादभिगम्यसङ्ग्राहक	n.	sAkSAdabhigamyasaGgrAhaka	directaccessstoragedevice(DASD)[computer]	
// साक्षादभिगम्यसङ्ग्रहोपकरण	n.	sAkSAdabhigamyasaGgrahopakaraNa	directaccessstoragedevice(DASD)[computer]	
// संविद्	f.	saMvid	device	
// प्रज्ञा	f.	prajJA	device	
// योग	m.	yoga	device	
// उपाय	m.	upAya	device	
// कैतवप्रयोग	m.	kaitavaprayoga	device	
// प्रयोग	m.	prayoga	device	
// व्याज	m.	vyAja	device	
// प्रोत्सादन	n.	protsAdana	device	
// वर्पस्	n.	varpas	device	
// सर्पबन्ध	m.	sarpabandha	subtledevice	
// युक्ति	f.	yukti	cunningdevice	
// अपयातव्यनय	m.	apayAtavyanaya	deviceforescaping	
// चक्रक	n.	cakraka	crookedorfraudulentdevice	
// चक्र	n.	cakra	crookedorfraudulentdevice	
// कथाच्छल	n.	kathAcchala	deviceorartificeorguiseoffables	
// कथाछल	n.	kathAchala	deviceorartificeorguiseoffables



// Some recent entries:
// विशेषपरिसंख्या	f.	vizeSaparisaMkhyA	compilation[list]	
// भौतिकपदार्थ	m.	bhautikapadArtha	body[material object]	
// यद्वा...यदिवा{वा}	conj.	yadvA...yadivA[vA]	if...orif[or]	
// संयोजयति{सम्- युज्}	verb caus.	saMyojayati[sam- yuj]	spread[paint]	
// याम	m.	yAma	coordinates[math.]
// {}

// 