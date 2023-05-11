import useDeviceDetect from "@/hook/useDeviceDetect";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import Image from 'next/image'


export const ShiftShaper = (props: any) => {
  const {amount}=props
  return <div className=" m-auto w-80 h-auto  bg-white p-2">
    {/* <QRCode value="/hkd" className="m-auto" /> */}
    <UPIApp amount={amount} pupose={`${amount} for omnium yantra`}/>
    <div className="text-3xl m-auto text-center p-4 font-bold upperrcase">Scan to pay ₹॰ {amount}</div>
  </div>;
};



import url from 'url';

const URL = global.URL || url.URL;

export function getURL( props:any ) {
    const{amount, earth, purpose}=props
  const url = new URL(`upi://pay`);
  url.searchParams.append('pa', '9811720270@hdfcbank');
  url.searchParams.append('pn', 'Shivom on The Line Producer');
  url.searchParams.append('cu', 'INR');
  url.searchParams.append('tn', `Sale of OMNium for `);
  url.searchParams.append('am', amount);
  url.searchParams.append('refUrl', `https://shivom.thelineproducer.com/doc/support`);
  return url.href;
}

export const UPIApp=(props:any)=> {
  const {amount, initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  const [url, setURL] = useState('');
  const { isMobile } = useDeviceDetect();

  useEffect(()=>{
      let mount=true

      const email="hkfaduio@gmail.com"
      // const email=earth?.auth?.user?.username
      if(mount && email){
          // fetch(`/api/payment/pay?amount=${amount}&email=${earth?.auth?.user?.username}`,{method:"POST"}).then(res=>{
          //     console.log(res,'---=>upi')
          // }).catch(err=>{
          //     console.log(err)
          // })
          const _url = getURL({ amount, earth });

          if (!isMobile) {
              return setURL(_url);
            }
      }
      return ()=>{mount=false}
  },[earth.auth, amount, earth, isMobile])


      return (
        <div className='flex flex-col gap-4 mx-auto w-full justify-around'>
          <div className="text-xl text-pink-400 mb-2 flex mx-auto">
            <span className="text-xs  ">{isMobile?
              <div className='w-8 h-8 -mt-4 font-extrabold  p-1'>
              <Image src="/logo-172x172.png" alt="topay" width={100} height={100} />
              pay
              </div>
            :"Scan this QR code to pay using your UPI apps on mobile"}</span>
          </div>

           {isMobile ? <a
           href={url}
           className="text-center font-bold mx-auto bg-gray-600 text-white ring-2 py-2 ring-slate-200 w-full rounded-lg p-2" >
            Pay ₹ {amount}</a>:
            <div className='flex mx-auto w-full text-center justify-center p-4'><QRCode value={url} /></div>}
        </div>
      );



}
