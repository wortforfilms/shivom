import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { AM } from './AM';
import QRCode from 'react-qr-code';
import { BsHouseAdd, BsPlayCircleFill, BsPlus, BsPlusCircle } from 'react-icons/bs';
import { FaGamepad, FaTasks } from 'react-icons/fa';
import { List } from './List';
import { Awaiter } from './Awaiter';
import { Gameplay } from './Gameplay';
import { Disclaimers } from './disclaimers';
import { useRouter } from 'next/router';

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
  const [game,setGame]=useState<any>([
    { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
    { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
  ])
  useEffect(() => {

    setInterval(() => {
      setTimer(new Date().getMilliseconds() + 6000);
    }, 6000);
  }, []);

  const[step,setStep]=useState(0)

  // skill brahmi
  // lakshmi yantra
  // group {}
  // board
const router=useRouter()
  return <div className='w-full  flex flex-row flex-wrap  justify-start  p-2 min-h-[80vh] h-full mt-8 shadow-lg'>
   <Scene >

   {/* <div className='text-center p-2'>बुद्धिकल्पितसमाज</div> */}
   <div className='p-2 text-3xl text-center font-extrabold'>LakshmiKreedA</div>
   <div className='p-2 text-3xl text-center font-extrabold'>लक्ष्मी क्रीड़ा</div>

   <div className='w-2/3 m-auto h-[90vh]'>
  <Image

     src={game[0].img}
     alt="coins"
     width={100}
     height={100}
     className='m-auto w-full h-auto'
  /></div>
  <div className='w-2/3 m-auto h-[90vh]'>
    <div className='flex flex-row gap-4 mb-4 text-7xl justify-around'>

    {[{icon:<BsPlayCircleFill/>, label:"play"},
    
    {icon:<FaGamepad/>,label:"gameplay"}].map((but,index)=>{
      return <div key={index} >
        <div className='text-xs text-center uppercase  p-2'>{but.label}</div>
        
        <motion.div 
        whileHover={{scale:1.1}}
        onClick={()=>{
          router.push(`/#${but.label}`)
        }}
        className='ring-4 cursor-pointer rounded-full w-100 p-2 ring-blue-800 border-4 text-5xl border-sky-500'>{but.icon}</motion.div></div>
    })}

    </div>
  <Image

     src={game[1].img}
     alt="coins"
     width={100}
     height={100}
     className='m-auto w-full h-auto'
  /></div>
   </Scene>
<Scene>

<ToDo/>
</Scene>

<Scene>
  <List/>
  </Scene>
<Scene>

  <Awaiter game={game}/>
</Scene>
<Scene>

   <div className='h-96'>
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
    {/* <div>Lakshmi: {0} Ganesh:{1} </div> */}
    <div>Time remaining: {timer}</div>
    Result:{result.res === 0 ? "Tail" : "Head"}
    <div className='font-extrabold p-2 text-xl mt-4 mb-2'>Choose Short</div>
    <div>

      <div className='text-xl flex flex-row p-2 justify-around font-extrabold  m-auto text-center'>{game.map((op:any, index:number) => {
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

      onClick={()=>{
        setStep(1)
      }}
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
  </div>
</Scene>

<Scene>
 <Transaction value={value} setStep={setStep}/>
</Scene>

<Scene>
<Gameplay game={game}/>
</Scene>
<Scene>


<DataPolicy/>
</Scene>
<Scene>
  <Disclaimers game={game}/>
</Scene>
  <div></div>
  </div>

};

const Scene=(props:any)=>{
  const{children}=props
  return <div className='w-80 h-[80vh] p-1 bg-white m-1 flex flex-col overflow-scroll'>
    {children}
  </div>
}


const Transaction=(props:any)=>{
  const {value, setStep}=props
  return <div>
    <QRCode value='upi/id/amount/by/to'className='m-auto'/>

    <div className='p-2 font-extrabold'>Scan to pay  {value} INR.</div>
    <div className='flex flex-col mt-12 gap-4 p-2'>

{
  ["UPI","BANKING","CARD","BIT"].map((mode,index)=>{
    return  <div className='text-center shadow w-full p-2 bg-pink-500 text-white' key={index}>{mode}</div>
  })
}
  </div>
    <div className='underline'
    onClick={()=>{
      setStep(0)
    }}
    >Back</div>
  </div>
}


const ToDo=(props:any)=>{
  const [todo,setToDo]=useState([
    {
      task:"Create Welcome Screen.",
      status:"inLine",
      completed:true
    }
  ])

  const [task,setTask]=useState<any>('')
  return <div>
    <form className='flex flex-row justify-between mt-4 mb-4 gap-2 p-2 bg-gray-200 rounded-lg shadow-lg'>
     
      <input type="text" placeholder='Enter task' className='w-full h-10 p-1' onChange={(e:any)=>{
        setTask(e.target.value)
      }}/>

      <div
      onClick={()=>{
        setToDo((td:any)=>[{task:task,status:"inline",completed:false},...td])
      }}><BsPlusCircle className='text-3xl m-auto'/></div>
    </form>
    {
      todo.map((td,index)=>{
        return <div key={index} className='flex flex-row justify-between'>
          <div className='uppercase w-full grow'>
            {td.task} 
            </div>
          <div>
            {td.status}</div>
            <div>
            <input type="checkbox" checked={td.completed}
            onChange={()=>{
              setToDo((ts:any)=>{
                if(ts.task===td.task){
                  return {
                    task:ts.task,
                    status:ts.status,
                    completed:!ts.completed
                  }
                } else {
                  return ts
                }
              })
            }}
            onClick={()=>{
              console.log("activity")
              setToDo((ts:any)=>{
                if(ts.task===td.task){
                  return {
                    task:ts.task,
                    status:ts.status,
                    completed:!ts.completed
                  }
                } else {
                  return ts
                }
              })
            }}
            /></div>
            </div>
      })
    }


  </div>
}



const DataPolicy=()=>{
  const dt=[
{heading:"Personal Information Collected",description: "We collect personal information from users when they create an account on our website, including their name, email address, and cryptocurrency wallet address. We also collect transaction information when users place bets, including the amount and type of cryptocurrency used."},
{heading:"Purpose of Collection",description: "We collect personal information in order to provide users with access to the head-tail game, to process bets and winnings, and to comply with legal and regulatory requirements. We also use this information to communicate with users about their account and to improve our services."},
{heading:"Data Sharing",description: "We do not share personal information with third parties except in the following circumstances: (a) to comply with legal or regulatory requirements, (b) to process transactions with our payment processor, or (c) to enforce our terms of service."},
{heading:"Data Retention",description: "We retain personal information for as long as necessary to provide our services and to comply with legal and regulatory requirements. Users can request deletion of their account and associated personal information at any time."},
{heading:"Data Security",description: "We take appropriate measures to protect personal information from unauthorized access, disclosure, or misuse, including the use of encryption and secure storage systems."},
{heading:"Cookies",description: "We use cookies and similar technologies to collect information about users' interactions with our website and to improve our services. Users can control the use of cookies through their browser settings."},
{heading:"Marketing Communications",description: "We may use personal information to send marketing communications to users about our products and services. Users can opt out of these communications at any time."},
{heading:"International Data Transfers",description: "Personal information may be transferred and processed in countries outside of the user's home country. We take appropriate measures to ensure that such transfers comply with applicable data protection laws."},
{heading:"Changes to Privacy Policy",description: "We may update this privacy policy from time to time. Users will be notified of any material changes to the policy and will have the opportunity to review and accept the updated policy."},
{heading:"Contact Us",description: "Users can contact us with any questions or concerns about this privacy policy or our data practices."},
  ]
  
  
  return <div>
    <div className='text-xl font-bold p2'>Data Privacy</div>

<ObjectList obj={dt}/>
  </div>
}

const ObjectList=(props:any)=>{
  const {obj}=props

  // const KL=Object.keys(obj)
  return <div>
    {/* {JSON.stringify(KL)} */}
    {
      obj.map((ke:any,index:number)=>{
        return <div key={index}>
          <div className='font-bold p-2'>{ke.heading}</div><br/>
          <div className='p-2'>{ke.description}</div>
          {/* <div>{object[ke]}</div> */}
          </div>
      })
    }
  </div>
}