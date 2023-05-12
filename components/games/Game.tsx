import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { AM } from './AM';
import QRCode from 'react-qr-code';
import { BsHouseAdd, BsPlus, BsPlusCircle } from 'react-icons/bs';
import { FaTasks } from 'react-icons/fa';
import { List } from './List';
import { Awaiter } from './Awaiter';
import { Gameplay } from './Gameplay';
import { Disclaimers } from './disclaimers';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/Store';
import { useSelector } from 'react-redux';
import Login from '@/pages/auth/login';
import { range } from 'd3';
import { Start } from './Start';

// sh4om
// sh{iv}om
// ß˙{ˆ√}øµ
// Í ◊ Â
// mp<=>st
// 
const create_natives = () => {
  const sages = range(0, 69).map((str) => {
    return {
      name: "",
      symbol: "",
      department: "",
      role: ["sages"],
      gender: "",
      date_of_birth: "",
      time_of_birth: "",
      followers: [],
      following: [],
      conversation: [],
      sound: [],
      profile_image: []
    }
  })

  const saptrishi = range(0, 6).map((str) => {
    return {
      // name:sapt,
      symbol: "",
      department: "",
      role: ["sages"],
      gender: "",
      date_of_birth: "",
      time_of_birth: "",
      followers: [],
      following: [],
      conversation: [],
      sound: [],
      profile_image: []
    }
  })
}

const start_lakshmi_kreedA = () => {
  // date time
  // 
  // characters
  // language
  // dialogues
  // players
  // watchers
  // admins
  // watch:{}
  // number_of_players:69
  // 
  // game_id: game_type: started_at: closing_at: min: max: players: winner:
  // 


}

// natrAja
// nature
// ure
// im
// sh47hs
// 


const calender = () => {
  return <div></div>
}

export const Game = (props: any) => {
  const { initialReduxState } = props
  const earth: typeof initialReduxState = useSelector(state => state)
  const [timer, setTimer] = useState<any>(0);
  const [game, setGame] = useState<any>([
    { label: "Lakshmi", img: "/img/lakshmi-71suHVXlGHL._UL1500_2000x.webp" },
    { label: "Ganesh", img: "/img/ganesh-71lTRvJf0XL._UL1500_2000x.webp" }
  ])



  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().getMilliseconds() + 6000);
    }, 6000);
  }, []);

  const [step, setStep] = useState(0)

  // skill brahmi
  // lakshmi yantra
  // group {}
  // board
  const router = useRouter()
  return <div className='w-full h-full  flex flex-row flex-wrap  justify-around  p-2 min-h-[80vh] h-[90vh] mt-2 shadow-lg'>

    {step === 0 && <Start game={game} router={router} earth={earth} />}

    {step === 1 && <Play game={game} setStep={setStep} timer={timer} />}
    <Scene>
      <Gameplay game={game} />
    </Scene>


    <Scene>
      <DataPolicy />
    </Scene>

    <Scene>
      <Disclaimers game={game} />
    </Scene>
    <div>
    </div>
  </div>

};

const Play = (props: any) => {
  const { game, setStep, timer } = props
  const [result, setToss] = useState({
    res: faker.helpers.arrayElement([0, 1])
  });
  const [results, setResults] = useState();
  const [players, setPlayers] = useState<any>(null);
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [user_choice, setUserChoice] = useState<any>('');
  const [sequence, setSequence] = useState([1, 5, 10, 20]);
  return <>
    <AScene>
      <ToDo />
    </AScene>
    <AScene>
      <List />
    </AScene>
    <AScene>
      <Awaiter game={game} />
    </AScene>
    <AScene>
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

          <div className='text-xl flex flex-row p-2 justify-around font-extrabold  m-auto text-center'>{game.map((op: any, index: number) => {
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

        {user_choice && <AM setValue={setValue} setAmount={setAmount} value={value} sequence={sequence} amount={amount} />}
        <div>{players && players.map((player: any, index: number) => {
          return <div className='' key={index}>{player.name}</div>;
        })}</div>

        {value | amount && <motion.div
          whileHover={{ scale: 0.8 }}

          onClick={() => {
            setStep(1)
          }}
          className='text-xl text-center mt-12 mb-4 p-2 cursor-pointer m-autp w-full bg-gray-300 rounded-lg shadow-lg'>{value ? "PAY INR" : "USE YANTRAS"}   {value ? value : amount} TO PLAY
        </motion.div>}

        {value | amount && <motion.div
          whileHover={{ scale: 0.8 }}
          onClick={() => {
            setValue(0)
            setAmount(0)
          }}
          className='text-xl text-center mt-2 mb-4 p-2 cursor-pointer m-autp w-full bg-gray-600 text-white rounded-lg shadow-lg'>RESET
        </motion.div>}
      </div>
    </AScene>

    <AScene>
      <Transaction value={value} setStep={setStep} />
    </AScene>
  </>
}

export const Scene = (props: any) => {
  const { children } = props
  return <div className='w-full sm:w-80 h-[90vh] p-1 bg-white m-1 flex flex-col overflow-scroll'>
    {children}
  </div>
}

export const AScene = (props: any) => {
  const { initialReduxState } = props
  const earth: typeof initialReduxState = useSelector(state => state)
  const [human, setHuman] = useState(false)

  useEffect(() => {
    if (earth?.auth?.authenticated) {
      setHuman(true)
    } else {
      setHuman(false)
    }

  }, [earth?.auth])
  const { children } = props

  if (human) {


    return <div className='w-80 h-[80vh] p-1 bg-white m-1 flex flex-col overflow-scroll'>

      {children}
    </div>
  } else {


    return <></>
  }
}

const Transaction = (props: any) => {
  const { value, setStep } = props
  return <div>
    <QRCode value='upi/id/amount/by/to' className='m-auto' />

    <div className='p-2 font-extrabold'>Scan to pay  {value} INR.</div>
    <div className='flex flex-col mt-12 gap-4 p-2'>

      {
        ["UPI", "BANKING", "CARD", "BIT"].map((mode, index) => {
          return <div className='text-center shadow w-full p-2 bg-pink-500 text-white' key={index}>{mode}</div>
        })
      }
    </div>
    <div className='underline'
      onClick={() => {
        setStep(0)
      }}
    >Back</div>
  </div>
}




const ToDo = (props: any) => {
  const [todo, setToDo] = useState([
    {
      task: "Create Welcome Screen.",
      status: "inLine",
      completed: true
    }
  ])

  const [task, setTask] = useState<any>('')

  const create_task = async (todo: string, user_id: number) => {
    const { data, error } = await supabase.from('todos').insert([{
      task: todo,
      user_id: user_id
    }])
    return { data, error }
  }

  return <div>
    <form className='flex flex-row justify-between mt-4 mb-4 gap-2 p-2 bg-gray-200 rounded-lg shadow-lg'>
      <input type="text" placeholder='Enter task' className='w-full h-10 p-1' onChange={(e: any) => {
        setTask(e.target.value)
      }} />

      <div
        onClick={() => {
          create_task(task, 1).then(res => {
            setToDo(res.data)
          })
        }}><BsPlusCircle className='text-3xl m-auto' /></div>
    </form>
    {
      todo && todo.map((td, index) => {
        return <div key={index} className='flex flex-row justify-between'>
          <div className='uppercase w-full grow'>
            {td.task}
          </div>
          <div>
            {td.status}</div>
          <div>
            <input type="checkbox" checked={td.completed}
              onChange={() => {
                setToDo((ts: any) => {
                  if (ts.task === td.task) {
                    return {
                      task: ts.task,
                      status: ts.status,
                      completed: !ts.completed
                    }
                  } else {
                    return ts
                  }
                })
              }}
              onClick={() => {
                console.log("activity")
                setToDo((ts: any) => {
                  if (ts.task === td.task) {
                    return {
                      task: ts.task,
                      status: ts.status,
                      completed: !ts.completed
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

// bear
// bull

// 36 koti
// gods of world
// 

// information in markets

// bheda chAl aries
// 
const GameStatus = (props: any) => {
  const { status } = props
  return <div >{status}</div>
}

const DataPolicy = () => {
  const dt = [
    { heading: "Personal Information Collected", description: "We collect personal information from users when they create an account on our website, including their name, email address, and cryptocurrency wallet address. We also collect transaction information when users place bets, including the amount and type of cryptocurrency used." },
    { heading: "Purpose of Collection", description: "We collect personal information in order to provide users with access to the head-tail game, to process bets and winnings, and to comply with legal and regulatory requirements. We also use this information to communicate with users about their account and to improve our services." },
    { heading: "Data Sharing", description: "We do not share personal information with third parties except in the following circumstances: (a) to comply with legal or regulatory requirements, (b) to process transactions with our payment processor, or (c) to enforce our terms of service." },
    { heading: "Data Retention", description: "We retain personal information for as long as necessary to provide our services and to comply with legal and regulatory requirements. Users can request deletion of their account and associated personal information at any time." },
    { heading: "Data Security", description: "We take appropriate measures to protect personal information from unauthorized access, disclosure, or misuse, including the use of encryption and secure storage systems." },
    { heading: "Cookies", description: "We use cookies and similar technologies to collect information about users' interactions with our website and to improve our services. Users can control the use of cookies through their browser settings." },
    { heading: "Marketing Communications", description: "We may use personal information to send marketing communications to users about our products and services. Users can opt out of these communications at any time." },
    { heading: "International Data Transfers", description: "Personal information may be transferred and processed in countries outside of the user's home country. We take appropriate measures to ensure that such transfers comply with applicable data protection laws." },
    { heading: "Changes to Privacy Policy", description: "We may update this privacy policy from time to time. Users will be notified of any material changes to the policy and will have the opportunity to review and accept the updated policy." },
    { heading: "Contact Us", description: "Users can contact us with any questions or concerns about this privacy policy or our data practices." },
  ]


  return <div>
    <div className='text-xl font-bold p2'>Data Privacy</div>

    <ObjectList obj={dt} />
  </div>
}

const ObjectList = (props: any) => {
  const { obj } = props

  // const KL=Object.keys(obj)
  return <div>
    {/* {JSON.stringify(KL)} */}
    {
      obj.map((ke: any, index: number) => {
        return <div key={index}>
          <div className='font-bold p-2'>{ke.heading}</div><br />
          <div className='p-2'>{ke.description}</div>
          {/* <div>{object[ke]}</div> */}
        </div>
      })
    }
  </div>
}


const TrillionTargetPrediction = () => {
  const [date, setDate] = useState()
  const [pdeposites, setPDeposites] = useState()
  const [target, setTarget] = useState(1000000000000)
  // 10,000 cr. 
  const [min, setMin] = useState()
  const [course_strructure, setCourseStructure] = useState({
    digital_certificates: [{ level: 0, cost: 0 }, { level: 1, cost: 99 }, { level: 2, cost: 999 }]
  })
  const [scounts, setScouts] = useState()

  return <div>
    <div></div>
  </div>

}

