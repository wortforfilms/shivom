import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { LabelButton } from '@/pages/cart';
import { IconLabel } from '@/lib/calender';
import { BiPlayCircle } from 'react-icons/bi';
import { MdGamepad, MdGames } from 'react-icons/md';
import { GrGamepad } from 'react-icons/gr';
import { supabase } from '@/lib/Store';


export const GameBanner = (props: any) => {
  const { initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector(state => state);
  const [timer, setTimer] = useState<any>(0);
  const router = useRouter();
  const [game, setGame] = useState<any>([
    { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
    { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
  ]);

  return <div className='bg-white w-full sm:w-96 m-auto h-100 overflow-hidden mt-4'>
    <div className='text-center p-2'>बुद्धिकल्पितसमाज</div>
    <div className='p-2 text-3xl text-center font-extrabold'>LakshmiKreedA</div>
    <div className='p-2 text-3xl text-center font-extrabold'>लक्ष्मी क्रीड़ा</div>
    <div className='flex flex-col sm:flex-col w-full m-auto gap-2 mt-2 h-100 justify-around bg-white'>

      <div className='w-full m-auto sm:w-1/3  '>
        <Image

          src={game[0].img}
          alt="coins"
          width={100}
          height={100}
          className='m-auto w-48 h-auto' />
          </div>
<GameBar game={game}/>
      <div className='w-48 m-auto '>

        <Image

          src={game[1].img}
          alt="coins"
          width={100}
          height={100}
          className='m-auto w-full h-auto' /></div>
    </div>

  </div>;
};


const GameBar=(props:any)=>{
  const {game}=props
  return  <div className='flex flex-row w-full m-auto gap-2 mt-8 mb-8 justify-around bg-white'>
<motion.div 
whileHover={{scale:.95}}
className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-pink-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'><BiPlayCircle className='text-7xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-red-600 border-2 border-white'/></motion.div>
<motion.div 
whileHover={{scale:.95}}

className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-yellow-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'><MdGamepad className='text-7xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-green-600 border-2 border-white'/></motion.div>
<motion.div 
whileHover={{scale:.95}}

className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-indigo-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'><GrGamepad className='text-7xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-blue-600 border-2 border-white'/></motion.div>

</div>
}


const find_soch=async(pmt:any)=>{
  const {data,error}=await supabase.from("vichAr").select('*').eq('pmt',pmt)
  return {data,error}
}


const create_soch=async(pmt:any, result:any)=>{
  const {data,error}=await supabase.from("vichAr").select('*').insert([{
    pmt:pmt,
    result:result
  }])
  return {data,error}
}