import Image from "next/image"
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
  return <div className="flex flex-col sm:flex-row bg-white p-4">
    <Image
    src="/img/astrology-circle-orance-dots.png"
    alt=""
    width={100}
    height={100}
    className="w-2/3 h-full shadow-lg rounded-full m-auto"
    />
<div className='flex flex-row gap-4 flex-wrap justify-around m-auto'>

    {zods.map((ss, index) => {
      return <div key={index} className='flex flex-col gap-2 justify-start bg-white p-2 rounded-lg '>
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
