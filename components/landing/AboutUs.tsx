import { company_concept } from '@/data/structure';

export const AboutUs = () => {
  return <div className='flex mt-24 mb-12 flex-col gap-4'>
    <h2 id="concept" className='text-3xl  p-8 font-bold text-center'>About us</h2>

    <div className='font-bold text-xl p-2'>{company_concept[0]}</div>
    {company_concept.slice(1, 5).map((matter, index) => {
      return <div key={index} className='font-light p-2'>{matter}</div>;
    })}
  </div>;
};
