import { errorT, notify } from '@/components/toast';
import { AutoAvatar } from '@/elements/avatar';
import useOnClickOutside from '@/hook/useOnClickOutside';
import { IconLabel } from '@/lib/calender';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { BsSave2Fill } from 'react-icons/bs';
import { FaRegistered, FaUserCircle } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { MdAdminPanelSettings } from 'react-icons/md';
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
    label: "Save Screen",
    icon: <BsSave2Fill/>,
    image: "",
    link: "",
    action:()=>{
      
      console.log('start canvasing')
  
    }
  },
  {
    label: "Profile",
    icon: <FaUserCircle/>,
    image: "",
    link: "/user"
  },
  {
    label: "Setting",
    icon: <FcSettings/>,
    image: "",
    link: "/user/setting"
  },
  {
    label: "Logout",
    icon: <BiLogOut/>,
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
        className='absolute right-0 h-100 w-48 p-2 mt-2 shadow-lg  rounded-lg bg-white'>
          {
  earth?.auth?.user?.username==="forfilmcoin@gmail.com" && <div  className=' flex flex-row gap-4 text-sm p-1 mb-2 hover:bg-gray-300 cursor-pointer'
  onClick={()=>{
    router.push('/admin')
  }}
  >
    
    <div className='text-gray-600  text-2xl rounded-full p-1'>
      <MdAdminPanelSettings/>
      </div>
      <div className='my-auto'>
        Admin
        </div>
  </div>
}
          {earth?.auth?.authenticated?arf.map(
          (l, index) => {
            return <div key={index} className=' flex flex-row gap-4 text-sm p-1 mb-2 hover:bg-gray-300 cursor-pointer'
            onClick={()=>{
              if(l.label==="Save Screen" && l.action){
                l.action()
                const proc=async()=>{

                  await fetch(`/api/file/pdf_create?url=http://localhost:3000${router.asPath}`).then(res=>res.json()).then(data=>{
                    console.log('created',data)
                    notify("Pdf exported")

                    const url=window.URL.createObjectURL(new Blob(data.data))
                    var link = document.createElement('a');

                    link.href = url;
                    
                    link.download = 'file.pdf';
                    
                    link.dispatchEvent(new MouseEvent('click'));
                                      setrfOpen(false)
                  }).catch((error)=>{
                    errorT(error)
                  })
                }
                proc()

              } else {

                router.push(l.link)
                setrfOpen(false)
              }
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

// device canvas
// draw
// nuiversal
// 4rs_allAh_Ho_akbar
// brAhmi_news_samAchAr
// samA 4 
// s__––__ {option: buttons}
// `¡™£¢∞§¶•ªº–≠
// œ∑´®†¥¨ˆøπ
// åß∂ƒ©˙∆˚¬
// ≈√∫˜˜µ˜˜√≈cÇC¸zZ¸deep undo 
// ≤≥÷¯˘¿,./<>?
// moon cycle :: 
// Patent: await
// {}-{nnon: maninfest:}
// {ideators}-{moon}
// cckkddpp
// dp cp ep –––———–––___---
// 

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