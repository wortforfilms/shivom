import { useRouter } from 'next/router';
import { Dosh } from '@/data/dosh';

export const Doshas = () => {
  const router = useRouter();
  return <div id="dosh">
    <h2  className='text-3xl mt-12 text-center p-8 text-gray-600 font-extrabold'>Dosh</h2>
    <div className='flex flex-row flex-wrap gap-2'>

      {Object.values(Dosh).map((nak, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/dosh/${nak}`);
          }}
          className='bg-white p-2 shadow-lg hover:bg-yellow-300 cursor-pointer'>
          <a className='font-bold text-red-600 text-md'>
            {Object.keys(Dosh)[index]}:
          </a>
          <div className='px-2 '>
            {nak}
            </div>
          </div>;
      })}
    </div>
  </div>;
};


