import useOnClickOutside from '@/hook/useOnClickOutside';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { tm } from './TopBar';
import { motion } from 'framer-motion';

export const MiddleBar = () => {

  const router = useRouter();
  const [sub_open, setSubOpen] = useState<any>(null);

  const ref = useRef<any>(null);
  useOnClickOutside(ref, () => setSubOpen(null));

  return <div className=' flex flex-row gap-2 text-md  justify-between w-[90vw] '>

    {tm.map((me, index) => {
      return <motion.div key={index} 
      

      className='text-white hover:underline cursor-pointer text-sm m-auto'
        onClick={() => {
          if (!me.sub) {
            router.push(me.link, '', { scroll: true });
          } else {
            setSubOpen(me.link);
          }
        }}
      >{me.label}
        {me?.sub && sub_open && sub_open===me.link &&
          <div ref={ref} className='absolute w-32 h-100 mt-4 rounded-lg bg-white shadow-lg text-gray-800'>
            {me.sub.map((sub, index) => {
              return <div key={index} className='flex flex-row gap-4 p-2 hover:underline'
                onClick={() => {
                  router.push(sub.link, '', { scroll: true });
                  setSubOpen(null);
                }}
              >
                <div>{sub.icon}</div>
                <div>{sub.label}</div></div>;
            })}
          </div>}
      </motion.div>;
    })}
  </div>;
};
