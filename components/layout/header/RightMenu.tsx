import useOnClickOutside from '@/hook/useOnClickOutside';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaRegistered, FaUserCircle } from 'react-icons/fa';

const right = [
  {
    label: "Register",
    icon: <FaRegistered/>,
    image: "",
    link: "/#register"
  },
  {
    label: "Login",
    icon: <FaUserCircle/>,
    image: "",
    link: "/#login"
  }
];
export const RightMenu = () => {
  const [rf_open, setrfOpen] = useState(false);
  const [rf, setrf] = useState(right);
  const rfRef = useRef<any>(null);

  useOnClickOutside(rfRef, () => setrfOpen(false));
const router=useRouter()

  return <div ref={rfRef} className='bg-white p-1  rounded-full h-10   w-10 -mt-1'>
    <FaUserCircle size={32} className={`text-center ${!rf_open ? "" : "text-blue-500"} cursor-pointer mb-2`}
      onClick={() => {
        setrfOpen(!rf_open);
      }} />
    {rf_open &&
      rf && <motion.div
        animate={{ opacity: [0, 1], x: [10, 0] }}
        className='h-100 w-48 p-2  shadow-lg -ml-32 rounded-lg bg-white'>{rf.map((l, index) => {
          return <div key={index} className=' flex flex-row gap-4 text-sm p-1 mb-2 hover:bg-gray-300 cursor-pointer'
          onClick={()=>{
            router.push(l.link)
          }}
          >
            
            <div className='text-gray-600  text-2xl rounded-full p-1'>
              {l.icon}
              </div>
              <div className='my-auto'>
                {l.label}
                </div>
          </div>;
        })}

      </motion.div>}

  </div>;
};
