import useOnClickOutside from '@/hook/useOnClickOutside';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { AiOutlineFieldString } from 'react-icons/ai';
import { BiCalendarExclamation } from 'react-icons/bi';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { FaAddressCard, FaBahai, FaBlog, FaCartArrowDown, FaFileContract, FaHome, FaServicestack, FaShippingFast, FaSuperpowers, FaTerminal } from 'react-icons/fa';



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
    link: "/docs/aboutus"
  },
  {
    label: "Catalogue",
    icon: <FaCartArrowDown/>,
    image: "",
    link: "/docs/catalogue"
  },
  {
    label: "Calender",
    icon: <BiCalendarExclamation/>,
    image: "",
    link: "/calender"
  },
  {
    label: "Blogs",
    icon: <FaBlog/>,
    image: "",
    link: "/blog"
  },
  {
    label: "Amrut",
    icon: <AiOutlineFieldString/>,
    image: "",
    link: "/ras"
  },
  {
    label: "Services",
    icon: <FaServicestack/>,
    image: "",
    link: "/docs/services"
  },
  {
    label: "Support",
    icon: <FaSuperpowers/>,
    image: "",
    link: "/docs/support"
  },
  {
    label: "Terms",
    icon: <FaTerminal/>,
    image: "",
    link: "/docs/terms"
  },
  {
    label: "Shipping",
    icon: <FaShippingFast/>,
    image: "",
    link: "/docs/shipping"
  },
  {
    label: "Upgrade",
    icon: <BsFillArrowUpRightCircleFill/>,
    image: "",
    link: "/docs/upgrade"
  },
  {
    label: "Contact Us",
    icon: <FaAddressCard/>,
    image: "",
    link: "/docs/contactus"
  }
];


export const LeftMenu = () => {
  const [lf_open, setlfOpen] = useState(false);
  const [lf, setlf] = useState(left);
  const lfRef = useRef<any>(null);
const router=useRouter()
  useOnClickOutside(lfRef, () => setlfOpen(false));



  return <div ref={lfRef} className='ml-2 w-100'>
<div className='flex flex-row w-100'
   onClick={()=>{
    setlfOpen(!lf_open)
  }}
>

 
      <div className='m-auto hidden sm:block font-extrabold text-white'><div>
        SH
        </div>
        </div>
        <div className='text-black hidden sm:block m-auto'>IV</div> 
        <Image 
        src={"/img/om-71gQJPwz8gL._UL1500_2000x.png"}

      width={100} height={100}
      className='w-12 h-10 sm:w-10 sm:h-10 rounded-full -ml-2 sm:ml-0 -mt-1'
 alt="shiv om" id='ShivAum Top'/>
      </div>

{lf_open &&
      lf && <motion.div
        animate={{ opacity: [0, 1], x: [10, 0] }}
        className='absolute h-[100vh] w-64 mt-1  shadow-lg -ml-4  bg-white'>{
          lf.map((l, index) => {
          return <div key={index} className='text-sm p-1 mb-2 ml-2 hover:bg-gray-300 cursor-pointer flex flex-row gap-4'
          onClick={()=>{
            router.push(l.link)
            setlfOpen(false)
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


// Astro is the mathematics of your life

// Vastu Shastra Face Reading Birth Genral Matrimony

//Contact Our Expert Astrologers
// "Know Your Zodiac Sign"
// "We Think About Reflections On The Wisdom From The Planets"
// "Our Newsletter"
// "Get Your Daily Horoscope, Daily Lovescope and Daily Tarot Directly In Your Inbox"

// Kosh :{tk}{yantra}{mantra}
// Cash Delivery Fee:{}
// {patra}:{patta}
// {leaf-let}-{earn cost}
// {produce}-{''}
// {commodity}-{new-commodity}
// {view}-{subscription}
// {big:data}
// {bid:view}
// {insuarnce:service}
export const counts=[
{
  label:"Qualified Astrologers",
  count:565
},
{
  label:"Success Horoscope",
  count:200
},
{
  label:"Offices Worldwide",
  count:300
},

  

  

  "Trust By Million Clients",

  "Year's Experience",

  "Type Of Horoscopes",
]
