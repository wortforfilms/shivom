import { AutoAvatar } from '@/elements/avatar';
import useOnClickOutside from '@/hook/useOnClickOutside';
import { IconLabel } from '@/lib/calender';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaRegistered, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const right = [
  {
    label: "Register",
    icon: <FaRegistered/>,
    image: "",
    link: "/auth/register"
  },
  {
    label: "Login",
    icon: <FaUserCircle/>,
    image: "",
    link: "/auth/login"
  }
];

const aright = [
  {
    label: "Profile",
    icon: <FaRegistered/>,
    image: "",
    link: "/user"
  },
  {
    label: "Setting",
    icon: <FaUserCircle/>,
    image: "",
    link: "/user/setting"
  },
  {
    label: "Logout",
    icon: <FaUserCircle/>,
    image: "",
    link: "/auth/logout"
  }
];


export const RightMenu = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState = useSelector(state=>state)
  const [rf_open, setrfOpen] = useState(false);
  const [rf, setrf] = useState(right);
  const [arf, setarf] = useState(aright);
  const rfRef = useRef<any>(null);

  useOnClickOutside(rfRef, () => setrfOpen(false));
const router=useRouter()

  return <div ref={rfRef} className='bg-white p-1  rounded-full h-10   w-10 -mt-1'>
    
 
    {earth?.auth?.authenticated?<div
    className='-mt-2'
        onClick={() => {
          setrfOpen(!rf_open);
        }}
    ><AutoAvatar user={earth?.auth?.user} size={8}
 
    /></div>:
    <FaUserCircle size={32} className={`text-center ${!rf_open ? "" : "text-blue-500"} cursor-pointer mb-2`}
      onClick={() => {
        setrfOpen(!rf_open);
      }} />}


    {rf_open &&
      rf &&  <motion.div
        animate={{ opacity: [0, 1], x: [10, 0] }}
        className='absolute right-0 h-100 w-48 p-2 mt-2 shadow-lg  rounded-lg bg-white'>{earth?.auth?.authenticated?arf.map(
          (l, index) => {
            return <div key={index} className=' flex flex-row gap-4 text-sm p-1 mb-2 hover:bg-gray-300 cursor-pointer'
            onClick={()=>{
              router.push(l.link)
              setrfOpen(false)
            }}
            >
              
              <div className='text-gray-600  text-2xl rounded-full p-1'>
                {l.icon}
                </div>
                <div className='my-auto'>
                  {l.label}
                  </div>
            </div>;
          }
        ):rf.map((l, index) => {
          return <motion.div key={index} className=' flex flex-row gap-4 text-sm p-1 mb-2 hover:bg-gray-400 cursor-pointer'
          onClick={()=>{
            router.push(l.link)
            setrfOpen(false)

          }}

          whileHover={{scale:.95}}
          whileTap={{scale:1.1}}
          >
            <div className='text-gray-600  text-2xl rounded-full p-1'>
              {l.icon}
              </div>
              <div className='my-auto  mt-2'>
                {l.label}
                </div>
          </motion.div>;
        })}


      </motion.div>}

  </div>;
};



// input fields
// templates
// tools
// displays
// libs
// live
// messaging
// computer
// frog from sky
// fashion
//  :::-> 
// |||=>
// {}-{}
// 
// 

// https://roamingclicks.com/
// view/
// ivWFhFIFsULptK3gpd5IKBXMlbjqJVtZvWr4BddtreteRA?
// c=33347
// &pid=4826
// &site=352272.501559
// _2482b17d
// -3da8-45dd-b028-
// f8c83caaa6d2