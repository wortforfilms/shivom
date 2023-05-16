// import { userAgentFromString } from "next/server";

import { supabase } from "@/lib/Store";
import { useForm } from "react-hook-form";



export const InputForm = () => {

  const {handleSubmit,register}=useForm()
const u_register=(data:any)=>{
  console.log(data)

  const create_Ru=async(data:any)=>{
    const {data:init_session,error}=await supabase.from('भोक्तृ').insert([{
      
    }])

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
    <div className='p-2 bg-white  w-full'>
      <label>Enter Date of  Birth</label><br />
      <input {...register("dob")} className='bg-gray-300 p-2' id="dob" type="date" />
    </div>
    <div className='p-2 bg-white w-full'>
      <label>Enter Time of  Birth</label><br />
      <input {...register("tob")}  className='bg-gray-300 p-2' id="tob" type="time" />
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