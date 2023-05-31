import Image from 'next/image';
import { FaBlog, FaVideo } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillChatFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const Communication = () => {

  const router=useRouter()
  return <div className='flex flex-col bg-white shadow-lg w-full h-[90vh] mb-12 mt-12'>
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
          { name: 'Blog', tool:"Blog", icon: <FaBlog /> },
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

// promp guides to celestial moments and movements
//  


// Some recent entries:
// जनौघ	n.	janaugha	gathering[people]	
// घात	m.	ghAta	bang[stroke]	
// औद्भिद	adj.	audbhida	botanical[pertaining to plants]	
// वैषुवत	n.	vaiSuvata	equinox[astron.]	
// विषुव	m.	viSuva	equinox[astron.]	


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

// Found 18 entries
// Your results for equinox:
// विषुव	m.	viSuva	equinox[astron.]	
// वैषुवत	n.	vaiSuvata	equinox[astron.]	
// महाविषुव	n.	mahAviSuva	vernalequinox[occurs in March]	
// अर्धरात्रार्धदिवस	m.	ardharAtrArdhadivasa	equinox	
// विषुण	m.	viSuNa	equinox	
// विषुप	m.	viSupa	equinox	
// विष्वञ्च्	n.	viSvaJc	equinox	
// हरिपद	n.	haripada	vernalequinox	
// विषुपद	n.	viSupada	autumnalequinox	
// जलविषुव	n.	jalaviSuva	autumnalequinox	
// आश्विनचिह्नित	n.	Azvinacihnita	autumnalequinox	
// विषुवदिन	n.	viSuvadina	dayoftheequinox	
// वैषुवत	adj.	vaiSuvata	relatingtotheequinox	
// क्रान्तिपातगति	f.	krAntipAtagati	precessionoftheequinox	
// विषुवत्	n.	viSuvat	equinoctialpointorequinox	
// पञ्चतीथी	f.	paJcatIthI	bathingonthedayoftheequinox	
// होलाका	f.	holAkA	springfestivalattheapproachofthevernalequinox	
// विषुवत्सङ्क्रान्ति	f.	viSuvatsaGkrAnti	passingofthethesunintothenextsignateitherequinox	



// Found 5 entries
// Your results for artha:
// स्वरक्षार्थम्		svarakSArtham	svarakSaartha	
// कार्श्य	n.	kArzya	smallnessartha-k	
// कार्श्य	n.	kArzya	smallnessartha-k	
// स्वामिकार्यार्थं		svAmikAryArthaM	svami-karya-artham	
// कालतरङ्ग	m.	kAlataraGga	firstpartofthesmRtyarthasAgarabynRsiMha