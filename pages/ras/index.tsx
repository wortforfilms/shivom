import { supabase } from "@/lib/Store"
import { useEffect, useState } from "react"
import { BiBook, BiCircleQuarter } from "react-icons/bi"
import { BsTranslate } from "react-icons/bs"
import { FcFeedIn } from "react-icons/fc"
import NakApp from "../galaxy/rashi"
import { errorT, notify, success } from "@/components/toast"
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { languages_ } from "@/constants/earth/languages_"
import { Brahmiplate } from "@/components/classes/brahmi"
import { FaAlgolia } from "react-icons/fa"
import { shArdA } from "@/components/classes/shArdA"
import { Feeder, PostCreator, Translate } from "@/public/ras/hkd"

const communicator='@'
const restriction=[{issue:"",conndition:"",blaim:'',resolve:()=>{}}]
const fix=[{commits:[{issue:"",resolve:()=>{},fix:"¿?"},{},{}]}]
const  get_shabda=async()=>{
  const {data,error}=await supabase.from('अमृत').select('*').neq('type','sent.')
  return {data,error}
}

const  get_amar=async()=>{
  const {data,error}=await supabase.from('अमृत').select('*').neq('type','sent.')
  return {data,error}
}

const Ras=()=>{

const [stp,setStp]=useState<any>('')
const [mala,setMala]=useState<any>(null)
const router=useRouter()
const {st}=router.query

useEffect(() => {
  let mount=true
  if(mount &&  st){
    setStp(st)
  }

  return () => {
    mount=false
  }
}, [st])


useEffect(() => {
  let mount=true
  if(mount){
    get_amar().then(res=>{
      console.log("first",res)
      setMala(res.data)
    }).catch((error)=>console.log(error))
  }

  return () => {
    mount=false
  }
}, [])

const [filters,setFilters]=useState<any>(null)

  return <div className="p-4 min-h-[90vh] h-full">
    <div className="h-12"></div>
    <div className="flex flex-row gap-4 text-center mb-4">

    {
      [
        {label:"Create",icon:<BiCircleQuarter/>},
        {label:"Translate",icon:<BsTranslate/>},
        {label:"Feed",icon:<FcFeedIn/>},
        {label:"AmarmAlaa",icon:<BiBook/>},
        {label:"Algo-liå¬ˆ/* Ò dne ¿doe */",icon:<FaAlgolia/>}

    ].map((step,index)=>{
        return <div key={index} className={`${stp===step.label?"bg-gray-300 ":"bg-white"} p-2 cursor-pointer hover:bg-yellow-300 text-center rounded-t-lg`}
        onClick={()=>{setStp(step.label)}}
        >
        <div className="text-3xl p-1 text-center m-auto">{step.icon}</div>
          <div className="text-xs text-center">{step.label}</div>
        </div>
      })
    }
    </div>

  {stp==='' &&  <NakApp/>}
  {stp==='' &&  <NakApp/>}
  {stp==='AmarmAlaa' &&  <div>
    <div className="flex flex-row gap-2 mb-2">
    {
      ['Zoo.','Bot.','Phy.','Chem.'].map((wrd,index)=>{
        return <div key={index} className="text-sm bg-gray-700 text-white shadow-lg rounded-lg p-2 "
        onClick={()=>{
          setFilters((s:any)=>s?[wrd,...s]:[wrd])

        }}
        >{wrd}</div>
      })
    }
     {'𑖀'.charCodeAt(1)}
    
    </div>
    <div className="flex gap-2 flex-row flex-wrap">
    {
      mala && mala.length>0 && faker.helpers.arrayElements(mala,27).map((ma:any,index:number)=>{
        return <div key={index} className="p-2 bg-white shadow-lg w-100">
          {ma.string}--{ma.type} 
          <hr/>
          {ma.string.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-2303]!==undefined?Brahmiplate[i.charCodeAt(0)-2303]:i.charCodeAt(0)<2303?i:i.charCode(0)}`)}
          <hr/>
          {ma.string.split('').map((i:any,index:number)=>`${shArdA[i.charCodeAt(0)-2303]!==undefined?shArdA[i.charCodeAt(0)-2303]:i.charCodeAt(0)<2303?i:i.charCode(0)}`)}
          <hr/>
          {ma.translitions[0].en}
          <hr/>
          {ma.translations[0].en}
          </div>
      })
    }
    </div></div>}
  {stp==='Translate' &&  <Translate/>}
  {stp==='Feed' && <Feeder />}
  {stp==='Create' && <PostCreator/>}

  </div>
}

export default Ras
