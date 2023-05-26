import { useState } from "react"
import Image from 'next/image'
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { BsArrowBarLeft, BsBack } from "react-icons/bs"
import { RegDevice } from "../cart"
import { BiCalendarEvent } from "react-icons/bi"
import { MdCall } from "react-icons/md"
const LogY=(props:any)=>{


  //  astro skill
  //  

  const router=useRouter()
  const {type}=router.query

  const [specialists,setSpecialists]=useState<any>([
    {
      image:faker.image.avatar(),
      name:faker.name.fullName(),
      rating:faker.datatype.number({min:1,max:5}),
      pricing:faker.datatype.number({min:20,max:500}),
      status:faker.helpers.arrayElement(['online','in session','offline'])
    },
    {
      image:faker.image.avatar(),
      name:faker.name.fullName(),
      rating:faker.datatype.number({min:1,max:5}),
      pricing:faker.datatype.number({min:20,max:500}),
      status:faker.helpers.arrayElement(['online','in session','offline'])

    },
    {
      image:faker.image.avatar(),
      name:faker.name.fullName(),
      rating:faker.datatype.number({min:1,max:5}),
      pricing:faker.datatype.number({min:20,max:500}),
      status:faker.helpers.arrayElement(['online','in session','offline'])

    }
  ])
  return <div className="min-h-[70vh] p-4">
    <div className="h-12"></div>
    <div className="flex flex-row gap-4">

    <BsArrowBarLeft className="text-5xl" onClick={()=>{
      router.back()
    }}/>
    <h1 className="p-4 m-auto uppercase">{type} Specialists</h1>
    </div>
<div className="flex flex-col sm:flex-row gap-4  justify-around">
  {
    specialists && specialists.map((spl:any,index:number)=>{
      return <div key={index} className="relative w-full sm:w-56 overflow-hidden p-2 h-100 bg-white shadow-lg rounded-lg">
        <div>{spl.name}</div>
        <div className={`absolute rotate-45 ${spl.status==='in session'?"bg-gray-700":spl.status==='online'?"bg-green-500":"bg-pink-500"} w-24 -right-6 text-center -mt-4 text-white`}>{spl.status}</div>
        <div className="flex flex-row gap-2">
        <Image src={spl.image} alt="slp" width={100} height={100} className="w-24 h-24"/>
        <div className="p-2">
          <div className="text-xs">Charges: INR. {spl.pricing} per minute</div>
          <div>rating: {spl.rating}</div>
          <div className="flex flex-row justify-start">
        {spl.status==="online"&&<div  className="text-xl p-2 w-10 cursor-pointer rounded-lg font-bold bg-green-500 hover:bg-yellow-500 text-white mt-2 shadow-lg m-auto"><MdCall/> </div>}
        <div className="text-xl p-2 cursor-pointer rounded-lg w-10 font-bold bg-pink-500 hover:bg-blue-500 text-white mt-2 shadow-lg m-auto"
        onClick={()=>{
          router.push(`/calender/booking/${spl.name}?q=${spl.pricing}`)
        }}
        ><BiCalendarEvent/></div>
        </div>
        </div>
        </div>
     
      </div>
    })
  }
</div>
<RegDevice amount={399} type="service" unit="per month"/>

  </div>
}

export default LogY