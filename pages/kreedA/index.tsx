
import { Game } from "@/components/games/Game"
import { GameBanner } from "@/components/games/GameBanner"
import { Gameplay } from "@/components/games/Gameplay"
import { GamesHeaderButtons } from "@/components/games/GamesHeaderButtons"
import { supabase } from "@/lib/Store"
import { range } from "@/util/createRange"
import { faker } from "@faker-js/faker"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MdOutlineResetTv } from "react-icons/md"
import { LakshmiList } from "../../components/games/list/LakshmiList"
import { Ganeshlist } from "../../components/games/list/Ganeshlist"
import { Brahmi } from "@/components/classes/brahmi"
import App from "next/app"

// frame work ˘¿? /?¿÷ nno divide 
// kera chaira char A sill silk'
// public 
// issue
// noname 
// unkn own 
// uk eu : jupitor stAr
// daheja ¿? dahaija 
var Language=()=>{
  var [lan,setLan]=useState<any>(
    [
      {lng:"",lat:"",lang:""}

    ]
  )

  return <>
  <Layout cosmos={lan}/>
  </>
}

const Layout=(props:any)=>{
  return <>
  <App/>
  </>

}

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

  const [game,setGame]=useState<any>(null)
  const [view,setView]=useState<any>('ghome')

const[category,setCategory]=useState([
  {label:"AgnibANa", icon:"🏹", image:"",cycle:"",duration:"1/5Hourly"},
  {label:"Lakshmi", icon:"𓁧", image:"",cycle:"",duration:"Hourly"},
  {label:"SaptRishi", icon:"✨", image:"",cycle:"",duration:"Daily"},
  {label:"NavGrah", icon:"🪐", image:"",cycle:"",duration:"Weekly"},
  {label:"Nakzatra", icon:"🌌", image:"",cycle:"",duration:"Monthly"},
])

const[gcategory,setGCategory]=useState([

  {label:"swar", icon:"🎙", image:"",cycle:"",duration:"60", reward:[1,5,10]},
  {label:"vyanjana", icon:"♾️", image:"",cycle:"",duration:"60", reward:[1,5,10]},
  {label:"anka", icon:"🧮", image:"",cycle:"",duration:"60", reward:[1,5,10]},
  {label:"mAtrA", icon:"⚖️", image:"",cycle:"",duration:"60", reward:[1,5,10]},
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
      view==="help" && q==="ganesh" && <div><Brahmi/></div>
    }

{
      view==="help" && q!=="ganesh" && <div><Gameplay/></div>
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

