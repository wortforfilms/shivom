import universal from '@/data/solar.json';
import { SphereApp } from "@/elements/3d/sph";
import { baseS3 } from "@/pages/celestial/planet/[id]";
import { useRouter } from 'next/router';
import { ObjectDisplay } from "./Planets";
import { useState } from 'react';



export const Sun = () => {
  const router = useRouter();
  const  [detail, setDetail]=useState(false)

  return <div className="w-full">
    <h2 id="planet" className='text-3xl  p-8 font-bold'>Sun</h2>
    <div
      onClick={() => {
        router.push(`/galaxy/star/${"sun"}`);
      }}
      className={`bg-white p-2 shadow-lg h-full flex flex-col uppercase hover:bg-black hover:text-white cursor-pointer `}

    >
      <div className="flex flex-row">
        <div>
          {/* {index + 1}.  */}
          {"SUN"}
          <div className="text-7xl p-2">{String.fromCharCode(9788)}</div>
        </div>

        {/* <Image src={`${baseS3}${universal.planets[index]._3d.textures.base}`} alt="image"
        width={100} height={100} className="h-100 w-full rounded-full "
        /> */}
        <div className='flex flex-row flex-wrap m-auto -mt-4  sm:mt-0 justify-around gap-2 w-100 h-100'>
          <SphereApp texture={`${baseS3}${universal.parent._3d.textures.base}`} height={"190px"} radius={2} />
        </div>
      </div>
     {detail && <div className="w-full flex flex-row text-gray-700 flex-wrap">
        <ObjectDisplay object={universal.parent} />
      </div>}
    </div>

  </div>

};
