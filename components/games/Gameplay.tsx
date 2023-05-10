import { motion } from "framer-motion";
import Image from "next/image"
export const Gameplay = (props: any) => {
  const {game, user_choice}=props
  const dt = [
    "The game starts every hour, a users will learn new brahmi language words and place their bets on either Lakshmi or Ganesh.",
    "Users can place their bets by sending a certain amount of currency to a specified account address. The minimum bet amount is 1 Yantra or 10 INR. INSTRUMENT..",
    "After 55 minutes, the betting is closed, and the game begins.",
    "The game selects a random outcome of either Lakshmi or Ganesh using a provably fair algorithm, which is displayed on the game's website.",
    "All users who correctly guessed the outcome are considered winners.",
    "The total amount of currency placed by all users is then calculated.",
    "30% of the total amount placed is deducted as tax, and the remaining 70% is distributed among the winners.",
    "The platform takes a 20% commission on the total amount placed by all users, which is deducted before distributing the winnings.",
    "The winnings are distributed to the winners in proportion to the amount they placed, after deducting the commission and tax.",
    "Users can withdraw their winnings to their registered accounts immediately after the game is over.",
  ];
  return <div className='mt-8 mb-8' id="gameplay">
    <div className='text-xl font-bold p2'>Lakshmi Kreeda Game Play</div>
    <div className='flex flex-col gap-2'>

      {dt.map((li, index) => {
        return <div key={index} className='p-2'>-- {li}
        {index===0 && <div className='text-xl flex w-full h-48  flex-row p-2 justify-around font-extrabold  m-auto text-center'>{
        game && game.map((op:any, index:number) => {
        return <motion.div
          whileHover={{ scale: 1.3 }}
          key={index}
        >
          <Image
            src={op.img}
            alt="coins"
            width={100}
            height={100} />
          <div
            className={`p-2 bg-gradient-to-r text-yellow-800 from-red-800 via-yellow-300 to-yellow-500  cursor-pointer   shadow-lg`}
          >
            {op.label}
          </div>

        </motion.div>;
      })}</div>
        }
          {index===1 && 
          <Image
            src={"/img/om-71gQJPwz8gL._UL1500_2000x.webp"}
            alt="coins"
            width={100}
            height={100} 
            className="m-auto"
            />
        
      
        }
        </div>;
      })}
    </div>

  </div>;
};

// pst ipe

// bhAshA badle bhAgya
// let is be a book 
// introduction to brahmi INR. 499
// learn brahmi INR. 999
// skill in brahmi INR 2999 
// advanced brahmi INR. 4999
// brahmi: dictionary

// prakrut aur nlp INR. 9999
// {10*price*{currency}}
// {choice:{}}

// i18

// en.(#route.tag.value)
// brahmi {}
// 