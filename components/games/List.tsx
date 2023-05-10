import { supabase } from "@/lib/Store"
import { range } from "@/util/createRange"
import { faker } from "@faker-js/faker"
import { Kosh } from "../Kosh"
import { useState } from "react"

const game_history=[
  {created_at:"",expired_at:"",gameid:"",winner:"", deposited_amount:"", depositors:[], withdraws:[],koshika:[],players:[],initiator:[], },
  // across globe 
  // world's first interplanetory language
  // introducing BRAHMI
  // it just takes a single click
  // {maraathi:"",hindi:"",english:"",urdu:""}
  // team : designers
  // developers: ""
  // 
  {created_at:"",expired_at:"",gameid:"",winner:"", },

]
// ipe pst
// 

const Players=[{
  user:"",
  roles:[]
},
{
  user:"",
  roles:[]
},
{

}
]

const Policies=[
  "Longer line¿? :: no destroy :: store memory :: compress memory",
  // local_file:
  // play await deposite result withdraw
  //  BRAHMI SKILLS
  // guess the right 
  // train 
  // nlp model
  // 

]

// visitor-agreement-hidden retina non-touch  
// non touch auth
// NTA
// ZenObserverKotwAla
// Ob=>k=>c=>
// before christ
// after dark
// ¿? dark
// moon cycle days 
// :: work day's tuesday saturday
// :: {""}-{""}

const Game={
  created_at:"",
  expired_at:"",
  gameid:"",
  winner:"", 
  deposited_amount:"", 
  depositors:[], 
  withdraws:[],
  koshika:[],
  players:[],
  initiator:[]
}

const watchers=[
  range(0,100).map(()=>{
    name:faker.name.fullName()
    amount:faker.datatype.number({min:1,max:4})
    upi_id: faker.phone.number()
    security:faker.phone.imei()
    profile_image:faker.image.avatar()
  })
]

const depositors=[
  range(0,10).map(()=>{
    name:faker.name.fullName()
    amount:faker.datatype.number({min:1,max:4})
    upi_id: faker.phone.number()
    security:faker.phone.imei()
    profile_image:faker.image.avatar()
    paksh:faker.helpers.arrayElement(['laxmi','ganesh'])
  })
]

const select_paksh=async(user_id:number,game_id:number,paksh:boolean,amount:number)=>{
  const {data,error}=await supabase.from('game').update([{
    depositors:(users:any)=>[{user_id,amount,},...users]
  }]).eq('id',user_id).eq('user_id')
}

// kaksha kakshA 
// class {learn brahmi {}}
// cretification:[{}]
// future brahmi jobs
// skills from brahmi

const game_play=[
  // range(0,)
]


// three distributing 1by1
// nitin tanu hemant sanjeetA
// angel:{"VakrAngi √◊ ı˜Â˘¯ÆÚ"}
const create_game_lakshmi_kreeda=async()=>{
  const {data,error}=await supabase.from('game').insert([{
    // created_at:"",
    // expired_at:"",
    // gameid:"",
    // winner:"", 
    deposited_amount:"1", 
    depositors:depositors, 
    withdraws:[


    ],
    // results:[]
    // koshika:[],
    // players:[],
    // initiator:[]
  }]) 
}

// mirror for localhost
// localdb
// 

export const List=(props:any)=>{

  const [games,setGames]=useState<any>([
    {
      region:["",""],
      district:"",
      sector:"",
      country:"",
      state:"",
      god:"",
      dog:"",
      bhai:"",
      ro:"",
      country_gods:"",
      country_godesses:""
    }
  ])

  //  poll star
  // dhruv static
  // static constalation
  // milkyway g-al-ax-y
  // ear t-h
  // Ti->TI
  // eh=>aic
  // energy ai 



  return <div>

    <div>Games Board</div>
    {
      games.map(()=>{

      })
    }
    <div>Watchers</div>
    <div>
      {
        watchers.map((us,index)=>{
          return <div key={index}>
            {/* {} */}
            <UserCard type="list" user={us}/>
            </div>
        })
      }
    </div>


  </div>
}


export const GameList=()=>{
  shiv:""
  rahu:""
  ketu:""
  shakuni:""
  yudhisThir:"" // static dharma 
  skill:"Affiliate from Ministry"
  brahmi_patra:"Mudra" 
  expensive:"n.a."  
}

const UserCard=(props:any)=>{
  const {user}=props
  return <>
  <div>{user.image}</div>
  <div>{user.name}</div>
  <div>{user.upi_id}</div>
  <Kosh/>
  {/* <div>{user.upi_id}</div> */}
  </>
}

export const sochen=()=>{

}