import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { Scene } from './Game';

export const Start = (props: any) => {
  const { game, router, earth } = props;
  return <Scene>

    <div className='text-center p-2'>बुद्धिकल्पितसमाज</div>
    <div className='p-2 text-3xl text-center font-extrabold'>LakshmiKreedA</div>
    <div className='p-2 text-3xl text-center font-extrabold'>लक्ष्मी क्रीड़ा</div>
    {/* <div className='flex flex-col sm:flex-row'> */}

    <div className='w-2/3 m-auto h-[90vh]'>
      <Image

        src={game[0].img}
        alt="coins"
        width={100}
        height={100}
        className='m-auto w-full h-auto' /></div>
    <div className='w-2/3 m-auto h-[90vh]'>
      <div className='flex flex-row gap-4 mb-4 text-7xl justify-around'>

        {[{ icon: <BsPlayCircleFill />, label: "play" },

        { icon: <FaGamepad />, label: "gameplay" }].map((but, index) => {
          return <div key={index}>
            <div className='text-xs text-center uppercase  p-2'>{but.label}</div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                if (earth?.auth?.authenticated) {

                  router.push(`/kreedA/lakshmi/${but.label}`);
                } else {
                  router.push('/auth/login');
                }
              }}
              className='ring-4 cursor-pointer rounded-full w-100 p-2 ring-blue-800 border-4 text-5xl border-sky-500'>{but.icon}</motion.div></div>;
        })}

      </div>
      <Image

        src={game[1].img}
        alt="coins"
        width={100}
        height={100}
        className='m-auto w-full h-auto' /></div>
    {/* </div> */}

  </Scene>;
};
