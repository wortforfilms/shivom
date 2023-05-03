import { Nakshatra } from "@/components/kundli";
import { useRouter } from 'next/router';

export const Nakshatras = () => {
  const router = useRouter();
  return <>
    <h2 id="nakshatra" className='text-3xl  p-8 font-bold'>Nakshtras</h2>
    <div className='flex flex-row flex-wrap gap-2'>

      {Object.values(Nakshatra).map((nak, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/nakshatra/${nak}`);
          }}
          className='bg-white p-2 shadow-lg hover:bg-yellow-300 cursor-pointer'>{index + 1}. {nak}</div>;
      })}
    </div>
  </>;

};
