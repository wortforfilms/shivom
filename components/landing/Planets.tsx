import DoughnutChart from "@/canvas/chart/DoughnutChart";
import { Kundali0 } from "@/components/kundli";
import { useRouter } from 'next/router';
import universal from '@/data/solar.json'

export const Planets = () => {
  const router = useRouter();
  // const  planets=universal.planets.slice()
  return <>

    <h2 id="planet" className='text-3xl  p-8 font-bold'>Planets</h2>
    <div className='flex flex-row flex-wrap gap-2 w-full h-full'>

      {Object.values(Kundali0).map((pl, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/planet/${pl}`);
          }}
          className='bg-white p-2 shadow-lg uppercase hover:bg-yellow-300 cursor-pointer'

        >{index + 1}. {pl}


      <div className="w-[100vw] flex flex-row flex-wrap">
        <ObjectDisplay object={universal.planets[index]}/>
        
        {/* { JSON.stringify(universal.planets[index])} */}
        </div>
      {/* {index===0 && <div>{JSON.stringify(universal.parent)}</div>
      } */}
        </div>;
      })}
    </div>
<div className="flex flex-row flex-wrap justify-around gap-1">
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
</div>
  </>;
};


// path celestial
// 

const ObjectDisplay=(props:any)=>{
  const {object}=props
  const headers=Object.keys(object)
  const values=Object.assign(object)
  return <div className="flex flex-row flex-wrap gap-2">
{
  headers.slice(0,9).map((header,index)=>{
    return <div key={index}>{header}:{JSON.stringify(values[header])}</div>
  })
}

    {/* 
    <div>{value}</div> */}
  </div>
}