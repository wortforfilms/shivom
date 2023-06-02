
import { Game } from "@/components/games/Game"
import { GameBanner } from "@/components/games/GameBanner"
import { Gameplay } from "@/components/games/Gameplay"
import { GamesHeaderButtons } from "@/components/games/GamesHeaderButtons"
import { supabase } from "@/lib/Store"
import { gold } from "@/sty"
import { range } from "@/util/createRange"
import { nFormatter } from "@/util/numberFormatter/nFormatter"
import { faker } from "@faker-js/faker"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MdOutlineResetTv } from "react-icons/md"


// 196.9 trillion
// per year
// list :: country :: currency  :: 
// test not a bot
// choose languages
// devnAgary Georgean cryptlic 
// brahmi prakrut
// right left
// {rAtri bhrAtA}
//  {yAtri}
// 

const create_game=async(type:any,amount:any)=>{
  const {data,error}=await supabase.from('games').insert([{
    type:type,
    amount: amount,
    expiring_at:"",
    //kai lAsh
    // {energy {}-{} }
    // 
  }])
}




const KreedA=()=>{
  const [stage,setStage]=useState(0)
  const [games,setGames]=useState<any>([])
  const [game,setGame]=useState<any>(null)
  const [tag,setTag]=useState<any>('')
  const [view,setView]=useState<any>('ghome')

const[category,setCategory]=useState([
  {label:"AgnibANa", icon:"🏹", image:"",cycle:"",duration:"1/5Hourly"},
  {label:"Lakshmi", icon:"𓁧", image:"",cycle:"",duration:"Hourly"},
  {label:"SaptRishi", icon:"✨", image:"",cycle:"",duration:"Daily"},
  {label:"NavGrah", icon:"🪐", image:"",cycle:"",duration:"Weekly"},
  {label:"Nakzatra", icon:"🌌", image:"",cycle:"",duration:"Monthly"},
])

const[gcategory,setGCategory]=useState([
  {label:"akshar", icon:"🕉️", image:"",cycle:"",duration:"60", reward:[1,5,10]},
  {label:"shabda", icon:"⚛", image:"",cycle:"",duration:"120", reward:[10,50,100]},
  {label:"vakya", icon:"✍🏻", image:"",cycle:"",duration:"240", reward:[100,500,1000]},
  {label:"mantra", icon:"🧘🏽‍♀️", image:"",cycle:"",duration:"600", reward:[1000,5000,10000]},
  {label:"siddhAnta", icon:"🔣", image:"",cycle:"",duration:"6000", reward:[10000,50000,100000]},
])



  const users= range(0,69).map((str)=>{
      return {
        id:str,
        name: faker.name.fullName(),
        choice:faker.helpers.arrayElement(['lakshmi','ganesh']),
        amount:  faker.datatype.number({min:1,max:9999})
      }
    })
  
    const nu=faker.datatype.number({min:3,max:69})
    const current_skew=new Date().getHours()
    const skew=`${new Date().getDay()}-${new Date().getHours()}`
    const remainig=new Date().getMinutes()

const router=useRouter()
const {q}=router.query

useEffect(()=>{
let mount=true
if(mount){
  setView(q)
}
return ()=>{
  mount=false
}
},[q])

  return <div className="p-4   min-h-[90vh]">
    <div className="h-12"></div>


    <div className=" flex flex-row">
      <GamesHeaderButtons setSection={setView} section={view} selected_game={game}/>
     { <motion.div className="text-5xl p-2 rounded-lg shadow-lg bg-white"
      onClick={()=>{
        setView('ghome')
        setGame(null)
      }}
      ><MdOutlineResetTv/></motion.div>}
    </div>

{view==='ghome' && <GameBanner/>}
   {view==="lakshmi"  && <LakshmiList category={category} setGame={setGame}/>}

    {view==="ganesh"  && <Ganeshlist gcategory={gcategory} setGame={setGame}/>}

    {
      view==="help" && <div><Gameplay/></div>
    }


  </div>
}


export default KreedA

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

const LakshmiList=(props:any)=>{
  const {category, setGame}=props
  const router=useRouter()
  return <div className="flex flex-row invert  flex-wrap justify-start gap-4 p-4">
  {
    category.map((ver:any,index:number)=>{
    return <div key={index} className={`rounded-lg text-center m-auto  shadow-lg w-56 h-100 ${gold} p-2`}>
      <div className="text-7xl p-2 invert">{ver.icon}</div>
      <div>{ver.label} </div>
      <div className="text-xs font-bold p-1">{ver.duration}</div>
      <div>
        <div className="text-xs text-yellow-700 p-2">Lastest winner: </div>
        <h1>{
         nFormatter(faker.datatype.number({min:99,max:9999999}))
        }</h1></div>

<div className="text-xs text-yellow-700 p-2">Current Box: </div>
        {
         nFormatter(faker.datatype.number({min:99,max:999999}))
        }
  <div className="p-2 bg-gray-700 text-white rounded-lg mt-8 mb-4 shadow-lg shadow-green-500"
  onClick={()=>{
    setGame(ver.label)
    router.push(`/kreedA/game/${ver.label}`)
  }}
  >PLAY NOW</div>
      </div>
  })
  }
</div>
}

const Ganeshlist=(props:any)=>{
  const {gcategory, setGame}=props
  const router=useRouter()

  return <div className="flex flex-row   flex-wrap justify-start gap-4 p-4">
  {
    gcategory.map((ver:any,index:number)=>{
    return <div key={index} className={`rounded-lg text-center m-auto  shadow-lg w-56 h-100 ${gold} p-2`}>
      <div className="text-7xl p-2 ">{ver.icon}</div>
      <div>{ver.label} </div>
      <div className="text-xs font-bold p-1">{ver.duration}</div>
      <div>
        <div className="text-xs text-yellow-700 p-2">Lastest winner: </div>
        <h1>{
         nFormatter(faker.datatype.number({min:99,max:9999999}))
        }</h1></div>

<div className="text-xs text-yellow-700 p-2">Current Box: </div>
        {
         nFormatter(faker.datatype.number({min:99,max:999999}))
        }
  <motion.div 
  whileHover={{scale:.95}}
  whileTap={{scale:1.1}}
  className="p-2 bg-gray-700 text-white rounded-lg mt-8 mb-4 cursor-pointer hover:bg-pink-700 shadow-lg shadow-green-500 hover:shadow-sky-500"
  onClick={()=>{
    setGame(ver.label)
    router.push(`/kreedA/game/${ver.label}`)
  }}
  >PLAY NOW</motion.div>
      </div>
  })
  }
</div>
}