export const Symbols = () => {
  return <div className='flex flex-row gap-4 p-4 flex-wrap'>

    {[
      {
        sign: "✝️",
        label: "isAi"
      },
      {
        sign: "☮️",
        label: "bauddh"
      },
      {
        sign: "🕉️",
        label: "hindu"
      },
      {
        sign: "✡️",
        label: "jew"
      },
    ].map((ss, index) => {
      return <div key={index} className='flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg'>
        <div className='text-5xl p-2'>
          {ss.sign}
        </div>
        <div className='m-auto text-xs'>
          {ss.label}
        </div>
      </div>
    })}
  </div>

};
