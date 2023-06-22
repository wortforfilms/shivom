import { gold } from "@/sty";
import { range } from "@/util/createRange";
import { nFormatter } from "@/util/numberFormatter/nFormatter";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { Hinglish } from "@/components/classes/brahmi/Hinglish";
import { hindi_to_brahmi } from "@/util/hindi_to_brahmi";


export const hinglish_to_hindi=(str:string)=>{

  const ThreePhase= str.replaceAll('ksh','क्ष्')
  .replaceAll('tr','त्र्')
  .replaceAll('jJ','ज्ञ्')
  .replaceAll('sw','स्व्')
  .replaceAll('dh','ध्')
  .replaceAll('sh','श्')
  .replaceAll('gh','घ्')
  .replaceAll('ch','च्')
  .replaceAll('chh','छ्')
  .replaceAll('jh','झ्')
  .replaceAll('ph','फ्')
  .replaceAll('bh','भ्')
  .replaceAll('sh','श्')
  .replaceAll('shh','ष्')

  // { label: 'अ', text: ["a"] },
  // { label: 'आ', text: ["aa", "A"] },
  // { label: 'इ', text: ["i"] },
  // { label: 'ई', text: ["ii", "I"] },
  // { label: 'उ', text: ["u"] },
  // { label: 'ऊ', text: ["uu", "U"] },
  // { label: 'ऋ', text: ["R"] },
  // { label: 'ॠ', text: ["RR"] },
  // { label: 'लृ', text: ["lR"] },
  // { label: 'ॡ', text: ["lRR"] },
  // { label: 'ए', text: ["e"] },
  // { label: 'ऐ', text: ["ai"] },
  // { label: 'ओ', text: ["o"] },
  // { label: 'औ', text: ["au"] },
  // { label: 'अं', text: ["aM"] },
  // { label: 'अः', text: ["aH"] },
  // { label: 'क', text: ["ka"] },
  // { label: 'ख', text: ["kha"] },
  // { label: 'ग', text: ["ga"] },
  // { label: 'घ', text: ["gha"] },
  // { label: 'ङ', text: ["Ga"] },
  // { label: 'च', text: ["ca"] },
  // { label: 'छ', text: ["cha"] },
  // { label: 'ज', text: ["ja"] },
  // { label: 'झ', text: ["jha"] },
  // { label: 'ञ', text: ["Ja"] },
  // { label: 'ट', text: ["Ta"] },
  // { label: 'ठ', text: ["Tha"] },
  // { label: 'ड', text: ["Da"] },
  // { label: 'ढ', text: ["Dha"] },
  // { label: 'ण', text: ["Na"] },
  // { label: 'त', text: ["ta"] },
  // { label: 'थ', text: ["tha"] },
  // { label: 'द', text: ["da"] },
  // { label: 'ध', text: ["dha"] },
  // { label: 'न', text: ["na"] },
  // { label: 'प', text: ["pa"] },
  // { label: 'फ', text: ["pha"] },
  // { label: 'ब', text: ["ba"] },
  // { label: 'भ', text: ["bha"] },
  // { label: 'म', text: ["ma"] },
  // { label: 'य', text: ["ya"] },
  // { label: 'र', text: ["ra"] },
  // { label: 'ल', text: ["la"] },
  // { label: 'व', text: ["va"] },
  // { label: 'क्ष', text: ["kSc"] },
  // { label: 'श', text: ["za", "sha"] },
  // { label: 'ष', text: ["Sa", "shha"] },
  // { label: 'स', text: ["sa"] },
  // { label: 'ह', text: ["ha"] },
  // { label: 'ऽ', text: ["'a"] },
  // { label: 'ज्ञ', text: ["jJ"] },

  const  TwoPhase= ThreePhase.replaceAll('ka','क')
  .replaceAll('ga','ग')
  .replaceAll('ja','ज')
  .replaceAll('ta','त')
  .replaceAll('Ta','ट')
  .replaceAll('da','द')
  .replaceAll('na','न')
  .replaceAll('pa','प')
  .replaceAll('ba','ब')
  .replaceAll('ma','म')
  .replaceAll('ya','य')
  .replaceAll('ra','र')
  .replaceAll('la','ल')
  .replaceAll('va','व')

  const  SinglePhase= TwoPhase.replaceAll('k','क्')
  .replaceAll('g','ग्')
  .replaceAll('j','ज्')
  .replaceAll('t','त्')
  .replaceAll('T','ट्')
  .replaceAll('d','द्')
  .replaceAll('n','न्')
  .replaceAll('p','प्')
  .replaceAll('b','ब्')
  .replaceAll('m','म्')
  .replaceAll('s','स्')

  .replaceAll('y','य्')
  .replaceAll('r','र्')
  .replaceAll('l','ल्')
  .replaceAll('v','व्')
  .replaceAll('A','आ')
  .replaceAll('aa','आ')
  .replaceAll('a','अ')
  .replaceAll('i','इ')


  // text->label
  return SinglePhase
}
export const Ganeshlist = (props: any) => {
  const { gcategory, setGame } = props;
  const router = useRouter();

  return <div className="flex flex-row   flex-wrap justify-start gap-4 p-4">
    {/* {'त्र'.charCodeAt(1)} */}
    {String.fromCharCode(2381)}
    {gcategory.map((ver: any, index: number) => {
      return <div key={index} className={`rounded-lg text-center m-auto  shadow-lg w-56 h-100 ${gold} p-2`}>
        <div className="text-7xl p-2 ">{ver.icon}</div>
        <h1>{ver.label} </h1>
        <h1>{hinglish_to_hindi(ver.label)}</h1>
        <h1>{hindi_to_brahmi(hinglish_to_hindi(ver.label))}</h1>
        {/* <h1>{ver.label.replace('')} </h1> */}
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