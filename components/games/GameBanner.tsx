import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { LabelButton } from '@/pages/cart';
import { IconLabel } from '@/lib/calender';


export const GameBanner = (props: any) => {
  const { initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector(state => state);
  const [timer, setTimer] = useState<any>(0);
  const router = useRouter();
  const [game, setGame] = useState<any>([
    { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
    { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
  ]);

  return <div className='bg-white w-96 m-auto h-[80vh] overflow-hidden mt-8'>

    <div className='text-center p-2'>बुद्धिकल्पितसमाज</div>
    <div className='p-2 text-3xl text-center font-extrabold'>LakshmiKreedA</div>
    <div className='p-2 text-3xl text-center font-extrabold'>लक्ष्मी क्रीड़ा</div>
    <div className='flex flex-col sm:flex-row w-full mt-8 h-80 justify-around bg-white'>

      <div className='w-full sm:w-1/3  '>
        <Image

          src={game[0].img}
          alt="coins"
          width={100}
          height={100}
          className='m-auto w-48 h-auto' />
          </div>



      <div className='w-48 m-auto h-[90vh]'>

        <Image

          src={game[1].img}
          alt="coins"
          width={100}
          height={100}
          className='m-auto w-full h-auto' /></div>
    </div>

  </div>;
};
