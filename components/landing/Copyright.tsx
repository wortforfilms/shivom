import Image from 'next/image';

export const Copyright = () => {
  return <>
    <Image src="/appimages/ios/128.png" alt="" width={100} height={100} className='m-auto' />
    <div className='p-2 text-center'>
      Shine Vouge Multiventure©2021-2023
    </div></>;
};
