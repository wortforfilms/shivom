import { testemonials } from "@/data/testemonials"
import { faker } from "@faker-js/faker"
import Image from "next/image"

export const Testemonials=()=>{

  return <div className="flex flex-row overflow-scroll justify-start  gap-2 ">
    {
      testemonials.map((moon,index)=>{
        return <div key={index} className="flex flex-col gap-4 w-96 bg-white h-100 rounded-lg shadow-lg p-2">
          <div>{moon}</div>
          <div className="w-24 h-24 bg-yellow-300  rounded-full m-auto">
            <Image src={faker.image.avatar()} alt="" width={100} height={100} className="rounded-full"/>
          </div>
          <div className="text-center font-thin underline ">{faker.name.fullName()}</div>
          <div className="text-center text-xs font-thin">{faker.name.jobTitle()}</div>
          </div>
      })
    }
  </div>

}