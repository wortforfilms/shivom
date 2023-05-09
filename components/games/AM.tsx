import { motion } from 'framer-motion';

export const AM = (props: any) => {
  const { setValue, sequence, setAmount, value, amount } = props;
  return <>
    <div className='mt-8 font-extrabold'>Enter Amount {value}</div>
    <><input type="range" className='p-2  w-full'
      onChange={(e: any) => {
        setValue(e.target.value);
        setAmount(0);
      }} /></>
    <div className='p-2 flex flex-row justify-between shadow-lg rounded-lg bg-gray-200'>
      {sequence.map((sq: any, index: number) => {
        return <motion.div
          whileHover={{ scale: [1, 1.3] }}
          onClick={() => {
            setAmount(sq);
            setValue(0);
          }}
          key={index}
          className={`${amount === sq ? "bg-gradient-to-r text-yellow-800 from-red-800 via-yellow-300 to-yellow-500" : "bg-white"} cursor-pointer font-extrabold p-2 text-3xl rounded-lg shadow-lg`}>{sq}</motion.div>;
      })}
    </div>
  </>;
};
