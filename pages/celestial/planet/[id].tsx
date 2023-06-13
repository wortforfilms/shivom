import { Kundali0 } from "@/components/kundli"
import Image from "next/image"
import { useRouter } from "next/router"
import universal from '@/data/solar.json'
import { ObjectDisplay } from "@/components/landing/Planets"


const Planet=()=>{
  const router=useRouter()
  const {id}=router.query
  return <div className="h-[100vh] w-full bg-white p-2">
  <h1 className="text-xl text-center font-bold uppercase">
    {
      id
    }
    </h1>


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

  <Image src={universal.planets[index]._3d.textures.base} alt="image"
  width={100} height={100} className="h-100"
  /></div>

<div className="w-full flex flex-row flex-wrap">
  <ObjectDisplay object={universal.planets[index]}/>
  </div>
  </div>;
})}


</div>
    {
      "hkd"
    }
</div>
}

export default Planet