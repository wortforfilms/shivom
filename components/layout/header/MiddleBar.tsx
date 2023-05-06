import useOnClickOutside from '@/hook/useOnClickOutside';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaAccusoft, FaCircleNotch, FaHome, FaListAlt, FaRegGrinBeamSweat, FaServicestack, FaSpaceShuttle, FaTerminal, FaThemeco, FaUnlink, FaUserCircle } from 'react-icons/fa';

import { motion } from 'framer-motion';

export const tm = [
  {
    label: "Home",
    icon: <FaHome/>,
    image: "",
    link: "/"
  },
  {
    label: "About Us",
    icon: <FaAccusoft/>,
    image: "",
    link: "/#concept",
    sub: [
      {
        label: "Concept",
        icon: <FaTerminal/>,
        image: "",
        link: "/#concept"
      },
      {
        label: "Technology",
        icon: <FaThemeco/>,
        image: "",
        link: "/#technology"
      },
      {
        label: "Nakshatras",
        icon: <FaSpaceShuttle/>,
        image: "",
        link: "/#nakshatra"
      },
      {
        label: "Dosh",
        icon: <FaUnlink/>,
        image: "",
        link: "/#dosh"
      },
    ]
  },

  {
    label: "Catalogue",
    icon: <FaUserCircle/>,
    image: "",
    link: "/#catalogue",
    sub:[
      {
        label: "Tshirt",
        icon: <FaCircleNotch/>,
        image: "",
        link: "/#tshirt"
      },
      {
        label: "Gems",
        icon: <FaRegGrinBeamSweat/>,
        image: "",
        link: "/#gems"
      },
      {
        label: "Yantra",
        icon: <FaListAlt/>,
        image: "",
        link: "/#yantra"
      },
      {
        label: "Books",
        icon: <FaListAlt/>,
        image: "",
        link: "/#books"
      },
      {
        label: "Accessories",
        icon: <FaListAlt/>,
        image: "",
        link: "/#accesories"
      },
    ]
  },
  {
    label: "Services",
    icon: <FaServicestack/>,
    image: "",
    link: "/#service",
    sub:[
      {
        label: "Astrology",
        icon: <FaListAlt/>,
        image: "",
        link: "/#astrology"
      },
      {
        label: "Numerology",
        icon: <FaListAlt/>,
        image: "",
        link: "/#numerology"
      },
      {
        label: "Horoscopes",
        icon: <FaListAlt/>,
        image: "",
        link: "/#horoscopes"
      },
      {
        label: "Tarot",
        icon: <FaListAlt/>,
        image: "",
        link: "/#tarot"
      },
      {
        label: "Palmistry",
        icon: <FaListAlt/>,
        image: "",
        link: "/#palmistry"
      }
    ]
  }
]
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
