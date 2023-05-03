import { technology } from '@/data/structure';

export const Technology = () => {
  return <div className="mb-8 grid gap-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    <h2 id="technology" className='text-3xl  p-8 font-bold'>Technology Base: God particle 2012</h2>

    {technology.map((tech, index) => {
      return <div key={index} className='bg-white text-justify p-2 shadow-lg rounded-lg'>
        {tech}
      </div>;
    })}
  </div>;
};
