
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { MiddleBar } from './MiddleBar';

import { useState } from 'react';
import { LeftPanel } from '@/components/panel/left_panel';
import { RightPanel } from '@/components/panel/right_panel';
import { Cart } from './Cart';
import { useSelector } from 'react-redux';


export const TopBar = (props:any) => {
  const {initialReduxState}=props
const earth:typeof initialReduxState=useSelector(state=>state)
  const [left,setLeft]=useState(false)
  const [right,setRight]=useState(false)

  return <nav className='fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  z-50  w-full h-12 p-2  
  shadow-lg
  flex flex-row justify-between '>
    {left && <LeftPanel/>}
    {right && <RightPanel/>}
   <LeftMenu/>
  {earth?.auth?.authenticated ?<Cart/>: <MiddleBar/>

}
   <RightMenu/>
   
  </nav>;
};



