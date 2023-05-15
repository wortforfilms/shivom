import { useRouter } from "next/router"

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
  </div>
}

export default Constalation