import React, { useEffect } from 'react';

const Banner: React.FC = () => {
  useEffect(() => {
    const content = document.querySelector('.content') as HTMLElement;
    const ctaButton = document.querySelector('.cta-button') as HTMLElement;

    // Animation: Slide in from the top
    content.style.animation = 'slide-in 1s ease';

    // Animation: Pulse effect on CTA button
    setInterval(() => {
      ctaButton.style.animation = 'pulse 1s ease';
    }, 2000);
  }, []);

  return (
    <div className="banner bg-gray-200 h-64 mt-8 md:h-80 flex justify-center items-center">
      <div className="content text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let A.I. Discover Your Unique Planet Chart</h1>
        <p className="text-lg text-gray-600 mb-8">Unlock the secrets of your destiny with our personalized A.I. enabled planet chart and Yantra service.</p>
        <a className="cta-button bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 rounded-full transition-colors duration-300" href="#">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Banner;
