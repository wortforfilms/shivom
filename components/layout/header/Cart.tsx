import { gold, silver } from '@/components/games/GameBanner';
import { IconLabel } from '@/lib/calender';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiCalendar, BiHome } from 'react-icons/bi';
import { BsCart, BsRainbow, BsWallet } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

export const Cart = (props:any) => {
  const {earth}=props
const router=useRouter()
  // transaction order catalogue distribution logistic 
  // {}-{}-{}
  // ::: {} ::: subscript
  // section time moon namAza
  const [products, setProducts]=useState<any>(null)
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    let mount=true
    if(mount){
setProducts(earth?.cart?.cartItems)
    }
    return()=>{mount=false}

  },[earth?.cart?.cartItems])

  useEffect(() => {
    let mount = true;
    if (mount && products && products.length > 1) {
      // reduce to sum
      const nums = products.map((i:any) => i.price * i.quantity);
      const _amount = nums.reduce((i:any, a:any) => i + a, 0);
      setAmount(_amount);
      // console.log("cart amount", _amount, products);
    }
    return () => {
      mount = false;
    };
  }, [products]);

  
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
      icon:<BsRainbow/>,
      link:"/kosh"
    },  {
      label:"Cart",
      icon:<BsCart/>,
      link:"/cart"
    }
  ]
  return <div className=' px-8 w-100 flex -mt-1 flex-row gap-4 sm:gap-8'>

    {
      services.map((ss,index)=>{
        return <div key={index} className={`${router.asPath===ss.link?`${"bg-sky-600 ring-2 ring-white"} rounded-full w-10 h-10`:""}`}>
          <IconLabel si={ss}/>
          {ss.label.toLowerCase()==="cart" && products?.length>1 && <div className='absolute text-xs text-center m-auto font-bold  z-50 shadow-pink-500 -mt-10 ml-4 rounded-full p-1 w-100 h-4 bg-red-700 text-white'>
            <div className='-mt-1'>{Math.round(amount)}</div>
            </div>}
            {ss.label.toLowerCase()==="kosh"  && <div className='absolute text-xs text-center m-auto font-bold  z-50 shadow-pink-500  -mt-10 ml-4 rounded-full p-1 w-100 h-4 bg-yellow-300 text-pink-500'>
            <div className='-mt-1'>{Math.round(200)}</div>
            </div>}
          </div>
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