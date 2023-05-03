import { useRouter } from 'next/router';
import { Dosh } from '@/data/dosh';

export const Doshas = () => {
  const router = useRouter();
  return <>
    <h2 id="dosh" className='text-3xl  p-8 font-bold'>Dosh</h2>
    <div className='flex flex-row flex-wrap gap-2'>

      {Object.values(Dosh).map((nak, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/dosh/${nak}`);
          }}
          className='bg-white p-2 shadow-lg hover:bg-yellow-300 cursor-pointer'>
          <a className='font-bold p-2 text-xl'>
            {Object.keys(Dosh)[index]}
          </a>
          {nak}</div>;
      })}
    </div>
  </>;
};
