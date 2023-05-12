import { week } from "../data";



export const DayName = (props: any) => {
  const { i } = props;
  return <div className="flex flex-row justify-start max-w-2xl p-2 gap-1">
    {week.slice(i, i + 7).map((day: any, index: number) => {
      return <div key={index} className="w-[12%]  p-1 rounded-lg uppercase bg-slate-200 text-[10px] text-center text-gray-700 font-bold ">
        <div className="mt-1">{day.slice(0, 2)}</div></div>;
    })}</div>;
};
