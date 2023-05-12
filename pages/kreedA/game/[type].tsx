import { Game } from "@/components/games/Game"
import { Gameplay } from "@/components/games/Gameplay"
import { GamesHeaderButtons } from "@/components/games/GamesHeaderButtons"
import { supabase } from "@/lib/Store"
import { range } from "@/util/createRange"
import { faker } from "@faker-js/faker"
import { useEffect, useState } from "react"


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
const Lakshmi=()=>{
  const [stage,setStage]=useState(0)
  const [games,setGames]=useState<any>([])
  const [game,setGame]=useState<any>('')
  const [tag,setTag]=useState<any>('')
  const [view,setView]=useState<any>('ghome')


  useEffect(()=>{
    // jarA
    // zArA
    //  sangh ghati t 
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

// {}-{}-{}
// show category 
// show list
// show play
// show-live
// show help
// show user-board
// show admin-board

// {}-{}-{}-{}-{}
// _|_|_|_|_
// .....
// kalp_vruksh
// kamdhenu
// nandi


  return <div>
    <div className="h-12"></div>
    <div className="p-4">
      <GamesHeaderButtons setSection={setView} section={view}/>
    </div>
{/* {view} */}
   {view==="ghome" && <div className="flex flex-row  flex-wrap justify-around gap-4 p-4">
      {
        [
          {label:"AgnibANa", icon:"🏹", image:"",cycle:"",duration:"1/5Hourly"},
          {label:"Lakshmi", icon:"𓁧", image:"",cycle:"",duration:"Hourly"},
          {label:"SaptRishi", icon:"✨", image:"",cycle:"",duration:"Daily"},
          {label:"NavGrah", icon:"🪐", image:"",cycle:"",duration:"Weekly"},
          {label:"Nakzatra", icon:"🌌", image:"",cycle:"",duration:"Monthly"},
      ].map((ver,index)=>{
        return <div key={index} className="rounded-lg text-center m-auto uppercase shadow-lg w-32 h-100 bg-white p-2">
          <div className="text-7xl p-2">{ver.icon}</div>
          <div>{ver.label} </div>
          <div className="text-xs font-bold p-1">{ver.duration}</div>
          <div>
            <div className="text-xs text-yellow-700 p-2">Lastest winner: </div>
            {
             faker.datatype.number({min:99,max:9999999})
            }</div>

<div className="text-xs text-yellow-700 p-2">Current Box: </div>
            {
             faker.datatype.number({min:99,max:999999})
            }
      <div className="p-2 bg-green-500 rounded-lg mt-8 mb-4 shadow-lg">PLAY NOW</div>
          </div>
      })
      }
    </div>}
    
   {view==="list" && <div className=" flex flex-col flex-wrap text-xs gap-2 p-2 w-full">
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
    {/* {stage===0 && <div><Game stage={stage} setStage={setStage}/></div>} */}

  </div>
}

export default Lakshmi

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