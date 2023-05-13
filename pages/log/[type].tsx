import { useState } from "react"
import Image from 'next/image'
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { BsArrowBarLeft, BsBack } from "react-icons/bs"
const LogY=(props:any)=>{

  const router=useRouter()
  const {type}=router.query

  const [specialists,setSpecialists]=useState<any>([
    {
      image:faker.image.avatar(),
      name:faker.name.fullName(),
      rating:faker.datatype.number({min:1,max:5}),
      pricing:faker.datatype.number({min:20,max:500}),
      staus:'online'
    },
    {
      image:faker.image.avatar(),
      name:faker.name.fullName(),
      rating:faker.datatype.number({min:1,max:5}),
      pricing:faker.datatype.number({min:20,max:500}),
      staus:'in session'
    }
  ])
  return <div className="min-h-[70vh] p-4">
    <div className="h-24"></div>
    <div className="flex flex-row gap-4">

    <BsArrowBarLeft className="text-5xl" onClick={()=>{
      router.back()
    }}/>
    <h1 className="p-4 m-auto uppercase">{type} Specialists</h1>
    </div>
<div className="flex flex-row gap-4">
  {
    specialists && specialists.map((spl:any,index:number)=>{
      return <div key={index} className="w-56 p-4 h-100 bg-white shadow-lg rounded-lg">
        <h3>{spl.name}</h3>
        <div className="flex flex-row gap-2">
        <Image src={spl.image} alt="slp" width={100} height={100} className="w-24 h-24"/>
        <div className="p-2">
          <div className="text-xs">Charges: INR. {spl.pricing} per minute</div>
          <div>rating: {spl.rating}</div>
        </div>
        </div>
        <div className="text-xl p-2 font-bold bg-pink-500 text-white mt-2 shadow-lg m-auto">book appointment</div>
      </div>
    })
  }
</div>
  </div>
}

export default LogY