import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const TransitionScreen: React.FC = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationFinished(true);
    }, 5000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div className={`transition-screen ${animationFinished ? 'fade-out' : ''}`}>
      <div className='flex flex-col gap-2'>

      <h1 className='thin-head text-center'>𑀰{"४"}ॐ</h1>
      {/* <video muted autoPlay controls={false} loop
            
            className="  w-full w-full sm:w-full  p-0 sm:p-2 mt-8
              min-w-96 min-h-full max-w-none mb-8"
            >
                
              <source src={"/mp4/dixiom.mp4"} type="video/mp4"
            //   autoplay={true}
            
              
              
              />
              Your browser does not support the video tag.
            </video> */}
            <Image
            src="/loader/tlp-loader.gif"
            alt="loader"
            width={100}
            height={100}
            className='w-64 m-auto '
            />
      </div>

    </div>
  );
};

export default TransitionScreen;
