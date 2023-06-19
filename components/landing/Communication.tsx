import Image from 'next/image';
import { FaBlog, FaVideo } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillChatFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ObjectInfo } from '@/elements/object_display';
export const Communication = () => {




  const router=useRouter()
  return <div className='flex flex-col bg-white shadow-lg w-full h-full min-h-[90vh] mb-12 bg-gray-300 mt-6'>
  
    <div className='p-4  thin-head  text-center text-gray-600'>Communicate with experts in the way you like!!</div>
   <div className="flex flex-col sm:flex-row justify-between">

    <div className='flex flex-col justify-between m-auto'>
    <div className='flex flex-col sm:flex-row gap-2'>

      <div className='flex flex-row gap-4 -mt-2 sm:mt-0 w-full sm:w-1/2 p-2 '
  
      >

        {[
          { name: 'Text',tool:"Chat", icon: <BsFillChatFill /> },
          { name: 'Audio', tool:"Talk", icon: <FiPhoneCall /> },
          { name: 'Video', tool:"Live", icon: <FaVideo /> },
          
        ].map((mes, index) => {
          return <motion.div key={index} 
          animate={{opacity:[0,1]}}
          className='flex flex-col m-auto gap-2  cursor-pointer'
          onClick={()=>{
            router.push(`/chat/${mes.tool.toLowerCase()}`)
          }}
          >
            <motion.div 
            whileHover={{scale:1.1}}
            className='text-3xl m-auto  rounded-full w-16 h-16 bg-gradient-to-r from-red-800 via-yellow-300 to-yellow-500 ring-4 ring-orange-300 p-4 shadow-lg '>{mes.icon}</motion.div>
            <div className=' text-center text-xl m-auto  font-bold p-2'>{mes.tool}</div>
          </motion.div>;
        })}
      </div>

    
    </div>
    <div className=' bg-pink-500  sm:top-56 h-12 text-white p-4 roudned-lg'>Starting at INR. 10.00 per minute</div>

</div>
<div>

    <Image
        src="/img/hand-1.png"
        alt=""
        width={100}
        height={100}
        className='w-72 h-auto m-auto' />
        </div>
   </div>


    <div className='flex flex-row flex-wrap gap-4 -mt-8 sm:mt-0 justify-around  w-full p-12 bg-white'>

      {[
        { name: 'Astrology', 
        icon: <BsFillChatFill />,
        image:"",

       },
       { name: 'Numerology', icon: <FiPhoneCall />,
       image:""
      
      },
        { name: 'Horoscope', icon: <FiPhoneCall />,
        image:""
      },
        { name: 'Tarot', icon: <FiPhoneCall />,
        image:""
      },
        { name: 'Palmistry', icon: <FiPhoneCall />,
        image:""
      },
        { name: 'Vastu', icon: <FaVideo />,
        image:""
      }
      ].map((mes, index) => {
        return <div key={index} className='flex flex-col gap-2'>
          {/* <div className='text-3xl m-auto  rounded-full w-16 h-16 bg-yellow-300 p-4 shadow-lg '>{mes.icon}</div> */}
          <motion.div 
          whileHover={{scale:.95}}

          onClick={()=>{
            router.push(`/log/${mes.name.toLowerCase()}`)
          }}
          className='hover:bg-sky-800 cursor-pointer  text-center text-xl bg-black text-white font-bold p-2'
          
          >{mes.name}</motion.div>
        </div>;
      })}
    </div>

  </div>;
};


