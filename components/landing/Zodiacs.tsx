import Image from "next/image"
import { useRouter } from "next/router";
export const zods = [
  {
    sign: "♈",
    label: "Aries"
  },
  {
    sign: "♉",
    label: "Taurus"
  },
  {
    sign: "♊",
    label: "Gemini"
  },
  {
    sign: "♋",
    label: "Cancer"
  },
  {
    sign: "♌",
    label: "Leo"
  },
  {
    sign: "♍",
    label: "Virgo"
  },
  {
    sign: "♎",
    label: "Libra"
  },
  {
    sign: "♏",
    label: "Scorpio"
  },
  {
    sign: "♐",
    label: "Sagittarius"
  },
  {
    sign: "♑",
    label: "Capricorn"
  },
  {
    sign: "♒",
    label: "Aquarius"
  },
  {
    sign: "♓",
    label: "Pisces"
  },
  {
    sign: "⛎",
    label: "Ophiuchus"
  }
];
export const Zodiacs = () => {

  const router=useRouter()

  return <div className="flex flex-col sm:flex-row bg-white p-4">
    <Image
    // src="/img/astrology-circle-orance-dots.png"
    src="/img/astrological_chart.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
quality={100}
    className="w-72 h-72 rounded-full animate-rotate m-auto"
    />
<div className='flex flex-row gap-4 flex-wrap justify-around m-auto'>

    {zods.map((ss, index) => {
      return <div key={index} className='flex flex-col gap-2 justify-start bg-white p-2 rounded-lg '
      onClick={()=>{
        router.push(`/galaxy/rashi/${ss.label}`)
      }}
      >
        <div className='text-5xl p-2'>
          {ss.sign}
        </div>
        <div className=' text-xs text-center'>
          {ss.label}
        </div>
      </div>;
    })}
  </div>
  </div>

};
