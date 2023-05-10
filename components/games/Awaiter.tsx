import Image from 'next/image';
import QRCode from 'react-qr-code';

// वेरसीयोंस 
export const Awaiter = (props: any) => {
  const { game } = props;
  return <div className='w-full h-[90vh]'>
    <Image

      src={game[0].img}
      alt="coins"
      width={100}
      height={100}
      className='m-auto w-full h-auto' />
    <div
      className='p-4 text-xl  text-center font-extrabold uppercase'
    >
      Remaining Time: 05:06:08
    </div>
    <div
      className='p-4 text-xl  text-center font-extrabold uppercase'

    >Current Value: 1.21</div>
    <QRCode value="erds456" className='m-auto w-12 h-12' />
  </div>;
};
