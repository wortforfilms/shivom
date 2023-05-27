import { useState } from "react";

const SingleSelectInput = (props: any) => {
  const { label, type, options, id, message, setValue } = props;
  const [selected, select] = useState<any>(null);
  return <div className='p-2 bg-white'>
    <label>{label}</label><br />
    <select id={id} onChange={(e) => {
      // select()
      setValue(e.target.value);
    }}>
      {options.map((opt: any, index: any) => {
        return <option key={index} value={opt}>{opt}</option>;
      })}
    </select>

  </div>;
};



