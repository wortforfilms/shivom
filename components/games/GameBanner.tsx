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
import { gold, silver } from '@/sty';
import { Box } from '@/elements/box';


export const GameBanner = (props: any) => {
  const { initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector(state => state);
  const [timer, setTimer] = useState<any>(0);
  const router = useRouter();
  const [game, setGame] = useState<any>([
    { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
    { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
  ]);

  return <div className=' w-full sm:w-full  h-full min-h-[90vh]  '>
    {/* <div className='text-center text-5xl thin-head p-2'>बुद्धिकल्पितसमाज</div> */}
<div className='flex flex-row flex-wrap justify-around gap-8 m-auto '>
<Box>
  
   <GameCategory game={game[1]}/>
</Box>
<Box>

   <GameCategory game={game[0]}/>
</Box>
</div>

  </div>;
};


const GameBar=(props:any)=>{
  const {game}=props
  const router=useRouter()
  return  <div className='flex flex-row w-full m-auto gap-6 mt-8 mb-8 justify-around '>
<motion.div 
whileHover={{scale:.95}}
className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-pink-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'
onClick={()=>{
  router.push(`/kreedA?q=${game.label.toLowerCase()}`)
}
}
><BiPlayCircle className='text-5xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-red-600 border-2 border-white'/></motion.div>
<motion.div 
whileHover={{scale:.95}}

className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-yellow-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'><MdGamepad className='text-5xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-green-600 border-2 border-white'/></motion.div>
<motion.div 
whileHover={{scale:.95}}

className='cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] hover:from-indigo-500 from-gray-900 via-gray-100 to-gray-900 rounded-full shadow-lg'><GrGamepad className='text-5xl rouded-full m-auto shadow-lg rounded-full ring-4 ring-blue-600 border-2 border-white'/></motion.div>

</div>
}



const GameCategory=(props:any)=>{
  const {game}=props
const router=useRouter()
  return  <div className={`flex flex-col mt-4 mb-4 m-auto w-80  rounded-lg shadow-lg p-2  ${game.label==='Lakshmi'?silver:gold}`}>

  <div className='p-2 text-3xl text-center font-extrabold'>{game.label}</div>
  <div className='p-2 text-3xl text-center font-extrabold'>क्रीड़ा</div>
  <div className='flex flex-col sm:flex-col w-full m-auto gap-2 mt-2 h-100 justify-around '>

    <div className='w-full m-auto   '>
      <Image

        src={game.img}
        alt="coins"
        width={100}
        height={100}
        className='m-auto w-56 p-2 h-auto shadow-lg  rounded-full' />
        </div>
<GameBar game={game}/>
    <div className='w-100 m-auto text-3xl text-center font-bold hover:bg-gray-300 hover:invert cursor-pointer p-2'
    onClick={()=>{
      router.push(`/kreedA?q=${game.label.toLowerCase()}`)
    }}
    >
PLAY TO {game.label!=="Lakshmi"?'LEARN':'EARN '} 
     </div>
  </div>
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