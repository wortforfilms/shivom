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

  return <div className="py-24 p-6 flex flex-col gap-8">
  
<div>Notifications</div>
<div>Newsletter</div>
<div>Tokens</div>
<div>Tansaction Account</div>
<div>Email</div>
<div>LANGUAGES</div>
<div>KUNDALI</div>
<div>KUNDALII</div>
<div>Files</div>
<div>Folders</div>
<div>HKD</div>
<div>{"ENERGY"}</div>

  </div>
}

export default UserSetting