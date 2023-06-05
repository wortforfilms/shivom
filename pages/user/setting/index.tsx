import MessageHome from "@/components/communication/messaging"
import { BrahmiSound } from "@/data/brahmi"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



const UserSetting=(props:any)=>{
  // meghdoot
  // shakuntlA bharat bhArat 
  // clock on every 
  // run _ cl;;ock 
  // second->acca
  // 

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
const [users,setUsers]=useState()
const [games,setGames]=useState()
const [kosh,setKosk]=useState()
const [deposite,setDeposite]=useState()

const router=useRouter()
const {setting}=router.query

const sections=[
  {label:"Notifications",type:"toggle",compoent:"",value:''},
{label:"Newsletter",type:"toggle",compoent:"",value:''},
{label:"Tokens",type:"list",compoent:"",value:''},
{label:"Tansaction Account",type:"object",compoent:"",value:''},
{label:"Email",type:"string",compoent:"",value:''},
{label:"LANGUAGES",type:"list",compoent:"",value:''},
{label:"KUNDALI",type:"object",compoent:"",value:''},
{label:"KUNDALINI",type:"object",compoent:"",value:''},
{label:"Files",type:"list",compoent:"",value:''},
{label:"Folders",type:"list",compoent:"",value:''},
{label:"HKD",type:"object",compoent:"",value:''},
{label:"ENERGY",type:"object",compoent:"",value:''},
]

useEffect(()=>{
  let mount=true
  if(mount){
  if(earth?.auth?.authenticated){
    return
  } else {
    router.push('/auth/login')
  }
  }
  return ()=>{mount=false}
  },[])

  return <div className="py-4 p-6 max-w-3xl m-auto flex flex-col gap-8">
    <div className="h-12"></div>
  
{
  sections.map((sec,index)=>{
    return <div key={index} className="bg-white p-2 flex flex-row rounded-lg shadow-lg">
      <h3>
        {sec.label}
        </h3>
        <div className="m-auto">
        {sec.type==='toggle' && <div>Switch</div>}
        {sec.type==='list' && <div>List</div>}
        {sec.type==='string' && <div>String</div>}
        {sec.type==='object' && <div>Object</div>}
        </div>

        {sec.label==="LANGUAGES" && <div>BrahmiSound</div>}
      </div>
  })
}

  </div>
}

export default UserSetting