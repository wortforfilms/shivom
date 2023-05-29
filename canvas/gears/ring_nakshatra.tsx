import { range } from "@/util/createRange";
import DoughnutChart from "../chart/DoughnutChart";
import { zods } from "@/components/landing/Zodiacs";
import { planets } from "@/data/structure";

export const RingNakshatra=()=>{

  const degrees_data = range(0,360).map((str)=>{
    return 13
  });
  const zodiac_data = range(0,13).map((str)=>{
    return 13
  });

  const data00 = range(0,8).map((str)=>{
    return 8
  });

  const degrees="degrees".split('')
  const nakshatra= zods.map(i=>i.label)

  const planets_=planets

return <div className="w-1/2 p-2">
  <DoughnutChart data={degrees_data} labels={nakshatra} />
  {/* <DoughnutChart data={data00} labels={"planets_".split('')} /> */}
  <DoughnutChart data={zodiac_data} labels={nakshatra} />
  </div>
}
