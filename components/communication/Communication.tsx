import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillChatFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const Communication = () => {

  const router=useRouter()
  return <div className='flex flex-col bg-white shadow-lg w-full mb-12 mt-12'>
    <div className='p-4 text-3xl font-bold text-center text-gray-600'>Communicate with experts in the way you like!!</div>
    <div className='flex flex-col sm:flex-row gap-2'>

      <div className='flex flex-row gap-4 -mt-12 sm:mt-0 w-1/2 p-12 bg-white'>

        {[
          { name: 'Text', icon: <BsFillChatFill /> },
          { name: 'Audio', icon: <FiPhoneCall /> },
          { name: 'Video', icon: <FaVideo /> }
        ].map((mes, index) => {
          return <motion.div key={index} 
          animate={{opacity:[0,1]}}
          className='flex flex-col m-auto gap-2  cursor-pointer'>
            <motion.div 
            whileHover={{scale:1.1}}
            
            
            className='text-3xl m-auto  rounded-full w-16 h-16 bg-gradient-to-r from-red-800 via-yellow-300 to-yellow-500 ring-4 ring-orange-300 p-4 shadow-lg '>{mes.icon}</motion.div>
            <div className=' text-center text-xl m-auto font-thin p-2'>{mes.name}</div>
          </motion.div>;
        })}
      </div>

      <Image
        src="/img/hand-1.png"
        alt=""
        width={100}
        height={100}
        className='w-72 h-auto m-auto' />
    </div>

    <div className='absolute bg-pink-500 top-96 sm:top-72 text-white p-4 roudned-lg'>Starting at INR. 20.00 per minute</div>

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


// todo :: calculate value oil
// location ;: employment :: process :: designation
// collectorr
// scouts
// {}::{}
// training via schools
// training via colleges
// training via univercities
// universe
// mom wax om max 
// ear heat :: userr :: prressure 
// vision :: blind :: 
// listem :: heart beat 
// kids heart beat
// embryo stage 
// share detail to
// find cure care
// ::: 
// \\\ xxx /// \\\ 
// \\\ \\\ yyy ///\\\
// // ¿¿¿??? å/* auth */
// OAuthServices
// ::: ::: :::
// k:arn
// 