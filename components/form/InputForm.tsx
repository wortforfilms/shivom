export const InputForm = () => {
  return <div >
<form onSubmit={()=>{
  console.log('data in form')
}}
className='p-2 shadow-lg flex flex-row flex-wrap gap-2 bg-white rounded-lg ring-2 ring-gray-400 mt-8 mb-8'
>

    <div className='p-2 bg-white'>
      <label>Enter Email</label><br />
      <input className='bg-gray-300 p-2' type="email" />
    </div>
    <div className='p-2 bg-white'>
      <label>Enter Phone</label><br />
      <input className='bg-gray-300 p-2' type="tel" />
    </div>
    <div>

    </div>
    <div className='p-2 bg-white'>
      <label>Enter Date of  Birth</label><br />
      <input className='bg-gray-300 p-2' type="date" />
    </div>
    <div className='p-2 bg-white'>
      <label>Enter Time of  Birth</label><br />
      <input className='bg-gray-300 p-2' type="time" />
    </div>
    <div className='p-2 bg-white'>
      <label>Enter Place of Birth</label><br />
      <input className='bg-gray-300 p-2' type="text" placeholder='Enter your birthplace' />
    </div>

    <div className='bg-pink-500 text-white p-2 text-center rounded-lg shadow-lg hover:bg-blue-500 cursor-pointer'>
      Get Shivom
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