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
  return <div className='flex flex-row gap-4 flex-wrap justify-around'>

    {zods.map((ss, index) => {
      return <div key={index} className='flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg'>
        <div className='text-5xl p-2'>
          {ss.sign}
        </div>
        <div className='m-auto text-xs'>
          {ss.label}
        </div>
      </div>;
    })}
  </div>;

};
