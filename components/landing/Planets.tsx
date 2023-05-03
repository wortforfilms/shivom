import { Kundali0 } from "@/components/kundli";
import { useRouter } from 'next/router';

export const Planets = () => {
  const router = useRouter();
  return <>
    <h2 id="planet" className='text-3xl  p-8 font-bold'>Planets</h2>
    <div className='flex flex-row flex-wrap gap-2'>

      {Object.values(Kundali0).map((pl, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/planet/${pl}`);
          }}
          className='bg-white p-2 shadow-lg uppercase hover:bg-yellow-300 cursor-pointer'

        >{index + 1}. {pl}</div>;
      })}
    </div>
  </>;
};
