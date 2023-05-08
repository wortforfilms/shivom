import { testemonials } from "@/data/testemonials"
import { faker } from "@faker-js/faker"
import Image from "next/image"

export const Testemonials=()=>{

  return <div className="flex flex-row w-full h-auto overflow-x-auto gap-2 ">
    {
      testemonials.map((moon,index)=>{
        return <div key={index} className="flex flex-row gap-4 w-96 h-80 bg-white rounded-lg shadow-lg p-2">
          <div className="text-md p-4">{moon}</div>
          <div className="w-24 h-24 bg-yellow-300  rounded-full m-auto">
            {/* <Image src={faker.image.avatar()} alt="" width={100} height={100} className="rounded-full"/> */}
          </div>
          {/* <div className="text-center text-md font-thin underline ">{faker.name.fullName()}</div> */}
          {/* <div className="text-center text-xs font-bold">{faker.name.jobTitle()}</div> */}
          </div>
      })
    }
  </div>

}


// houses 12
// planets 9
// nakshatra  27
// sunsign 12

// Welcome to the world of Vedic Astro Science! Introducing the Shivom Dosh Nivarak T-shirt, a special piece of apparel that combines the power of Vedic astrology with a modern design. This shirt is designed to help you ward off negative energy and attract the positive. It features an intricate pattern of Vedic symbols, including the Om symbol and the Sri Yantra, that are said to protect the wearer from harm. So make sure you wear your Shivom Dosh Nivarak T-shirt for a more positive and powerful you! #ShivomDoshNivarak #VedicAstro #PowerfulYou


// पन्ञ्जिका
// almanac
// register