import { useRouter } from "next/router"
import NakApp from "."


const Constalation=()=>{
  const router=useRouter()
  const {rashi}=router.query

  // detail
  // changes
  // mytyhology connects of various calenders
  // location
  // position
  // related character
  // 


  return <div>
    <div className="h-24"></div>
{rashi}

<NakApp/>
  </div>
}

export default Constalation