import { useState } from "react";

const ListInput = (props: any) => {
  const { label, type, options, id, message, setValue } = props;
  const [list, setList] = useState<any>([]);
  return <div className='p-2 bg-white'>
    <label>{label}</label><br />
    <div className="flex flex-row gap-2">

      <input className='bg-gray-300 p-2 w-full' id={id} type={"text"} placeholder={message} />
      <div>Add </div>
    </div>
    <div className="flex flex-col gap-2">

      {list.map((li: any, index: number) => {
        return <div key={index} className="w-full">{li}</div>;
      })}
    </div>
  </div>;

};
