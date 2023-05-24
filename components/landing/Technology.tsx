import { technology } from '@/data/structure';
import Image from 'next/image';

export const Technology = () => {
  return <div className="mb-8 flex flex-col gap-4 text-center lg:mb-0  lg:text-left">
    <h2 id="technology" className='text-3xl  p-8 font-bold'>Technology Base: God particle 2012</h2>
    <Image 
    src="/img/ATLAS-Higgsyy-banner.jpeg"
    alt="hb"
    unoptimized
    width={100}
    height={100}
    className='w-full'
    />
<div className='flex flex-row flex-wrap justify-between gap-4'>

    {technology.map((tech, index) => {
      return <div key={index} className='bg-white w-full sm:w-[30vw] text-justify p-2 shadow-lg rounded-lg'>
        {tech}
      </div>;
    })}
    </div>

    <Image 
    src="/img/ATLAS_eventdisplay_toppair.png"
    alt="gpart"
    unoptimized
    width={100}
    height={100}
    className='w-full'
    />


  </div>;
};
