import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';

export const Game0 = () => {
  const [result, setToss] = useState({
    res: faker.helpers.arrayElement([0, 1])
  });
  const [results, setResults] = useState();
  const [players, setPlayers] = useState<any>(null);
  const [amount, setAmount] = useState();
  const [value, setValue] = useState(0);
  const [user_choice, setUserChoice] = useState<any>('');
  const [sequence, setSequence] = useState(['A', 'B', 'C', 'D']);
  const [timer, setTimer] = useState<any>(0);

  useEffect(() => {

    setInterval(() => {
      setTimer(new Date().getMilliseconds() + 6000);
    }, 6000);
  }, []);

  // skill brahmi
  // lakshmi yantra
  // group {}
  // board
  return <div className='w-full sm:w-96 bg-white p-2 h-full mt-8 shadow-lg'>
    <div className='p-2 text-3xl font-extrabold'>LakshmiKreedA</div>
    <div className='flex flex-row justify-between p-2'>
      <div>
        {/* <FaGamepad/>  */}
        Players:8
      </div>
      <div>

        Amount:{8 * 2}
      </div>
    </div>
    <div>Lakshmi: {0} Ganesh:{1} {timer}</div>
    Result:{result.res === 0 ? "Tail" : "Head"}
    <div className='font-extrabold p-2 text-xl mt-12 mb-12'>Choose Short</div>
    <div>

      <div className='text-xl flex flex-row p-2 justify-around font-extrabold  m-auto text-center'>{[
        { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
        { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
      ].map((op, index) => {
        return <motion.div
          whileHover={{ scale: 1.3 }}
          key={index}
          onClick={() => {
            setUserChoice(op.label);
          }}
        >
          <Image
            src={op.img}
            alt="coins"
            width={100}
            height={100} />
          <div
            className={`p-2 ${user_choice === op.label ? "bg-gradient-to-r text-yellow-800 from-red-800 via-yellow-300 to-yellow-500 " : "bg-gray-200"} cursor-pointer   shadow-lg`}
          >
            {op.label}
          </div>

        </motion.div>;
      })}</div>
    </div>
    <div className='mt-8 font-extrabold'>Enter Amount {value}</div>
    <><input type="range" className='p-2  w-full'
      onChange={(e: any) => {
        setValue(e.target.value);
      }} /></>
    <div className='p-2 flex flex-row justify-between shadow-lg rounded-lg bg-pink-500'>
      {sequence.map((sq, index) => {
        return <motion.div
          whileHover={{ scale: [1, 1.3] }}
          key={index} className='bg-white cursor-pointer font-extrabold p-2 text-3xl rounded-lg shadow-lg'>{sq}</motion.div>;
      })}
    </div>

    <div>{players && players.map((player: any, index: number) => {
      return <div className='' key={index}>{player.name}</div>;
    })}</div>

    <div className='p-2 mt-12'>Last winners</div>
    <div>
      {["H", "He"].map((part, index) => {
        return <div key={index}>{part}</div>;
      })}
    </div>
    70:30

    <motion.div
      whileHover={{ scale: 0.8 }}
      // onHoverEnd={{scale:[1,1.01]}}
      className='text-3xl text-center mt-12 mb-12 cursor-pointer m-autp w-full bg-gray-300 rounded-lg shadow-lg'>PAY  INR 20.00 or 2TLP's  to PARTICIPATE</motion.div>
  </div>;
};
