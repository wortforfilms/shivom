
export const LoginForm = () => {
  return <div className='w-full mt-12 flex flex-col sm:flex-row gap-2 p-2 justify-around'>

    <InputForm />
  </div>;
};


export const InputForm = () => {
  return <div >
<form onSubmit={()=>{
  console.log('data in form')
}}
className='p-2 shadow-lg flex flex-col sm:flex-row flex-wrap gap-2 bg-white rounded-lg ring-2 ring-gray-400 mt-8 mb-8'
>

    <div className='p-2 w-full bg-white'>
      <label>Enter Email/Phone</label><br />
      <input className='bg-gray-300 p-2 w-full' type="text" />
    </div>
    <div className='p-2 w-full bg-white'>
      <label>Enter Password</label><br />
      <input className='bg-gray-300 p-2 w-full' type="password" />
    </div>
    <div className='bg-pink-500 m-auto text-white w-full p-2 text-center rounded-lg shadow-lg hover:bg-blue-500 cursor-pointer'>
      Login
      </div>

   

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