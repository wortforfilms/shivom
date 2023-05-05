import useOnClickOutside from '@/hook/useOnClickOutside';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaBahai, FaCartArrowDown, FaHome, FaServicestack, FaShippingFast, FaSuperpowers, FaTerminal } from 'react-icons/fa';



const left = [
  {
    label: "Home",
    icon: <FaHome/>,
    image: "",
    link: "/"
  },
  {
    label: "About Us",
    icon: <FaBahai/>,
    image: "",
    link: "/#aboutus"
  },
  {
    label: "Catalogue",
    icon: <FaCartArrowDown/>,
    image: "",
    link: "/#catalogue"
  },
  {
    label: "Services",
    icon: <FaServicestack/>,
    image: "",
    link: "/#services"
  },
  {
    label: "Support",
    icon: <FaSuperpowers/>,
    image: "",
    link: "/#support"
  },
  {
    label: "Terms",
    icon: <FaTerminal/>,
    image: "",
    link: "/#terms"
  },
  {
    label: "Shipping",
    icon: <FaShippingFast/>,
    image: "",
    link: "/#shipping"
  }
];


export const LeftMenu = () => {
  const [lf_open, setlfOpen] = useState(false);
  const [lf, setlf] = useState(left);
  const lfRef = useRef<any>(null);
const router=useRouter()
  useOnClickOutside(lfRef, () => setlfOpen(false));



  return <div ref={lfRef}>

    <Image
      src="/appimages/ios/64.png"
      alt="applogo"
      className={`w-10 h-10 -mt-1  ${!lf_open?"bg-white":"bg-blue-500"} rounded-full`}
      width={100}
      height={100} 
      onClick={()=>{
        setlfOpen(!lf_open)
      }}
      />

{lf_open &&
      lf && <motion.div
        animate={{ opacity: [0, 1], x: [10, 0] }}
        className='absolute h-100 w-48 mt-1 p-2 shadow-lg ml-0 rounded-lg bg-white'>{
          lf.map((l, index) => {
          return <div key={index} className='text-sm p-1 mb-2 hover:bg-gray-300 cursor-pointer flex flex-row gap-4'
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
