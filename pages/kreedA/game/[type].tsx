import { Game } from "@/components/games/Game"
import { Gameplay } from "@/components/games/Gameplay"
import { GamesHeaderButtons, SelectedGamesHeaderButtons } from "@/components/games/GamesHeaderButtons"

import { range } from "@/util/createRange"
import { nFormatter } from "@/util/numberFormatter/nFormatter"
import { faker } from "@faker-js/faker"
import { motion } from "framer-motion"

import { useRouter } from "next/router"

import { MdOutlineResetTv } from "react-icons/md"
import QRCode from "react-qr-code"


import { useState, useEffect } from 'react';

const Timer = (props:any) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className="p-4 text-7xl text-white bg-black">
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

const GameType=()=>{
  const router=useRouter()
  const {type}=router.query


    return <div className="min-h-[90vh] p-4">
<div className="h-12"></div>
<h1>
  {type}
 {type==="lakshmi" && <Lakshmi/>}

 {type==="akshar" && <div className="p-6">
  
  Quiz-e-Answer-Options<br/>
  ---x<hr/>
  Timer
  --==--xz»<hr/>

  Reward

  </div>}
  {type==="gameplay_lakshmi" && <Game/>}
  </h1>
  </div>
}



const Lakshmi=()=>{
  const [stage,setStage]=useState(0)
  const [games,setGames]=useState<any>([])
  const [game,setGame]=useState<any>('')
  const [tag,setTag]=useState<any>('')
  const [view,setView]=useState<any>('ghome')

const [currrent_minute,setCurrentM]=useState(new Date().getMinutes())
const [currrent_second,setSecond]=useState(new Date().getSeconds())
  useEffect(()=>{
    
  },[])

  const users= range(0,69).map((str)=>{
      return {
        id:str,
        name: faker.name.fullName(),
        choice:faker.helpers.arrayElement(['lakshmi','ganesh']),
        amount:  faker.datatype.number({min:1,max:9999})
      }
    })


    const nu=faker.datatype.number({min:3,max:69})
    4


    // let now = moment();
    // let timeDiff = moment(now).utcOffset(120).endOf('hour') - now;
    
    // let dur = moment.duration(timeDiff);
    
    // console.log(`${dur.hours()} hrs ${dur.minutes()} min ${dur.seconds()} sec until midnight.`);



    const now = new Date().getTime();
const futureDate = new Date('27 Jan 2023 16:40:00').getTime();

const timeleft = futureDate - now;

const days    = Math.floor( timeleft / (1000 * 60 * 60 * 24));
const hours   = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


// mungA heerA pannA ratna renukA

//  <-->

const [yantra,setYantra]=useState([
  {type:'copper', ra:[],price:10},
  {type:'silver', ra:[],price:100},
  {type:'gold', ra:[],price:10000},
  {type:'platinum', ra:[],price:1000000},
  {type:'diamond', ra:[],price:10000000},
  {type:'knownium', ra:[],price:'100D∂'},
  {type:'unknownium', ra:[],price:'10K˚'},
])


// 00:00:00
const [time_remailing,setTimeRemainning]=useState<any>(null)
const router=useRouter()
const {type}=router.query
const [game_s,setGameS]=useState([{ emoji: "🎲", label: "active", icon: "", image: "", link: "/#active", tag: "active" },
{ emoji: "🧿", label: "await", icon: "", image: "", link: "/#await", tag: "await" }])
  return <div className="min-h-[90vh]">
    <div className="h-12"></div>
    <div className="p-4 flex flex-row">
      <SelectedGamesHeaderButtons setSection={setView} section={view} selected_game={type}/>
      <motion.div className="text-7xl p-2 rounded-lg shadow-lg bg-white"
      onClick={()=>{
        // setGame(null)
        router.back()
      }}
      ><MdOutlineResetTv/></motion.div>
    </div>
    <Timer/>

   {view==="ghome" && <div className="flex flex-row  flex-wrap justify-around gap-4 p-4">
      {
        [
          {label:"AgnibANa", icon:"🏹", image:"",cycle:"",duration:"1/5Hourly"},
          {label:"Lakshmi", icon:"𓁧", image:"",cycle:"",duration:"Hourly"},
          {label:"SaptRishi", icon:"✨", image:"",cycle:"",duration:"Daily"},
          {label:"NavGrah", icon:"🪐", image:"",cycle:"",duration:"Weekly"},
          {label:"Nakzatra", icon:"🌌", image:"",cycle:"",duration:"Monthly"} ].filter(i=>i.label===type).map((ver,index)=>{
        return <div key={index} className="rounded-lg text-center m-auto uppercase shadow-lg w-100 h-100 bg-white p-2">
          <div className="text-7xl p-2">{ver.icon}</div>
          <div>{ver.label} </div>
          <div className="text-xs font-bold p-1">{ver.duration}</div>
          <div>
            <div className="text-xs text-yellow-700 p-2">Lastest winner: </div>
            {
             nFormatter(faker.datatype.number({min:99,max:9999999}))
            }</div>
    <div className="p-4 bg-white"><QRCode  value={"/sku"}/>
      <div>Scan to play</div>
      </div>

      <div className="p-2 bg-green-500 rounded-lg mt-8 mb-4 shadow-lg bg-gradient-to-r from-red-800 via-yellow-300 to-yellow-500 ring-4 ring-orange-300 p-4 shadow-lg">Use 1 Omnium</div>
          </div>
      })
      }
      <div className="bg-white p-2">
      <div className="flex flex-row gap-12">
     { game_s.slice(1,2).map((game_state,index)=>{
          return <div key={index} className="text-7xl rounded-lg p-2 bg-white w-24">
            <h5 className="text-2xl font-extrabold">
              {game_state.label}
              </h5>
            <div className="ring-2 ring-white shadow-xl rounded-full">{game_state.emoji}</div>
            </div>
         })}</div>
<Stats label="Time Remaining:" value={`${hours}:${minutes}:${seconds}`} />
<Stats label="Current Bucket:" value={nFormatter(faker.datatype.number({min:99,max:999999}))} />
<Stats label="Active View:" value={nFormatter(faker.datatype.number({min:99,max:999999}))} />
<Stats label="Players" value={nFormatter(faker.datatype.number({min:99,max:9999}))} />
</div>
  
    </div>}

    {view==="list" && <div className=" flex flex-col flex-wrap text-xs gap-2 p-2 w-full">
    
      {
        "Users"
      }
      {
        "Players"
      }
      {
        "Winners"
      }
    </div>}
    
   {view==="winners" && <div className=" flex flex-col flex-wrap text-xs gap-2 p-2 w-full">
      {
        range(0,24).map((str,index)=>{
          return <div key={index} >
            <Tree str={str} users={users} nu={nu}/>
          </div>
        })
      }
    </div>}

    {
      view==="active" && <div>
        <div>AgnibANa</div>
        {
          games && [{
            type:"agnibANa",
            amount:faker.datatype.number({min:2,max:99999}),
            players:faker.datatype.number({min:2,max:999}),
            expring_on:"",
            status:"active",
            started_at:"",
            ticket:10,
            id:0
          }
        
        ].filter((i:any)=>i.status==="active").map((gm:any,index:number)=>{
            return <div key={index} >
              {gm.id}<br/>
              expiring in:{"02:50"}
              
              </div>
          })
        }
      </div>
    }

    {
      view==="help" && <div className="p-4"><Gameplay></Gameplay></div>
    }

  </div>
}


export default GameType

const Tree=(props:any)=>{
  const {str, users, nu}=props
  const players=faker.helpers.arrayElements(users,nu)
  const result = faker.helpers.arrayElement(['lakshmi','ganesh'])
  const laxmi_bucket=users.filter((i:any)=>i.choice==="lakshmi").map((i:any)=>i.amount).reduce((partialSum:number, a:number) => partialSum + a, 0)
  const ganesh_bucket=users.filter((i:any)=>i.choice==="ganesh").map((i:any)=>i.amount).reduce((partialSum:number, a:number) => partialSum + a, 0)
  const [tbd,setTbd]=useState(result==='ganesh'?ganesh_bucket/2:laxmi_bucket/2)

  return <div  className="flex p-4 rounded-lg shadow-lg shadow-pink-500 bg-white m-2 text-blue-900 flex-row gap-4">
  <div className="flex flex-row flex-wrap gap-2">
  <div>Type: Lakshmi</div>
  <div>Duration: 60 minutes</div>
  <div>Starting at: {str}{":00"}</div>
  <div>Expiring at: {str}{":55"}</div>
  </div>
  <div>Viewers: {faker.datatype.number({min:5,max:999999})}</div>
  <div>Players: {players.length}</div>

  <div className="flex flex-col">
<div>Lakshmi: {laxmi_bucket}</div> <div>Ganesh:{ganesh_bucket}</div>
  </div>
<div>tbd: {tbd}</div>
{/* {l} */}

  <div>Result: {result}</div>
  <div>Winners: {
    players.filter((i:any)=>i.choice===result).map((pl:any,index:number)=>{
      return <div className="" key={index}>{pl.id}{pl.name}{pl.amount}{pl.choice}</div>
    }).length
    }</div>
</div>
}


const Stats=(props:any)=>{
  const {label,value}=props
  return <div className="text-xs  p-2">
  <div className="text-3xl font-bold">{label} </div>
            <div className="text-yellow-700 text-7xl font-extrabold">
              {value}
            </div>
            </div>
}



// Some recent entries:
// नृत्यक्रीडा	f.	nRtyakrIDA	ball[dance event]	
// गवल	m.	gavala	bison[Zool.]	
// उपार्जितआय	m.	upArjitaAya	accruedincome[Com.]	
// शतिमान	n.	zatimAna	centimeter[length]	
// हिंसारम्भ	m.	hiMsArambha	aggression[first strike]

// cent i meter
// gaj meter eye
// truthy {-} know your inchi tape
// master measure

// input hindi  english


// Found 3 entries
// Your results for choTika:
// छोटिक	n.	choTika	player	
// चोटिका	f.	coTikA	petticoat	
// छोटिका	f.	choTikA	snappingthethumbandforefinger

// stop haw 
// play ui 
// 

// Found 11 entries
// Your results for petticoat:
// चोटी	f.	coTI	petticoat	
// चोटिका	f.	coTikA	petticoat	
// प्रोथ	m.	protha	petticoat	
// पटवास	m.	paTavAsa	petticoat	
// कुम्बा	f.	kumbA	thickpetticoat	
// अर्धोरुक	n.	ardhoruka	shortpetticoat	
// चण्डातक	n.	caNDAtaka	shortpetticoat	
// चलनक	n.	calanaka	shortpetticoat	
// नीवि	f.	nIvi	kindofskirtorpetticoat	
// शाट	m.	zATa	kindofskirtorpetticoat	
// कौशेय	n.	kauzeya	silkpetticoatortrousers