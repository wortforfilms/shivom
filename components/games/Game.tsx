import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { AM } from './AM';

// sh4om
// sh{iv}om
// ß˙{ˆ√}øµ
// Í ◊ Â
// 
export const Game = () => {
  const [result, setToss] = useState({
    res: faker.helpers.arrayElement([0, 1])
  });
  const [results, setResults] = useState();
  const [players, setPlayers] = useState<any>(null);
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [user_choice, setUserChoice] = useState<any>('');
  const [sequence, setSequence] = useState([1, 5, 10, 20]);
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
  return <div className='w-full sm:w-96 bg-white p-2 min-h-[80vh] h-full mt-8 shadow-lg'>
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
    <div className='font-extrabold p-2 text-xl mt-4 mb-2'>Choose Short</div>
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
  
{user_choice && <AM setValue={setValue} setAmount={setAmount} value={value} sequence={sequence} amount={amount}/>}
    <div>{players && players.map((player: any, index: number) => {
      return <div className='' key={index}>{player.name}</div>;
    })}</div>

   { value | amount && <motion.div
      whileHover={{ scale: 0.8 }}
      className='text-xl text-center mt-12 mb-4 p-2 cursor-pointer m-autp w-full bg-gray-300 rounded-lg shadow-lg'>{value?"PAY INR":"USE YANTRAS"}   {value?value:amount} TO PLAY
      </motion.div>}

     {value | amount && <motion.div
      whileHover={{ scale: 0.8 }}
      onClick={()=>{
        setValue(0)
        setAmount(0)
      }}
      className='text-xl text-center mt-2 mb-4 p-2 cursor-pointer m-autp w-full bg-gray-600 text-white rounded-lg shadow-lg'>RESET
      </motion.div>}
  </div>;
};


