import { gold } from "@/sty";
import { range } from "@/util/createRange";
import { nFormatter } from "@/util/numberFormatter/nFormatter";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
export const Ganeshlist = (props: any) => {
  const { gcategory, setGame } = props;
  const router = useRouter();

  return <div className="flex flex-row   flex-wrap justify-start gap-4 p-4">
    {gcategory.map((ver: any, index: number) => {
      return <div key={index} className={`rounded-lg text-center m-auto  shadow-lg w-56 h-100 ${gold} p-2`}>
        <div className="text-7xl p-2 ">{ver.icon}</div>
        <h1>{ver.label} </h1>
        <h1>{ver.label.replace('')} </h1>
        <div className="text-xs font-bold p-1">{ver.duration}</div>
        <div>
          <div className="text-xs text-yellow-700 p-2">Leaderboard: </div>
          <h1 className="flex  flex-row -gap-1 justify-around">
            {range(0,2).map((r,index)=>{
              return <Image
              key={index}
              src={faker.image.avatar()}
              alt="ty"
              width={100}
              height={100}
className="w-12 rounded-full "
              />
            })}
            </h1></div>

        <div className="text-xs text-yellow-700 p-2">Current Record: </div>
        {nFormatter(faker.datatype.number({ min: 99, max: 999999 }))}
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 1.1 }}
          className="p-2 bg-gray-700 text-white rounded-lg mt-8 mb-4 cursor-pointer hover:bg-pink-700 shadow-lg shadow-green-500 hover:shadow-sky-500"
          onClick={() => {
            setGame(ver.label);
            router.push(`/kreedA/game/${ver.label}`);
          }}
        >PLAY NOW</motion.div>
      </div>;
    })}
  </div>;
};

// सनाथीकृ
// 