import { Kundali0 } from "@/components/kundli";
import universal from '@/data/solar.json';
import { SphereApp } from "@/elements/3d/sph";
import { baseS3 } from "@/pages/celestial/planet/[id]";
import { useRouter } from 'next/router';
import { Sun } from "./Sun";
import { useState } from "react";


export const Planets = () => {
  const router = useRouter();
  const  [detail, setDetail]=useState(false)

  return <div className="w-full">
    <Sun />
    <h2 id="planet" className='text-3xl  p-8 font-bold'>Planets</h2>
    <div className='flex flex-row flex-wrap justify-around gap-2 w-full sm:w-100 h-full'>
      {Object.values(Kundali0).map((pl, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/planet/${pl}`);
          }}
          className={`bg-white p-2 shadow-lg h-full flex flex-col  w-full sm:w-64 uppercase hover:bg-black hover:text-white cursor-pointer `} >
          <div className="flex flex-row w-100">
            <div>
              {pl}
              <div className="text-7xl p-2">{String.fromCharCode(9788 + 3 + index)}</div>
            </div>

            <div className='flex flex-row flex-wrap m-auto -mt-4  sm:mt-0 justify-around gap-2 w-100 h-100'>
              <SphereApp texture={`${baseS3}${universal.planets[index]._3d.textures.base}`} height={"190px"} radius={2} />
            </div>
          </div>


        {detail &&  <div className="w-full flex flex-row text-gray-700 flex-wrap">
            <ObjectDisplay object={universal.planets[index]} />
          </div>}
       
        </div>;
      })}
    </div>


    {/* <div className="flex flex-row flex-wrap justify-around gap-1">
    <div className="thin-subhead">PLANET'S COMPARITIVE MASSES
    <DoughnutChart data={Object.values(Kundali0).map((i,index)=>universal.planets[index].mass)} labels={Object.values(Kundali0)}/>
    </div>
    <div className="thin-subhead">PLANET'S COMPARITIVE DENSITY
    <DoughnutChart data={Object.values(Kundali0).map((i,index)=>universal.planets[index].density)} labels={Object.values(Kundali0)}/>
    </div>
    <div className="thin-subhead">PLANET'S COMPARITIVE DIAMETER
    <DoughnutChart data={Object.values(Kundali0).map((i,index)=>universal.planets[index].diameter)} labels={Object.values(Kundali0)}/>
    </div>
    <div className="thin-subhead">PLANET'S COMPARITIVE ORBITAL PERIOD
    <DoughnutChart data={Object.values(Kundali0).map((i,index)=>universal.planets[index].orbitalPeriod)} labels={Object.values(Kundali0)}/>
    </div>
</div> */}
  </div>;
};



export const ObjectDisplay = (props: any) => {
  const { object } = props
  const headers = Object?.keys(object)
  const values = Object?.assign(object)
  return <div className="flex flex-col w-full p-2 flex-wrap gap-2">
    {
      headers.slice(0, 9).map((header, index) => {
        return <div key={index} className={`flex flex-row justify-between gap-2 ${index % 2 ? "bg-gray-200" : "bg-white"}`}>
          <div className="text-xs p-1 font-bold">{header}:</div>
          <div className="text-xs ">{JSON.stringify(values[header])}</div>

        </div>
      })
    }

  </div>
}


