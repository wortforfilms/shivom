import MessageHome from "@/components/communication/messaging"
import { useState } from "react"

const UserSetting=()=>{
  // meghdoot
  // shakuntlA bharat bhArat 
  // clock on every 
  // run _ cl;;ock 
  // second->acca
  // 
const [users,setUsers]=useState()
const [games,setGames]=useState()
const [kosh,setKosk]=useState()
const [deposite,setDeposite]=useState()

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
      </div>
  })
}

  </div>
}

export default UserSetting