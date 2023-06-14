import { Kundali0 } from "@/components/kundli"
import Image from "next/image"
import { useRouter } from "next/router"
import universal from '@/data/solar.json'
import { ObjectDisplay } from "@/components/landing/Planets"
import { InteractiveSphere, SphereApp } from "@/elements/3d/sphere"
import { useState } from "react"

export const  baseS3='https://oxraxkhonksvlrvpwsnc.supabase.co/storage/v1/object/public'
//  /assets/textures/asteroid_dark.jpg?t=2023-06-14T10%3A54%3A42.201Z
const Planet=()=>{
  const router=useRouter()
  const {id}=router.query

  const [imageUrl,setimageurl]=useState<string>('')
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

  {/* <Image src={`${baseS3}${universal.planets[index]._3d.textures.base}`} alt="planet image"
  width={100} height={100} className="h-100"
  /> */}
  </div>

<div className="w-96 flex flex-row flex-wrap">
  <ObjectDisplay object={universal.planets.filter(i=>i.name.toLowerCase()===id&&id.toLowerCase())[0]}/>
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