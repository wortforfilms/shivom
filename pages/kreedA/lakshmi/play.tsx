import { Game } from "@/components/games/Game"
import { supabase } from "@/lib/Store"
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

  useEffect(()=>{
    // jarA
    // zArA
    //  sangh ghati t 
  },[])

  return <div>
    {stage===0 && <div><Game stage={stage} setStage={setStage}/></div>}

  </div>
}

export default Lakshmi