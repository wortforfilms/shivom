import { houses } from '@/data/houses';
import { ObjectDisplay } from './Planets';



export const Houses = () => {
  return <div className='flex flex-col sm:flex-row flex-wrap justify-around gap-2'>

    {houses && houses.map((hs, index) => {
      return <div key={index} className='w-full sm:w-[32%] h-full p-2 rounded-lg shadow-lg'><ObjectDisplay label="Houses" object={hs} /></div>;
    })}
  </div>;
};
