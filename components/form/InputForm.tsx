// import { userAgentFromString } from "next/server";

import { useForm } from "react-hook-form";



export const InputForm = () => {

  const {handleSubmit,register}=useForm()
const u_register=(data:any)=>{
  console.log(data)
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


// Some recent entries:
// विशेषपरिसंख्या	f.	vizeSaparisaMkhyA	compilation[list]	
// भौतिकपदार्थ	m.	bhautikapadArtha	body[material object]	
// यद्वा...यदिवा{वा}	conj.	yadvA...yadivA[vA]	if...orif[or]	
// संयोजयति{सम्- युज्}	verb caus.	saMyojayati[sam- yuj]	spread[paint]	
// याम	m.	yAma	coordinates[math.]
// {}

// 