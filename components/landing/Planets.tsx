import DoughnutChart from "@/canvas/chart/DoughnutChart";
import { Kundali0 } from "@/components/kundli";
import { useRouter } from 'next/router';
import universal from '@/data/solar.json'
import Image from 'next/image'
import { baseS3 } from "@/pages/celestial/planet/[id]";
export const Planets = () => {
  const router = useRouter();
  // const  planets=universal.planets.slice()
  // symbols on fork 
  // ∑„wW-yyYY¥¥ÁÁ
  // mmMMÂÂµµ 
  // nnnNNN˜˜˜˜˜˜
  // VM.m{IAMJUPIToR}
  // doc on  port export for me  distributed by me 
  // samar par  amrutmAlA
  //  amrut  Mal;a   mAla  mAAlAA maalaa Mal  mn
  //   man  ki talaash 
  // pasad ki kraati
  // krAnti vruta
  // hemant sankalp
  // mere saath shapath vishwa aham braham  bhram aham
  // eko satya ek onnkAra
  // 1 omkaar 1 om kArya :: 
  //  samaya  kAAla  hA hA hA 
  // {:::}-{:::}-{:::}
  // {}-{}-{service_for_code_view}
  // {rent;offer;sale;service::""}
  // -{""}
  return <div className="w-full">

    <h2 id="planet" className='text-3xl  p-8 font-bold'>Planets</h2>
    <div className='flex flex-row flex-wrap justify-around gap-2 w-full h-full'>

      {Object.values(Kundali0).map((pl, index) => {
        return <div key={index}
          onClick={() => {
            router.push(`/celestial/planet/${pl}`);
          }}
          className={`bg-white p-2 shadow-lg h-full flex flex-col uppercase hover:bg-yellow-300 cursor-pointer `}

        >
          <div className="flex flex-row">
          <div>{index + 1}. {pl}</div>
        <div className="text-7xl p-2">{String.fromCharCode(9788+3+index)}</div>

        <Image src={`${baseS3}${universal.planets[index]._3d.textures.base}`} alt="image"
        width={100} height={100} className="h-100"
        /></div>

      <div className="w-full flex flex-row flex-wrap">
        <ObjectDisplay object={universal.planets[index]}/>
        </div>
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
  </div>;
};

// placeholder design
// tools brush  element radius shape 
//  {;;;:::native_nature}
//  {;;;:::native_nature}
// path celestial
// 1 `00 10 1299  12,99,000 ;;:876 
// 2 '01 00  

export const ObjectDisplay=(props:any)=>{
  const {object}=props
  const headers=Object.keys(object)
  const values=Object.assign(object)
  return <div className="flex flex-col p-2 flex-wrap gap-2">
{
  headers.slice(0,9).map((header,index)=>{
    return <div key={index} className={`flex flex-row gap-2 ${index%2?"bg-gray-200":"bg-white"}`}>
      <div className="text-xs p-1 font-bold">{header}:</div>
      <div className="text-xs m-auto">{JSON.stringify(values[header])}</div>
      
      </div>
  })
}

    {/* 
    <div>{value}</div> */}
  </div>
}