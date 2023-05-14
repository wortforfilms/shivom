import { IconLabel } from '@/lib/calender';
import { useRouter } from 'next/router';
import { BiCalendar, BiHome } from 'react-icons/bi';
import { BsCart, BsWallet } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

export const Cart = () => {
const router=useRouter()
  // transaction order catalogue distribution logistic 
  // {}-{}-{}
  // ::: {} ::: subscript
  // section time moon namAza
  const services=[
    {
label:"Home",
icon:<BiHome/>,
link:"/"
    },
    {
      label:"Calendar",
      icon:<BiCalendar/>,
      link:"/calender"
    },  {
      label:"Kosh",
      icon:<FaWallet/>,
      link:"/kosh"
    },  {
      label:"Cart",
      icon:<BsCart/>,
      link:"/cart"
    }
  ]
  return <div className=' px-8 w-100 flex flex-row gap-4 sm:gap-8'>

    {
      services.map((ss,index)=>{
        return <div key={index}><IconLabel si={ss}/></div>
      })
    }

  </div>;
};

// out from game chips control ai :: 
// tool : accessibility 
// {}::{}
// {}::{}
// skill development for blinds
// {}::{}
// 20000 
// {flavours in 20000000}
// :::-:::-{}
// chipsets 
//  {:shivom:}-{directors:rsr:count:{5}}-{["Hemant Kumar Dixit","TanvAngI Shukla?÷¿A?/","Nitin Shukla","SanjeetA KhairA","Dinesh •••••••"]}
// trim
// length hight weight vision sound 
// ir om remote rre_mo_te
// 
// krrubuddhi
// crew_intelligence
// dictionatry astro dictionary
// kodakaksh
// observation :: 
// ex silent excilent
// {}-healthcare_ai::
// ::-{}-{}-{}
// 