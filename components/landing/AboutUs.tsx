import { company_concept } from '@/data/structure';

export const AboutUs = () => {
  return <div id="concept"  >

    <h2  className='text-3xl mt-12 text-center p-8 font-bold'>About us</h2>

    <div className='font-bold text-xl p-2'>{company_concept[0]}</div>
    {company_concept.slice(1, 5).map((matter, index) => {
      return <div key={index} className='font-light p-2'>{matter}</div>;
    })}
  </div>;
};
