import { subscribe } from 'diagnostics_channel';
import { GenIcon } from 'react-icons';
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { FaAccusoft, FaCircleNotch, FaHome, FaListAlt, FaRegGrinBeamSweat, FaServicestack, FaSpaceShuttle, FaTerminal, FaThemeco, FaUnlink, FaUserCircle } from 'react-icons/fa';
import { MiddleBar } from './MiddleBar';

import { useState } from 'react';
import { LeftPanel } from '@/components/panel/left_panel';
import { RightPanel } from '@/components/panel/right_panel';

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
    ]
  },
  {
    label: "Services",
    icon: <FaServicestack/>,
    image: "",
    link: "/#service"
  }
]


export const TopBar = () => {

  const [left,setLeft]=useState(false)
  const [right,setRight]=useState(false)

  return <nav className='fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  z-50  w-full h-12 p-2  
  shadow-lg
  flex flex-row justify-between '>
    {left && <LeftPanel/>}
    {right && <RightPanel/>}
   <LeftMenu/>
   <MiddleBar/>
   <RightMenu/>
  </nav>;
};

