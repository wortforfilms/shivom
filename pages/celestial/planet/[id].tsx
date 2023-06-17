import { Kundali0 } from "@/components/kundli"

import { useRouter } from "next/router"
import universal from '@/data/solar.json'
import { ObjectDisplay } from "@/components/landing/Planets"

import { useState } from "react"
import { SphereApp } from "@/elements/3d/sph"

export const  baseS3='https://oxraxkhonksvlrvpwsnc.supabase.co/storage/v1/object/public'

const Planet=()=>{
  const router=useRouter()
  const {id}=router.query

  const [imageUrl,setimageurl]=useState<string>('')
  const [ind,setInd]=useState<any>(universal?.planets?.filter(i=>i.name.toLowerCase()===id)[0]?.id)
  const [width,setWidth]=useState<any>(universal?.planets?.filter(i=>i.name.toLowerCase()===id)[0]?.diameter)


  return <div className="h-[100vh] w-full bg-black   p-2">
  <h1 className="text-xl text-center font-bold uppercase">
    {
      id
    }
    </h1>

<div className="flex flex-col sm:flex-row justify-around gap-2">

<div className='right-4 flex flex-row flex-wrap justify-around gap-2 w-full h-100'>

{Object.values(Kundali0).filter(i=>i===id).map((pl, index) => {
  return <div key={index}
  onClick={() => {
    router.push(`/celestial/planet/${pl}`);
  }}
  className={`bg-white p-2 shadow-lg h-full flex flex-col uppercase bg-gray-300 cursor-pointer `}
  
  >
    <div className="flex flex-row">

    <div>{universal?.planets?.filter(i=>i.name.toLowerCase()===id&&id.toLowerCase())[0].id}. {pl}</div>
  <div className="text-9xl p-2">{String.fromCharCode(9788+3+universal?.planets?.filter(i=>i.name.toLowerCase()===id&&id.toLowerCase())[0].id-1)}</div>
  </div>

  <div className="w-full flex flex-row flex-wrap">
 {universal?.planets?.filter(i=>i.name.toLowerCase()===id&&id.toLowerCase())[0] && <ObjectDisplay object={universal?.planets.filter(i=>i.name.toLowerCase()===id&&id.toLowerCase())[0]}/>}
  </div>


  </div>;
})}



</div>
<div className='flex flex-row flex-wrap m-auto -mt-24  sm:mt-0 justify-around gap-2 w-full h-[70vh]'>


<SphereApp texture={`${baseS3}${universal.planets[universal?.planets?.filter(i=>i?.name.toLowerCase()===id&&id.toLowerCase())[0]?.id-1]?._3d?.textures?.base}`} height="70vh"  width="100%" radius={2}/>



</div>
</div>

</div>
}

export default Planet



