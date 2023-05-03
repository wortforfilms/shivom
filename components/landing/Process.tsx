import { process1 } from '@/data/structure';

export const Process = () => {
  return <div className="mb-24 mt-8 grid gap-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    <h2 id="process" className='text-3xl  p-8 font-bold'>Process</h2>
    {process1.map((tech, index) => {
      return <div key={index} className=' bg-white flex flex-row  gap-2 p-2 shadow-lg rounded-lg'>
        <div className='text-2xl  rounded-full w-12 h-12 text-center m-auto bg-black text-white p-2 border-2 border-gray-600 ring-2 ring-white'>{index + 1}</div>
        <div className='w-full'>{tech}</div>
      </div>;
    })}
  </div>;
};
