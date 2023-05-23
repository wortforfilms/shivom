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



const profile_form_messages = [
  [
    "Enter First Name",
    "Enter First Name"
  ],
  [
    "Enter Middle Name",
    "Enter Middle Name",
  ],
  [
    "Enter Last Name",
    "Enter Last Name"
  ],
  [
    "Choose Gender",
    'Select Gender',
    ['Male', 'Female', 'Other', 'LGBTQ']
  ],
  [
    "Select Date of Birth",
    "Select Date of Birth"
  ],
  [
    "Select Time of Birth",
    "Select Time of Birth"
  ],
  [
    "Select Place of Birth",
    "Select Place of Birth",
  ]

]

const profile_schema_messages = [
  [],
  [],
  [],
  []
]

const profile_form = [
  {
    type: "text",
    name: "first_name",
    label: profile_form_messages[0][0],
    value: "",
    options: [],
    message: profile_form_messages[0][1]
  },
  {
    type: "text",
    name: "middle_name",
    label: profile_form_messages[1][0],
    value: "",
    options: [],
    message: profile_form_messages[1][1]
  },
  {
    type: "text",
    name: "last_name",
    label: profile_form_messages[2][0],
    value: "",
    options: [],
    message: profile_form_messages[2][1]
  },
  {
    type: "radio",
    name: "gender",
    label: profile_form_messages[3][0],
    value: "",
    options: profile_form_messages[3][3],
    message: profile_form_messages[3][1]
  },
  {
    type: "date",
    name: "dob",
    label: profile_form_messages[4][0],
    value: "",
    options: [],
    message: profile_form_messages[4][1]
  },
  {
    type: "time",
    name: "tob",
    label: profile_form_messages[5][0],
    value: "",
    options: [],
    message: profile_form_messages[5][1]
  },
  {
    type: "pin",
    name: "pob",
    label: profile_form_messages[6][0],
    value: "",
    options: [],
    message: profile_form_messages[6][1]
  }
]

const profile_schema = yup.object().shape({
  first_name: yup.string().min(3).max(100).required("First Name is required"),
  last_name: yup.string().min(3).max(100).notRequired(),
  middle_name: yup.string().min(3).max(100).notRequired(),
  gender: yup.string().min(1).max(1).required('Gender is required'),
  dob: yup.date().required('Date of birth is required'),
  tob: yup.string().notRequired(),
  pob: yup.string().notRequired(),
})



const vender_form = [

]


const vender_schema_messages = [
  "Vender Type is Required",
  "Vender GST is Required",
  "Tax information is required",
  "Address information is required"

]
const vender_schema = yup.object().shape({
  vender_type: yup.string().min(3).max(3).required(vender_schema_messages[0]),
  vender_gst: yup.string().min(3).max(13).required(vender_schema_messages[1]),
  vender_pan: yup.string().min(12).max(12).required(vender_schema_messages[2]),
  vender_address: yup.string().min(12).max(12).required(vender_schema_messages[3]),
})


const product_schema_messages = [
  "Product Type is required",
  "Product Category is required",
  "Product GST is required",
  "Product Title is required",
  "Product Description is required",
  "Product Precautions is required",
  "Product Inventory Address is required",
]

const product_schema = yup.object().shape({
  product_type: yup.string().min(3).max(30).required(product_schema_messages[0]),
  product_category: yup.string().min(3).max(30).required(product_schema_messages[1]),
  product_gst: yup.string().min(3).max(13).required(product_schema_messages[2]),
  product_title: yup.string().min(12).max(120).required(product_schema_messages[3]),
  product_description: yup.string().min(12).max(1200).required(product_schema_messages[4]),
  product_specification: yup.string().min(12).max(1200).notRequired(),
  product_technical_information: yup.string().min(12).max(1200).notRequired(),
  product_precautions: yup.string().min(12).max(1200).required(product_schema_messages[5]),
  product_inventory_address: yup.string().min(12).max(120).required(product_schema_messages[6]),
})




export const InputForm = () => {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(user_schema)
  })

  const [avialable, setAvialable] = useState(false)
  const u_register = (data: any) => {
    console.log(data, '---=>')

    const check_avialable = async (user_email: any, user_phone: any) => {
      const { data, error } = await supabase.from("").select('*').eq('email', user_email)
      if (data && data.length > 0) {
        setAvialable(false)
      } else {
        setAvialable(true)
      }
    }
    const create_Ru = async (data: any) => {
      const { data: init_session, error } = await supabase.from('भोक्तृ').insert([{
        email: data.email,
        phone: data.phone,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
        middle_name: data.middle_name,
        gender: data.gender,


      }]).select('*')

      if (init_session && init_session.session) {
        // dispatch(user_registration(data.session, data.user, data.password))
      }

      return { init_session, error }

    }

  }
  return <div >
    <form onSubmit={handleSubmit(u_register)}
      className='p-2 shadow-lg flex flex-row flex-wrap gap-2 bg-white rounded-lg ring-2 ring-gray-400 mt-8 mb-8'
    >
      <div className='p-2 bg-white w-full'>
        <label>Enter Email</label><br />
        <input {...register('email')} className='bg-gray-300 p-2 w-full' id="email" type="email" />
      </div>
      <div className='p-2 bg-white w-full'>
        <label>Enter Phone</label><br />
        <input {...register("phone")} className='bg-gray-300 p-2 w-full' id="phone" type="tel" />
      </div>
      <div className='p-2 bg-white w-full'>
        <label>Enter Password</label><br />
        <input {...register("password")} className='bg-gray-300 p-2 w-full' id="phone" type="tel" />
      </div>
      <div className='p-2 bg-white  w-full'>
        <label>Enter Date of  Birth</label><br />
        <input {...register("dob")} className='bg-gray-300 p-2' id="dob" type="date" />
      </div>
      <div className='p-2 bg-white w-full'>
        <label>Enter Time of  Birth</label><br />
        <input {...register("tob")} className='bg-gray-300 p-2' id="tob" type="time" />
      </div>
      <div className='p-2 bg-white w-full'>
        <label>Enter Place of Birth</label><br />
        <input {...register("pob")} className='bg-gray-300 p-2' type="text" placeholder='Enter your birthplace' id="pob" />
      </div>
      <button className='bg-pink-500 w-full text-white p-2 text-center rounded-lg shadow-lg hover:bg-blue-500 cursor-pointer'
        type="submit"
      >
        Register
      </button>
    </form>
  </div>;
};


// INPUT
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