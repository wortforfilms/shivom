import React from 'react';
import { Transition } from '@headlessui/react';
import { FiArrowRight } from 'react-icons/fi';

const Sh4omBanner: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-blue-500 p-4 fixed bottom-0 left-0 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-white font-bold mr-2">sh4om</h3>
            <p className="text-white">Empowering a Democratic Future</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white opacity-50 hover:opacity-100 focus:outline-none"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Sh4omBanner;


export const Sh4omBanner0: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-black p-4 fixed bottom-0 left-0 w-full h-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-pink-500 font-bold mr-2">
              <span className="animate-matrix thin-head"></span>
            </h3>
          </div>
            {/* <p className="text-white">Empowering a Democratic Future</p> */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white opacity-50 hover:opacity-100 focus:outline-none"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </Transition>
  );
};




/// location in degree minute

// angular 

// birth location latitude longitude 
// DNA RNA

// ATGC
// Constellations Planets Moon  Parent 
// position on date 
// date on position
// 