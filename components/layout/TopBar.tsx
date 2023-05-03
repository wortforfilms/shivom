import Image from 'next/image';
import { useRouter } from 'next/router';
import { GenIcon } from 'react-icons';
import {FaUserCircle} from 'react-icons/fa'

const tm=[
  {
    label: "Home",
    icon: "",
    image: "",
    link: "/"
  },
  {
    label: "About Us",
    icon: "",
    image: "",
    link: "/#concept"
  },
  {
    label: "Technnology",
    icon: "",
    image: "",
    link: "/#technology"
  },
  {
    label: "Nakshatras",
    icon: "",
    image: "",
    link: "/#nakshatra"
  },
  {
    label: "Dosh",
    icon: "",
    image: "",
    link: "/#dosh"
  },
  {
    label: "Catalogue",
    icon: "",
    image: "",
    link: "/#catalogue"
  },
  {
    label: "Services",
    icon: "",
    image: "",
    link: "/#service"
  }
]
export const TopBar = () => {

  const router = useRouter();
  return <nav className='fixed bg-gray-700  w-full h-12 p-2  flex flex-row justify-between '>
    <div>

    <Image
      src="/appimages/ios/64.png"
      alt="applogo"
      className='w-10 h-10 -mt-1  bg-white rounded-full'
      width={100}
      height={100} />
      </div>
<div className=' flex flex-row gap-2  justify-between w-[90vw] '>

    {tm.map((me, index) => {
      return <div key={index} className='text-white hover:underline hover:font-bold cursor-pointer text-xs m-auto'
        onClick={() => {
          router.push(me.link,'',{scroll:true});
        }}
      >{me.label}
      
      
      </div>;
    })}
</div>

    <div className='bg-white p-1 rounded-full h-10   w-10 -mt-1'>
      <FaUserCircle size={32} className='text-center'/>
    </div>
  </nav>;
};
