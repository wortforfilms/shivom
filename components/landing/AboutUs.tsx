import { company_concept } from '@/data/structure';

export const AboutUs = () => {
  return <div id="concept" className='py-4 mt-12 mb-12 shadow-lg bg-white' >

    <h2  className='text-3xl mt-12 text-center p-8 text-gray-600 font-bold'>About us</h2>

    <div className='font-thin text-xl p-2'>{company_concept[0]}</div>
    {company_concept.slice(1, 5).map((matter, index) => {
      return <div key={index} className='font-light p-2'>{matter}</div>;
    })}
  </div>;
};

// ß˙ˆ√øµ Í◊Â
// ÍÂÂÂÂøµ